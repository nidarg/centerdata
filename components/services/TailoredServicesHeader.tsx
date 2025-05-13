'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCartContext } from '@/utils/context/CartContext';
import { useTranslations } from 'next-intl';

const TailoredServices = () => {
  const { setSelectCounter, totalModules } = useCartContext();
  const t = useTranslations('common.plans');

  const handleSelect = (count: number) => {
    setSelectCounter(count);
  };

  const plans = [
    { 
      title: t('light.title'), 
      modules: 5, 
      bgColor: 'bg-bgLight text-neutral-900 dark:bg-teal-700 dark:text-white',
      description: t('light.description', { modules: 5 })
    },
    { 
      title: t('pro.title'), 
      modules: 10, 
      bgColor: 'bg-background text-neutral-900 dark:bg-teal-800 dark:text-white',
      description: t('pro.description', { modules: 10 })
    },
    { 
      title: t('premium.title'), 
      modules: totalModules, 
      bgColor: 'bg-bgDark text-neutral-900 dark:bg-teal-900 dark:text-white',
      description: t('premium.description')
    }
  ];

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10'>
        {/* LIGHT, PRO, PREMIUM and MIX AND MATCH for SMALL screens */}
        <div className='lg:hidden flex flex-col space-y-4'>
          {plans.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bgColor} text-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between min-h-[250px] cursor-pointer`}
              onClick={() => handleSelect(item.modules)}
              whileHover={{ scale: 0.95, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <h2 className='font-bold text-lg text-goldish'>{item.title}</h2>
              <p className='text-sm bg-accent text-white rounded-md px-2 py-1'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHT, PRO, PREMIUM on LG Screens */}
      <div className='hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10 w-full max-w-none'>
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.bgColor} rounded-lg shadow-md flex flex-col justify-center min-h-[80px] cursor-pointer`}
            onClick={() => handleSelect(item.modules)}
            whileHover={{ scale: 0.95, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.2 }}
          >
            <h2 className='font-bold text-2xl text-goldish'>{item.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* MIX AND MATCH Columns for LG */}
      <div className='hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10 w-full max-w-none'>
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.bgColor} text-white rounded-lg shadow-md p-4 lg:h-full lg:flex lg:flex-col lg:justify-center min-h-[250px] cursor-pointer`}
            onClick={() => handleSelect(item.modules)}
            whileHover={{ scale: 0.95, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.2 }}
          >
            <h2 className='font-bold text-xl text-goldish'>
              {item.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default TailoredServices;


