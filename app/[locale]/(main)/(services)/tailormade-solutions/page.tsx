import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TailormadeSolutionsContent from './TailormadeSolutionsContent';

// Generate metadata
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = await params.locale;
  const metaT = await getTranslations({ locale, namespace: 'common.meta' });

  return {
    title: metaT('tailormadeSolutions.title'),
    description: metaT('tailormadeSolutions.description'),
    alternates: {
      canonical: `https://www.datacompliancecentre.com/${locale}/tailormade-solutions`,
      languages: {
        'en': '/en/tailormade-solutions',
        'da': '/da/tailormade-solutions',
        'sv': '/sv/tailormade-solutions',
        'no': '/no/tailormade-solutions',
        'fi': '/fi/tailormade-solutions',
      },
    },
    openGraph: {
      title: metaT('tailormadeSolutions.ogTitle'),
      description: metaT('tailormadeSolutions.ogDescription'),
      url: `https://www.datacompliancecentre.com/${locale}/tailormade-solutions`,
      type: 'website',
      images: ['/path/to/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaT('tailormadeSolutions.twitterTitle'),
      description: metaT('tailormadeSolutions.twitterDescription'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Server component
export default function TailormadeSolutionsPage() {
  return <TailormadeSolutionsContent />;
}
