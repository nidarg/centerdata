'use client';

import TextImage from '@/components/TextImage';

import { innovation, consulting } from '@/utils/about';

import ServiceCardMain from '@/components/card/ServiceCardMain';
import WorkWithUsMain from '@/components/work-with-us/WorkWithUsMain';

import Testimonials from '@/components/Testimonials';
import VideoBackground from '@/components/VideoBackground';
import Divider from '@/components/Divider';
import Head from 'next/head';
import ConsultationModal from '@/components/free-consultation-modal';
import { useTranslations } from 'next-intl';

// const headers = ['BE AHEAD.', 'BE SECURE.', 'BE COMPLIANT.'];

export default function Home() {
  const t = useTranslations('hero');
  const headers = [
    t('headers.ahead'),
    t('headers.secure'),
    t('headers.compliant'),
  ];
  return (
    <>
      <Head>
        <title>
          Nordic Data Compliance Centre | GDPR & Data Security for SMEs
        </title>
        <meta
          name='description'
          content='Nordic Data Compliance Centre provides GDPR and data compliance solutions tailored for SMEs. Explore our services in data security, governance, breach management, and training. Subscription plans and one-time toolkits available.'
        />
        <meta
          name='keywords'
          content='Data Compliance, GDPR, Denmark, SMEs, Information Security, Governance, Data Protection, Subscription Plans, Compliance Consulting, Cybersecurity, Nordic, Toolkit'
        />
        <meta
          property='og:title'
          content='Nordic Data Compliance Centre | GDPR & Data Security'
        />
        <meta
          property='og:description'
          content='Experts in GDPR and data protection for SMEs. Stay secure and compliant with tailored services, toolkits, and training programs.'
        />
        <meta property='og:image' content='/images/Nordic_logo_banner.png' />
        <meta
          property='og:url'
          content='https://www.datacompliancecentre.com'
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href='https://www.datacompliancecentre.com' />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nordic Data Compliance Centre',
              url: 'https://www.datacompliancecentre.com',
              logo: 'https://www.datacompliancecentre.com/images/Nordic_logo_banner.png',
              description:
                'GDPR and data compliance services tailored for small and medium businesses in Denmark and the Nordic region.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'DK',
              },
              sameAs: [
                'https://www.linkedin.com/company/nordic-data-compliance-centre',
              ],
            }),
          }}
        />
        <link rel='canonical' href='https://www.datacompliancecentre.com' />
      </Head>
      <div className='flex flex-cols justify-center gap-6'>
        {/* <VideoBackground
        videoUrl='./videos/video1.mp4'
        height='80vh'
        headers={headers}
      /> */}
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
              title={consulting.title.toUpperCase()}
              text={consulting.text}
              imageUrl={consulting.imageUrl}
            />
            <div className='mb-10 mt-10'></div>
            <TextImage
              title={innovation.title.toUpperCase()}
              text={innovation.text}
              subtitle={innovation.subtitle}
              imageUrl={innovation.imageUrl}
              reverse={true}
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
