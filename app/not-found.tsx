'use client';

import React, { useEffect, useRef }  from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound ()  {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Play the video at half speed
    }
  }, []);
  return (
    <div className=" flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
      ref={videoRef}
        autoPlay
        muted
        loop
     
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/notFound.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
          Page Not Found
        </h1>
        <Button 
  className="mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] text-white"  // Adjust width as needed
  
  asChild 
  variant="default"
>
  <Link
    className='bg-primary text-white} flex justify-center items-center'
    href={'/'}
  >
    <span className="text-lg md:text-xl">Back Home</span>
  </Link>
</Button>
      </div>
    </div>
  );
};


