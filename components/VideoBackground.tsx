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
      className="absolute inset-0 -z-10 w-full"
      style={{ height: `${height}`, top: '128px' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!videoLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-white text-lg">Loading video...</p>
          </div>
        )}
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          preload="auto"
        />
      </div>

      {/* Fade Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end pb-60 pl-48 gap-y-3">
        {headers.map((header) => (
          <div key={header} className="text-center max-w-2xl">
            <TextGenerateEffect
              className="text-lg lg:text-4xl md:text-2xl text-destructive font-bold"
              words={header}
              filter={true}
              duration={2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBackground;
