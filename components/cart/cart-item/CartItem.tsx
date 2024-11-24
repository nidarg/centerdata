'use client';
import { IntProductPayload } from '@/utils/types';
import { useCartContext } from '@/utils/context/CartContext';

export interface IntCartItem {
  item: IntProductPayload;
}

export const CartItem = ({ item }: IntCartItem) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className='flex items-center justify-between w-full max-w-[300px]'>
      {/* Content */}
      <div className='flex flex-col gap-4 shadow-md shadow-neutral-900 dark:shadow-neutral-600 p-4 w-full'>
        <h3 className='font-semibold'>{item.title}</h3>
        <p className='text-sm'>Type: {item.type}</p>
        <p className='text-sm'>Price: {item.price}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className='text-red-500 hover:text-red-700 text-sm ml-2'
      >
        Remove
      </button>
    </div>
  );
};
