// app/(public)/contacto/page.tsx
'use client';
import { useState } from 'react';
import { useLanguage } from '../../../components/LanguageContext';
import { supabase } from '../../../lib/Supabase';

export default function Contacto() {
  const { t } = useLanguage();
  
  // Estados para capturar os campos do formulário
  const [nome, setNome] = useState('');
  const [telemovel, setTelemovel] = useState('');
  const [tipoCliente, setTipoCliente] = useState('Particular (Residência)');
  const [servicoPretendido, setServicoPretendido] = useState('Apenas Limpeza Regular');
  const [detalhes, setDetalhes] = useState('');
  
  // Estados de controlo de envio
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    // Validação elementar
    if (!nome || !telemovel) {
      setErro('Por favor, preencha o nome e o contacto telefónico.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nome: nome,
            telemovel: telemovel,
            tipo_cliente: tipoCliente,
            servico_pretendido: servicoPretendido,
            detalhes: detalhes,
            estado: 'Novo'
          }
        ]);

      if (error) throw error;

      setSucesso(true);
      setNome('');
      setTelemovel('');
      setDetalhes('');
    } catch (err: any) {
      setErro('Ocorreu um erro ao submeter o pedido. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h1 className="font-serif text-4xl text-[#3A332C] mb-6">
            {t('ct.title1')} <span className="text-[#8C7A6B] italic">{t('ct.title2')}</span>
          </h1>
          <p className="text-[#6B6054] mb-8 font-light text-sm leading-relaxed">
            {t('ct.desc')}
          </p>
        </div>

        <div className="md:w-2/3 bg-white p-10 shadow-sm border border-[#EBE3D5]">
          {sucesso ? (
            <div className="py-12 text-center">
              <h3 className="font-serif text-2xl text-[#3A332C] mb-4">Pedido Registado com Sucesso</h3>
              <p className="text-[#6B6054] text-sm font-light mb-8">
                Agradecemos o seu contacto. A nossa Diretoria de Operações entrará em contacto nas próximas horas.
              </p>
              <button 
                onClick={() => setSucesso(false)}
                className="bg-[#3A332C] text-[#FAF8F5] uppercase tracking-widest text-xs font-bold py-3 px-8 hover:bg-[#2a241e] transition-colors"
              >
                Submeter Novo Pedido
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {erro && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs">
                  {erro}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.name')}</label>
                  <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.phone')}</label>
                  <input 
                    type="tel" 
                    value={telemovel}
                    onChange={(e) => setTelemovel(e.target.value)}
                    required
                    className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.type')}</label>
                  <div className="relative">
                    <select 
                      value={tipoCliente}
                      onChange={(e) => setTipoCliente(e.target.value)}
                      className="appearance-none w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] text-[#3A332C] cursor-pointer"
                    >
                      <option>{t('ct.t1')}</option>
                      <option>{t('ct.t2')}</option>
                      <option>{t('ct.t3')}</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.srv')}</label>
                  <div className="relative">
                    <select 
                      value={servicoPretendido}
                      onChange={(e) => setServicoPretendido(e.target.value)}
                      className="appearance-none w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] text-[#3A332C] cursor-pointer"
                    >
                      <option>{t('ct.s1')}</option>
                      <option>{t('ct.s2')}</option>
                      <option>{t('ct.s3')}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.details')}</label>
                <textarea 
                  rows={4} 
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors resize-none" 
                  placeholder={t('ct.placeholder')}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#3A332C] text-[#FAF8F5] uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#2a241e] transition-colors duration-300 mt-4 disabled:opacity-50"
              >
                {loading ? 'A processar...' : t('ct.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}