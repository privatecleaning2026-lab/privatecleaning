// app/(public)/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* É esta palavra "children" que permite que a Home e os Contactos apareçam */}
        {children}
      </main>
      <Footer />
    </div>
  );
}