'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import ServicesByType from '@/components/services/ServicesByType';
import TailoredServicesHeader from '@/components/services/TailoredServicesHeader';
import VideoBackground from '@/components/VideoBackground';
import Divider from '@/components/Divider';
import CompanyType from '@/components/CompanyType';
import { RightArrow } from '@/components/RightArrow';
import { mixAndMatch } from '@/utils/projects';
import { TextImage } from '@/components/TextImage';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

// Client component
export default function TailormadeSolutionsContent() {
  const t = useTranslations('common.textImage');
  const commonT = useTranslations('common');
  const [type, setType] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling to ServicesByType

  const headers = [commonT('navigation.services.tailormade')];

  useEffect(() => {
    if (type && servicesRef.current) {
      // Ensure the scroll target is the correct position with an offset
      const offset = 120; // Adjust this for how much space you want above the target
      const elementPosition =
        servicesRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [type]);

  const MemoizedVideoBackground = memo(VideoBackground);

  return (
    <>
      <Head>
        <title>Tailormade Data Compliance Solutions | Customized GDPR & AI Act Services</title>
        <meta name="description" content="Get customized data compliance solutions tailored to your organization's needs. Our expert team delivers personalized GDPR, AI Act, and data protection services." />
        <meta name="keywords" content="tailormade compliance solutions, customized GDPR services, personalized data protection, AI Act compliance, data compliance consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.datacompliancecentre.com/tailormade-solutions" />
        <meta property="og:title" content="Tailormade Data Compliance Solutions | Customized GDPR & AI Act Services" />
        <meta property="og:description" content="Get customized data compliance solutions tailored to your organization's needs. Our expert team delivers personalized GDPR, AI Act, and data protection services." />
        <meta property="og:url" content="https://www.datacompliancecentre.com/tailormade-solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tailormade Data Compliance Solutions | Customized GDPR & AI Act Services" />
        <meta name="twitter:description" content="Get customized data compliance solutions tailored to your organization's needs. Our expert team delivers personalized GDPR, AI Act, and data protection services." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: 'Tailormade Data Compliance Solutions',
            description: 'Get customized data compliance solutions tailored to your organization\'s needs. Our expert team delivers personalized GDPR, AI Act, and data protection services.',
            url: 'https://www.datacompliancecentre.com/tailormade-solutions',
            publisher: {
              '@type': 'Organization',
              name: 'Nordic Data Compliance Center',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.datacompliancecentre.com/logoImages/9.png'
              }
            }
          })}
        </script>
      </Head>
      <div className='flex flex-cols justify-center gap-6'>
        {/* Video Background Section */}
        <div>
          <MemoizedVideoBackground
            videoUrl='./videos/video4.mp4'
            height='80vh'
            headers={headers}
          />

          {/* Main Content */}
          <div className='mt-[90vh]'>
            {/* Intro Section */}
            <div className='mb-20'>
              <TextImage
                reverse
                title={t('mixAndMatch.title')}
                text={[
                  t('mixAndMatch.text.0'),
                  t('mixAndMatch.text.1'),
                ]}
                imageUrl={mixAndMatch.imageUrl}
                imageAlt={t('mixAndMatch.title')}
              />
            </div>
            <Divider />
            <div className='mt-10 text-neutral-600 dark:text-white'>
              <h1 className='text-xl md:text-3xl pb-2 text-destructive font-bold text-center'>
                {t('tailormadeSolutions.buildFramework')}
              </h1>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold mt-5'>
                {t('tailormadeSolutions.step1')}
              </h2>
              <CompanyType setType={setType} />
            </div>
            <Divider />
            <div ref={servicesRef}>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
                {t('tailormadeSolutions.step2')}
              </h2>
              <TailoredServicesHeader />
            </div>
            <div className='mt-10 mb-20'>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
                {t('tailormadeSolutions.step3')}
              </h2>
            </div>

            {/* Dynamic Service Section */}
            <div>{type ? <ServicesByType type={type} /> : null}</div>
            <Divider />

            {/* Why Choose Section */}
            <h4 className='text-2xl font-semibold text-primary'>
              {t('tailormadeSolutions.whyChoose')}
            </h4>

            {/* Bullet Points */}
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary mt-10'>
              {[
                'effectiveSolution',
                'evolvingSolution',
                'skilledProfessionals',
                'businessContinuity',
                'rapidResponse',
                'easyCompliance',
              ].map((key, index) => (
                <li
                  key={key}
                  className={`flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 ${
                    index >= 2 ? 'pl-10' : ''
                  } ${index >= 4 ? 'pl-20' : ''}`}
                >
                  <span className='flex-shrink-0'>
                    <RightArrow height={24} width={24} />
                  </span>
                  {t(`tailormadeSolutions.benefits.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 