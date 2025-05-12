'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);

  // Define navigation links with translations
  const links = [
    { href: '/', label: t('home') },
    { href: '/#about-us', label: t('about') },
    { href: '/services', label: t('servicesLabel') },
    { href: '/contact', label: t('contact') },
  ];

  // Define service links with translations
  const servicesLinks = [
    '/specialized-projects',
    '/interim-services',
    '/tailormade-solutions',
  ];

  return (
    <div className='flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isServiceActive = servicesLinks.includes(pathname);

        if (link.href === '/services') {
          return (
            <DropdownMenu
              key={link.href}
              open={openDropdown}
              onOpenChange={setOpenDropdown}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  className={`relative mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] ${
                    isServiceActive
                      ? 'text-destructive border border-destructive font-bold'
                      : ''
                  }`}
                  variant='outline'
                  size='lg'
                  asChild
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <Link href='#'>
                    <span className='text-xl'>{link.label}</span>
                  </Link>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className='lg:w-96 md:w-72 w-full p-2'
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
                    className='w-full text-left lg:text-center lg:inline-block block whitespace-normal break-words'
                    variant='outline'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/specialized-projects'>
                      {t('services.specialized')}
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
                    className='w-full text-left lg:text-center lg:inline-block block whitespace-normal break-words'
                    variant='outline'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/interim-services'>
                      {t('services.interim')}
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
                    className='w-full text-left lg:text-center lg:inline-block block whitespace-normal break-words'
                    variant='outline'
                    asChild
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <Link href='/tailormade-solutions'>
                      {t('services.tailormade')}
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
              isActive
                ? 'text-destructive border border-destructive font-bold'
                : ''
            }`}
            key={link.href}
            asChild
            variant='outline'
            size='lg'
          >
            <Link href={link.href}>
              <span className='text-lg md:text-xl'>{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default NavLinks;
