
import React from 'react';

const ItServices: React.FC = () => {
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
    <div >
      {/* Title */}
      <h1 className="text-destructive text-2xl font-bold mb-4">
        Nearshore IT Interim Services
      </h1>

      {/* Description */}
      <div className="space-y-2">
        <p className="leading-relaxed text-neutral-600 dark:text-white bg-background rounded-md  text-justify">
          Nearshore IT interim services such as e.g. developers, testers, and supporters for temporary solutions.
        </p>
        <p className="leading-relaxed text-neutral-600 dark:text-white bg-background rounded-md  text-justify">
          We provide high-level IT expertise to businesses in need of immediate support to fill short-term gaps, manage projects, or steer IT strategy during transitions.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        {serviceColumns.map((column, colIndex) => (
          <div key={colIndex} className="bg-accent p-4 rounded-md shadow-md">
            {column.map((service, serviceIndex) => (
              <div key={serviceIndex} className="text-white mb-2 last:mb-0">
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
