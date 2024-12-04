'use client';

import React, { useState } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';

interface VideoBackgroundProps {
  videoUrl: string;
  height: string;
  headers: string[];
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  height,
  headers,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div
      className='absolute inset-0 -z-10 w-full'
      style={{ height: `${height}`, top: '128px' }}
    >
      {/* Video Background */}
      <div className='absolute inset-0 w-full h-full'>
        {!videoLoaded && (
          <div className='absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center'>
            <p className='text-white text-lg'>Loading video...</p>
          </div>
        )}
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className='absolute top-0 left-0 w-full h-full object-cover'
          onLoadedData={() => setVideoLoaded(true)}
          preload='auto'
        />
      </div>

      {/* Fade Effect */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent'></div>
      </div>

      {/* Text Overlay */}
      <div className='absolute inset-0 flex flex-col md:flex-row items-center justify-between px-12'>
        {/* Left Text Section */}
        <div className='flex flex-col gap-y-2'>
          {headers.map((header, index) => {
            let size = 'text-3xl lg:text-4xl';
            const paddingLeft = `${index * 10}px`;
            if (headers[0] === 'BE AHEAD.') {
              size = 'text-2xl'; // Default size
              if (index === 1) size = 'text-3xl lg:text-4xl'; // BE SECURE.
              if (index === 2) size = 'text-4xl lg:text-5xl'; // BE COMPLIANT.
            }
            // Calculate margin-right dynamically

            return (
              <div key={header} className='max-w-2xl'>
                <TextGenerateEffect
                  // Correctly pass style here
                  className={`${size} text-goldish font-bold `}
                  words={header}
                  filter={true}
                  duration={1.5}
                  paddingLeft={paddingLeft}
                />
              </div>
            );
          })}
        </div>

        {/* Right Text Section */}
        {headers[0] === 'BE AHEAD.' && (
          <div className='max-w-lg  text-goldish text-md lg:text-xl font-semibold'>
            <p>
              With a practical mindset, we address even the most challenging
              data compliance issues by combining strategic planning with
              actionable, hands-on solutions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoBackground;
