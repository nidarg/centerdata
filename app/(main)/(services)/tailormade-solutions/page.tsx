'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import ServicesByType from '@/components/services/ServicesByType';
import TailoredServicesHeader from '@/components/services/TailoredServicesHeader';
import VideoBackground from '@/components/VideoBackground';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
// import Link from 'next/link';
import Divider from '@/components/Divider';
import CompanyType from '@/components/CompanyType';
import { RightArrow } from '@/components/RightArrow';
import { mixAndMatch } from '@/utils/projects';
import TextImage from '@/components/TextImage';
import Head from "next/head";

const headers = ['GDPR mix and match'];

// Memoize VideoBackground to prevent unnecessary re-renders
const MemoizedVideoBackground = memo(VideoBackground);

function TailormadeSolutions() {
  const [type, setType] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling to ServicesByType

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

  return (
    <>

    <Head>
      <title>Tailormade GDPR Compliance Solutions for Start-ups & SMEs</title>
     <meta
          name="description"
          content="Discover our Tailormade Solutions designed for Start-ups, Micro, and SME businesses to build a flexible data compliance framework at their own pace."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.datacompliancecentre.com/tailormade-solutions" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Tailormade GDPR Compliance Solutions" />
        <meta property="og:description" content="Tailormade GDPR compliance solutions for Start-ups, Micro, and SMEs to help them build a personalized compliance framework." />
        <meta property="og:image" content="/path/to/og-image.jpg" /> {/* Use a relevant image */}
        <meta property="og:url" content="https://www.datacompliancecentre.com/tailormade-solutions" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tailormade GDPR Compliance Solutions" />
        <meta name="twitter:description" content="Tailormade GDPR compliance solutions for Start-ups, Micro, and SMEs to help them build a personalized compliance framework." />
        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "Tailormade GDPR Compliance Solutions",
            "description": "Tailormade GDPR compliance solutions for Start-ups, Micro, and SMEs to help them build a personalized compliance framework.",
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
          title={mixAndMatch.title}
          text={mixAndMatch.text}
          imageUrl={mixAndMatch.imageUrl}
        />
         
          </div>
          <Divider />
          <div className='mt-10 text-neutral-600 dark:text-white'>
            <h1 className='text-xl md:text-3xl pb-2 text-destructive font-bold text-center'>
              Build your own framework in just 3 steps
            </h1>
            <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold mt-5'>
              1. Choose level
            </h2>
            <CompanyType setType={setType} />
           
          </div>
          <Divider />
          <div ref={servicesRef}>
            <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
              2. Choose plan
            </h2>
            <TailoredServicesHeader />
          
          </div>
          {/* <Divider /> */}
          <div className='mt-10 mb-20'>
            <h2 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
              3. GDPR Mix and Match modules 
            </h2>
           
          </div>

          {/* Service Selector */}

          {/* Dynamic Service Section */}
          <div >
            {type ? <ServicesByType type={type} /> : null}
          </div>
          <Divider />

          {/* Subtitle */}
          <h4 className='text-2xl font-semibold text-primary'>
            Why choose this solution?
          </h4>

          {/* Bullet Points */}
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary mt-10'>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Effective, Transparent and Trustworthy solution
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              A solution that evolves in line with current legal developments,
              case law, regulatory guidelines, and global frameworks
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Availability of skilled professionals integrated as part of your organization
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Ensures business continuity
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Rapid response to time sensitive issues such as data breach and
              complaints from individuals
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Maintaining your compliance is now made easy
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default TailormadeSolutions;
