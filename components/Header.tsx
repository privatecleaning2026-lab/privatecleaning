// components/Header.tsx
'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="w-full bg-[#FAF8F5] border-b border-[#EBE3D5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-3xl text-[#3A332C] tracking-wider">
              ESTORIL <span className="italic font-light text-[#8C7A6B]">Staffing</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/servicos" className="text-xs uppercase tracking-widest text-[#3A332C] hover:text-[#8C7A6B] transition-colors">
              {t('nav.services')}
            </Link>
            <Link href="/filosofia" className="text-xs uppercase tracking-widest text-[#3A332C] hover:text-[#8C7A6B] transition-colors">
              {t('nav.philosophy')}
            </Link>
            <Link href="/contacto" className="text-xs uppercase tracking-widest text-[#3A332C] hover:text-[#8C7A6B] transition-colors">
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-2 border-l border-[#EBE3D5] pl-6 ml-2">
              <button 
                onClick={() => setLang('pt')} 
                className={`text-xs transition-colors ${lang === 'pt' ? 'font-bold text-[#3A332C]' : 'text-[#8C7A6B] hover:text-[#3A332C]'}`}
              >
                PT
              </button>
              <span className="text-[#EBE3D5]">|</span>
              <button 
                onClick={() => setLang('en')} 
                className={`text-xs transition-colors ${lang === 'en' ? 'font-bold text-[#3A332C]' : 'text-[#8C7A6B] hover:text-[#3A332C]'}`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}