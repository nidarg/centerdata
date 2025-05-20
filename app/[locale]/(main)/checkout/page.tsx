import { Metadata } from 'next';
import CheckoutForm from './CheckoutForm';

export const metadata: Metadata = {
  title: 'Contact Us | Data Compliance Centre',
  description:
    'Want to get in touch? Feel free to reach out to us with any inquiries, concerns, or assistance you may require.',
  keywords:
    'contact, get in touch, inquiry, support, company, help, business inquiries',
  authors: [{ name: 'Data Compliance Centre' }],
  openGraph: {
    title: 'Contact Us | Data Compliance Centre',
    description:
      'Feel free to reach out to us for any inquiries, assistance, or feedback. Our team is ready to help you.',
    url: 'https://www.datacompliancecentre.com/checkout',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Data Compliance Centre',
    description:
      "Contact us today for any business inquiries or assistance. We're here to help!",
  },
  alternates: {
    canonical: 'https://www.datacompliancecentre.com/checkout',
  },
  other: {
    'application-ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Data Compliance Centre',
      url: 'https://www.datacompliancecentre.com/checkout',
      telephone: '+45 44251434',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maglebjergvej 6',
        addressLocality: 'Kongens Lyngby',
        postalCode: '2800',
        addressCountry: 'Denmark',
      },
      email: 'mailto:hello@datacompliancecentre.com',
      sameAs: 'https://www.linkedin.com/company/nordic-data-compliance-centre',
    }),
  },
};

export default function CheckoutPage() {
  return (
    // <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 mt-20'>
    <CheckoutForm />
    // </div>
  );
}
