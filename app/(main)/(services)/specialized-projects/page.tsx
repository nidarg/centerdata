'use client';

import Link from 'next/link';
import React from 'react';
import { RightArrow } from '@/components/RightArrow';
import VideoBackground from '@/components/VideoBackground';
import TextImage from '@/components/TextImage';
import { specializedProjects, aiActProjects } from '@/utils/projects';
import Divider from '@/components/Divider';

const headers = ['Specialized Projects'];

const SpecializedProjects = () => {
  return (
    <div className='flex flex-cols justify-center gap-6'>
      <VideoBackground
        videoUrl='./videos/video3.mp4'
        height='80vh'
        headers={headers}
      />
      {/* <VideoBackground videoUrl="./videos/infographic.mp4" height="80vh" headers={headers} /> */}
      <div className='mt-[90vh]'>
        <TextImage
          reverse
          title={specializedProjects.title}
          text={specializedProjects.text}
          imageUrl={specializedProjects.imageUrl}
        />

        <Divider />

        <div className=' bg-transparent text-foreground  '>
          <h1 className='text-2xl font-bold text-destructive text-center '>
            {' '}
            We can run the project for you or team up with you to:
          </h1>
          <div className='mt-10'>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-foreground '>
              <li className='flex items-center text-neutral-600 dark:text-white border-b py-2 '>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                Proactively strengthen the overall approach to data compliance
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 '>
                <span className='flex-shrink-0'>
                  <RightArrow />
                </span>
                Reduce risks
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                Build trust with users and stakeholders
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10 '>
                <span className='flex-shrink-0'>
                  <RightArrow />
                </span>
                Achieve certification
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                <RightArrow height={24} width={24} />
                Develop robust and sustainable information security practices
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
                <span className='flex-shrink-0'>
                  <RightArrow height={24} width={24} />
                </span>
                Create a culture of continuous improvement and ensure resilience
                against emerging threats
              </li>
            </ul>
          </div>
          <Divider />

          <TextImage
            title={aiActProjects.title}
            text={aiActProjects.text}
            imageUrl={aiActProjects.imageUrl}
          />

          <Divider />

          {/* Subtitle */}
          <h3 className='text-2xl font-semibold text-primary'>
            How Can We Add Value to Your Company?
          </h3>

          {/* Bullet Points */}
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary mt-10'>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Access to highly qualified professionals to assist with your
              project either as project managers or integrated team members.
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              A customized framework designed specifically for your business and
              industry.
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              A pragmatic approach to address the risks and gaps of any
              organization in any sector.
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-10'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Hands-on solutions that ensure ongoing compliance and business
              continuity.
            </li>
            <li className='flex items-center text-neutral-600 dark:text-white border-b border-gradient-to-r from-destructive to-accent py-2 pl-20'>
              <span className='flex-shrink-0'>
                <RightArrow height={24} width={24} />
              </span>
              Pragmatic, transparent and trustworthy solutions.
            </li>
          </ul>

          {/* Call to Action */}
          <div className='flex justify-center w-full mt-10'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 '>
              {/* Larger animation with proper scaling */}
              <span className='absolute  inset-[-150%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)] ' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive  text-md font-medium text-white backdrop-blur-3xl px-2 py-3 '>
                <Link href='/contact'>Book a consultation</Link>
              </span>
            </button>

            {/* <Button className="text-center mx-auto font-extrabold text-lg"  size="lg" variant='destructive' asChild>
              <Link href="/contact">Book a consultation</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedProjects;
