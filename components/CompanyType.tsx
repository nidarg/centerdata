import React, { useState } from 'react';
import HeaderCard from './card/HeaderCard';

const CompanyType = ({ setType }: { setType: (type: string) => void }) => {
  const [activeType, setActiveType] = useState<string | null>(null); // Track active type

  const handleClick = (type: string) => {
    setActiveType(type); // Set the active type
    setType(type); // Call parent callback
  };

  return (
    <div className='w-full mt-10'>
      {/* Header Card Column for START-UP, MICRO, SME */}
      <div className='w-full flex flex-col md:flex-row gap-6 '>
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg pt-2 text-white  ${
            activeType === 'startup'
              ? 'shadow-primary shadow-xl text-destructive '
              : 'shadow-lg shadow-neutral-700 '
          }`}
          onClick={() => handleClick('startup')}
        >
          <HeaderCard type='startup' />
        </div>
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg pt-2 ${
            activeType === 'micro'
              ? 'shadow-primary shadow-lg text-destructive '
              : 'shadow-lg shadow-neutral-700'
          }`}
          onClick={() => handleClick('micro')}
        >
          <HeaderCard type='micro' />
        </div>
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg pt-2 ${
            activeType === 'sme'
              ? 'shadow-primary shadow-lg text-destructive '
              : 'shadow-lg shadow-neutral-700'
          }`}
          onClick={() => handleClick('sme')}
        >
          <HeaderCard type='sme' />
        </div>
      </div>
    </div>
  );
};

export default CompanyType;
