// app/(public)/page.tsx
'use client';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#3A332C]">
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
        {/* Nova imagem com fundo clássico e overlay escuro para leitura */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center mt-12 text-[#FAF8F5]">
          <span className="uppercase tracking-[0.3em] text-xs mb-6 text-[#EBE3D5]">{t('home.subtitle')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight max-w-4xl leading-tight">
            {t('home.title1')} <span className="italic font-light text-[#A89F91]">{t('home.title2')}</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 mb-12 font-light leading-relaxed">
            {t('home.desc')}
          </p>
          <a 
            href="/contacto" 
            className="bg-[#3A332C] text-[#FAF8F5] px-12 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-[#2a241e] shadow-lg transition-all duration-300 border border-[#4A423C]"
          >
            {t('home.cta')}
          </a>
        </div>
      </section>

      <section className="py-24 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-16 text-[#3A332C]">{t('home.method')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center border border-[#EBE3D5] p-10 bg-white hover:shadow-sm transition-shadow">
              <span className="text-4xl text-[#8C7A6B] font-serif italic mb-4">01.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#3A332C]">{t('home.m1.title')}</h3>
              <p className="text-[#6B6054] font-light text-sm leading-relaxed">{t('home.m1.desc')}</p>
            </div>
            <div className="flex flex-col items-center text-center border border-[#EBE3D5] p-10 bg-white hover:shadow-sm transition-shadow">
              <span className="text-4xl text-[#8C7A6B] font-serif italic mb-4">02.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#3A332C]">{t('home.m2.title')}</h3>
              <p className="text-[#6B6054] font-light text-sm leading-relaxed">{t('home.m2.desc')}</p>
            </div>
            <div className="flex flex-col items-center text-center border border-[#EBE3D5] p-10 bg-white hover:shadow-sm transition-shadow">
              <span className="text-4xl text-[#8C7A6B] font-serif italic mb-4">03.</span>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-4 text-[#3A332C]">{t('home.m3.title')}</h3>
              <p className="text-[#6B6054] font-light text-sm leading-relaxed">{t('home.m3.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}