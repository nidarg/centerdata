'use client';

import { TextImage } from '@/components/TextImage';
import ServiceCardMain from '@/components/card/ServiceCardMain';
import WorkWithUsMain from '@/components/work-with-us/WorkWithUsMain';
import Testimonials from '@/components/Testimonials';
import VideoBackground from '@/components/VideoBackground';
import Divider from '@/components/Divider';
import ConsultationModal from '@/components/free-consultation-modal';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

// Client component
function HomeContent() {
  const t = useTranslations('common.hero');
  const textImageT = useTranslations('common.textImage');
  const headers = [
    t('headers.ahead'),
    t('headers.secure'),
    t('headers.compliant'),
  ];

  return (
    <>
      <Head>
        <title>Nordic Data Compliance Centre | GDPR & Data Security for SMEs</title>
        <meta name="description" content="Nordic Data Compliance Centre provides GDPR and data compliance solutions tailored for SMEs. Explore our services in data security, governance, breach management, and training. Subscription plans and one-time toolkits available." />
        <meta name="keywords" content="Data Compliance, GDPR, Denmark, SMEs, Information Security, Governance, Data Protection, Subscription Plans, Compliance Consulting, Cybersecurity, Nordic, Toolkit" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.datacompliancecentre.com" />
        <meta property="og:title" content="Nordic Data Compliance Centre | GDPR & Data Security" />
        <meta property="og:description" content="Experts in GDPR and data protection for SMEs. Stay secure and compliant with tailored services, toolkits, and training programs." />
        <meta property="og:image" content="/images/Nordic_logo_banner.png" />
        <meta property="og:url" content="https://www.datacompliancecentre.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nordic Data Compliance Centre | GDPR & Data Security" />
        <meta name="twitter:description" content="Experts in GDPR and data protection for SMEs. Stay secure and compliant with tailored services, toolkits, and training programs." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nordic Data Compliance Centre',
            url: 'https://www.datacompliancecentre.com',
            logo: 'https://www.datacompliancecentre.com/images/Nordic_logo_banner.png',
            description: 'GDPR and data compliance services tailored for small and medium businesses in Denmark and the Nordic region.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'DK',
            },
            sameAs: [
              'https://www.linkedin.com/company/nordic-data-compliance-centre',
            ],
          })}
        </script>
      </Head>
      <div className='flex flex-cols justify-center gap-6'>
        <VideoBackground
          videoUrl='./videos/businessman.mp4'
          height='80vh'
          headers={headers}
        />
        <div className='mt-[85vh]'>
          <ServiceCardMain />
          <Divider />
          <div id='about-us' className='flex flex-col scroll-mt-40'>
            <TextImage
              title={textImageT('about.title')}
              text={[textImageT('about.text.0')]}
              imageUrl='/images/evatopictures/empowering.jpg'
              imageAlt={textImageT('about.title')}
            />
            <div className='mb-10 mt-10'></div>
            <TextImage
              title={textImageT('approach.title')}
              subtitle={textImageT('approach.subtitle')}
              text={[
                textImageT('approach.text.0'),
                textImageT('approach.text.1'),
                textImageT('approach.text.2'),
              ]}
              imageUrl='/images/evatopictures/lighting.jpg'
              reverse={true}
              imageAlt={textImageT('approach.title')}
            />
          </div>
          <Divider />
          <WorkWithUsMain />
          <Divider />
          <Testimonials />
          <ConsultationModal />
        </div>
      </div>
    </>
  );
}

// Server component
export default function HomePage() {
  return <HomeContent />;
}
