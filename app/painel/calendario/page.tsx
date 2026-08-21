// app/painel/calendario/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';

type Escala = { id: string; data_hora_inicio: string; data_hora_fim: string; tipo_servico: string; estado_servico: string; clientes: { nome: string; morada: string } | null; staff: { nome: string } | null; };
type SelectOption = { id: string; nome: string };

export default function PainelCalendario() {
  const [escalas, setEscalas] = useState<Escala[]>([]);
  const [clientesDisponiveis, setClientesDisponiveis] = useState<SelectOption[]>([]);
  const [staffDisponivel, setStaffDisponivel] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  
  // Estado para o formulário
  const [novaEscala, setNovaEscala] = useState({ cliente_id: '', staff_id: '', data_hora_inicio: '', data_hora_fim: '', tipo_servico: 'Limpeza Regular' });

  const fetchDados = async () => {
    setLoading(true);
    const [resEscalas, resClientes, resStaff] = await Promise.all([
      supabase.from('escalas').select(`id, data_hora_inicio, data_hora_fim, tipo_servico, estado_servico, clientes(nome, morada), staff(nome)`).order('data_hora_inicio', { ascending: true }),
      supabase.from('clientes').select('id, nome').eq('ativo', true),
      supabase.from('staff').select('id, nome').eq('estado', 'Ativo')
    ]);
    if (resEscalas.data) setEscalas(resEscalas.data as unknown as Escala[]);
    if (resClientes.data) setClientesDisponiveis(resClientes.data);
    if (resStaff.data) setStaffDisponivel(resStaff.data);
    setLoading(false);
  };

  useEffect(() => { fetchDados(); }, []);

  const handleAgendar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaEscala.cliente_id || !novaEscala.staff_id) return alert('Selecione um cliente e uma profissional.');
    
    const { error } = await supabase.from('escalas').insert([novaEscala]);
    if (!error) {
      setMostrarForm(false);
      fetchDados();
    } else {
      alert('Erro ao agendar serviço.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1A251F]">Agenda de Operações</h1>
          <p className="text-xs text-gray-500 mt-1">Controlo de escalas e alocação de equipas.</p>
        </div>
        <button onClick={() => setMostrarForm(!mostrarForm)} className="bg-[#1A251F] text-[#FAF8F5] text-xs px-5 py-3 uppercase tracking-widest font-bold hover:bg-[#2C3E35] transition-colors">
          {mostrarForm ? 'Cancelar' : '+ Agendar Serviço'}
        </button>
      </div>

      {mostrarForm && (
        <form onSubmit={handleAgendar} className="bg-white p-8 mb-8 shadow-sm border border-[#EBE3D5] space-y-6">
          <h3 className="font-serif text-xl text-[#3A332C] border-b border-[#EBE3D5] pb-4">Nova Escala de Serviço</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Cliente / Local</label>
              <select value={novaEscala.cliente_id} onChange={e => setNovaEscala({...novaEscala, cliente_id: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none bg-transparent" required>
                <option value="">Selecione um cliente...</option>
                {clientesDisponiveis.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Profissional a Alocar</label>
              <select value={novaEscala.staff_id} onChange={e => setNovaEscala({...novaEscala, staff_id: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none bg-transparent" required>
                <option value="">Selecione uma profissional...</option>
                {staffDisponivel.map(s => <option key={s.id} value={s.id}>{s.nome}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Início (Data e Hora)</label>
              <input type="datetime-local" required value={novaEscala.data_hora_inicio} onChange={e => setNovaEscala({...novaEscala, data_hora_inicio: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Fim (Data e Hora)</label>
              <input type="datetime-local" required value={novaEscala.data_hora_fim} onChange={e => setNovaEscala({...novaEscala, data_hora_fim: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
          </div>
          <button type="submit" className="bg-[#3A332C] text-[#FAF8F5] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#2a241e]">Agendar Operação</button>
        </form>
      )}

      {/* Tabela Mantida Originalmente */}
      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <tr><th className="px-6 py-4">Data e Hora</th><th className="px-6 py-4">Cliente / Local</th><th className="px-6 py-4">Profissional</th><th className="px-6 py-4">Serviço</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-xs text-gray-700 font-light">
            {loading ? <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">A carregar agenda...</td></tr> : escalas.map(escala => (
              <tr key={escala.id}>
                <td className="px-6 py-4 font-bold">{new Date(escala.data_hora_inicio).toLocaleDateString('pt-PT')}</td>
                <td className="px-6 py-4 font-bold text-[#1A251F]">{escala.clientes?.nome}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-[#EBE3D5] text-[#3A332C] rounded-full text-[10px] font-medium">{escala.staff?.nome}</span></td>
                <td className="px-6 py-4">{escala.tipo_servico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}