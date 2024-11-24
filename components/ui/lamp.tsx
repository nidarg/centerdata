'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary w-full rounded-md z-0',
        className
      )}
    >
      <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
        {/* Gradient Lamp Effect - Left */}
        <motion.div
          initial={{ opacity: 0.3, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center, cyan, transparent, #00ffcc 60%)`,
          }}
          className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white z-10'
        >
          {/* Masking divs to create fade effects */}
          <div className='absolute  w-[100%] left-0 bg-primaryh-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  w-40 h-[100%] left-0 bg-slate-600 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>

        {/* Gradient Lamp Effect - Right */}
        <motion.div
          initial={{ opacity: 0.3, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center, #00ffcc, transparent, cyan 60%)`,
          }}
          className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white z-10'
        >
          {/* Masking divs to create fade effects */}
          <div className='absolute w-40 h-[100%] right-0 bg-gray-900 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute w-[100%] right-0 bg-gray-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>

        {/* Center Blur and Gradient Overlays */}
        <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gray-900 blur-2xl'></div>
        <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>

        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
        ></motion.div>

        {/* Bottom Gradient Line */}
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 '
        ></motion.div>

        <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-primary'></div>
      </div>

      <div className='relative z-50 flex -translate-y-60 flex-col items-center px-5'>
        {children}
      </div>
    </div>
  );
};

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         'relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0',
//         className
//       )}
//     >
//       <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
//         {/* Left Gradient Lamp Effect */}
//         <motion.div
//           initial={{ opacity: 0.5, width: '15rem' }}
//           whileInView={{ opacity: 1, width: '30rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           style={{
//             backgroundImage: `conic-gradient(from 70deg at center top, cyan, transparent, #00ffcc 60%)`,
//           }}
//           className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white'
//         >
//           {/* Masking Divs */}
//           <div
//             className='absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20'
//             style={{ maskImage: 'linear-gradient(to top, white, transparent)' }}
//           />
//           <div
//             className='absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20'
//             style={{
//               maskImage: 'linear-gradient(to right, white, transparent)',
//             }}
//           />
//         </motion.div>

//         {/* Right Gradient Lamp Effect */}
//         <motion.div
//           initial={{ opacity: 0.5, width: '15rem' }}
//           whileInView={{ opacity: 1, width: '30rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           style={{
//             backgroundImage: `conic-gradient(from 290deg at center top, #00ffcc, transparent, cyan 60%)`,
//           }}
//           className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white'
//         >
//           <div
//             className='absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20'
//             style={{
//               maskImage: 'linear-gradient(to left, white, transparent)',
//             }}
//           />
//           <div
//             className='absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20'
//             style={{ maskImage: 'linear-gradient(to top, white, transparent)' }}
//           />
//         </motion.div>

//         {/* Center Blur and Gradient Overlays */}
//         <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl'></div>
//         <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
//         <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>

//         {/* Smaller Blurred Circle */}
//         <motion.div
//           initial={{ width: '8rem' }}
//           whileInView={{ width: '16rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
//         ></motion.div>

//         {/* Bottom Gradient Line */}
//         <motion.div
//           initial={{ width: '15rem' }}
//           whileInView={{ width: '30rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 '
//         ></motion.div>

//         {/* Bottom Section Background */}
//         <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950'></div>
//       </div>

//       <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
//         {children}
//       </div>
//     </div>
//   );
// };

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         'relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0',
//         className
//       )}
//     >
//       <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
//         {/* Unified Gradient Lamp Effect */}
//         <motion.div
//           initial={{ opacity: 0.5, width: '15rem' }}
//           whileInView={{ opacity: 1, width: '30rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           style={{
//             backgroundImage: `conic-gradient(from 180deg at center, cyan, transparent, #00ffcc 60%)`,
//           }}
//           className='absolute inset-auto h-56 overflow-visible w-[30rem] bg-gradient-conic text-white'
//         >
//           {/* Masking divs to create fade effects */}
//           <div
//             className='absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20'
//             style={{ maskImage: 'linear-gradient(to top, white, transparent)' }}
//           />
//           <div
//             className='absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20'
//             style={{
//               maskImage: 'linear-gradient(to right, white, transparent)',
//             }}
//           />
//           <div
//             className='absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20'
//             style={{
//               maskImage: 'linear-gradient(to left, white, transparent)',
//             }}
//           />
//         </motion.div>

//         {/* Center Blur and Gradient Overlays */}
//         <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl'></div>
//         <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
//         <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>

//         {/* Smaller Blurred Circle */}
//         <motion.div
//           initial={{ width: '8rem' }}
//           whileInView={{ width: '16rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
//         ></motion.div>

//         {/* Bottom Gradient Line */}
//         <motion.div
//           initial={{ width: '15rem' }}
//           whileInView={{ width: '30rem' }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 '
//         ></motion.div>

//         {/* Bottom Section Background */}
//         <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950'></div>
//       </div>

//       <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
//         {children}
//       </div>
//     </div>
//   );
// };

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         'relative flex h-[50vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0',
//         className
//       )}
//     >
//       {/* Triangle Lamp Effect */}
//       <motion.div
//         initial={{ scaleY: 0.1 }}
//         animate={{ scaleY: 1 }}
//         transition={{
//           delay: 0.3,
//           duration: 1.5,
//           ease: 'easeInOut',
//         }}
//         style={{
//           backgroundImage: `linear-gradient(to bottom, rgba(0, 255, 204, 0.8), transparent)`,
//           clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
//         }}
//         className='absolute top-0 h-full w-full bg-cyan-500'
//       ></motion.div>

//       {/* Content */}
//       <div className='relative z-50 flex flex-col items-center px-5'>
//         {children}
//       </div>
//     </div>
//   );
// };

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         'relative flex h-[50vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0',
//         className
//       )}
//     >
//       {/* Lamp Effect expanding horizontally */}
//       <motion.div
//         initial={{ scaleX: 0.1 }}
//         whileInView={{ scaleX: 1 }}
//         transition={{
//           delay: 0.8,
//           duration: 1,
//           ease: 'easeInOut',
//         }}
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(0, 255, 204, 0.8), transparent)`,
//           clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//           transformOrigin: 'left', // Start animation from the left
//         }}
//         className='absolute top-0 left-0 h-full w-full bg-cyan-500'
//       ></motion.div>

//       {/* Content (children) */}
//       <div className='relative z-50 flex flex-col items-center px-5'>
//         {children}
//       </div>
//     </div>
//   );
// };
