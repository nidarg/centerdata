'use client';

import { servicesLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sideOffset, setSideOffset] = useState(50);
  const [currentHash, setCurrentHash] = useState('');
  const t = useTranslations('common.navigation');

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1];

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

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/${currentLocale}/#about-us`);
    setCurrentHash('#about-us');
    // Scroll to the about section
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/${currentLocale}`);
    setCurrentHash('');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const translatedLinks = [
    { href: `/${currentLocale}`, label: t('home'), isHome: true },
    { href: `/${currentLocale}/#about-us`, label: t('about'), isAbout: true },
    { href: `/${currentLocale}/services`, label: t('servicesLabel') },
    { href: `/${currentLocale}/contact`, label: t('contact') },
  ];

  return (
    <div className='flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      {translatedLinks.map((link) => {
        const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');
        const linkPathWithoutLocale = link.href.split('/').slice(2).join('/');
        
        // Special handling for home and about links
        const isActive = link.isHome
          ? pathnameWithoutLocale === '' && currentHash === ''
          : link.isAbout
          ? pathnameWithoutLocale === '' && currentHash === '#about-us'
          : pathnameWithoutLocale === linkPathWithoutLocale;

        const isServiceActive = servicesLinks.some(
          (serviceLink) => pathnameWithoutLocale === serviceLink.slice(1)
        );

        if (link.href === `/${currentLocale}/services`) {
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
                    isServiceActive || openDropdown
                      ? 'text-destructive border border-destructive font-bold'
                      : ''
                  }`}
                  variant='outline'
                  size='lg'
                  asChild
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <Link href={link.href}>
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
                  <Button
                    variant='outline'
                    asChild
                    className={
                      pathnameWithoutLocale === 'specialized-projects'
                        ? 'text-destructive border border-destructive font-bold'
                        : ''
                    }
                  >
                    <Link href={`/${currentLocale}/specialized-projects`}>
                      {t('services.specialized')}
                    </Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onSelect={closeMenu}>
                  <Button
                    variant='outline'
                    asChild
                    className={
                      pathnameWithoutLocale === 'interim-services'
                        ? 'text-destructive border border-destructive font-bold'
                        : ''
                    }
                  >
                    <Link href={`/${currentLocale}/interim-services`}>
                      {t('services.interim')}
                    </Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onSelect={closeMenu}>
                  <Button
                    variant='outline'
                    asChild
                    className={
                      pathnameWithoutLocale === 'tailormade-solutions'
                        ? 'text-destructive border border-destructive font-bold'
                        : ''
                    }
                  >
                    <Link href={`/${currentLocale}/tailormade-solutions`}>
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
            onClick={link.isAbout ? handleAboutClick : link.isHome ? handleHomeClick : closeMenu}
          >
            <Link href={link.href} scroll={false}>
              <span className='text-lg md:text-xl'>{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default NavLinks;
