// app/painel/faturacao/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';

type Fatura = { id: string; numero: string; data_emissao: string; data_vencimento: string; valor_total: number; estado: string; clientes: { nome: string } | null; };
type ClienteOpt = { id: string; nome: string };

export default function PainelFaturacao() {
  const [faturas, setFaturas] = useState<Fatura[]>([]);
  const [clientes, setClientes] = useState<ClienteOpt[]>([]);
  const [loading, setLoading] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  
  const [novaFatura, setNovaFatura] = useState({ cliente_id: '', numero: '', data_emissao: '', data_vencimento: '', valor_total: 0, estado: 'Pendente' });

  const fetchDados = async () => {
    setLoading(true);
    const [resFaturas, resClientes] = await Promise.all([
      supabase.from('faturas').select('*, clientes(nome)').order('data_emissao', { ascending: false }),
      supabase.from('clientes').select('id, nome').eq('ativo', true)
    ]);
    if (resFaturas.data) setFaturas(resFaturas.data as unknown as Fatura[]);
    if (resClientes.data) setClientes(resClientes.data);
    setLoading(false);
  };

  useEffect(() => { fetchDados(); }, []);

  const handleCriarFatura = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('faturas').insert([novaFatura]);
    if (!error) {
      setMostrarForm(false);
      fetchDados();
    } else {
      alert('Erro ao registar a fatura interna.');
    }
  };

  const alterarEstado = async (id: string, estado: string) => {
    await supabase.from('faturas').update({ estado }).eq('id', id);
    fetchDados();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1A251F]">Controlo de Tesouraria</h1>
          <p className="text-xs text-gray-500 mt-1">Gestão de pagamentos e pré-faturação de clientes.</p>
        </div>
        <button onClick={() => setMostrarForm(!mostrarForm)} className="bg-[#1A251F] text-[#FAF8F5] text-xs px-5 py-3 uppercase tracking-widest font-bold hover:bg-[#2C3E35] transition-colors">
          {mostrarForm ? 'Cancelar' : '+ Registar Fatura'}
        </button>
      </div>

      {mostrarForm && (
        <form onSubmit={handleCriarFatura} className="bg-white p-8 mb-8 shadow-sm border border-[#EBE3D5] space-y-6">
          <h3 className="font-serif text-xl text-[#3A332C] border-b border-[#EBE3D5] pb-4">Novo Registo Financeiro</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Cliente</label>
              <select required value={novaFatura.cliente_id} onChange={e => setNovaFatura({...novaFatura, cliente_id: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none bg-transparent">
                <option value="">Selecionar cliente...</option>
                {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Nº Fatura (Proforma)</label>
              <input type="text" required value={novaFatura.numero} onChange={e => setNovaFatura({...novaFatura, numero: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" placeholder="Ex: FT2026/001" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Valor Total (€)</label>
              <input type="number" step="0.01" required value={novaFatura.valor_total} onChange={e => setNovaFatura({...novaFatura, valor_total: parseFloat(e.target.value)})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Data de Emissão</label>
              <input type="date" required value={novaFatura.data_emissao} onChange={e => setNovaFatura({...novaFatura, data_emissao: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Data Limite (Vencimento)</label>
              <input type="date" required value={novaFatura.data_vencimento} onChange={e => setNovaFatura({...novaFatura, data_vencimento: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
          </div>
          <button type="submit" className="bg-[#3A332C] text-[#FAF8F5] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#2a241e]">Lançar Documento</button>
        </form>
      )}

      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <tr><th className="px-6 py-4">Documento / Data</th><th className="px-6 py-4">Cliente</th><th className="px-6 py-4">Valor</th><th className="px-6 py-4">Estado</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-xs text-gray-700 font-light">
            {loading ? <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">A processar financeira...</td></tr> : faturas.map(f => (
              <tr key={f.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold">
                  {f.numero}
                  <span className="block text-[10px] text-gray-500 font-normal">Vence a: {new Date(f.data_vencimento).toLocaleDateString('pt-PT')}</span>
                </td>
                <td className="px-6 py-4 font-medium text-[#1A251F]">{f.clientes?.nome}</td>
                <td className="px-6 py-4 font-serif text-lg">{f.valor_total.toFixed(2)} €</td>
                <td className="px-6 py-4">
                  <select value={f.estado} onChange={e => alterarEstado(f.id, e.target.value)} className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer border ${f.estado === 'Paga' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : f.estado === 'Atrasada' ? 'bg-red-50 text-red-800 border-red-200' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>
                    <option value="Pendente">Pendente</option>
                    <option value="Paga">Paga</option>
                    <option value="Atrasada">Atrasada</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}