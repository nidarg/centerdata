// components/cart/cart-item/CartItem.tsx
'use client';
import { IntProductPayload } from '@/utils/types';
import { useCartContext } from '@/utils/context/CartContext';
import { useTranslations } from 'next-intl';

export interface IntCartItem {
  item: IntProductPayload;
}

export const CartItem = ({ item }: IntCartItem) => {
  const { removeFromCart } = useCartContext();
  const t = useTranslations('common.cart');

  return (
    <div className='flex items-center justify-between w-full max-w-[300px]'>
      {/* Content */}
      <div className='flex flex-col gap-4 shadow-md shadow-neutral-900 dark:shadow-neutral-600 p-4 w-full'>
        <h3 className='font-semibold'>{t(`${item.id}.title`)}</h3>
        <p className='text-sm'>{t('item.type')}: {t(`${item.id}.type`)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className='text-red-500 hover:text-red-700 text-sm ml-2'
      >
        {t('actions.remove')}
      </button>
    </div>
  );
};
