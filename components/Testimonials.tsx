'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { testimonials } from '@/utils/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 }); // Trigger animation every time it’s in view
  const controls = useAnimation(); // Manages animation controls

  useEffect(() => {
    if (isInView) {
      controls.start('visible'); // Start animation when in view
    } else {
      controls.start('hidden'); // Reset when out of view
    }
  }, [isInView, controls]);

  return (
    <div ref={containerRef} className=" w-full overflow-hidden mt-20">
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0.9, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-3xl font-semibold text-center text-destructive mb-12"
      >
        Client Success Stories
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { rotateY: -40, scale: 0.9 },
          visible: { rotateY: 0, scale: 1 },
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 rounded-xl shadow-lg  "
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md  border  border-primary flex flex-col justify-between"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            
            <div className="flex items-center text-neutral-700 dark:text-neutral-300 pt-10 pb-10">
              <Quote className="w-10 h-10 mr-2 text-destructive" />
              <p className="text-md italic">{testimonial.description}</p>
            </div>
            <div className="mt-4">
              {/* <p className="text-neutral-800 dark:text-neutral-100 font-semibold">{testimonial.name}</p>
              <p className="text-primary font-semibold text-sm">{testimonial.company}</p> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
