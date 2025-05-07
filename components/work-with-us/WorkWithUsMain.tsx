import React from 'react';
import { workWithUs } from '@/utils/workWithUs';
import WorkWithUscard from './WorkWithUscard';
// import { Button } from '../ui/button';
import Link from 'next/link';

function WorkWithUsMain() {
  return (
    <div className='flex flex-col justify-center'>
      <div>
        <div className='flex flex-col flex-wrap 2xl:flex-nowrap w-full justify-center gap-4 lg:gap-6  mx-auto  '>
          <h2 className='text-xl font-bold text-destructive text-center '>
            WHY WORK WITH US?
          </h2>
          <h2 className='text-4xl font-bold dark:text-white text-center '>
            Get Expert Solutions Here
          </h2>
        </div>
        <div className='flex flex-col flex-wrap sm:flex-row lg:flex-nowrap w-full justify-between gap-4 lg:gap-8 mb-6 mx-auto p-6 mt-10'>
          {workWithUs.map((why, index) => {
            return <WorkWithUscard key={index} why={why} />;
          })}
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 '>
          {/* Larger animation with proper scaling */}
          <span className='absolute  inset-[-150%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)] ' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive  text-md font-medium text-white backdrop-blur-3xl px-2 py-3 '>
            <Link href='/contact'>Book a consultation</Link>
          </span>
        </button>

        {/* <Button className="text-center mx-auto font-extrabold text-lg"  size="lg" variant='destructive' asChild>
              <Link href="/contact">Book a consultation</Link>
            </Button> */}
      </div>
    </div>
  );
}

export default WorkWithUsMain;
