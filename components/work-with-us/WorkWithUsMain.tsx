import React from 'react';
import { workWithUs } from '@/utils/workWithUs';
import WorkWithUscard from './WorkWithUscard';
import { Button } from '../ui/button';
import Link from 'next/link';

function WorkWithUsMain() {
  return (
    <div className='flex flex-col justify-center'>

          <div>
            <div className='flex flex-col flex-wrap 2xl:flex-nowrap w-full justify-center gap-4 lg:gap-6  mx-auto p-6 '>
            <h1 className='text-xl font-bold text-destructive text-center mt-20'>
              WHY WORK WITH US?
            </h1>
            <h1 className='text-4xl font-bold dark:text-white text-center mt-10'>
              Get Expert Solutions Here
            </h1>
            </div>
            <div className='flex flex-col flex-wrap sm:flex-row lg:flex-nowrap w-full justify-between gap-4 lg:gap-8 mb-6 mx-auto p-6 mt-10'>
              {workWithUs.map((why, index) => {
                return <WorkWithUscard key={index} why={why} />;
              })}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button className="text-center mx-auto font-extrabold text-lg"  size="lg" variant='destructive' asChild>
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </div>

         
    </div>
    
   
  );
}

export default WorkWithUsMain;
