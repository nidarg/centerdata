'use client';

import React, { useState } from 'react';

import { TextGenerateEffect } from './ui/text-generate-effect';
import Cube from './cube/Cube';


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
        {!videoLoaded && 
       
        <div className='absolute top-0 left-0 w-full h-full object-cover'>
          {/* <p>loading ... </p> */}
          <Cube/>
        </div>   
        }
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          controls={false} // Make sure controls are disabled
          className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
          onLoadedData={() => setVideoLoaded(true)}
          preload='auto'
          playsInline // Ensures it doesn’t go fullscreen 
        />
      </div>

      {/* Fade Effect */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent dark:bg-gradient-to-b dark:from-accent dark:to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent dark:bg-gradient-to-t dark:from-accent dark:to-transparent'></div>
      </div>

      {/* Text Overlay */}
      {headers.length === 1 ? (
        <div className='absolute inset-0 flex flex-col md:flex-row items-end justify-end px-8 pb-4'>
          <div key={headers[0]} className='max-w-2xl'>
                <TextGenerateEffect
                  // Correctly pass style here
                  className={`text-4xl lg:text-5xl text-goldish font-bold pr-10`}
                  words={headers[0]}
                  filter={true}
                  duration={1.5}
                  
                />
              </div>
          </div>
      ):(

        <div className='absolute inset-0 flex flex-col justify-end md:flex-row items-end sm:justify-between px-2 sm:px-8 pb-4 gap-y-4'>
        {/* Left Text Section */}
        <div className='flex flex-col gap-y-2 pr-10'>
          {headers.map((header, index) => {
            let size = 'text-2xl md:text-3xl lg:text-4xl';
            const paddingLeft = `${index * 10}px`;
            if (headers[0] === 'BE AHEAD.') {
              size = 'text-xl md:text-2xl'; // Default size
              if (index === 1) size = 'text-2xl md:text-3xl lg:text-4xl'; // BE SECURE.
              if (index === 2) size = 'text-3xl md:text-4xl lg:text-5xl'; // BE COMPLIANT.
            }
            // Calculate margin-right dynamically

            return (
              <div key={header} className='max-w-2xl'>
                <TextGenerateEffect
                  // Correctly pass style here
                  className={`${size} text-goldish font-bold` }
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
          <div className='max-w-lg  text-goldish text-medium md:text-lg lg:text-2xl font-semibold'>
            <p>
              With a practical mindset, we address even the most challenging
              data compliance issues by combining strategic planning with
              actionable, hands-on solutions.
            </p>
          </div>
        )}
      </div>
      )}
      
    </div>
  );
};

export default VideoBackground;



