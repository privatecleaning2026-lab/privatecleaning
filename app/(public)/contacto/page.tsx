// app/(public)/contacto/page.tsx
export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h1 className="font-serif text-4xl text-[#1A251F] mb-6">
            Pedido de <span className="text-[#4A6B56] italic">Informação</span>
          </h1>
          <p className="text-gray-600 mb-8 font-light text-sm leading-relaxed">
            Detalhe as suas necessidades. A nossa Diretora de Operações analisará o seu pedido e entrará em contacto para apresentar a solução ideal.
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-[#4A6B56] pl-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A251F]">Escritórios</h4>
              <p className="text-xs text-gray-500 mt-1">Estoril, Portugal</p>
            </div>
            <div className="border-l-2 border-[#4A6B56] pl-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A251F]">Resposta</h4>
              <p className="text-xs text-gray-500 mt-1">Em menos de 24h úteis</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 bg-white p-10 shadow-lg shadow-gray-100/50 border border-gray-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Nome Completo</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#4A6B56] transition-colors" placeholder="Ex: Maria Lancaster" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Telemóvel</label>
                <input type="tel" className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#4A6B56] transition-colors" placeholder="+351" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Tipo de Cliente</label>
                <div className="relative">
                  <select className="appearance-none w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#4A6B56] text-gray-700 cursor-pointer">
                    <option>Particular (Residência)</option>
                    <option>Empresa (Escritório)</option>
                    <option>Condomínio</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Serviço Pretendido</label>
                <div className="relative">
                  <select className="appearance-none w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#4A6B56] text-gray-700 cursor-pointer">
                    <option>Apenas Limpeza Regular</option>
                    <option>Limpeza Profunda (Fim de Obra/Mudança)</option>
                    <option>Recrutamento de Empregada/Babysitter</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Detalhes do Pedido (Opcional)</label>
              <textarea 
                rows={4} 
                className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#4A6B56] transition-colors resize-none" 
                placeholder="Indique a zona, dimensão do espaço ou requisitos específicos da profissional..."
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#2C3E35] text-white uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#1A251F] transition-colors duration-300 mt-4"
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}