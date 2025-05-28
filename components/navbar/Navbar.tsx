'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from '../NavLinks';
import DarkMode from './DarkMode';
import Logo from './Logo';
import Basket from './Basket';
// import LanguageSelector from '../LanguageSelector';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setServicesClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // ✅ Close menu when navigating to home
  useEffect(() => {
    if (pathname === '/') {
      setMenuOpen(false);
      setServicesClicked(false);
    }
  }, [pathname]); // Runs whenever pathname changes

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesClicked(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-gradient-nav min-h-[128px]'>
      <div className='container flex justify-between items-center px-4'>
        {/* Logo */}
        <div
          className={`relative transition-all duration-300 ${
            scrolled
              ? 'w-[200px] top-2 md:-top-10'
              : 'w-[300px] top-1 md:-top-16'
          }`}
        >
          <div className={`absolute -top-16 left-4 z-20`}>
            <Logo imageUrl='/logoImages/9.png' />
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='sm:hidden text-primary mt-4 mr-20'>
          <button onClick={toggleMenu} className='text-xl focus:outline-none'>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex-row sm:flex items-center sm:gap-4 absolute sm:static top-24 left-0 right-0 sm:top-auto bg-background sm:bg-transparent shadow-md sm:shadow-none sm:py-0 py-4`}
        >
          <div className='py-[64px] mb-10 sm:mb-0'>
            <NavLinks
              setServicesClicked={setServicesClicked}
              dropdownRef={dropdownRef}
              closeMenu={closeMenu}
            />
          </div>
          {/* <LanguageSelector /> */}
          <div className='flex flex-row gap-4 items-center justify-between'>
            <DarkMode />
            {pathname.includes('/tailormade-solutions') && <Basket />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
