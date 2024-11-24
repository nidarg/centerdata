'use client';

import { links } from '@/utils/links';
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
    <div className='flex flex-col sm:flex-row gap-2'>
      {links.map((link) => {
        const isActive = pathname === link.href;

        if (link.href === '/services') {
          return (
            <DropdownMenu
              key={link.href}
              open={openDropdown}
              onOpenChange={setOpenDropdown}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  className='mr-2'
                  variant='outline'
                  asChild
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <Link
                    className={`${isActive ? 'bg-primary text-white' : ''}`}
                    href='#'
                  >
                    <span className='text-xl '>{link.label}</span>
                  </Link>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className='w-52'
                align='start'
                sideOffset={10}
                onPointerLeave={() => setOpenDropdown(false)} // Close on mouse leave
              >
                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer'
                >
                  <Button
                    className='mr-2'
                    variant='ghost'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/services?type=startup'>Startup</Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer'
                >
                  <Button
                    className='mr-2'
                    variant='ghost'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/services?type=micro'>Micro</Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer'
                >
                  <Button
                    className='mr-2'
                    variant='ghost'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/services?type=sme'>SME</Link>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Button className='mr-2' key={link.href} asChild variant='outline'>
            <Link
              className={`${isActive ? 'bg-primary text-white' : ''}`}
              href={link.href}
            >
              <span className='text-xl '>{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default NavLinks;
