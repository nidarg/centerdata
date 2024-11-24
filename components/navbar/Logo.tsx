'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  imageUrl: string;
}

const Logo: React.FC<LogoProps> = ({ imageUrl }) => {
  return (
    <div>
      <Link href='/'>
        <Image
          width={350}
          height={350}
          src={imageUrl}
          alt='Logo'
          className=' object-contain'
        />
      </Link>
    </div>
  );
};

export default Logo;
