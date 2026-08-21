// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#F9F8F6] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo / Nome da Empresa */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-3xl text-[#1A1A1A] tracking-wider">
              ESTORIL <span className="text-[#2C4C3B] italic">Staffing</span>
            </Link>
          </div>

          {/* Menu Principal */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/servicos" className="text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#2C4C3B] transition-colors">
              Serviços
            </Link>
            <Link href="/filosofia" className="text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#2C4C3B] transition-colors">
              A Nossa Filosofia
            </Link>
            <Link href="/contacto" className="text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#2C4C3B] transition-colors">
              Private Inquiry
            </Link>
          </nav>

          {/* Área de Login */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/login" 
              className="px-6 py-2 border border-[#1A1A1A] text-[#1A1A1A] text-sm uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-[#F9F8F6] transition-all duration-300"
            >
              Portal do Cliente
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}