// app/painel/staff/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/Supabase';

type Staff = { id: string; nome: string; telemovel: string; especialidade: string; estado: string; documento_contrato_url: string; };

export default function PainelStaff() {
  const [equipa, setEquipa] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [novoMembro, setNovoMembro] = useState({ nome: '', telemovel: '', especialidade: 'Limpeza Residencial', estado: 'Ativo' });
  const [ficheiro, setFicheiro] = useState<File | null>(null);

  const fetchStaff = async () => {
    setLoading(true);
    const { data } = await supabase.from('staff').select('*').order('nome');
    if (data) setEquipa(data);
    setLoading(false);
  };

  useEffect(() => { fetchStaff(); }, []);

  const handleUploadEGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    let contratoUrl = '';

    // Se houver ficheiro, faz o upload para o bucket "contratos" primeiro
    if (ficheiro) {
      const nomeUnico = `${Date.now()}_${ficheiro.name}`;
      const { data, error: uploadError } = await supabase.storage.from('contratos').upload(nomeUnico, ficheiro);
      
      if (uploadError) {
        alert('Erro ao carregar o ficheiro PDF.');
        setUploading(false);
        return;
      }
      
      // Gera o link público para ver o documento
      const { data: linkData } = supabase.storage.from('contratos').getPublicUrl(nomeUnico);
      contratoUrl = linkData.publicUrl;
    }

    // Guarda os dados na base de dados
    const { error } = await supabase.from('staff').insert([{ 
      ...novoMembro, 
      documento_contrato_url: contratoUrl 
    }]);

    if (!error) {
      setMostrarForm(false);
      setNovoMembro({ nome: '', telemovel: '', especialidade: 'Limpeza Residencial', estado: 'Ativo' });
      setFicheiro(null);
      fetchStaff();
    }
    setUploading(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1A251F]">Gestão de Equipa (Staff)</h1>
          <p className="text-xs text-gray-500 mt-1">Diretório de profissionais, contratos confidenciais e estado.</p>
        </div>
        <button onClick={() => setMostrarForm(!mostrarForm)} className="bg-[#1A251F] text-[#FAF8F5] text-xs px-5 py-3 uppercase tracking-widest font-bold hover:bg-[#2C3E35] transition-colors">
          {mostrarForm ? 'Cancelar' : '+ Nova Profissional'}
        </button>
      </div>

      {mostrarForm && (
        <form onSubmit={handleUploadEGuardar} className="bg-white p-8 mb-8 shadow-sm border border-[#EBE3D5] space-y-6">
          <h3 className="font-serif text-xl text-[#3A332C] border-b border-[#EBE3D5] pb-4">Adicionar Membro à Equipa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Nome Completo</label>
              <input type="text" required value={novoMembro.nome} onChange={e => setNovoMembro({...novoMembro, nome: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Telemóvel</label>
              <input type="tel" required value={novoMembro.telemovel} onChange={e => setNovoMembro({...novoMembro, telemovel: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Especialidade</label>
              <select value={novoMembro.especialidade} onChange={e => setNovoMembro({...novoMembro, especialidade: e.target.value})} className="w-full border-b border-[#EBE3D5] py-2 text-sm focus:outline-none bg-transparent">
                <option>Limpeza Residencial</option>
                <option>Limpeza Pós-Obra</option>
                <option>Gestão de Roupa / Engomadoria</option>
                <option>Apoio Polivalente (Babysitting/Staff)</option>
              </select>
            </div>
            <div className="bg-gray-50 p-4 border border-dashed border-gray-300">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">Contrato / NDA (PDF)</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={e => setFicheiro(e.target.files ? e.target.files[0] : null)} className="text-xs text-gray-500 w-full" />
            </div>
          </div>
          <button type="submit" disabled={uploading} className="bg-[#3A332C] text-[#FAF8F5] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#2a241e] disabled:opacity-50">
            {uploading ? 'A carregar ficheiro...' : 'Guardar Ficha e Contrato'}
          </button>
        </form>
      )}

      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <tr><th className="px-6 py-4">Nome da Profissional</th><th className="px-6 py-4">Telemóvel</th><th className="px-6 py-4">Especialidade</th><th className="px-6 py-4">Documentação</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-xs text-gray-700 font-light">
            {loading ? <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">A carregar registos...</td></tr> : equipa.map(m => (
              <tr key={m.id}>
                <td className="px-6 py-4 font-bold">{m.nome}</td>
                <td className="px-6 py-4">{m.telemovel}</td>
                <td className="px-6 py-4 text-gray-600">{m.especialidade}</td>
                <td className="px-6 py-4">
                  {m.documento_contrato_url ? (
                    <a href={m.documento_contrato_url} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold flex items-center">
                      <span className="mr-1">📄</span> Ver Contrato
                    </a>
                  ) : (
                    <span className="text-gray-400 italic">Sem ficheiro</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}