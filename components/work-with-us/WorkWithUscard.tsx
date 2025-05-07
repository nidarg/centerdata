import { workWithUs } from '@/utils/workWithUs';
import Image from 'next/image';
import React from 'react';

function WorkWithUscard({ why }: { why: workWithUs }) {
  return (
    <div className='flex flex-col justify-center shadow-md shadow-slate-600 p-6 sm:flex sm:flex-col sm:space-y-8 text-center text-neutral-600  dark:text-white max-w-sm hover:-translate-y-1 hover:shadow-primary duration-200'>
      <Image
      title={why.title}
        alt={why.description}
        src={why.icon}
        width={40} // specify the desired width
        height={40}
        className='w-10 h-10 mx-auto mb-3 sm:mb-1'
      />
      <div className='w-full min-w-72'>
      <h2 className='text-xl text-primary pb-1'>{why.title}</h2>
      <p className='text-md pb-4'>{why.description}</p>
      </div>
     
    </div>
  );
}

export default WorkWithUscard;
