'use client';

import { itServices } from '@/utils/projects';
import React from 'react';
import TextImage from '../TextImage';
import { useTranslations } from 'next-intl';

const ItServices: React.FC = () => {
  const t = useTranslations('textImage');
  const servicesT = useTranslations('services.itServicesList');

  // Get services from translations
  const services = Array.from({ length: 14 }, (_, i) => 
    servicesT(`services.${i}`)
  );

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
          titleKey="itServices.title"
          textKeys={["itServices.text.0", "itServices.text.1"]}
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
