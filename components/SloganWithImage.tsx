'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const SloganWithImage = () => {
  return (
    <div className='flex w-full items-center justify-between  p-10'>
      {/* Slogan Container */}
      <div className='flex flex-col justify-center shadow-md shadow-slate-600 p-6 sm:flex sm:flex-col sm:space-y-8 text-left text-neutral-600  dark:text-white sm:w-1/2'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className='text-3xl font-bold tracking-tight '
        >
          Be ahead
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className='text-3xl font-bold tracking-tight '
        >
          Be secure
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className='text-3xl font-bold tracking-tight '
        >
          Be compliant
        </motion.h3>
      </div>

      {/* Image Container */}
      <div className='hidden sm:block relative w-1/2 h-96'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl opacity-50'></div>
        <Image
          src='/images/lighting.jpg'
          alt='Be ahead, be secure, be compliant slogan image'
          className='absolute inset-0 object-cover w-full h-full rounded-lg opacity-80 '
          fill
        />
      </div>
    </div>
  );
};

export default SloganWithImage;
