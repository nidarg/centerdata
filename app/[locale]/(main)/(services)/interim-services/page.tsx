'use client';

import Divider from '@/components/Divider';
import { RightArrow } from '@/components/RightArrow';
import ItServices from '@/components/services/ItServices';
import TextImage from '@/components/TextImage';
import VideoBackground from '@/components/VideoBackground';
import { interimServices } from '@/utils/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import Link from 'next/link';`
import React, { memo } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useTranslations } from 'next-intl';

const headers = ['Interim Services'];

const InterimServices = () => {
  const t = useTranslations('common.services.interimServices');
  const getT = (key: string, fallback: string) => {
    try {
      return t(key);
    } catch {
      return fallback;
    }
  };

  const items = [
    {
      title: getT('items.immediateSupport.title', 'Immediate compliance Support'),
      description: getT('items.immediateSupport.description', 'We help companies reduce compliance risks quickly, addressing urgent needs such as data breach responses, risk assessments, and audits.'),
    },
    {
      title: getT('items.policyDevelopment.title', 'Policy Development and Documentation'),
      description: getT('items.policyDevelopment.description', 'We assist with creating and refining privacy policies, data handling procedures, and security documentation to align with regulatory standards.'),
    },
    {
      title: getT('items.riskAssessment.title', 'Risk Assessment and Mitigation'),
      description: getT('items.riskAssessment.description', 'Our Interim consultants perform data protection impact assessments (DPIAs), risk assessments, and gap analyses.'),
    },
    {
      title: getT('items.training.title', 'Training and Awareness Programs'),
      description: getT('items.training.description', 'Data protection consultants often design and deliver training for employees on topics like data protection and breach prevention.'),
    },
    {
      title: getT('items.dataBreach.title', 'Data Breach Response and Incident Management'),
      description: getT('items.dataBreach.description', 'Our consultants can lead or advise on data breach responses, ensuring swift and compliant handling of incidents.'),
    },
    {
      title: getT('items.securityByDesign.title', 'Support or hands-on for Data Protection and Security by Design'),
      description: getT('items.securityByDesign.description', 'Interim consultants advise on integrating data protection principles from the ground up in new products, processes, and systems.'),
    },
    {
      title: getT('items.auditPreparation.title', 'Audit Preparation and Documentation'),
      description: getT('items.auditPreparation.description', 'Interim consultants help with creating or refining privacy policies and ensuring alignment with regulatory standards.'),
    },
    {
      title: getT('items.vendorCompliance.title', 'Third-Party and Vendor Compliance Management'),
      description: getT('items.vendorCompliance.description', 'Our consultants evaluate third-party data practices, conduct vendor risk assessments, and ensure data protection clauses are integrated into contracts.'),
    },
    {
      title: getT('items.dpoServices.title', 'DPO (Data Protection Officer) Services'),
      description: getT('items.dpoServices.description', 'For organizations that require a DPO but lack an internal candidate, interim consultants can step in as a temporary DPO.'),
    },
  ];

  const valuePoints = [
    getT('valuePoints.expertiseGaps', 'Offer an effective solution to address expertise gaps'),
    getT('valuePoints.operationalContinuity', 'Ensure operational continuity'),
    getT('valuePoints.strategicGoals', 'Support strategic goals on a temporary basis'),
    getT('valuePoints.flexibleAsset', 'Are a flexible and valuable asset across multiple sectors'),
    getT('valuePoints.experiencedProfessionals', 'Highly experienced professionals with expertise from various sectors, assigned to work as an integrated part of your team'),
    getT('valuePoints.quickOnboarding', 'Quick onboarding and a very smooth hand-over back to you, upon the completion of the term'),
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Controls the delay between each item's animation
      },
    },
  };

  const itemVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: custom % 2 === 0 ? 50 : -50, // Randomize initial direction (up or down)
      x: custom % 2 === 0 ? 30 : -30, // Randomize initial direction (left or right)
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Discover our Interim Data Compliance Services. We offer immediate support for compliance, risk assessments, policy development, DPO services, and more.'
        />
        <meta
          name='keywords'
          content='GDPR interim services, temporary DPO, data protection support, compliance consulting, privacy consultant'
        />
        <link
          rel='canonical'
          href='https://www.datacompliancecentre.com/interim-services'
        />
      </Head>

      <Script
        id='interim-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Interim Data Protection Consulting',
            provider: {
              '@type': 'Organization',
              name: 'Nordic Data Compliance Centre',
              url: 'https://www.datacompliancecentre.com',
              logo: 'https://www.datacompliancecentre.com/logoImages/9.png',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Denmark',
            },
            description:
              'Our Interim Data Protection and GDPR Services provide immediate compliance support, policy development, DPIAs, DPO services, and breach response.',
            url: 'https://www.datacompliancecentre.com/interim-services',
          }),
        }}
      />

      <main className='flex flex-cols justify-center gap-6'>
        {/* <VideoBackground
        videoUrl='./videos/video2.mp4'
        height='80vh'
        headers={headers}
      /> */}
        <VideoBackground
          videoUrl='./videos/data-transmission.mp4'
          height='80vh'
          headers={headers}
        />

        <div className='mt-[90vh]'>
          <TextImage
            reverse
            title={t(interimServices.title)}
            text={t.raw(interimServices.text)}
            imageUrl={interimServices.imageUrl}
          />
          <Divider />

          <div className=' bg-transparent text-primary  mt-20'>
            {/* Title */}

            {/* Main Paragraph */}
            <h1 className='text-2xl font-semibold '>
              {getT('howCanWeAddValue', 'How Can We Add Value to Your Company?')}
            </h1>
            <div className='mt-10'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary'>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[0]}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[1]}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[2]}
                </li>
                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-10'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[3]}
                </li>

                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-20'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[4]}
                </li>

                <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 pl-20'>
                  <span className='flex-shrink-0'>
                    <RightArrow />
                  </span>
                  {valuePoints[5]}
                </li>
              </ul>
            </div>
            <Divider />

            {/* Subsection: Data Protection Interim Services */}
            <div className='bg-transparent text-primary mt-20'>
              <h3 className='text-2xl font-semibold text-destructive mb-10'>
                {getT('makeDifference', "Here's how our interim data compliance consultants can make a difference")}
              </h3>
              <motion.div
                className='grid gap-10 lg:grid-cols-3'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    className='relative flex flex-col space-y-2 text-accent p-4 rounded-lg shadow-lg bg-background dark:bg-accent overflow-hidden group'
                    custom={index}
                    variants={itemVariants}
                  >
                    {/* Hover Animated Border */}
                    <div className='absolute inset-0 pointer-events-none'>
                      {/* Top border */}
                      <motion.div className='absolute h-[2px] bg-goldish top-0 left-0 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out' />
                      {/* Bottom border */}
                      <motion.div className='absolute h-[2px] bg-goldish bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out' />
                      {/* Left border */}
                      <motion.div className='absolute w-[2px] bg-goldish top-0 left-0 h-full scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-in-out' />
                      {/* Right border */}
                      <motion.div className='absolute w-[2px] bg-goldish top-0 right-0 h-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out' />
                    </div>

                    {/* Title */}
                    <div className='flex items-start text-lg text-goldish font-bold'>
                      <span>{item.title}</span>
                    </div>

                    {/* Description */}
                    <p className='leading-relaxed text-neutral-600 dark:text-white text-justify'>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Divider />
            <ItServices />
            {/* Call to Action */}
            <div className='flex justify-center w-full mt-10'>
              <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 '>
                {/* Larger animation with proper scaling */}
                <span className='absolute  inset-[-150%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)] ' />
                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive  text-md font-medium text-white backdrop-blur-3xl px-2 py-3 '>
                  <Link href='/contact'>{getT('bookConsultation', 'Book a consultation')}</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default InterimServices;
