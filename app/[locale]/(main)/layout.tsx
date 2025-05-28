// import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
// import localFont from "next/font/local";
// import { Montserrat, Open_Sans } from 'next/font/google';
// import './globals.css';
import { ShopProvider } from '@/utils/context/CartContext';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';


// const monserrat = Montserrat({
//   weight: ['100', '200', '400', '700'], // Adjust weights as needed
//   subsets: ['latin'],
// });

// const openSans = Open_Sans({
//   weight: ['300', '400', '700'], // Adjust weights as needed
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
 title: 'Nordic Data Compliance Center | GDPR & Data Privacy Consulting Services',
  description:
    'Expert data compliance consulting services, including GDPR solutions, tailored for startups and SMEs. Ensure your business stays ahead in data privacy.',
  icons: {
  icon: '/favicon.ico',
},
  keywords:
    'Data Compliance, SME, GDPR, Information Security, Data Protection, Services, Subscription, Toolkit, Consulting, Audit, Training, Breach Management, Governance',
  openGraph: {
    title: 'Nordic Data Compliance Centre',
    description:
      'Nordic Data Compliance Centre offers comprehensive data compliance solutions for SMEs, including GDPR compliance, data security, breach management, and more.',
    url: 'https://www.datacompliancecentre.com',
    type: 'website',
    images: '/images/Nordic_logo_banner.png', // Image to display on social media
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nordic Data Compliance Centre',
    description:
      'Nordic Data Compliance Centre provides data compliance solutions for SMEs, including GDPR, security, breach management, and governance.',
    images: '/images/Nordic_logo_banner.png',
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShopProvider>
      <Providers>
        <Navbar />
        {children}
      </Providers>
    </ShopProvider>
  );
}
