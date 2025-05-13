'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

interface ProductCardProps {
  type: 'startup' | 'micro' | 'sme';
}

const HeaderCard: React.FC<ProductCardProps> = ({ type }) => {
  const t = useTranslations('common.companyTypes');

  // Background classes for both themes
  const bgClass = {
    startup: 'bg-bgLight text-neutral-900 dark:bg-teal-700 dark:text-white',
    micro: 'bg-background text-neutral-900 dark:bg-teal-800 dark:text-white',
    sme: 'bg-bgDark text-neutral-900 dark:bg-teal-900 dark:text-white',
  }[type];

  // Font Size Mapping for the h2
  const fontSizeClass = {
    startup: 'text-2xl',
    micro: 'text-3xl',
    sme: 'text-4xl',
  }[type];

  return (
    <div
      className={`relative overflow-hidden shadow-lg lg:min-w-[250px] hover:scale-105 hover:z-20 transition-all duration-500 ease-in-out ${bgClass}`}
    >
      {/* Content */}
      <div className='relative z-10 p-1 flex flex-col justify-evenly min-h-[300px]'>
        <h2 className={`font-bold text-goldish ${fontSizeClass}`}>
          {t(`${type}.title`)}
        </h2>
        <ul className='space-y-2 text-lg'>
          {Array.from({ length: 6 }, (_, i) => i).map((index) => (
            <li key={index} className='flex items-center text-md'>
              <span className='bg-primary h-2 w-2 mr-2'></span>
              {t(`${type}.details.${index}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderCard;

