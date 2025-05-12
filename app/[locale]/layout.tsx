// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

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
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Wait for params to resolve
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

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
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
