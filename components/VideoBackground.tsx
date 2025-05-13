'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
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
  const t = useTranslations('common.hero');
  const locale = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentHeaders, setCurrentHeaders] = useState(headers);

  // Update headers when locale changes
  useEffect(() => {
    setCurrentHeaders(headers);
    setVideoLoaded(false);
  }, [headers, locale]);

  const isMainHero = useMemo(
    () => currentHeaders.length === 3,
    [currentHeaders]
  );

  return (
    <div
      className='absolute inset-0 -z-10 w-full'
      style={{ height: `${height}`, top: '128px' }}
    >
      <div className='absolute inset-0 w-full h-full'>
        {!videoLoaded && (
          <div className='absolute top-0 left-0 w-full h-full object-cover'>
            <Cube />
          </div>
        )}
        <video
          key={`${locale}-${videoUrl}`}
          src={videoUrl}
          autoPlay
          muted
          loop
          controls={false}
          className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
          onLoadedData={() => setVideoLoaded(true)}
          preload='auto'
          playsInline
        />
      </div>

      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent dark:bg-gradient-to-b dark:from-accent dark:to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent dark:bg-gradient-to-t dark:from-accent dark:to-transparent'></div>
      </div>

      {currentHeaders.length === 1 ? (
        <div className='absolute inset-0 flex flex-col md:flex-row items-end justify-end px-8 pb-4'>
          <div key={`${currentHeaders[0]}-${locale}`} className='max-w-2xl'>
            <TextGenerateEffect
              className='text-4xl lg:text-5xl text-goldish font-bold pr-10'
              words={currentHeaders[0]}
              filter={true}
              duration={1.5}
            />
          </div>
        </div>
      ) : (
        <div className='absolute inset-0 flex flex-col justify-end md:flex-row items-end sm:justify-between px-2 sm:px-8 pb-4 gap-y-4'>
          <div className='flex flex-col gap-y-2 pr-10'>
            {currentHeaders.map((header, index) => {
              let size = 'text-2xl md:text-3xl lg:text-4xl';
              const paddingLeft = `${index * 10}px`;

              if (isMainHero) {
                size = 'text-xl md:text-2xl';
                if (index === 1) size = 'text-2xl md:text-3xl lg:text-4xl';
                if (index === 2) size = 'text-3xl md:text-4xl lg:text-5xl';
              }

              return (
                <div key={`${header}-${locale}-${index}`} className='max-w-2xl'>
                  <TextGenerateEffect
                    className={`${size} text-goldish font-bold`}
                    words={header}
                    filter={true}
                    duration={1.5}
                    paddingLeft={paddingLeft}
                  />
                </div>
              );
            })}
          </div>

          {isMainHero && (
            <div className='max-w-lg text-goldish text-medium md:text-lg lg:text-2xl font-semibold'>
              <p>{t('description')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
