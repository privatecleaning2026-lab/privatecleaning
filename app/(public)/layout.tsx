// app/(public)/servicos/page.tsx
export default function Servicos() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-6 text-center">
          Serviços à <span className="text-[#2C4C3B] italic">Medida</span>
        </h1>
        <p className="text-center text-gray-500 mb-20 font-light max-w-2xl mx-auto">
          Um portefólio de soluções desenhado para propriedades de alto padrão. Cada serviço é coberto por seguros de responsabilidade civil para a sua total paz de espírito.
        </p>

        <div className="space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="uppercase tracking-widest text-sm mb-4 text-[#2C4C3B] font-bold">Housekeeping & Curadoria</h2>
              <h3 className="font-serif text-3xl mb-6 text-[#1A1A1A]">Muito além da limpeza tradicional.</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
                A nossa equipa domina as técnicas necessárias para a conservação do seu património. Não usamos químicos abrasivos; aplicamos protocolos específicos para cada material.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 font-light">
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Tratamento de mármores, madeiras maciças e metais preciosos.</li>
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Engomadoria especializada e organização meticulosa de closets.</li>
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Preparação da residência para a sua chegada (Turn-down service).</li>
              </ul>
            </div>
            <div className="h-96 bg-[#e5e4e2] rounded-sm"></div> {/* Espaço para fotografia premium */}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 h-96 bg-[#1A1A1A] rounded-sm"></div> {/* Espaço para fotografia premium */}
            <div className="order-1 md:order-2">
              <h2 className="uppercase tracking-widest text-sm mb-4 text-[#2C4C3B] font-bold">House Management</h2>
              <h3 className="font-serif text-3xl mb-6 text-[#1A1A1A]">Deixe a logística connosco.</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
                Uma gestão integral do seu ecossistema familiar. Desenhado para proprietários ausentes ou famílias com rotinas exigentes que requerem apoio constante.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 font-light">
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Gestão de despensa e supervisão de fornecedores externos.</li>
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Babysitting altamente referenciado.</li>
                <li className="flex items-center border-b border-gray-200 pb-2">✦ Pet-sitting e passeios diários para os seus animais.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}