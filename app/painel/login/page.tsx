// app/painel/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/Supabase';

export default function BackofficeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Credenciais inválidas ou acesso não autorizado.');
      setLoading(false);
    } else {
      router.push('/painel');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A251F] px-4">
      <div className="w-full max-w-md bg-white p-12 shadow-2xl">
        <h2 className="font-serif text-3xl text-center text-[#1A251F] mb-2">ESTORIL Staffing</h2>
        <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-10">Painel de Operações</p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Email Operacional</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-[#1A251F] transition-colors" 
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Palavra-passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-[#1A251F] transition-colors" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1A251F] text-white uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#2C3E35] transition-colors duration-300 mt-4 disabled:opacity-50"
          >
            {loading ? 'A autenticar...' : 'Entrar no Sistema'}
          </button>
        </form>
      </div>
    </div>
  );
}