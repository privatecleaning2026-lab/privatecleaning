// app/painel/clientes/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';

type Cliente = { id: string; nome: string; email: string; telemovel: string; morada: string; codigo_postal: string; notas_especiais: string; ativo: boolean; };

export default function PainelClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [novoCliente, setNovoCliente] = useState({ nome: '', email: '', telemovel: '', morada: '', codigo_postal: '', notas_especiais: '' });

  const fetchClientes = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('clientes').select('*').order('nome');
    if (!error && data) setClientes(data);
    setLoading(false);
  };

  useEffect(() => { fetchClientes(); }, []);

  const handleCriarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('clientes').insert([novoCliente]);
    if (!error) {
      setMostrarForm(false);
      setNovoCliente({ nome: '', email: '', telemovel: '', morada: '', codigo_postal: '', notas_especiais: '' });
      fetchClientes();
    } else {
      alert('Erro ao criar cliente. Verifique os dados.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1A251F]">Gestão de Clientes</h1>
          <p className="text-xs text-gray-500 mt-1">Diretório de residências e empresas ativas.</p>
        </div>
        <button onClick={() => setMostrarForm(!mostrarForm)} className="bg-[#1A251F] text-[#FAF8F5] text-xs px-5 py-3 uppercase tracking-widest font-bold hover:bg-[#2C3E35] transition-colors">
          {mostrarForm ? 'Cancelar' : '+ Novo Cliente'}
        </button>
      </div>

      {mostrarForm && (
        <form onSubmit={handleCriarCliente} className="bg-white p-8 mb-8 shadow-sm border border-[#EBE3D5] space-y-6">
          <h3 className="font-serif text-xl text-[#3A332C] border-b border-[#EBE3D5] pb-4">Adicionar Novo Cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Nome</label><input type="text" required value={novoCliente.nome} onChange={e => setNovoCliente({...novoCliente, nome: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Telemóvel</label><input type="tel" required value={novoCliente.telemovel} onChange={e => setNovoCliente({...novoCliente, telemovel: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Email</label><input type="email" value={novoCliente.email} onChange={e => setNovoCliente({...novoCliente, email: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]" /></div>
            <div className="md:col-span-2"><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Morada Completa</label><input type="text" required value={novoCliente.morada} onChange={e => setNovoCliente({...novoCliente, morada: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Código Postal</label><input type="text" required value={novoCliente.codigo_postal} onChange={e => setNovoCliente({...novoCliente, codigo_postal: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]" /></div>
            <div className="md:col-span-3"><label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Notas Restritas (Códigos, Alergias)</label><textarea rows={2} value={novoCliente.notas_especiais} onChange={e => setNovoCliente({...novoCliente, notas_especiais: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none focus:border-[#3A332C]"></textarea></div>
          </div>
          <button type="submit" className="bg-[#3A332C] text-[#FAF8F5] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#2a241e]">Guardar Ficha</button>
        </form>
      )}

      {/* Tabela Mantida Originalmente Abaixo */}
      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <tr><th className="px-6 py-4">Nome do Cliente</th><th className="px-6 py-4">Contactos</th><th className="px-6 py-4">Morada</th><th className="px-6 py-4">Estado</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-xs text-gray-700 font-light">
            {loading ? <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">A carregar...</td></tr> : clientes.map(c => (
              <tr key={c.id}>
                <td className="px-6 py-4 font-bold">{c.nome}</td>
                <td className="px-6 py-4">{c.telemovel}<br/><span className="text-[10px] text-gray-400">{c.email}</span></td>
                <td className="px-6 py-4">{c.morada}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 text-[10px] uppercase font-bold rounded bg-emerald-50 text-emerald-700">Ativo</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}