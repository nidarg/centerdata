// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { RightArrow } from '@/components/RightArrow';

const Footer = () => {
  return (
    // <footer className='bg-transparent text-neutral-900 dark:text-white text-sm border-t border-gray-500 mt-20 py-6'>
    //   <div className='container  grid grid-cols-1 md:grid-cols-6 gap-x-10 text-left  '>
    //     {/* Column 1: Company Info */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //       <h2 className='text-lg font-semibold text-goldish'>
    //         Nordic Data Compliance Centre ApS
    //       </h2>
    //       <p>Maglebjergvej 6 </p>
    //       <p>2800 Kongens Lyngby</p>
    //       <p>Denmark</p>
    //       <p>VAT DK 44251434</p>
    //     </div>

    //     {/* Column 2: Services */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //       <h2 className='text-lg font-semibold text-goldish'>Our Services</h2>
    //       <ul className='space-y-2'>
    //         <li>
    //           <Link href='/specialized-projects' className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             Specialized Projects
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href='/interim-services' className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             Interim Services
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href='/tailormade-solutions' className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             GDPR Mix and Match for Start-ups, Micro abd SMEs
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Column 3: Associate program */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //     <h2 className='text-lg font-semibold text-goldish'>
    //         <Link href='/associate-programm' className='hover:underline'>
    //           Associate-program
    //         </Link>
    //       </h2>
    //       <p>
    //         Joining our associate program means becoming part of a collaborative
    //         network dedicated to advancing data compliance services.
    //       </p>
    //     </div>
    //     {/* Column 4: Insurance */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //       <h2 className='text-lg font-semibold text-goldish'>Insurance</h2>
    //       <p className='leading-relaxed'>
    //         All our Consultants are covered by professional indemnity insurance
    //         that protects the consultancy services.
    //       </p>
    //     </div>

    //     {/* Column 5: Links */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //       <h2 className='text-lg font-semibold text-goldish'>Legal</h2>
    //       <ul className='space-y-2'>
    //         <li>
    //           <Link href='/privacy' className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             Privacy Statement
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href='/terms-and-conditions' className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             Terms of Use
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* column 6: meet CEO */}
    //     <div className='space-y-2 mb-6 sm:mb-0'>
    //       <h2 className='text-lg font-semibold text-goldish'>Meet our CEO</h2>
    //       <ul className='space-y-2'>
    //         <li>
    //           <a href='https://olganielsen.com/' target="_blank"  className='hover:underline flex items-start'>
    //           <span className='flex-shrink-0'>
    //           <RightArrow height={16} width={16} className='mr-1' />
    //           </span>
    //             olganielsen.com 
    //           </a>
    //         </li>
            
    //       </ul>
    //     </div>
    //   </div>
    // </footer>


    <footer className="bg-transparent text-neutral-900 dark:text-white text-sm border-t border-gray-500 mt-20 py-6">
  <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-6 text-left items-start">
    {/* Column 1: Company Info */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">Nordic Data Compliance Centre ApS</h2>
      <p>Maglebjergvej 6</p>
      <p>2800 Kongens Lyngby</p>
      <p>Denmark</p>
      <p>VAT DK 44251434</p>
    </div>

    {/* Column 2: Services */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">Our Services</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/specialized-projects" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            Specialized Projects
          </Link>
        </li>
        <li>
          <Link href="/interim-services" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            Interim Services
          </Link>
        </li>
        <li>
          <Link href="/tailormade-solutions" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            GDPR Mix and Match for Start-ups, Micro and SMEs
          </Link>
        </li>
      </ul>
    </div>

    {/* Column 3: Associate Program */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">
        <Link href="/associate-programm" className="hover:underline">
          Associate Program
        </Link>
      </h2>
      <p>Joining our associate program means becoming part of a collaborative network dedicated to advancing data compliance services.</p>
    </div>

    {/* Column 4: Insurance */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">Insurance</h2>
      <p className="leading-relaxed">
        All our Consultants are covered by professional indemnity insurance that protects the consultancy services.
      </p>
    </div>

    {/* Column 5: Legal */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">Legal</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/privacy" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            Privacy Statement
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            Terms of Use
          </Link>
        </li>
      </ul>
    </div>

    {/* Column 6: Meet CEO */}
    <div className="space-y-2 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-goldish">Meet our CEO</h2>
      <ul className="space-y-2">
        <li>
          <a href="https://olganielsen.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-start">
            <RightArrow height={16} width={16} className="mr-1" />
            olganielsen.com
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
