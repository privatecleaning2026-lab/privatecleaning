'use client';
import { useLanguage } from '../../../components/LanguageContext';

export default function Servicos() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#3A332C] mb-6 text-center">
          {t('srv.title1')} <span className="text-[#8C7A6B] italic">{t('srv.title2')}</span>
        </h1>
        <p className="text-center text-[#6B6054] mb-20 font-light max-w-2xl mx-auto text-lg">
          {t('srv.desc')}
        </p>

        <div className="space-y-16">
          <section className="bg-white p-12 shadow-sm border border-[#EBE3D5]">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#8C7A6B] font-bold">{t('srv.s1.title')}</h2>
            <p className="text-[#6B6054] leading-relaxed font-light mb-6 text-sm">{t('srv.s1.desc')}</p>
            <ul className="list-none space-y-2 text-sm text-[#3A332C] font-light">
              <li>{t('srv.s1.b1')}</li>
              <li>{t('srv.s1.b2')}</li>
              <li>{t('srv.s1.b3')}</li>
            </ul>
          </section>

          <section className="bg-white p-12 shadow-sm border border-[#EBE3D5]">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#8C7A6B] font-bold">{t('srv.s2.title')}</h2>
            <p className="text-[#6B6054] leading-relaxed font-light mb-6 text-sm">{t('srv.s2.desc')}</p>
            <ul className="list-none space-y-2 text-sm text-[#3A332C] font-light">
              <li>{t('srv.s2.b1')}</li>
              <li>{t('srv.s2.b2')}</li>
              <li>{t('srv.s2.b3')}</li>
            </ul>
          </section>

          <section className="bg-white p-12 shadow-sm border border-[#EBE3D5]">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-[#8C7A6B] font-bold">{t('srv.s3.title')}</h2>
            <p className="text-[#6B6054] leading-relaxed font-light mb-6 text-sm">{t('srv.s3.desc')}</p>
            <ul className="list-none space-y-2 text-sm text-[#3A332C] font-light">
              <li>{t('srv.s3.b1')}</li>
              <li>{t('srv.s3.b2')}</li>
              <li>{t('srv.s3.b3')}</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}