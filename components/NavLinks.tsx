'use client';

import { links, servicesLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

function NavLinks({
  setServicesClicked,
  dropdownRef,
  closeMenu,
}: {
  setServicesClicked: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  closeMenu: () => void;
}) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sideOffset, setSideOffset] = useState(50);
  const t = useTranslations('common.navigation');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideOffset(10);
      } else {
        setSideOffset(50);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const translatedLinks = [
    { href: '/', label: t('home') },
    { href: '/#about-us', label: t('about') },
    { href: '/services', label: t('servicesLabel') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <div className='flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      {translatedLinks.map((link) => {
        const isActive = pathname === link.href;
        const isServiceActive = servicesLinks.includes(pathname);

        if (link.href === '/services') {
          return (
            <DropdownMenu
              key={link.href}
              open={openDropdown}
              onOpenChange={(open) => {
                setOpenDropdown(open);
                setServicesClicked(open);
              }}
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
                ref={dropdownRef}
                className='lg:w-96 md:w-72 w-[250px] p-2'
                align='start'
                sideOffset={sideOffset}
              >
                <DropdownMenuItem asChild onSelect={closeMenu}>
                  <Button variant='outline' asChild>
                    <Link href='/specialized-projects'>
                      {t('services.specialized')}
                    </Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onSelect={closeMenu}>
                  <Button variant='outline' asChild>
                    <Link href='/interim-services'>
                      {t('services.interim')}
                    </Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onSelect={closeMenu}>
                  <Button variant='outline' asChild>
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
            key={link.href}
            asChild
            variant='outline'
            size='lg'
            className={`relative mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] ${
              isActive
                ? 'text-destructive border border-destructive font-bold'
                : ''
            }`}
            onClick={closeMenu}
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
