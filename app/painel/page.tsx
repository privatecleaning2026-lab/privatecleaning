// app/painel/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';
import Link from 'next/link';

export default function PainelVisaoGeral() {
  const [leadsPendentes, setLeadsPendentes] = useState(0);
  const [faturasPendentes, setFaturasPendentes] = useState(0);
  const [escalasHoje, setEscalasHoje] = useState(0);
  const [staffAtivo, setStaffAtivo] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchKPIs() {
      setLoading(true);
      
      // Obter a data de hoje no formato YYYY-MM-DD para o fuso horário local
      const hoje = new Date().toISOString().split('T')[0];

      try {
        // 1. Contar Leads Novas
        const { count: countLeads } = await supabase
          .from('leads')
          .select('*', { count: 'exact', head: true })
          .eq('estado', 'Novo');

        // 2. Somar Faturas Pendentes
        const { data: faturas } = await supabase
          .from('faturas')
          .select('valor_total')
          .eq('estado', 'Pendente');
        const totalFaturas = faturas?.reduce((acc, curr) => acc + curr.valor_total, 0) || 0;

        // 3. Contar Escalas de Hoje
        const { count: countEscalas } = await supabase
          .from('escalas')
          .select('*', { count: 'exact', head: true })
          .gte('data_hora_inicio', `${hoje}T00:00:00`)
          .lte('data_hora_inicio', `${hoje}T23:59:59`);

        // 4. Contar Staff Ativo
        const { count: countStaff } = await supabase
          .from('staff')
          .select('*', { count: 'exact', head: true })
          .eq('estado', 'Ativo');

        if (countLeads !== null) setLeadsPendentes(countLeads);
        setFaturasPendentes(totalFaturas);
        if (countEscalas !== null) setEscalasHoje(countEscalas);
        if (countStaff !== null) setStaffAtivo(countStaff);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchKPIs();
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-xs uppercase tracking-widest text-gray-500 font-bold">A compilar métricas operacionais...</div>;
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-[#1A251F]">Resumo Operacional</h1>
        <p className="text-sm text-gray-500 mt-2">Visão geral do desempenho e tarefas críticas do dia.</p>
      </div>

      {/* Cartões de Métricas (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Cartão de Leads */}
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4">Novos Pedidos (Leads)</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-serif text-[#1A251F]">{leadsPendentes}</span>
            <Link href="/painel/leads" className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] hover:text-[#1A251F] underline">Ver todos</Link>
          </div>
        </div>

        {/* Cartão de Escalas Hoje */}
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4">Serviços Agendados Hoje</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-serif text-[#1A251F]">{escalasHoje}</span>
            <Link href="/painel/calendario" className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] hover:text-[#1A251F] underline">Ver Agenda</Link>
          </div>
        </div>

        {/* Cartão de Tesouraria */}
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4">Valor Pendente a Receber</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-serif text-amber-600">{faturasPendentes.toFixed(2)}€</span>
            <Link href="/painel/faturacao" className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] hover:text-[#1A251F] underline">Cobranças</Link>
          </div>
        </div>

        {/* Cartão de Staff */}
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4">Equipa Ativa</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-serif text-[#1A251F]">{staffAtivo}</span>
            <Link href="/painel/staff" className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] hover:text-[#1A251F] underline">Gerir Equipa</Link>
          </div>
        </div>
      </div>

      {/* Secção de Ações Rápidas */}
      <div className="bg-[#FAF8F5] p-8 border border-[#EBE3D5]">
        <h2 className="font-serif text-xl text-[#3A332C] mb-6">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/painel/calendario" className="bg-[#1A251F] text-white text-xs px-6 py-4 uppercase tracking-widest font-bold hover:bg-[#2C3E35] transition-colors shadow-sm">
            + Nova Escala de Serviço
          </Link>
          <Link href="/painel/clientes" className="bg-white border border-[#EBE3D5] text-[#1A251F] text-xs px-6 py-4 uppercase tracking-widest font-bold hover:bg-gray-50 transition-colors shadow-sm">
            + Adicionar Ficha de Cliente
          </Link>
          <Link href="/painel/faturacao" className="bg-white border border-[#EBE3D5] text-[#1A251F] text-xs px-6 py-4 uppercase tracking-widest font-bold hover:bg-gray-50 transition-colors shadow-sm">
            + Emitir Pré-Fatura
          </Link>
        </div>
      </div>
    </div>
  );
}