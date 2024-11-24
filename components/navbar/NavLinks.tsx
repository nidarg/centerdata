// 'use client';

// import { links } from '@/utils/links';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';

// function NavLinks() {
//   const pathname = usePathname();
//   const [openDropdown, setOpenDropdown] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0">
//       {links.map((link) => {
//         const isActive = pathname === link.href;

//         if (link.href === '/services') {
//           return (
//             <div
//               key={link.href}
//               className="relative"
//               // onMouseLeave={() => setOpenDropdown(false)} // Close dropdown on mouse leave
//             >
//               <Button
//                 onClick={() => setOpenDropdown((prev) => !prev)}
//                 className="mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px] focus:outline-none active:outline-none transition-none"
//                  variant="outline"
//                 asChild
//               >
//                 <Link
//                   className={`${isActive ? 'bg-primary text-white' : ''}`}
//                   href="#"
//                 >
//                   <span className="text-xl">{link.label}</span>
//                 </Link>
//               </Button>

//               {openDropdown && (
//                 <div
//                   className="absolute z-10 bg-background  rounded-lg shadow-lg mr-20 md:mr-10 w-60 md:w-96 mt-2 p-2"
//                   onMouseLeave={() => setOpenDropdown(false)}
//                 >
//                   <ul className="space-y-2">
//                     <li>
//                     <Button
//                           className="w-full text-left lg:text-center block whitespace-normal break-words"
//                           variant="outline"
//                           asChild
//                         >
//                       <Link
//                         href="/specialized-projects"
//                         className="block w-full text-left   rounded-md"
//                       >

//                           Specialized projects

//                       </Link>
//                       </Button>
//                     </li>

//                     <li>
//                     <Button
//                           className="w-full text-left lg:text-center block whitespace-normal break-words"
//                           variant="outline"
//                           asChild
//                         >
//                       <Link
//                         href="/interim-services"
//                        className="block w-full text-left   rounded-md"
//                       >

//                           Interim services

//                       </Link>
//                       </Button>
//                     </li>

//                     <li >
//                     <Button
//                           className="min-h-20 sm:min-h-fit  w-full text-left lg:text-center block whitespace-normal break-words"
//                           variant="outline"
//                           asChild
//                         >
//                       <Link
//                         href="/tailormade-solutions"
//                         className=" flex flex-col justify-center sm:block w-full text-left   rounded-md  "
//                       >

//                           <span >Tailormade solutions for</span>
//                             <span >Start-ups, Micro, and SME</span>

//                       </Link>
//                       </Button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           );
//         }

//         return (
//           <Button
//             className="mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px]"
//             key={link.href}
//             asChild
//             variant="outline"
//           >
//             <Link
//               className={`${isActive ? 'bg-primary text-white' : ''} flex justify-center items-center`}
//               href={link.href}
//             >
//               <span className="text-lg md:text-xl">{link.label}</span>
//             </Link>
//           </Button>
//         );
//       })}
//     </div>
//   );
// }

// export default NavLinks;

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
    <div className='flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
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
                  className='mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px]'
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
                className='lg:w-96 md:w-72 w-full p-2' // Full width on mobile, fixed width on large screens
                align='start'
                sideOffset={10}
                onPointerLeave={() => setOpenDropdown(false)}
              >
                <DropdownMenuItem
                  asChild
                  onSelect={() => setOpenDropdown(false)}
                  className='hover:cursor-pointer w-full'
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
            className='mr-2 lg:min-w-[150px] sm:min-w-[100px] min-w-[60px]' // Adjust width as needed
            key={link.href}
            asChild
            variant='outline'
          >
            <Link
              className={`${
                isActive ? 'bg-primary text-white' : ''
              } flex justify-center items-center`}
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
