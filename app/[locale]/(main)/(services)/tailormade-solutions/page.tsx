'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import ServicesByType from '@/components/services/ServicesByType';
import TailoredServicesHeader from '@/components/services/TailoredServicesHeader';
import VideoBackground from '@/components/VideoBackground';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Link from 'next/link';
import Divider from '@/components/Divider';
import CompanyType from '@/components/CompanyType';
import { RightArrow } from '@/components/RightArrow';
import { mixAndMatch } from '@/utils/projects';
import TextImage from '@/components/TextImage';
import Head from "next/head";
import { useTranslations } from 'next-intl';
import Script from 'next/script';

const TailormadeSolutions = () => {
  const t = useTranslations('common');
  const commonT = useTranslations('common');
  const metaT = useTranslations('common.meta');
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
        <title>{metaT('tailormadeSolutions.title')}</title>
        <meta
          name="description"
          content={metaT('tailormadeSolutions.description')}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.datacompliancecentre.com/tailormade-solutions" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content={metaT('tailormadeSolutions.ogTitle')} />
        <meta property="og:description" content={metaT('tailormadeSolutions.ogDescription')} />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.datacompliancecentre.com/tailormade-solutions" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaT('tailormadeSolutions.twitterTitle')} />
        <meta name="twitter:description" content={metaT('tailormadeSolutions.twitterDescription')} />
        
        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "${metaT('tailormadeSolutions.schemaHeadline')}",
            "description": "${metaT('tailormadeSolutions.schemaDescription')}",
            "url": "https://www.datacompliancecentre.com/tailormade-solutions",
            "mainEntityOfPage": "https://www.datacompliancecentre.com/tailormade-solutions"
          }
          `}
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
          {/* <MemoizedVideoBackground
            videoUrl="./videos/tailormade.mp4"
            height="80vh"
            headers={headers}
          /> */}

          {/* Main Content */}
          <div className='mt-[90vh]'>
            {/* Intro Section */}
            <div className='mb-20'>
              <TextImage
                reverse
                titleKey="mixAndMatch.title"
                textKeys={["mixAndMatch.text.0", "mixAndMatch.text.1"]}
                imageUrl={mixAndMatch.imageUrl}
              />
            </div>
            <Divider />
            <div className='mt-10 text-neutral-600 dark:text-white'>
              <h1 className='text-xl md:text-3xl pb-2 text-destructive font-bold text-center'>
                {t('textImage.tailormadeSolutions.buildFramework')}
              </h1>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold mt-5'>
                {t('textImage.tailormadeSolutions.step1')}
              </h2>
              <CompanyType setType={setType} />
            </div>
            <Divider />
            <div ref={servicesRef}>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
                {t('textImage.tailormadeSolutions.step2')}
              </h2>
              <TailoredServicesHeader />
            </div>
            <div className='mt-10 mb-20'>
              <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
                {t('textImage.tailormadeSolutions.step3')}
              </h2>
            </div>

            {/* Dynamic Service Section */}
            <div>
              {type ? <ServicesByType type={type} /> : null}
            </div>
            <Divider />

            {/* Why Choose Section */}
            <h4 className='text-2xl font-semibold text-primary'>
              {t('textImage.tailormadeSolutions.whyChoose')}
            </h4>

            {/* Bullet Points */}
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary mt-10'>
              {[
                'effectiveSolution',
                'evolvingSolution',
                'skilledProfessionals',
                'businessContinuity',
                'rapidResponse',
                'easyCompliance'
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
                  {t(`textImage.tailormadeSolutions.benefits.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailormadeSolutions;
