'use client';

import React from 'react';

const TailoredServices = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10'>
        {/* LIGHT, PRO, PREMIUM and MIX AND MATCH for SMALL screens */}
        <div className='lg:hidden flex flex-col space-y-4'>
          <div className='bg-teal-500 text-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between min-h-[250px]'>
            <h2 className='font-bold text-lg text-goldish'>LIGHT</h2>
            <p className='text-sm bg-accent text-white rounded-md px-2 py-1'>
              MIX AND MATCH UP TO 5 MODULES
            </p>
          </div>
          <div className='bg-teal-600 text-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between min-h-[250px]'>
            <h2 className='font-bold text-lg text-goldish'>PRO</h2>
            <p className='text-sm bg-accent text-white rounded-md px-2 py-1'>
              MIX AND MATCH UP TO 10 MODULES
            </p>
          </div>
          <div className='bg-teal-800 text-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between min-h-[250px]'>
            <h2 className='font-bold text-lg text-goldish'>PREMIUM</h2>
            <p className='text-sm bg-accent text-white rounded-md px-2 py-1'>
              ALL MODULES
            </p>
          </div>
        </div>
      </div>

      {/* LIGHT, PRO, PREMIUM on LG Screens */}
      <div className='hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10 w-full max-w-none'>
        <div className=' bg-teal-500 rounded-lg shadow-md  flex flex-col justify-center max-h-[80px]'>
          <h2 className='font-bold text-2xl text-goldish'>LIGHT</h2>
        </div>
        <div className=' bg-teal-600 rounded-lg shadow-md p-4 flex items-center justify-center max-h-[80px]'>
          <h2 className='font-bold text-2xl text-goldish'>PRO</h2>
        </div>
        <div className=' bg-teal-800 rounded-lg shadow-md p-4 flex items-center justify-center max-h-[80px]'>
          <h2 className='font-bold text-2xl text-goldish'>PREMIUM</h2>
        </div>
      </div>

      {/* MIX AND MATCH Columns for LG */}
      <div className='hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-1 text-center mt-10 w-full max-w-none'>
        <div className='bg-teal-500 text-white rounded-lg shadow-md p-4 lg:h-full lg:flex lg:flex-col lg:justify-center min-h-[250px]'>
          <h2 className='font-bold text-xl text-goldish'>
            MIX AND MATCH UP TO 5 MODULES
          </h2>
        </div>
        <div className='bg-teal-600 text-white rounded-lg shadow-md p-4 lg:h-full lg:flex lg:flex-col lg:justify-center min-h-[250px]'>
          <h2 className='font-bold text-xl text-goldish'>
            MIX AND MATCH UP TO 10 MODULES
          </h2>
        </div>
        <div className='bg-teal-800 text-white rounded-lg shadow-md p-4 lg:h-full lg:flex lg:flex-col lg:justify-center min-h-[250px]'>
          <h2 className='font-bold text-xl text-goldish'>ALL MODULES</h2>
        </div>
      </div>
    </>
  );
};

export default TailoredServices;
