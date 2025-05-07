// import { translate } from '@/utils/translate';
// import { IntProductTypeBox } from '@/utils/types';

// const productType: IntProductTypeBox[] = [
//   {
//     name: translate('product_type_startup'),
//     data: [
//       '0-5 employees',
//       '0-10 data processors',
//       '0-10 processing activities',
//       '0-10 individuals requests & complaints',
//       '0-10 personal data breach cases',
//       '0-2,5m DKK revenue',
//     ],
//     type: 'startup',
//     imageUrl: '/images/startupE.jpeg',
//   },
//   {
//     name: translate('product_type_micro'),
//     data: [
//       '0-20 employees',
//       '0-25 data processors',
//       '0-25 processing activities',
//       '0-25 individuals requests & complaints',
//       '0-25 personal data breach cases',
//       '0-5m DKK revenue',
//     ],
//     imageUrl: '/images/microE.jpeg',
//     type: 'micro',
//   },
//   {
//     name: translate('product_type_sme'),
//     data: [
//       '0-50 employees',
//       '0-40 data processors',
//       '0-40 processing activities',
//       '0-40 individuals requests & complaints',
//       '0-40 personal data breach cases',
//       '0-10m DKK revenue',
//     ],
//     imageUrl: '/images/smE.jpeg',
//     type: 'sme',
//   },
// ];

// interface ProductCardProps {
//   type: 'startup' | 'micro' | 'sme';
// }

// const HeaderCard: React.FC<ProductCardProps> = ({ type }: { type: string }) => {
//   const product = productType.find((item) => item.type === type);

//   if (!product) {
//     return <p>No product data found.</p>;
//   }

//   const bgClass = {
//     startup: 'bg-teal-700 text-white',
//     micro: 'bg-teal-800 text-white',
//     sme: 'bg-teal-900 text-white', // from root theme
//   }[type];

//   // Font Size Mapping for the h2
//   const fontSizeClass = {
//     startup: 'text-2xl',
//     micro: 'text-3xl',
//     sme: 'text-4xl',
//   }[type];

//   return (
//     <div
//       className={`relative overflow-hidden shadow-lg lg:min-w-[250px] hover:scale-105 hover:z-20 transition-all duration-500 ease-in-out ${bgClass}`}
//     >
//       {/* Background Image with Overlay */}
//       {/* <div
//         className='absolute inset-0 bg-cover bg-center opacity-80'
//         style={{ backgroundImage: `url(${product.imageUrl})` }}
//       >
//         Overlay for blurring effect
//         <div className='absolute inset-0 bg-black/60 backdrop-blur-sm'></div> 
//       </div> */}
//       {/* Content */}
//       <div className='relative z-10 p-1  flex flex-col justify-evenly min-h-[300px] '>
//         <h2 className={`font-bold text-goldish ${fontSizeClass}`}>{product.name}</h2>
//         <ul className='space-y-2 text-lg'>
//           {product.data.map((item, index) => (
//             <li key={index} className='flex items-center  text-md'>
//               <span className='bg-primary h-2 w-2 mr-2'></span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HeaderCard;

import { translate } from '@/utils/translate';
import { IntProductTypeBox } from '@/utils/types';

const productType: IntProductTypeBox[] = [
  {
    name: translate('product_type_startup'),
    data: [
      '0-5 employees',
      '0-10 data processors',
      '0-10 processing activities',
      '0-10 individuals requests & complaints',
      '0-10 personal data breach cases',
      '0-2,5m DKK revenue',
    ],
    type: 'startup',
    imageUrl: '/images/startupE.jpeg',
  },
  {
    name: translate('product_type_micro'),
    data: [
      '0-20 employees',
      '0-25 data processors',
      '0-25 processing activities',
      '0-25 individuals requests & complaints',
      '0-25 personal data breach cases',
      '0-5m DKK revenue',
    ],
    imageUrl: '/images/microE.jpeg',
    type: 'micro',
  },
  {
    name: translate('product_type_sme'),
    data: [
      '0-50 employees',
      '0-40 data processors',
      '0-40 processing activities',
      '0-40 individuals requests & complaints',
      '0-40 personal data breach cases',
      '0-10m DKK revenue',
    ],
    imageUrl: '/images/smE.jpeg',
    type: 'sme',
  },
];

interface ProductCardProps {
  type: 'startup' | 'micro' | 'sme';
}
const HeaderCard: React.FC<ProductCardProps> = ({ type }) => {
  const product = productType.find((item) => item.type === type);

  if (!product) {
    return <p>No product data found.</p>;
  }

  // Background classes for both themes
  const bgClass = {
    startup: 'bg-bgLight text-neutral-900 dark:bg-teal-700 dark:text-white',
    micro: 'bg-background text-neutral-900 dark:bg-teal-800 dark:text-white',
    sme: 'bg-bgDark text-neutral-900 dark:bg-teal-900 dark:text-white',
  }[type];

  // Font Size Mapping for the h2
  const fontSizeClass = {
    startup: 'text-2xl',
    micro: 'text-3xl',
    sme: 'text-4xl',
  }[type];

  return (
    <div
      className={`relative overflow-hidden shadow-lg lg:min-w-[250px] hover:scale-105 hover:z-20 transition-all duration-500 ease-in-out ${bgClass}`}
    >
      {/* Content */}
      <div className='relative z-10 p-1 flex flex-col justify-evenly min-h-[300px]'>
        <h2 className={`font-bold text-goldish ${fontSizeClass}`}>{product.name}</h2>
        <ul className='space-y-2 text-lg'>
          {product.data.map((item, index) => (
            <li key={index} className='flex items-center text-md'>
              <span className='bg-primary h-2 w-2 mr-2'></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderCard;

