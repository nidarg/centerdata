'use client';
import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

export const TextGenerateEffect = ({
  words,
  className,
  paddingLeft = '0px',
}: {
  words: string;
  className?: string;
  paddingLeft?: string;
}) => {
  const [scope] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to('.words', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      });
    }, scope);

    return () => ctx.revert();
  }, [scope]);

  return (
    <motion.div ref={scope} className={cn(`font-bold`, className)}>
      {words.split(' ').map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="words"
          style={{
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
