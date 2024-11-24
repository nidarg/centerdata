'use client';

import React from 'react';

import Image from 'next/image';
import './cube.css';

type CubeProps = {
  images: string[];
};

const Cube: React.FC<CubeProps> = () => {
  return (
    <div className='cube'>
      {/* Creating 6 divs for each face of the cube  */}

      <div className='box box1'>
        <Image
          src={'/images/Nordic_logo_square.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box2'>
        <Image
          src={'/images/Nordic_logo_square.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box3'>
        <Image
          src={'/images/Nordic_logo_square.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box4'>
        <Image
          src={'/images/Nordic_logo_square.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box5'>
        <Image
          src={'/images/Nordic_logo_square.png'}
          alt='Nordic_logo_square'
          width={160}
          height={160}
          className='object-cover w-full h-full rounded-md'
        />
      </div>

      <div className='box box6'>
        <Image
          src={'/images/Nordic_logo_square.png'}
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
