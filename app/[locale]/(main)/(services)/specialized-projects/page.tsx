'use client';

import Link from 'next/link';
import React, { memo } from 'react';
import { RightArrow } from '@/components/RightArrow';
import VideoBackground from '@/components/VideoBackground';
import { TextImage } from '@/components/TextImage';
import { specializedProjects, aiActProjects } from '@/utils/projects';
import Divider from '@/components/Divider';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

// Client component
function SpecializedProjectsContent() {
  const t = useTranslations('common.textImage');
  const commonT = useTranslations('common');

  const headers = [commonT('navigation.services.specialized')];
  const MemoizedVideoBackground = memo(VideoBackground);

  return (
    <>
      <Head>
        <title>Specialized Data Compliance Projects | GDPR, AI Act, ISO, NIS2 & More</title>
        <meta name="description" content="We deliver specialized data compliance projects including GDPR, AI Act, ISO 27001, NIS2, and DORA. Get hands-on consulting and practical solutions tailored to your industry." />
        <meta name="keywords" content="GDPR, AI Act, ISO 27001, NIS2, DORA, compliance consulting, data protection, data compliance projects, specialized compliance services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.datacompliancecentre.com/specialized-projects" />
        <meta property="og:title" content="Specialized Data Compliance Projects | GDPR, AI Act, ISO, NIS2 & More" />
        <meta property="og:description" content="We deliver specialized data compliance projects including GDPR, AI Act, ISO 27001, NIS2, and DORA. Get hands-on consulting and practical solutions tailored to your industry." />
        <meta property="og:url" content="https://www.datacompliancecentre.com/specialized-projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Specialized Data Compliance Projects | GDPR, AI Act, ISO, NIS2 & More" />
        <meta name="twitter:description" content="We deliver specialized data compliance projects including GDPR, AI Act, ISO 27001, NIS2, and DORA. Get hands-on consulting and practical solutions tailored to your industry." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Nordic Data Compliance Center',
            url: 'https://www.datacompliancecentre.com/specialized-projects',
            logo: 'https://www.datacompliancecentre.com/logoImages/9.png',
            description: 'Specialized GDPR, DORA, ISO27001, NIS2, and AI-Act/ISO 42001 compliance consulting and project support.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'DK',
            },
            sameAs: [
              'https://www.linkedin.com/company/nordic-data-compliance-center',
              'https://www.datacompliancecentre.com/',
            ],
          })}
        </script>
      </Head>
      <div className='flex flex-cols justify-center gap-6'>
        <MemoizedVideoBackground
          videoUrl='./videos/video3.mp4'
          height='80vh'
          headers={headers}
        />
     
        {/* <MemoizedVideoBackground
          videoUrl='/videos/data-transmission.mp4'
          height='80vh'
          headers={headers}
        /> */}
       

        <div className='mt-[90vh]'>
          <TextImage
            reverse
            title={t('specializedProjects.title')}
            text={[
              t('specializedProjects.text.0'),
              t('specializedProjects.text.1'),
              t('specializedProjects.text.2'),
              t('specializedProjects.text.3'),
            ]}
            imageUrl={specializedProjects.imageUrl}
            imageAlt={t('specializedProjects.title')}
          />

          <Divider />

          <div className='bg-transparent text-foreground'>
            <h1 className='text-2xl font-bold text-destructive text-center'>
              {t('specializedProjects.runProject')}
            </h1>
            <div className='mt-10'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-foreground'>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow height={24} width={24} />
                  </span>
                  {t('specializedProjects.list.strengthen')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('specializedProjects.list.reduceRisks')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow height={24} width={24} />
                  </span>
                  {t('specializedProjects.list.buildTrust')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {t('specializedProjects.list.achieveCertification')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                  <RightArrow height={24} width={24} />
                  {t('specializedProjects.list.developPractices')}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                  <span className='flex-shrink-0'>
                    <RightArrow height={24} width={24} />
                  </span>
                  {t('specializedProjects.list.createCulture')}
                </li>
              </ul>
            </div>
            <Divider />

            <TextImage
              title={t('aiActProjects.title')}
              text={[
                t('aiActProjects.text.0'),
                t('aiActProjects.text.1'),
                t('aiActProjects.text.2'),
              ]}
              imageUrl={aiActProjects.imageUrl}
              imageAlt={t('aiActProjects.title')}
            />

            <Divider />

            <h3 className='text-2xl font-semibold text-primary'>
              {t('specializedProjects.addValue')}
            </h3>

            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary mt-10'>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.accessProfessionals')}
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.customizedFramework')}
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.pragmaticApproach')}
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.handsOnSolutions')}
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.pragmaticSolutions')}
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                {t('specializedProjects.list.strengthenResilience')}
              </li>
            </ul>

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
      </div>
    </>
  );
}

// Server component
export default function SpecializedProjectsPage() {
  return <SpecializedProjectsContent />;
}
