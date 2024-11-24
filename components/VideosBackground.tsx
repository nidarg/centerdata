'use client';
import React, { useEffect, useState, useRef } from 'react';

interface VideoBackgroundProps {
  videoUrls: string[];
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Ref array to store video elements

  // Handle video change when one video ends
  const handleVideoEnd = () => {
    // Move to the next video in the sequence, wrapping around if necessary
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  // Preload all video elements on mount
  useEffect(() => {
    // Start playing the first video immediately when the component mounts
    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex]!.play();
    }
  }, [currentVideoIndex]);

  return (
    <>
      <div
        className='absolute  inset-0 -z-10 w-full '
        style={{ height: 'calc(100vh - 128px)', top: '128px' }}
      >
        <div className='absolute inset-0 -z-10 w-full h-full'>
          {/* Map through videoUrls and create video elements */}
          {videoUrls.map((videoUrl, index) => (
            <div key={index} className='w-full h-full'>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }} // Proper ref mutation
                src={videoUrl}
                autoPlay
                muted
                loop={false} // Enable looping for each video
                onEnded={handleVideoEnd} // When a video ends, switch to the next
                className={`absolute top-0 left-0 w-full h-full object-cover filter transition-opacity duration-500 ${
                  index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                }`} // Fade in/out based on current video index
              />
              <div className='absolute inset-0 bg-sky-800 bg-opacity-20'></div>

              {/* Fade Effect */}

              <div className='absolute inset-0 pointer-events-auto'>
                <div className='absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent'></div>

                <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent'></div>
              </div>
            </div>
          ))}

          {/* Text Overlay */}
          <div className='absolute inset-0 top-3/4 right-1/3 '>
            <div className='pb-10 pl-10 flex flex-col max-w-2xl'>
              <h1 className='text-lg text-left lg:text-4xl md:text-2xl  text-white font-bold'>
                Be ahead, Be secure, Be compliant.
              </h1>
              {/* <p className='hidden text-white sm:block lg:text-lg sm:text-sm font-semibold'>

          </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;

// 'use client';

// import React, { useEffect, useState, useRef } from 'react';

// interface VideoBackgroundProps {
//   videoUrls: string[];
// }

// const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrls }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

//   const handleVideoEnd = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
//   };

//   useEffect(() => {
//     if (videoRefs.current[currentVideoIndex]) {
//       videoRefs.current[currentVideoIndex]!.play();
//     }
//   }, [currentVideoIndex]);

//   return (
//     <div
//       className='inset-0 -z-10 w-full h-full'
//       style={{ height: `calc(100vh - 128px)` }}
//     >
//       {/* Video */}
//       <div className='absolute inset-0 -z-10 w-full h-full'>
//         {videoUrls.map((videoUrl, index) => (
//           <video
//             key={index}
//             ref={(el) => {
//               videoRefs.current[index] = el;
//             }}
//             src={videoUrl}
//             autoPlay
//             muted
//             loop={false}
//             onEnded={handleVideoEnd}
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
//               index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//         <div className='absolute inset-0 bg-indigo-800 bg-opacity-40'></div>
//       </div>

//       {/* Fade Effect */}
//       <div className='absolute inset-0 pointer-events-none'>
//         <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent'></div>
//         <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent'></div>
//       </div>

//       {/* Text Overlay */}
//       <div className='absolute inset-0 flex items-center justify-center'>
//         <div className='text-center max-w-2xl'>
//           <h1 className='text-lg lg:text-4xl md:text-2xl text-white font-bold'>
//             Be ahead, Be secure, Be compliant.
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;
