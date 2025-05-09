'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { RightArrow } from '@/components/RightArrow';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className='bg-transparent text-neutral-900 dark:text-white text-sm border-t border-gray-500 mt-20 py-6'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-6 text-left items-start'>
        {/* Column 1: Company Info */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            {t('company.name')}
          </h2>
          <p>{t('company.address.street')}</p>
          <p>{t('company.address.city')}</p>
          <p>{t('company.address.country')}</p>
          <p>{t('company.address.vat')}</p>
        </div>

        {/* Column 2: Services */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            {t('services.title')}
          </h2>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/specialized-projects'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('services.items.specialized')}
              </Link>
            </li>
            <li>
              <Link
                href='/interim-services'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('services.items.interim')}
              </Link>
            </li>
            <li>
              <Link
                href='/tailormade-solutions'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('services.items.tailormade')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Associate Program */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            <Link href='/associate-programm' className='hover:underline'>
              {t('associate.title')}
            </Link>
          </h2>
          <p>{t('associate.description')}</p>
        </div>

        {/* Column 4: Insurance */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            {t('insurance.title')}
          </h2>
          <p className='leading-relaxed'>{t('insurance.description')}</p>
        </div>

        {/* Column 5: Legal */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            {t('legal.title')}
          </h2>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/privacy'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('legal.items.privacy')}
              </Link>
            </li>
            <li>
              <Link
                href='/terms-and-conditions'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('legal.items.terms')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 6: Meet CEO */}
        <div className='space-y-2 h-full flex flex-col'>
          <h2 className='text-lg font-semibold text-goldish'>
            {t('ceo.title')}
          </h2>
          <ul className='space-y-2'>
            <li>
              <a
                href='https://olganielsen.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline flex items-start'
              >
                <RightArrow height={16} width={16} className='mr-1' />
                {t('ceo.website')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
