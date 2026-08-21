// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F9F8F6] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Marca */}
          <div>
            <span className="font-serif text-2xl tracking-wider block mb-4">
              ESTORIL <span className="text-[#2C4C3B] italic">Staffing</span>
            </span>
            <p className="text-gray-400 text-xs font-light max-w-xs leading-relaxed">
              Gestão residencial premium e private staffing no eixo Estoril - Cascais - Lisboa. Rigor, descrição e excelência.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-gray-300">Navegação</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="/filosofia" className="hover:text-white transition-colors">A Nossa Filosofia</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Private Inquiry</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Portal de Cliente</Link></li>
            </ul>
          </div>

          {/* Contactos e Legal */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-gray-300">Institucional</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400 mb-4">
              <li>geral@estorilstaffing.pt</li>
              <li>Estoril, Portugal</li>
            </ul>
            <div className="space-x-4">
              <Link href="#" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="#" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Termos e Condições</Link>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Estoril Staffing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}