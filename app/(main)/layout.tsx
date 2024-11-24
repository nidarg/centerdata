


import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
// import localFont from "next/font/local";
import { Montserrat, Open_Sans } from 'next/font/google';
// import './globals.css';
import { ShopProvider } from '@/utils/context/CartContext';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const monserrat = Montserrat({
  weight: ['100', '200', '400', '700'], // Adjust weights as needed
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['300', '400', '700'], // Adjust weights as needed
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nordic Data Compliance Center',
  description:
    'Nordic Data Compliance Centre offers data compliance solutions for SMEs. Services include data inventory, security, breach management, training, and governance. Subscription plans & one-time toolkit available.',
  keywords:
    'Data Compliance, SME, GDPR, Information Security, Services, Subscription, Toolkit, Consulting, Audit, Training',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div
          className={`${monserrat.className} ${openSans.className} antialiased  container `}
        >
          <Providers>
            <ShopProvider>
              {<Navbar />}

              <main className='container py-10 pt-32 min-h-screen'>
                {children}
                <SpeedInsights />
              </main>
              <Footer/>
            </ShopProvider>
          </Providers>
        </div>
     
  );
}
