import { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/app/[locale]/(main)/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.datacompliancecentre.com'),
  title:
    'Nordic Data Compliance Center | GDPR & Data Privacy Consulting Services',
  description:
    'Expert data compliance consulting services, including GDPR solutions, tailored for startups and SMEs. Ensure your business stays ahead in data privacy.',
  keywords:
    'data compliance, GDPR consulting, data privacy, compliance services, data protection, regulatory compliance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
