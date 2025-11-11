'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide header and footer on dashboard pages
  const isDashboard = pathname?.startsWith('/admin') || 
                      pathname?.startsWith('/doctor') || 
                      pathname?.startsWith('/user');

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
