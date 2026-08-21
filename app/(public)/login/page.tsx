'use client';
import { useLanguage } from '../../../components/LanguageContext';

export default function Login() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F5] px-4">
      <div className="w-full max-w-md bg-white p-12 border border-[#EBE3D5] shadow-sm">
        <h2 className="font-serif text-3xl text-center text-[#3A332C] mb-2">{t('login.title')}</h2>
        <p className="text-center text-[10px] uppercase tracking-widest text-[#8C7A6B] font-bold mb-10">
          {t('login.subtitle')}
        </p>
        
        <form className="space-y-8">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7A6B] mb-2">{t('login.email')}</label>
            <input type="email" className="w-full border-b border-[#EBE3D5] py-2 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7A6B] mb-2">{t('login.pass')}</label>
            <input type="password" className="w-full border-b border-[#EBE3D5] py-2 bg-transparent text-sm focus:outline-none focus:border-[#3A332C] transition-colors" />
          </div>
          <button type="button" className="w-full bg-[#3A332C] text-[#FAF8F5] uppercase tracking-widest text-xs font-bold py-5 hover:bg-[#2a241e] transition-colors duration-300 mt-6">
            {t('login.btn')}
          </button>
        </form>
      </div>
    </main>
  );
}