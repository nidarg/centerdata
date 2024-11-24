'use client';

import Link from 'next/link';
import React from 'react';
import { RightArrow } from '@/components/RightArrow';
import VideoBackground from '@/components/VideoBackground';
import TextImage from '@/components/TextImage';
import { specializedProjects, aiActProjects } from '@/utils/projects';

const headers = ['Specialized Projects'];

const SpecializedProjects = () => {
  return (
    <div >
      <VideoBackground videoUrl="./videos/video3.mp4" height="80vh" headers={headers} />
      {/* <VideoBackground videoUrl="./videos/infographic.mp4" height="80vh" headers={headers} /> */}
      <div className="mt-[90vh]">
        <TextImage
          reverse
          title={specializedProjects.title}
          text={specializedProjects.text}
          imageUrl={specializedProjects.imageUrl}
        />
      </div>

     
      <div className=" bg-transparent text-primary space-y-8 mt-8">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary">
          <li className="flex items-center text-neutral-600 dark:text-white border-b py-2">
            <RightArrow />
            Proactively strengthen the overall approach to data compliance
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Reduce risks
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Build trust with users and stakeholders
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Achieve certification
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Develop robust and sustainable information security practices
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Create a culture of continuous improvement and ensure resilience against emerging threats
          </li>
        </ul>
        <div  className="mt-20">
        <TextImage
         
          title={aiActProjects.title}
          text={aiActProjects.text}
          imageUrl={aiActProjects.imageUrl}
        />
        </div>

       

       

        {/* Subtitle */}
        <h3 className="text-2xl font-semibold pt-10">How Can We Add Value to Your Company?</h3>

        {/* Bullet Points */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary">
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Navigate and comply with specialized regulatory frameworks
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Minimize regulatory risks
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Enhance operational resilience
          </li>
          <li className="flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2">
            <RightArrow />
            Build robust governance structures
          </li>
        </ul>

        {/* Call to Action */}
        <div className="text-lg mt-4 text-neutral-600 dark:text-white">
          Feel free to{' '}
          <Link href="/contact" className="text-primary underline">
            contact us
          </Link>{' '}
          to discover how we can be of assistance.
        </div>
      </div>
    </div>
  );
};

export default SpecializedProjects;
