'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl'; // ONLY ADDED THIS IMPORT

type RemainingSelectionsCounterProps = {
  remainingSelections: number;
};

const RemainingSelectionsCounter: React.FC<RemainingSelectionsCounterProps> = ({
  remainingSelections,
}) => {
  const [currentRemaining, setCurrentRemaining] = useState(remainingSelections);
  const [prevRemaining, setPrevRemaining] = useState(remainingSelections);
  const router = useRouter();
  const t = useTranslations('common.cart.counter'); // ONLY ADDED THIS LINE

  useEffect(() => {
    if (remainingSelections === 0) {
      const timer = setTimeout(() => {
        router.push('/checkout');
      }, 2000); // 2 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [remainingSelections]);

  // Detect when remainingSelections changes and update the current and previous remaining numbers
  useEffect(() => {
    if (remainingSelections !== currentRemaining) {
      setPrevRemaining(currentRemaining); // Set the previous number
      setCurrentRemaining(remainingSelections); // Set the current number
    }
  }, [remainingSelections, currentRemaining]);

  const digitsCurrent = currentRemaining.toString().split('');
  const digitsPrev = prevRemaining.toString().split('');

  return (
    <div className='fixed  bottom-4 left-4 z-50 text-nutral-900 bg-background text-center dark:text-white p-4 dark:bg-teal-700 rounded-lg shadow-md w-1/8 lg:w-1/6 mx-auto rounded-xl border-2 border-bgDark'>
      {remainingSelections > 0 ? (
        <div className=' text-sm lg:text-lg flex lg:flex-col items-center justify-center '>
          <span>
            {t('youCanAdd')} <span> </span>
          </span>
          <span className='font-bold text-2xl inline-block relative px-4'>
            {/* Container for the rotating number cylinder */}
            <div className='relative overflow-hidden inline-block'>
              {/* Animate the transition of current and previous digits */}
              <div className='relative'>
                <motion.div
                  className='flex items-center justify-center'
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -90 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Previous numbers (animated upwards) */}
                  {digitsPrev.map((digit, index) => (
                    <motion.div
                      key={`prev-${digit}-${index}`} // Ensure uniqueness with 'prev' and index
                      className='inline-block'
                      initial={{ y: 0 }}
                      animate={{ y: -100 }}
                      exit={{ y: -100 }}
                      transition={{
                        duration: 1.2,
                        ease: 'easeInOut',
                      }}
                    >
                      {digit}
                    </motion.div>
                  ))}

                  {/* Current numbers (animated downwards) */}
                  {digitsCurrent.map((digit, index) => (
                    <motion.div
                      key={`current-${digit}-${index}`} // Ensure uniqueness with 'current' and index
                      className='inline-block'
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      exit={{ y: 100 }}
                      transition={{
                        duration: 1.2,
                        ease: 'easeInOut',
                      }}
                    >
                      {digit}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </span>
          <span> </span> {t('moreModules')}.
        </div>
      ) : (
        <div className='text-primary text-2xl'>{t('getQuotation')}</div>
      )}
    </div>
  );
};

export default RemainingSelectionsCounter;
