'use client';
import React from 'react';
import Head from "next/head";
import { useTranslations } from 'next-intl';

const AssociateProgram = () => {
  const t = useTranslations('common.associateProgram');

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>{t('meta.title')}</title>
        <meta
          name="description"
          content={t('meta.description')}
        />
        <link rel="canonical" href="https://www.datacompliancecentre.com/associate-program" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta
          property="og:description"
          content={t('meta.ogDescription')}
        />
        <meta property="og:url" content="https://www.datacompliancecentre.com/associate-program" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.twitterTitle')} />
        <meta
          name="twitter:description"
          content={t('meta.twitterDescription')}
        />
        <meta name="twitter:image" content="https://www.datacompliancecentre.com/images/associate-program-image.jpg" />

        {/* Structured Data - Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "headline": "${t('meta.title')}",
              "description": "${t('meta.description')}",
              "url": "https://www.datacompliancecentre.com/associate-program"
            }
          `}
        </script>
      </Head>

      <div className='mt-[200px] max-w-4xl min-w-full'>
        {/* Title */}
        <h1 className='text-primary text-3xl font-bold shadow-md shadow-destructive rounded-md'>
          {t('title')}
        </h1>

        {/* Introduction */}
        <p className='mt-4 text-lg mb-10'>
          {t('description')}
        </p>

        {/* Benefits Section */}
        <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
          {t('benefits.title')}
        </h2>
        <ul className='mt-4 space-y-4'>
          <li className='flex items-start gap-3'>
            <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
              •
            </span>
            <div>
              <strong>{t('benefits.items.flexibility.title')}</strong> {t('benefits.items.flexibility.description')}
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
              •
            </span>
            <div>
              <strong>{t('benefits.items.diverseProjects.title')}</strong> {t('benefits.items.diverseProjects.description')}
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
              •
            </span>
            <div>
              <strong>{t('benefits.items.collaborativeCommunity.title')}</strong> {t('benefits.items.collaborativeCommunity.description')}
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
              •
            </span>
            <div className='mb-10'>
              <strong>{t('benefits.items.businessDevelopment.title')}</strong> {t('benefits.items.businessDevelopment.description')}
            </div>
          </li>
        </ul>

        {/* Requirements Section */}
        <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
          {t('requirements.title')}
        </h2>
        <p className='mt-4'>
          {t('requirements.description')}
        </p>
        <ul className='mt-4 space-y-4'>
          {t.raw('requirements.items').map((item: string, index: number) => (
            <li key={index} className='flex items-start gap-3'>
              <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
                •
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Join Us Section */}
        <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
          {t('joinUs.title')}
        </h2>
        <p className='mt-4'>
          {t('joinUs.description')}{' '}
          <a
            href={`mailto:${t('joinUs.email')}`}
            className='text-destructive underline'
          >
            {t('joinUs.email')}
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default AssociateProgram;
