// app/(public)/contacto/page.tsx
'use client';
import { useLanguage } from '@/components/LanguageContext';

export default function Contacto() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h1 className="font-serif text-4xl text-[#3A332C] mb-6">
            {t('ct.title1')} <span className="text-[#8C7A6B] italic">{t('ct.title2')}</span>
          </h1>
          <p className="text-[#6B6054] mb-8 font-light text-sm leading-relaxed">
            {t('ct.desc')}
          </p>
        </div>

        <div className="md:w-2/3 bg-white p-10 shadow-sm border border-[#EBE3D5]">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.name')}</label>
                <input type="text" className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.phone')}</label>
                <input type="tel" className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.type')}</label>
                <div className="relative">
                  <select className="appearance-none w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] text-[#3A332C] cursor-pointer">
                    <option>{t('ct.t1')}</option>
                    <option>{t('ct.t2')}</option>
                    <option>{t('ct.t3')}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8C7A6B]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.srv')}</label>
                <div className="relative">
                  <select className="appearance-none w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] text-[#3A332C] cursor-pointer">
                    <option>{t('ct.s1')}</option>
                    <option>{t('ct.s2')}</option>
                    <option>{t('ct.s3')}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8C7A6B]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-2">{t('ct.details')}</label>
              <textarea 
                rows={4} 
                className="w-full border-b border-[#EBE3D5] py-3 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors resize-none" 
                placeholder={t('ct.placeholder')}
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#3A332C] text-[#FAF8F5] uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#2a241e] transition-colors duration-300 mt-4"
            >
              {t('ct.submit')}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}