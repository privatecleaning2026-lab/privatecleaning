// app/(public)/contacto/page.tsx
export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Bloco de Texto Lateral */}
        <div className="md:w-1/3">
          <h1 className="font-serif text-4xl text-[#1A1A1A] mb-6">
            Private <span className="text-[#2C4C3B] italic">Inquiry</span>
          </h1>
          <p className="text-gray-600 mb-8 font-light text-sm leading-relaxed">
            Para garantir a máxima personalização, o primeiro passo é uma avaliação presencial da sua propriedade conduzida pela nossa Diretora de Operações.
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-[#2C4C3B] pl-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">Tempo de Resposta</h4>
              <p className="text-xs text-gray-500 mt-1">Inferior a 2 horas (Dias úteis)</p>
            </div>
            <div className="border-l-2 border-[#2C4C3B] pl-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">Privacidade</h4>
              <p className="text-xs text-gray-500 mt-1">Os seus dados são confidenciais.</p>
            </div>
          </div>
        </div>

        {/* O Formulário de Luxo */}
        <div className="md:w-2/3 bg-white p-10 shadow-sm border border-gray-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Nome Completo</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#2C4C3B] transition-colors" placeholder="Ex: Maria Lancaster" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Contacto Direto</label>
                <input type="tel" className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#2C4C3B] transition-colors" placeholder="+351" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Localização</label>
                <select className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#2C4C3B] text-gray-700">
                  <option>Estoril</option>
                  <option>Cascais</option>
                  <option>Sintra</option>
                  <option>Lisboa (Centro)</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Dimensão da Propriedade (Aprox.)</label>
                <select className="w-full border-b border-gray-200 py-3 bg-transparent text-sm focus:outline-none focus:border-[#2C4C3B] text-gray-700">
                  <option>Até 150m²</option>
                  <option>150m² a 300m²</option>
                  <option>Mais de 300m² / Moradia Isolada</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Serviço Pretendido</label>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-[#2C4C3B]" /> <span>Housekeeping</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-[#2C4C3B]" /> <span>Babysitting</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-[#2C4C3B]" /> <span>Private Chef</span>
                </label>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#1A1A1A] text-[#F9F8F6] uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#2C4C3B] transition-colors duration-300 mt-4"
            >
              Solicitar Reunião
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}