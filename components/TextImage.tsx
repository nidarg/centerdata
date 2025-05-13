'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ResponsiveTextImageProps {
  titleKey: string;
  subtitleKey?: string;
  textKeys: string | string[];
  imageUrl: string;
  reverse?: boolean;
  namespace?: string;
}

export const TextImage: React.FC<ResponsiveTextImageProps> = ({
  titleKey,
  textKeys,
  subtitleKey,
  imageUrl,
  reverse = false,
  namespace = 'common.textImage',
}) => {
  const t = useTranslations(namespace);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      className={`flex flex-col items-center w-full lg:mx-auto lg:flex-row  ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: reverse ? 50 : -50 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Image container */}
      <motion.div
        className='flex min-h-96 w-full lg:w-1/2 relative sm:h-96 lg:h-[450px]'
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { scale: 0.9, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={imageUrl}
          title={titleKey}
          alt={Array.isArray(textKeys) ? textKeys.join(', ') : textKeys}
          fill
          className={`${
            reverse
              ? 'sm:rounded-r-lg sm:rounded-l-none'
              : 'sm:rounded-l-lg sm:rounded-r-none'
          } `}
        />
      </motion.div>

      {/* Text container */}
      <motion.div
        className={`flex flex-col justify-center w-full lg:w-1/2 text-center md:text-left text-neutral-600 dark:text-white  p-4 leading-relaxed h-fit min-h-96sm:h-96 lg:h-[450px] bg-background dark:bg-neutral-900 shadow-md shadow-slate-900 ${
          reverse
            ? 'rounded-l-lg rounded-r-none'
            : 'rounded-r-lg rounded-l-none'
        }`}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: reverse ? -50 : 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className='text-xl md:text-2xl pb-2 pt-4 text-goldish font-bold'>
          {t(titleKey)}
        </h2>
        {subtitleKey && (
          <h2 className='text-lg md:text-xl pb-2'>{t(subtitleKey)}</h2>
        )}
        {Array.isArray(textKeys) ? (
          textKeys.map((key, index) => (
            <p key={index} className='text-md mb-2'>
              {t(key)}
            </p>
          ))
        ) : (
          <p className='text-md'>{t(textKeys)}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TextImage;
