import { Metadata } from 'next';
import Script from 'next/script';

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
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:title'
          content='Nordic Data Compliance Center | GDPR & Data Privacy Consulting Services'
        />
        <meta
          property='og:description'
          content='Expert data compliance consulting services, including GDPR solutions, tailored for startups and SMEs.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.datacompliancecentre.com'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Nordic Data Compliance Center' />
        <meta
          name='twitter:description'
          content='Expert GDPR & data privacy consulting services.'
        />
        <meta name='twitter:image' content='/logoImages/9.png' />
        <meta name='geo.region' content='EU' />
        <meta name='geo.placename' content='Denmark' />
        <meta name='ICBM' content='55.6761,12.5683' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='canonical' href={`https://www.datacompliancecentre.com`} />
        <Script
          id='CookieConsent'
          src='https://policy.app.cookieinformation.com/uc.js'
          data-culture='EN'
          type='text/javascript'
          defer
        />
        <Script
          id='structured-data'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nordic Data Compliance Center',
              url: 'https://www.datacompliancecentre.com',
              logo: 'https://www.datacompliancecentre.com/logoImages/9.png',

              sameAs: [
                'https://www.linkedin.com/company/nordic-data-compliance-centre',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'hello@datacompliancecentre.com',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
