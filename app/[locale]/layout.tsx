// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ShopProvider } from '@/utils/context/CartContext';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'da' },
    { locale: 'sv' },
    { locale: 'no' },
    { locale: 'fi' },
  ];
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure params is properly awaited
  const { locale } = await Promise.resolve(params);

  // Validate locale
  if (!locale || !['en', 'da', 'sv', 'no', 'fi'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }

  return (
    <ErrorBoundary>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ShopProvider>
          <Navbar />
          <main className='py-10 pt-32 min-h-screen'>
            {children}
          </main>
          <Footer />
        </ShopProvider>
      </NextIntlClientProvider>
    </ErrorBoundary>
  );
}
