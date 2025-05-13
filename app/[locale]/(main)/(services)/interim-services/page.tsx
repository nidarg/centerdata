'use client';

import React, { memo } from 'react';
import { RightArrow } from '@/components/RightArrow';
import VideoBackground from '@/components/VideoBackground';
import TextImage from '@/components/TextImage';
import { interimServices, itServices } from '@/utils/projects';
import Divider from '@/components/Divider';
import Head from 'next/head';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const MemoizedVideoBackground = memo(VideoBackground);

const InterimServices = () => {
  const t = useTranslations('common.textImage');
  const commonT = useTranslations('common');

  const headers = [commonT('navigation.services.interim')];

  return (
    <>
      <Head>
        <title>
          {commonT('navigation.services.interim')} | GDPR & Data Security
        </title>
        <meta
          name='description'
          content='Get expert interim data compliance services including GDPR, DORA, NIS2, and ISO27001 support. Flexible, professional solutions for your compliance needs.'
        />
        <meta
          name='keywords'
          content='Interim Services, GDPR, DORA, NIS2, ISO27001, compliance consulting, data protection, interim compliance services'
        />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://www.datacompliancecentre.com/interim-services'
        />
      </Head>
      <Script
        id='structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Nordic Data Compliance Center',
            url: 'https://www.datacompliancecentre.com/interim-services',
            logo: 'https://www.datacompliancecentre.com/logoImages/9.png',
            description:
              'Interim GDPR, DORA, ISO27001, NIS2, and AI-Act/ISO 42001 compliance consulting and project support.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'DK',
            },
            sameAs: [
              'https://www.linkedin.com/company/nordic-data-compliance-center',
              'https://www.datacompliancecentre.com/',
            ],
          }),
        }}
      />

      <div className='flex flex-cols justify-center gap-6'>
        <MemoizedVideoBackground
          videoUrl='./videos/video2.mp4'
          height='80vh'
          headers={headers}
        />

        <div className='mt-[90vh]'>
          <TextImage
            reverse
            titleKey='interimServices.title'
            textKeys={[
              'interimServices.text.0',
              'interimServices.text.1',
              'interimServices.text.2',
            ]}
            imageUrl={interimServices.imageUrl}
          />

          <Divider />

          <div className='bg-transparent text-primary mt-20'>
            <h1 className='text-2xl font-semibold'>
              {t('interimServices.howCanWeAddValue')}
            </h1>
            <div className='mt-10'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary'>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.expertiseGaps')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.operationalContinuity')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.strategicGoals')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.flexibleAsset')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-20'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.experiencedProfessionals')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-20'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('interimServices.valuePoints.quickOnboarding')}
                </li>
              </ul>
            </div>
          </div>

          <Divider />

          <TextImage
            titleKey='itServices.title'
            textKeys={[
              'itServices.text.0',
              'itServices.text.1',
            ]}
            imageUrl={itServices.imageUrl}
          />

          <Divider />

          <div className='flex justify-center w-full mt-10'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
              <span className='absolute inset-[-150%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive text-md font-medium text-white backdrop-blur-3xl px-2 py-3'>
                <Link href='/contact'>
                  {commonT('workWithUs.bookConsultation')}
                </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterimServices;
