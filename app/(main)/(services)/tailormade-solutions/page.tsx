'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import ServicesByType from '@/components/services/ServicesByType';
import TailoredServicesHeader from '@/components/services/TailoredServicesHeader';
import VideoBackground from '@/components/VideoBackground';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Link from 'next/link';
import Divider from '@/components/Divider';
import CompanyType from '@/components/CompanyType';

const headers = ['Tailored solutions for Start-up, Micro and SME'];
// const words1 = 'Are you a Start-up, Micro or an SME?';
// const words2 = 'Choose between Light, Pro or Premium.';
const words3 =
  'Once you’ve chosen the wanted modules you can add them to your cart. When you are ready submit your inquiry for price.';
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
    <div className='flex flex-cols justify-center gap-6'>
      {/* Video Background Section */}
      <div>
        <MemoizedVideoBackground
          videoUrl='./videos/video4.mp4'
          height='80vh'
          headers={headers}
        />
        {/* <MemoizedVideoBackground
          videoUrl="./videos/data-transfer.mp4"
          height="80vh"
          headers={headers}
        /> */}

        {/* Main Content */}
        <div className='mt-[90vh]'>
          {/* Intro Section */}
          <div className='mb-20'>
            <h1 className='text-xl md:text-2xl pb-2 text-destructive font-bold'>
              Mix and Match
            </h1>
            <p className='leading-relaxed text-lg p-4 rounded-md text-neutral-600 dark:text-white border-primary border-l-2'>
              This solution is designed for Start-up, Micro, and SME businesses,
              offering tailored solutions that enable these companies to build
              their own data compliance framework at their own pace. It is
              aligned with their unique needs and flexible enough to grow
              alongside their business.
            </p>
            <p className='leading-relaxed text-lg p-4 rounded-md text-neutral-600 dark:text-white border-primary border-r-2'>
              When you choose this solution, we work as an{' '}
              <span className='text-destructive text-xl font-semibold'>
                integrated part of your team.
              </span>
            </p>
          </div>
          <Divider />
          <div className='mt-10 text-neutral-600 dark:text-white'>
            <h1 className='text-xl md:text-2xl pb-2 text-destructive font-bold text-center'>
              Build your own framework in just 3 steps
            </h1>
            <h1 className='text-lg md:text-xl pb-2 text-destructive font-bold mt-5'>
              1. Choose your level!
            </h1>
            <CompanyType setType={setType} />
            {/* <TextGenerateEffect
              words={words1}
              filter={false}
              className='text-neutral-600 dark:text-white'
            /> */}
          </div>
          <Divider />
          <div>
            <h1 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
              2. Find the right plan!
            </h1>
            <TailoredServicesHeader />
            {/* <TextGenerateEffect
              words={words2}
              filter={false}
              className='text-neutral-600 dark:text-white'
            /> */}
          </div>
          <Divider />
          <div className='mt-10 mb-20'>
            <h1 className='text-lg md:text-xl pb-2 text-destructive font-bold'>
              3. Mix and match modules and add them to your subscription
            </h1>
            <TextGenerateEffect
              words={words3}
              filter={false}
              className=' text-lg text-neutral-600 dark:text-white'
            />
            <div className='text-lg mt-4 text-neutral-600 dark:text-white'>
              You can find more information in our{' '}
              <Link
                href='/terms-and-conditions'
                className='text-primary underline'
              >
                terms and conditions.
              </Link>
            </div>
          </div>

          {/* Service Selector */}

          {/* Dynamic Service Section */}
          <div ref={servicesRef}>
            {type ? <ServicesByType type={type} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailormadeSolutions;
