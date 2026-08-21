// app/painel/layout.tsx
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/Supabase';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/painel/login');
      } else {
        setLoading(false);
      }
    }
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/painel/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-xs text-gray-500 uppercase tracking-widest">
        A verificar autorização de segurança...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      <aside className="w-64 bg-[#1A251F] text-[#FAF8F5] flex flex-col shadow-2xl z-20">
        <div className="h-24 flex items-center justify-center border-b border-[#2C3E35]">
          <span className="font-serif text-xl tracking-wider">
            ESTORIL <span className="italic text-[#8C7A6B]">Operações</span>
          </span>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          <Link href="/painel" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-[#2C3E35] transition-colors">
            <span className="mr-3">📊</span> Visão Geral
          </Link>
          <Link href="/painel/leads" className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-[#2C3E35] transition-colors">
            <span className="mr-3">📥</span> Pedidos / Leads
          </Link>
        </nav>

        <div className="p-4 border-t border-[#2C3E35]">
          <div className="flex items-center px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#8C7A6B] text-white flex items-center justify-center font-bold text-xs mr-3">
              C
            </div>
            <div>
              <p className="text-xs font-bold text-white">Célia & Equipa</p>
              <p className="text-[10px] text-gray-400">Gestão Operacional</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full mt-4 flex items-center px-4 py-2 text-xs font-medium text-red-400 rounded-md hover:bg-[#2C3E35] transition-colors"
          >
            Encerrar Sessão
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-2xl font-serif text-[#1A251F]">Painel de Controlo</h2>
          <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 font-semibold uppercase tracking-wider">Sessão Segura Ativa</span>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}