// app/painel/leads/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';

type Lead = {
  id: string;
  created_at: string;
  nome: string;
  telemovel: string;
  tipo_cliente: string;
  servico_pretendido: string;
  detalhes: string;
  estado: string;
};

export default function PainelLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, novoEstado: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ estado: novoEstado })
      .eq('id', id);

    if (!error) {
      setLeads(leads.map(l => l.id === id ? { ...l, estado: novoEstado } : l));
    }
  };

  if (loading) {
    return <div className="text-sm text-gray-500 py-12 text-center">A sincronizar base de dados...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1A251F]">Gestão de Pedidos (Leads)</h1>
          <p className="text-xs text-gray-500 mt-1">Contactos submetidos através do formulário público do site.</p>
        </div>
        <button 
          onClick={fetchLeads} 
          className="bg-white border border-gray-300 text-xs px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          Atualizar Lista
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <tr>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Contacto</th>
              <th className="px-6 py-4">Tipo / Serviço</th>
              <th className="px-6 py-4">Detalhes</th>
              <th className="px-6 py-4">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-xs text-gray-700 font-light">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">Nenhum pedido registado até ao momento.</td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {new Date(lead.created_at).toLocaleDateString('pt-PT')} {new Date(lead.created_at).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">{lead.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href={`tel:${lead.telemovel}`} className="text-[#1A251F] underline font-semibold">{lead.telemovel}</a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="block font-medium text-gray-900">{lead.tipo_cliente}</span>
                    <span className="text-[10px] text-gray-500">{lead.servico_pretendido}</span>
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate text-gray-600" title={lead.detalhes}>
                    {lead.detalhes || 'Sem detalhes adicionais.'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select 
                      value={lead.estado}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer border transition-colors ${
                        lead.estado === 'Novo' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        lead.estado === 'Contactado' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                        lead.estado === 'Convertido' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                        'bg-gray-100 text-gray-600 border-gray-200'
                      }`}
                    >
                      <option value="Novo">Novo</option>
                      <option value="Contactado">Contactado</option>
                      <option value="Convertido">Convertido</option>
                      <option value="Arquivado">Arquivado</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}