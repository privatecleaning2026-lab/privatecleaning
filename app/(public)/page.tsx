// app/(public)/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      {/* Hero Section - Mais imponente */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center bg-[#1A1A1A] text-[#F9F8F6]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="uppercase tracking-[0.3em] text-xs mb-6 text-gray-400">Cascais • Estoril • Lisboa</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight max-w-4xl leading-tight">
            Gestão Residencial de <span className="italic font-light text-[#8A9A86]">Excelência</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 mb-12 font-light leading-relaxed">
            Mais de duas décadas de herança em hospitalidade e gestão patrimonial, agora ao serviço da sua residência. 
            Profissionais rigorosamente escrutinados e gestão integral para que o seu único foco seja desfrutar do seu tempo.
          </p>
          <a 
            href="/contacto" 
            className="bg-[#F9F8F6] text-[#1A1A1A] px-12 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-[#e5e4e2] transition-all duration-300"
          >
            Agendar Consulta Privada
          </a>
        </div>
      </section>

      {/* Secção: O Nosso Método */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-16 text-[#1A1A1A]">O Método Estoril Staffing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl text-[#2C4C3B] font-serif italic mb-4">01.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4">Escrutínio Absoluto</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Apenas 3% das candidatas integram a nossa equipa. Realizamos verificação de antecedentes e assinaturas de NDAs rigorosos antes de qualquer contacto com a sua propriedade.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl text-[#2C4C3B] font-serif italic mb-4">02.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4">Gestão Integrada</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Do planeamento das escalas à faturação certificada e cumprimento de todas as obrigações fiscais e laborais, assumimos a carga burocrática por si.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl text-[#2C4C3B] font-serif italic mb-4">03.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4">Execução Impecável</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Uma Diretora de Operações dedicada acompanha a sua residência, garantindo que o padrão de qualidade se mantém inalterável ao longo do tempo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}