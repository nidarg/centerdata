'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ServiceCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string[];
  imageUrl: string;
}) {
  const t = useTranslations('common.mainServices');

  // Add error handling for translation
  let tryNowText;
  try {
    tryNowText = t('tryNow');
  } catch (error) {
    console.error('Error loading translation for tryNow:', error);
    tryNowText = 'Try now'; // Fallback text
  }

  return (
    <CardContainer className='inter-var'>
      <CardBody className='shadow-slate-600 shadow-md hover:shadow-xl hover:shadow-slate-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
        {/* Card Title */}
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-700 dark:text-white'
        >
          {title}
        </CardItem>

        {/* Card Description */}
        {description.map((desc: string, index: number) => {
          return (
            <CardItem
              key={index}
              as='div'
              translateZ='60'
              className='text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              {title === 'Interim Services'?(
                <div className='flex gap-3'>
                    <Check/>{' '} {desc}
                </div>
                
                ):desc}
            </CardItem>
          );
        })}

        {/* Image */}
        <CardItem translateZ='100' className='w-full mt-4'>
          <Image
            src={imageUrl}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-2xl '
            alt={title}
          />
        </CardItem>

        {/* Action Button */}
        <div className='flex justify-between items-center mt-20'>
          <CardItem
            translateZ={20}
            as='p'
            className='px-4 py-2 rounded-xl text-xs font-semibold text-destructive cursor-pointer'
          >
            {tryNowText} →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
