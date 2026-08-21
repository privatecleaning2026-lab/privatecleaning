// app/(public)/servicos/page.tsx
export default function Servicos() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4 text-center">
          Os Nossos <span className="text-[#2C4C3B] italic">Serviços</span>
        </h1>
        <p className="text-center text-gray-600 mb-16 font-light">
          Soluções à medida para a gestão e manutenção da sua residência.
        </p>

        <div className="space-y-16">
          {/* Housekeeping */}
          <section className="border-b border-gray-200 pb-16">
            <h2 className="uppercase tracking-widest text-lg mb-6 text-[#2C4C3B] font-semibold">
              Housekeeping Premium
            </h2>
            <p className="text-gray-700 leading-relaxed font-light mb-4">
              A nossa equipa é submetida a um rigoroso processo de seleção e formação. Especializamo-nos no tratamento de superfícies nobres — mármores, madeiras maciças e metais preciosos — utilizando exclusivamente produtos adequados e técnicas que garantem a preservação do seu património.
            </p>
            <ul className="list-disc list-inside text-gray-600 font-light space-y-2">
              <li>Limpeza profunda e manutenção regular</li>
              <li>Tratamento de roupas delicadas (engomadoria especializada)</li>
              <li>Organização de armários e closets</li>
            </ul>
          </section>

          {/* Gestão Familiar */}
          <section>
            <h2 className="uppercase tracking-widest text-lg mb-6 text-[#2C4C3B] font-semibold">
              House Management & Apoio
            </h2>
            <p className="text-gray-700 leading-relaxed font-light mb-4">
              Delegue as tarefas rotineiras a profissionais de confiança, todos cobertos por seguros de responsabilidade civil e acordos de confidencialidade estritos.
            </p>
            <ul className="list-disc list-inside text-gray-600 font-light space-y-2">
              <li>Gestão de despensa e compras gourmet</li>
              <li>Receção e acompanhamento de técnicos e fornecedores</li>
              <li>Apoio a eventos privados (preparação e serviço)</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}