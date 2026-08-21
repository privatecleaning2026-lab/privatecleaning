// app/(public)/filosofia/page.tsx
export default function Filosofia() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-4xl text-[#1A1A1A] mb-8">
          A Nossa <span className="text-[#2C4C3B] italic">Filosofia</span>
        </h1>
        <p className="text-gray-700 leading-relaxed font-light mb-8 text-lg">
          Acreditamos que o luxo não reside apenas na estética de um espaço, mas na paz de espírito de quem o habita. Fundada com base em décadas de experiência em gestão turística e hospitalidade de excelência, a nossa operação assenta em três pilares inegociáveis:
        </p>
        
        <div className="text-left space-y-8 mt-12">
          <div className="border-l-4 border-[#2C4C3B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#1A1A1A] font-semibold">Escrutínio Rigoroso</h3>
            <p className="text-gray-600 font-light text-sm">Todas as nossas colaboradoras passam por verificação de antecedentes, análise de referências e formação contínua em protocolo e etiqueta.</p>
          </div>
          <div className="border-l-4 border-[#2C4C3B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#1A1A1A] font-semibold">Privacidade Absoluta</h3>
            <p className="text-gray-600 font-light text-sm">Operamos ao abrigo de Acordos de Confidencialidade (NDA) estritos, garantindo que a rotina da sua família permanece totalmente privada.</p>
          </div>
          <div className="border-l-4 border-[#2C4C3B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#1A1A1A] font-semibold">Segurança Integral</h3>
            <p className="text-gray-600 font-light text-sm">Ao contrário das plataformas informais, a nossa equipa atua com apólices de Responsabilidade Civil de alto teto, protegendo os seus bens mais valiosos.</p>
          </div>
        </div>
      </div>
    </main>
  );
}