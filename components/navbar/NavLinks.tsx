
'use client';

import { links, servicesLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

function NavLinks() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      {links.map((link) => {
         const isActive = pathname === link.href 
         const isServiceActive =  servicesLinks.includes(pathname);

        if (link.href === '/services') {
          return (
            <DropdownMenu
              key={link.href}
              open={openDropdown}
              onOpenChange={setOpenDropdown}
            >
              <DropdownMenuTrigger asChild>
                {/* <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                    Border Magic
                  </span>
                </button> */}

                <Button
                  className={`relative mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] ${
                    isServiceActive ? 'text-destructive border border-destructive font-bold' : ''
                  }`}
                  variant='outline'
                  size='lg'
                  asChild
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <Link  href='#'>
                    <span className='text-xl'>{link.label}</span>
                  </Link>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className='lg:w-96 md:w-72 w-full p-2' // Full width on mobile, fixed width on large screens
                align='start'
                sideOffset={10}
                onPointerLeave={() => setOpenDropdown(false)}
              >
                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer w-full text-primary'
                >
                  <Button
                    className='w-full text-left lg:text-center lg:inline-block block whitespace-normal break-words ' // Block on mobile, inline on lg
                    variant='outline'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/specialized-projects'>
                      Specialized projects
                    </Link>
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer w-full'
                >
                  <Button
                    className='w-full text-left lg:text-center  lg:inline-block block whitespace-normal break-words'
                    variant='outline'
                    
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/interim-services'>Interim services</Link>
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer  w-full'
                >
                  <Button
                    className='w-full text-left lg:text-center  lg:inline-block block' // Block on small screens, inline on lg screens
                    variant='outline'
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link
                      href='/tailormade-solutions'
                      className='flex flex-col md:flex-row gap-x-1' // Wrapping adjustments on the Link
                    >
                      Tailormade solutions
                      <span> for Start-ups, Micro, and SME</span>
                    </Link>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Button
          className={`relative mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] ${
            isActive ? 'text-destructive border border-destructive font-bold' : ''
          }`} // Adjust width as needed
            key={link.href}
            asChild
            variant='outline'
            size='lg'
          >
            <Link
             
              href={link.href}
            >
              <span className='text-lg md:text-xl'>{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default NavLinks;
