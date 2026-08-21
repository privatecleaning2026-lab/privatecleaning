// app/(public)/login/page.tsx
export default function Login() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#F9F8F6] px-4">
      <div className="w-full max-w-md bg-white p-10 border border-gray-100 shadow-sm">
        <h2 className="font-serif text-3xl text-center text-[#1A1A1A] mb-2">Portal Privado</h2>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8">Acesso a Clientes e Staff</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#2C4C3B] transition-colors" 
              placeholder="exemplo@dominio.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Palavra-passe</label>
            <input 
              type="password" 
              className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#2C4C3B] transition-colors" 
            />
          </div>
          <button 
            type="button" 
            className="w-full bg-[#1A1A1A] text-[#F9F8F6] uppercase tracking-widest text-sm py-4 hover:bg-[#2C4C3B] transition-colors duration-300 mt-4"
          >
            Entrar de Forma Segura
          </button>
        </form>
      </div>
    </main>
  );
}