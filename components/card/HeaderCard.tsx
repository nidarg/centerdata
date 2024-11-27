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

const HeaderCard: React.FC<ProductCardProps> = ({ type }: { type: string }) => {
  const product = productType.find((item) => item.type === type);

  if (!product) {
    return <p>No product data found.</p>;
  }

  const bgClass = {
    startup: 'bg-background', // from root theme
    micro: 'bg-beige ',
    sme: 'bg-peach ',
  }[type];

  return (
    <div
      className={`relative overflow-hidden shadow-lg   lg:min-w-[250px] ${bgClass}`}
    >
      {/* Background Image with Overlay */}
      {/* <div
        className='absolute inset-0 bg-cover bg-center opacity-80'
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      >
        Overlay for blurring effect
        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm'></div> 
      </div> */}
      {/* Content */}
      <div className='relative z-10 p-1  flex flex-col justify-center h-full  '>
        <h2 className='text-3xl font-bold lg:text-sm'>{product.name}</h2>
        <ul className='space-y-2 text-lg'>
          {product.data.map((item, index) => (
            <li key={index} className='flex items-center lg:text-xs text-sm'>
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
