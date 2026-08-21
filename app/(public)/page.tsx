// app/(public)/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2C3E35]">
      {/* Hero Section - Luminosa e Clássica */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-[#FDFCFB]"></div>
        
        <div className="relative z-10 flex flex-col items-center mt-12">
          <span className="uppercase tracking-[0.3em] text-xs mb-6 text-gray-500">Cascais • Estoril • Lisboa</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight max-w-4xl leading-tight text-[#1A251F]">
            Seleção de Profissionais de <span className="italic font-light text-[#4A6B56]">Excelência</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 mb-12 font-light leading-relaxed">
            Mais de duas décadas de experiência em hospitalidade e serviços. 
            Fornecemos equipas rigorosamente selecionadas para a limpeza e manutenção de residências, condomínios e espaços empresariais.
          </p>
          <a 
            href="/contacto" 
            className="bg-[#2C3E35] text-white px-12 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-[#1A251F] shadow-lg transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Secção: A Nossa Abordagem */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-16 text-[#1A251F]">A Nossa Abordagem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center border border-gray-100 p-10 bg-[#FDFCFB] hover:shadow-md transition-shadow">
              <span className="text-4xl text-[#4A6B56] font-serif italic mb-4">01.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#2C3E35]">Recrutamento Férreo</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Verificação exaustiva de antecedentes e referências. Apenas selecionamos profissionais em quem confiaríamos as nossas próprias instalações.</p>
            </div>
            <div className="flex flex-col items-center text-center border border-gray-100 p-10 bg-[#FDFCFB] hover:shadow-md transition-shadow">
              <span className="text-4xl text-[#4A6B56] font-serif italic mb-4">02.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#2C3E35]">Garantia de Substituição</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Em caso de imprevisto ou incompatibilidade, asseguramos a substituição imediata da profissional, garantindo que o seu serviço nunca falha.</p>
            </div>
            <div className="flex flex-col items-center text-center border border-gray-100 p-10 bg-[#FDFCFB] hover:shadow-md transition-shadow">
              <span className="text-4xl text-[#4A6B56] font-serif italic mb-4">03.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#2C3E35]">Flexibilidade Total</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Desde uma intervenção pontual de limpeza profunda até contratos fixos para empresas e condomínios, adaptamo-nos à sua dimensão.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}