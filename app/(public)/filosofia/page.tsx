'use client';
import { useLanguage } from '../../../components/LanguageContext';

export default function Filosofia() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-4xl text-[#3A332C] mb-8">
          {t('phil.title1')} <span className="text-[#8C7A6B] italic">{t('phil.title2')}</span>
        </h1>
        <p className="text-[#6B6054] leading-relaxed font-light mb-16 text-lg">
          {t('phil.desc')}
        </p>
        
        <div className="text-left space-y-12">
          <div className="border-l-4 border-[#8C7A6B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#3A332C] font-semibold">{t('phil.p1.title')}</h3>
            <p className="text-[#6B6054] font-light text-sm">{t('phil.p1.desc')}</p>
          </div>
          <div className="border-l-4 border-[#8C7A6B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#3A332C] font-semibold">{t('phil.p2.title')}</h3>
            <p className="text-[#6B6054] font-light text-sm">{t('phil.p2.desc')}</p>
          </div>
          <div className="border-l-4 border-[#8C7A6B] pl-6">
            <h3 className="uppercase tracking-widest text-sm mb-2 text-[#3A332C] font-semibold">{t('phil.p3.title')}</h3>
            <p className="text-[#6B6054] font-light text-sm">{t('phil.p3.desc')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}