// components/LanguageContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';
type Dictionary = Record<string, string>;

const translations: Record<Language, Dictionary> = {
  pt: {
    'nav.services': 'Serviços',
    'nav.philosophy': 'A Nossa Filosofia',
    'nav.contact': 'Pedido de Informação',
    'footer.desc': 'Fornecemos equipas rigorosamente selecionadas e com formação contínua para a limpeza e manutenção de residências, condomínios e espaços empresariais.',
    'home.subtitle': 'Cascais • Estoril • Lisboa',
    'home.title1': 'Profissionais de',
    'home.title2': 'Excelência',
    'home.desc': 'Mais de duas décadas de experiência. Fornecemos equipas selecionadas e com formação contínua para a limpeza, manutenção e organização do seu espaço.',
    'home.cta': 'Solicitar Orçamento',
    'home.method': 'A Nossa Abordagem',
    'home.m1.title': 'Recrutamento & Formação',
    'home.m1.desc': 'Apenas selecionamos profissionais de confiança, garantindo formação contínua em técnicas de limpeza, tratamento de materiais e protocolo.',
    'home.m2.title': 'Garantia de Substituição',
    'home.m2.desc': 'Em caso de imprevisto, asseguramos a substituição imediata da profissional, garantindo que o seu serviço nunca falha.',
    'home.m3.title': 'Flexibilidade Total',
    'home.m3.desc': 'Desde uma intervenção pontual de limpeza profunda até contratos fixos para empresas e condomínios, adaptamo-nos à sua dimensão.',
    'srv.title1': 'Os Nossos',
    'srv.title2': 'Serviços',
    'srv.desc': 'Profissionais de confiança para manter a ordem e a higiene do seu espaço, devidamente formadas e cobertas por seguros.',
    'srv.s1.title': 'Limpeza Residencial Premium',
    'srv.s1.desc': 'O nosso serviço core. Intervenções de limpeza profunda ou manutenção regular. A equipa é instruída no tratamento de materiais delicados e organização.',
    'srv.s1.b1': '✓ Limpezas gerais ou diárias programadas',
    'srv.s1.b2': '✓ Engomadoria e tratamento de roupas',
    'srv.s1.b3': '✓ Produtos adequados a pedras naturais e madeiras',
    'srv.s2.title': 'Colocação de Pessoal Doméstico',
    'srv.s2.desc': 'Para famílias que necessitam de staff a tempo inteiro ou parcial. Fazemos a triagem e formação contínua das melhores profissionais para a sua casa.',
    'srv.s2.b1': '✓ Empregadas internas e externas',
    'srv.s2.b2': '✓ Formação em protocolo e etiqueta residencial',
    'srv.s2.b3': '✓ Tratamos de toda a burocracia de seleção',
    'srv.s3.title': 'Empresas e Condomínios',
    'srv.s3.desc': 'Limpeza e manutenção programada para áreas comuns de condomínios de luxo, escritórios e espaços empresariais que exigem um brio superior.',
    'srv.s3.b1': '✓ Limpeza de manutenção em espaços empresariais',
    'srv.s3.b2': '✓ Higienização de áreas comuns de condomínios',
    'srv.s3.b3': '✓ Horários flexíveis e atuação discreta',
    'ct.title1': 'Pedido de',
    'ct.title2': 'Informação',
    'ct.desc': 'Detalhe as suas necessidades. Analisaremos o seu pedido e entraremos em contacto para apresentar a solução ideal.',
    'ct.name': 'Nome Completo',
    'ct.phone': 'Telemóvel',
    'ct.type': 'Tipo de Cliente',
    'ct.t1': 'Particular (Residência)',
    'ct.t2': 'Empresa (Escritório)',
    'ct.t3': 'Condomínio',
    'ct.srv': 'Serviço Pretendido',
    'ct.s1': 'Apenas Limpeza Regular',
    'ct.s2': 'Limpeza Profunda (Fim de Obra/Mudança)',
    'ct.s3': 'Recrutamento de Empregada',
    'ct.details': 'Detalhes do Pedido (Opcional)',
    'ct.placeholder': 'Indique a zona, dimensão do espaço ou requisitos específicos...',
    'ct.submit': 'Enviar Pedido'
  },
  en: {
    'nav.services': 'Services',
    'nav.philosophy': 'Our Philosophy',
    'nav.contact': 'Inquiry',
    'footer.desc': 'We provide rigorously selected and continuously trained teams for the cleaning and maintenance of residences, condominiums, and corporate spaces.',
    'home.subtitle': 'Cascais • Estoril • Lisbon',
    'home.title1': 'Professionals of',
    'home.title2': 'Excellence',
    'home.desc': 'Over two decades of experience. We provide selected teams with continuous training for the cleaning, maintenance, and organization of your space.',
    'home.cta': 'Request a Quote',
    'home.method': 'Our Approach',
    'home.m1.title': 'Recruitment & Training',
    'home.m1.desc': 'We only select trusted professionals, ensuring continuous training in cleaning techniques, material care, and protocol.',
    'home.m2.title': 'Replacement Guarantee',
    'home.m2.desc': 'In case of an unforeseen event, we ensure the immediate replacement of the professional, guaranteeing your service never fails.',
    'home.m3.title': 'Total Flexibility',
    'home.m3.desc': 'From a deep cleaning intervention to fixed contracts for companies and condominiums, we adapt to your scale.',
    'srv.title1': 'Our',
    'srv.title2': 'Services',
    'srv.desc': 'Trusted professionals to maintain the order and hygiene of your space, properly trained and covered by insurance.',
    'srv.s1.title': 'Premium Residential Cleaning',
    'srv.s1.desc': 'Our core service. Deep cleaning interventions or regular maintenance. The team is trained in treating delicate materials and organization.',
    'srv.s1.b1': '✓ General or scheduled daily cleaning',
    'srv.s1.b2': '✓ Ironing and garment care',
    'srv.s1.b3': '✓ Products suitable for natural stones and wood',
    'srv.s2.title': 'Domestic Staff Placement',
    'srv.s2.desc': 'For families requiring full or part-time staff. We screen and provide continuous training for the best professionals for your home.',
    'srv.s2.b1': '✓ Live-in and live-out maids',
    'srv.s2.b2': '✓ Training in residential protocol and etiquette',
    'srv.s2.b3': '✓ We handle all selection bureaucracy',
    'srv.s3.title': 'Corporate & Condominiums',
    'srv.s3.desc': 'Scheduled cleaning and maintenance for common areas of luxury condominiums and offices that require a higher standard.',
    'srv.s3.b1': '✓ Maintenance cleaning in corporate spaces',
    'srv.s3.b2': '✓ Sanitation of condominium common areas',
    'srv.s3.b3': '✓ Flexible schedules and discreet operation',
    'ct.title1': 'Information',
    'ct.title2': 'Request',
    'ct.desc': 'Detail your needs. We will analyze your request and contact you to present the ideal solution.',
    'ct.name': 'Full Name',
    'ct.phone': 'Phone Number',
    'ct.type': 'Client Type',
    'ct.t1': 'Private (Residence)',
    'ct.t2': 'Corporate (Office)',
    'ct.t3': 'Condominium',
    'ct.srv': 'Requested Service',
    'ct.s1': 'Regular Cleaning Only',
    'ct.s2': 'Deep Cleaning (Post-construction/Moving)',
    'ct.s3': 'Maid Recruitment',
    'ct.details': 'Request Details (Optional)',
    'ct.placeholder': 'Indicate the area, space size, or specific requirements...',
    'ct.submit': 'Submit Request'
  }
};

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('pt');
  const t = (key: string) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};