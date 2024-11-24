// // components/Navbar.tsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import NavLinks from './NavLinks';
// import DarkMode from './DarkMode';
// import Logo from './Logo';
// import Basket from './Basket';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu container

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         menuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node)
//       ) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors max-h-48 ${
//         scrolled ? 'bg-background shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className='container flex justify-between items-center px-4'>
//         {/* Logo */}
//         <Logo />

//         {/* Menu Toggle Button (Hamburger Icon) */}
//         <div className={`sm:hidden ${!scrolled ? 'text-white' : ''}`}>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className='text-xl focus:outline-none'
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Navigation Links & Utilities */}
//         <div
//           ref={menuRef} // Attach the ref here
//           className={`${
//             menuOpen ? 'flex ' : 'hidden'
//           } flex-col sm:flex-row sm:flex items-center sm:gap-4 absolute sm:static top-24 left-0 right-0 sm:top-auto bg-background sm:bg-transparent shadow-md sm:shadow-none sm:py-0 py-4 z-40`}
//         >
//           {/* Nav Links */}
//           <NavLinks />

//           {/* Dark Mode & Basket */}
//           <div className='flex flex-row gap-4 items-center justify-between mt-4 sm:mt-0'>
//             <DarkMode />
//             <Basket />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import DarkMode from './DarkMode';
import Logo from './Logo';
import Basket from './Basket';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu container
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-background  min-h-[128px]'>
        <div className='container flex justify-between items-center px-4'>
          {/* Logo */}
          <div
            className={`relative transition-all duration-300 ${
              scrolled
                ? 'w-[200px] top-2 md:-top-10 '
                : 'w-[300px] top-1 md:-top-16'
            }`}
            // className='relative w-[250px] min-h-[128px]'
          >
            <div className={`absolute -top-16 left-4 z-20`}>
              <Logo imageUrl='/logoImages/9.png' />
            </div>
          </div>
          {/* Menu Toggle Button (Hamburger Icon) */}
          <div className='sm:hidden text-primary'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-xl focus:outline-none'
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links & Utilities */}
          <div
            ref={menuRef} // Attach the ref here
            className={`${
              menuOpen ? 'flex ' : 'hidden'
            } flex-col sm:flex-row sm:flex items-center sm:gap-4 absolute sm:static top-24 left-0 right-0 sm:top-auto bg-background sm:bg-transparent shadow-md sm:shadow-none sm:py-0 py-4`}
          >
            {/* Nav Links */}
            <div className='py-[64px]'>
              <NavLinks />
            </div>

            {/* Dark Mode & Basket */}
            <div className='flex flex-row gap-4 items-center justify-between mt-4 sm:mt-0'>
              <DarkMode />
              <Basket />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
