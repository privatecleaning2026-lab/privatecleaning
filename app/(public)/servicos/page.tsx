// app/(public)/servicos/page.tsx
export default function Servicos() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A251F] mb-6 text-center">
          Os Nossos <span className="text-[#4A6B56] italic">Serviços</span>
        </h1>
        <p className="text-center text-gray-500 mb-20 font-light max-w-2xl mx-auto text-lg">
          Profissionais de confiança para manter a ordem e a higiene do seu espaço, devidamente enquadrados e cobertos por seguros.
        </p>

        <div className="space-y-16">
          <section className="bg-white p-12 shadow-sm border border-gray-100">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#4A6B56] font-bold">Limpeza Residencial Premium</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
              O nosso serviço core. Intervenções de limpeza profunda ou manutenção regular para habitações exigentes. A equipa é instruída no tratamento de materiais delicados e organização de espaços.
            </p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-light">
              <li>✓ Limpezas gerais ou diárias programadas</li>
              <li>✓ Engomadoria e tratamento de roupas</li>
              <li>✓ Utilização de produtos adequados a mármores e madeiras</li>
            </ul>
          </section>

          <section className="bg-white p-12 shadow-sm border border-gray-100">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#4A6B56] font-bold">Colocação de Pessoal Doméstico</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
              Para famílias que necessitam de staff a tempo inteiro ou parcial. A nossa equipa faz a triagem rigorosa, entrevista e seleciona as melhores profissionais para a sua casa.
            </p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-light">
              <li>✓ Empregadas internas e externas</li>
              <li>✓ Babysitters com referências validadas</li>
              <li>✓ Tratamos da burocracia de seleção e contratação</li>
            </ul>
          </section>

          <section className="bg-white p-12 shadow-sm border border-gray-100">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#4A6B56] font-bold">Empresas e Condomínios</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
              Limpeza e manutenção programada para áreas comuns de condomínios de luxo, escritórios e espaços empresariais que exigem um nível de brio superior.
            </p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-light">
              <li>✓ Limpeza de manutenção em espaços empresariais</li>
              <li>✓ Higienização de áreas comuns de condomínios</li>
              <li>✓ Horários flexíveis pós-laborais</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}