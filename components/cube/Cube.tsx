'use client';

import React from 'react';

import Image from 'next/image';
import './cube.css';

// type CubeProps = {
//   images: string[];
// };

const Cube: React.FC = () => {
  return (
    <div className='cube'>
      {/* Creating 6 divs for each face of the cube  */}

      <div className='box box1 bg-teal-700'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box2 bg-teal-800'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box3 bg-teal-900'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box4 bg-teal-700'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box5 bg-teal-800'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box6 bg-teal-900'>
        <Image
          src={'/logoImages/9.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>
    </div>
  );
};

export default Cube;
