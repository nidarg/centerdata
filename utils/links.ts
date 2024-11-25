type NavLink = {
    href: string;
    label: string;
  };
  
  export const links: NavLink[] = [
    { href: '/', label: 'Home' },
   
    { href: '/about-us', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  export const servicesLinks: string[] = [
    '/specialized-projects','/interim-services','/tailormade-solutions'
  ];