'use client';

// import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

function TestimonialCard() {
  const t = useTranslations('common.testimonials');
  
  //   title,
  //   description,
  // }: {
  //   title: string;
  //   description: string[];
  // }) {
  //   return (
  //     <div className='p-4 text-white'>
  //       <h1 className='text-3xl text-center mb-2 font-bold'>{title}</h1>
  //       {description.map((desc, index) => {
  //         return (
  //           <p key={index} className='text-lg'>
  //             {desc}
  //           </p>
  //         );
  //       })}
  //     </div>
  //   );
  return <h2>{t('title')}</h2>;
}

export default TestimonialCard;
