// components/Footer.tsx
'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#EBE3D5] text-[#3A332C] py-12 border-t border-[#d8cfc0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-serif text-2xl tracking-wider block mb-4">
              ESTORIL <span className="italic text-[#8C7A6B]">Staffing</span>
            </span>
            <p className="text-[#6B6054] text-xs font-light max-w-xs leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-[#3A332C]">Navegação</h4>
            <ul className="space-y-2 text-xs font-light text-[#6B6054]">
              <li><Link href="/servicos" className="hover:text-[#3A332C] transition-colors">{t('nav.services')}</Link></li>
              <li><Link href="/filosofia" className="hover:text-[#3A332C] transition-colors">{t('nav.philosophy')}</Link></li>
              <li><Link href="/contacto" className="hover:text-[#3A332C] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-[#3A332C]">Contactos</h4>
            <ul className="space-y-2 text-xs font-light text-[#6B6054] mb-4">
              <li>geral@estorilstaffing.pt</li>
              <li>Estoril, Portugal</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}