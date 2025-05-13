'use client';

import Link from 'next/link';
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { useTranslations } from 'next-intl';

function ServiceCardMain() {
  const t = useTranslations('common.mainServices');

  const services = [
    {
      key: 'specialized',
      href: '/specialized-projects',
      imageUrl: '/images/technology.jpg',
    },
    {
      key: 'interim',
      href: '/interim-services',
      imageUrl: '/images/dataProtection.jpg',
    },
    {
      key: 'tailormade',
      href: '/tailormade-solutions',
      imageUrl: '/images/evatopictures/tailoredSolutions.jpg',
    },
  ];

  return (
    <div className='container'>
      <h1 className='text-4xl font-bold text-destructive text-center mt-20 mb-10'>
        {t('title')}
      </h1>
      <div className='flex flex-col flex-wrap lg:flex-row 2xl:flex-nowrap w-full justify-center gap-6 lg:gap-8 '>
        {services.map((service, index) => (
          <div key={index}>
            <Link href={service.href}>
              <ServiceCard
                title={t(`services.${service.key}.title`)}
                description={t.raw(`services.${service.key}.description`)}
                imageUrl={service.imageUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCardMain;
