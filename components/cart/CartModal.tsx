// components/cart/CartModal.tsx
'use client';
import { useCartContext } from '@/utils/context/CartContext';
import { FaTimes } from 'react-icons/fa';
import { CartItem } from './cart-item/CartItem';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cart } = useCartContext();
  const t = useTranslations('common.cart');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-background sm:min-w-[600px] p-5 rounded-lg relative max-h-screen overflow-y-auto'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors'
          aria-label={t('actions.close')}
        >
          <FaTimes size={20} />
        </button>

        {/* Cart title */}
        <h2 className='text-xl font-semibold mb-4'>{t('title')}</h2>

        {cart.length > 0 ? (
          <>
            {/* Cart items grid */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-200'>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className='bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-primary transition'
                >
                  <CartItem item={item} />
                </li>
              ))}
            </ul>

            {/* Checkout button */}
            <div className='flex justify-center mt-10'>
              <Link href={`/${locale}/checkout`} className='w-full'>
                <button
                  className='relative h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 block w-full'
                  onClick={onClose}
                >
                  <span className='absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)]' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive text-md font-medium text-white backdrop-blur-3xl px-2 py-3'>
                    {t('actions.checkout')}
                  </span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className='text-destructive text-center py-4'>{t('empty')}</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
