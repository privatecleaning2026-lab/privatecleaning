// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-3xl text-[#2C3E35] tracking-wider">
              ESTORIL <span className="italic font-light">Staffing</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/servicos" className="text-xs uppercase tracking-widest text-gray-600 hover:text-[#2C3E35] transition-colors">
              Serviços
            </Link>
            <Link href="/filosofia" className="text-xs uppercase tracking-widest text-gray-600 hover:text-[#2C3E35] transition-colors">
              A Nossa Filosofia
            </Link>
            <Link href="/contacto" className="text-xs uppercase tracking-widest text-gray-600 hover:text-[#2C3E35] transition-colors">
              Pedido de Informação
            </Link>
            
            {/* Seletor de Idioma Visual */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6 ml-2">
              <button className="text-xs font-bold text-[#2C3E35]">PT</button>
              <span className="text-gray-300">|</span>
              <button className="text-xs text-gray-400 hover:text-[#2C3E35] transition-colors">EN</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}