
'use client';

import React from 'react';

const AditionalServices: React.FC = () => {
  const additionalServices = [
    'Data Compliance Maturity Assessment',
    'Online onboarding',
    'Support - email and phone',
    'Virtual Data compliance status to management every 3 months',
  ];

  return (
    <section className="mb-10 mt-20">
      {/* Header */}
      <div className='min-h-20'>
      <h2 className="text-xl font-bold  text-center ">
        ADDITIONAL SERVICES AND SUPPORT WITH NO EXTRA COST
      </h2>
      </div>
     

      {/* Modal Style Card */}
      <div className="space-y-4">
        {additionalServices.map((service, index) => (
          <div
            key={index}
            className=" bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 min-h-40 flex items-center justify-between"
          >
             <h3 className="text-lg font-semibold text-gray-200">{service}</h3>
             </div>
        ))}
      </div>
    </section>
  );
};

export default AditionalServices;
