'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  paddingLeft = '0px',
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  paddingLeft?: string; // Accept paddingLeft as a string
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Reset the animation state
    animate(
      'span',
      {
        opacity: 0,
        filter: filter ? 'blur(10px)' : 'none',
      },
      {
        duration: 0,
      }
    );

    // Run the animation
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [words, scope.current, animate, duration, filter]); // Add words to dependencies

  return (
    <motion.div ref={scope} className={cn(`font-bold`, className)}>
      {words.split(' ').map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          // className='inline-block' // Ensure each word is a separate block
          style={{
            filter: filter ? 'blur(10px)' : 'none',
            opacity: 0,
            paddingLeft: idx === 0 ? paddingLeft : '0px',
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );
};
