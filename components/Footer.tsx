// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-transparent text-neutral-900 dark:text-white border-t border-gray-500 mt-20 py-6">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-x-10 text-left ">
        
        {/* Column 1: Company Info */}
        <div className="space-y-2 mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold">Nordic Data Compliance Centre ApS</h2>
          <p>Maglebjergvej 6, 2800 Kongens Lyngby</p>
          <p>Denmark</p>
          <p>VAT DK 44251434</p>
        </div>

          {/* Column 2: Services */}
          <div className="space-y-2 mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold">Our Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/specialized-projects" className="hover:underline">
                Specialized Projects
              </Link>
            </li>
            <li>
              <Link href="/interim-services" className="hover:underline">
              Interim Services
              </Link>
            </li>
            <li>
              <Link href="/tailormade-solutions" className="hover:underline">
              Tailormade solutions for Start-ups, Micro abd SMEs
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 3: Insurance */}
        <div className="space-y-2 mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold">Insurance</h2>
          <p className="leading-relaxed">
            All our Consultants are covered by professional indemnity insurance that protects the consultancy services.
          </p>
        </div>
        
        {/* Column 4: Links */}
        <div className="space-y-2 mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Statement
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
              Terms and conditions of use and sale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
