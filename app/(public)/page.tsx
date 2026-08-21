// app/(public)/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight max-w-4xl text-[#1A1A1A]">
          Gestão Residencial de <span className="text-[#2C4C3B] italic">Excelência</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 font-light leading-relaxed">
          Garantimos o funcionamento impecável da sua residência no Estoril e Cascais. 
          Discrição absoluta, profissionais rigorosamente selecionados e gestão integral para que o seu único foco seja desfrutar da sua casa.
        </p>
        <a 
          href="/contacto" 
          className="bg-[#2C4C3B] text-[#F9F8F6] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#1f362a] transition-colors duration-300"
        >
          Solicitar Visita Presencial
        </a>
      </section>

      {/* Serviços Resumo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
        <h2 className="font-serif text-3xl text-center mb-16 text-[#1A1A1A]">O Padrão de Serviço</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Serviço 1 */}
          <div className="text-center group">
            <h3 className="uppercase tracking-widest text-sm mb-4 text-[#2C4C3B] font-semibold">Housekeeping Premium</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Manutenção especializada de materiais nobres, pratas e tecidos delicados. Elevamos o padrão da limpeza tradicional à curadoria do seu espaço.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="text-center group">
            <h3 className="uppercase tracking-widest text-sm mb-4 text-[#2C4C3B] font-semibold">Gestão Familiar</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Apoio diário à rotina da sua família, desde babysitting altamente qualificado até à organização de compras gourmet e passeios com animais de estimação.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="text-center group">
            <h3 className="uppercase tracking-widest text-sm mb-4 text-[#2C4C3B] font-semibold">Private Chef & Eventos</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Preparação diária de refeições adaptadas às suas necessidades nutricionais, bem como apoio especializado e discreto para os seus eventos privados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}