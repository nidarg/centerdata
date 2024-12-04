'use client';

import { RightArrow } from '@/components/RightArrow';
import ItServices from '@/components/services/ItServices';
import TextImage from '@/components/TextImage';
import VideoBackground from '@/components/VideoBackground';
import { interimServices } from '@/utils/projects';
import Link from 'next/link';
// import Link from 'next/link';`
import React from 'react';

const headers = ['Interim Services'];

const InterimServices = () => {
  return (
    <div className='flex flex-cols justify-center gap-6'>
      <VideoBackground
        videoUrl='./videos/video2.mp4'
        height='80vh'
        headers={headers}
      />
      {/* <VideoBackground videoUrl="./videos/data-transmission.mp4" height="80vh" headers={headers} /> */}
      <div className='mt-[90vh]'>
        <TextImage
          reverse
          title={interimServices.title}
          text={interimServices.text}
          imageUrl={interimServices.imageUrl}
        />

        <div className=' bg-transparent text-primary space-y-8 mt-20'>
          {/* Title */}

          {/* Main Paragraph */}
          <p className='leading-relaxed text-lg  p-4 rounded-md text-neutral-600 dark:text-white border-primary border-l-2'>
            Our interim services:
          </p>
          <div className='mt-20'>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-primary'>
              <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                <RightArrow />
                Offer an effective solution to address expertise gaps
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                <RightArrow />
                Ensure operational continuity
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                <RightArrow />
                Support strategic goals on a temporary basis
              </li>
              <li className='flex items-center text-neutral-600 dark:text-white border-b py-2'>
                <RightArrow />
                Are a flexible and valuable asset across multiple sectors
              </li>
            </ul>
          </div>

          {/* Subsection: Data Protection Interim Services */}
          <h3 className='text-2xl font-semibold text-destructive mt-20'>
            Here’s how our interim data compliance consultants can make a
            difference
          </h3>

          <ul className='mt-4 grid gap-10 lg:grid-cols-3'>
            {[
              {
                title: 'Immediate compliance Support',
                description:
                  'We help companies reduce compliance risks quickly, addressing urgent needs such as e.g. data breach responses, risk assessments, and audits.',
              },
              {
                title: 'Policy Development and Documentation',
                description:
                  'We assist with creating and refining privacy policies, data handling procedures, and security documentation to align with regulatory standards. Companies gain the benefit of expertly crafted policies that not only comply with regulations but also fit impeccably within business operations.',
              },
              {
                title: 'Risk Assessment and Mitigation',
                description:
                  'Our Interim consultants perform data protection impact assessments (DPIAs), risk assessments, and gap analyses, identifying areas of vulnerability and recommending practical solutions. We are able to quickly identify, analyze, assess, challenge, monitor and report compliance risks. This proactive approach helps businesses protect sensitive information, reduce risks, and build stronger data management frameworks.',
              },
              {
                title: 'Training and Awareness Programs',
                description:
                  'Data protection consultants often design and deliver training for employees on topics like data protection, secure data handling, and breach prevention, fostering a culture of security awareness. Employees are better equipped to protect data, which reduces the risk of human error in data breaches or compliance failures.',
              },
              {
                title: 'Data Breach Response and Incident Management',
                description:
                  'Our consultants can lead or advise on data breach responses, ensuring swift and compliant handling of incidents. With highly experience in incident management, our consultants help business respond promptly and mitigate the impact of breaches, while ensuring timely regulatory notifications and transparency.',
              },
              {
                title:
                  'Support or hands-on for Data Protection and Security by Design',
                description:
                  'Interim consultants advise on integrating data protection principles from the ground up in new products, processes, and systems, following the “protection by design” approach. This proactive strategy minimizes risks and ensures data compliance is built into business processes and systems before deployment.',
              },
              {
                title: 'Audit Preparation and Documentation',
                description:
                  'Interim consultants advise on integrating data protection principles from the ground up in new products, processes, and systems, following the “protection by design” approach. This proactive strategy minimizes risks and ensures data compliance is built into business processes and systems before deployment.',
              },
              {
                title: 'Third-Party and Vendor Compliance Management',
                description:
                  'Our consultants evaluate third-party data practices, conduct vendor risk assessments, and ensure data protection clauses are integrated into contracts. Companies benefit from comprehensive vendor management practices, reducing risks associated with third-party data handling and demonstrating due diligence in data protection.',
              },
              {
                title: 'DPO (Data Protection Officer) Services',
                description:
                  'For organizations that require a DPO but lack an internal candidate, interim consultants can step in as a temporary DPO, providing guidance and fulfilling DPO responsibilities. Organizations meet regulatory requirements for DPOs while leveraging the consultant’s expertise without committing to a permanent hire. Our consultants can also be a support line for the in-house DPOs by providing the necessary extra expertise that in-house DPOs may need from time to time.',
              },
            ].map((item, index) => (
              <li
                key={index}
                className='flex flex-col space-y-2  gap-x-4  text-accent'
              >
                {/* Title */}
                <div className='flex items-start text-lg text-accent font-bold'>
                  <span>{item.title}</span>
                </div>

                {/* Description */}
                <p className='leading-relaxed text-neutral-600 dark:text-white bg-transparent rounded-md  text-justify'>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <ItServices />
          {/* Call to Action */}
          <div className='text-lg mt-4 text-neutral-600 dark:text-white'>
            Feel free to {' '}
            <Link href='/contact' className='text-primary underline'>
              contact us
            </Link>{' '}
            to discover how we can be of assistance
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterimServices;
