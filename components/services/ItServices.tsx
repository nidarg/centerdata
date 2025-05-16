import { itServices } from '@/utils/projects';
import React from 'react';
import TextImage from '../TextImage';
import { useTranslations } from 'next-intl';

const ItServices: React.FC = () => {
  const t = useTranslations('common.textImage');
  const services = [
    'Python Backend Expert IT Analyst',
    '.NET/ C# Developer',
    'Java Developer with strong skills in AWS and DevOps',
    'Software Engineer',
    'Power Apps Developer',
    'Senior C++/Python Developer Software Engineer',
    'Senior QA with knowledge of GxP, GLP, and GCP',
    'KYC IT Developer in the Financial Industry',
    'Clojure Developer',
    'Network Technician who is in charge on Firewall',
    'Java/Spring Boot Developers',
    'Solution Architect (Financial)',
    'Network Security Engineer',
    'Expert IT Tester',
  ];

  // Function to split the services into chunks of four
  const chunkArray = (arr: string[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Divide services into chunks of 4 items each
  const serviceColumns = chunkArray(services, 5);

  return (
    <div>
      {/* Description */}
      <div className='mt-10'>
        <TextImage
          reverse
          title={t('itServices.title')}
          text={t.raw('itServices.text')}
          imageUrl={itServices.imageUrl}
        />
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 '>
        {serviceColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className='bg-background dark:bg-accent p-4 rounded-md shadow-md'
          >
            {column.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className='text-neutral-600 dark:text-white mb-2 last:mb-0'
              >
                {service}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItServices;
