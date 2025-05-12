// components/cart/cart-item/CartItem.tsx
'use client';
import { IntProductPayload } from '@/utils/types';
import { useCartContext } from '@/utils/context/CartContext';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react'; // Using Lucide icons for consistency

export interface IntCartItem {
  item: IntProductPayload;
}

export const CartItem = ({ item }: IntCartItem) => {
  const { removeFromCart } = useCartContext();
  const t = useTranslations('cart');

  return (
    <div className='flex items-center justify-between w-full max-w-[300px]'>
      {/* Content */}
      <div className='flex flex-col gap-4 shadow-md shadow-neutral-900 dark:shadow-neutral-600 p-4 w-full rounded-lg bg-background'>
        {/* Title */}
        <h3 className='font-semibold text-lg'>{item.title}</h3>

        {/* Item details */}
        <div className='space-y-2 text-sm text-muted-foreground'>
          <p>
            <span className='font-medium'>{t('item.level')}:</span> {item.type}
          </p>
          <p>
            <span className='font-medium'>{t('item.option')}:</span>{' '}
            {item.option === 'subscription'
              ? t('subscriptions.type')
              : t('subscriptions.service')}
          </p>
          {item.price && (
            <p>
              <span className='font-medium'>{t('item.price')}:</span>{' '}
              {item.option === 'subscription'
                ? `${item.price} DKK ${t('subscriptions.price')}`
                : `${item.price} DKK`}
            </p>
          )}
        </div>
      </div>

      {/* Remove button */}
      <Button
        variant='ghost'
        size='icon'
        onClick={() => removeFromCart(item.id)}
        className='ml-2 text-destructive hover:text-destructive/80 hover:bg-destructive/10'
        aria-label={t('item.remove')}
      >
        <Trash2 className='h-4 w-4' />
      </Button>
    </div>
  );
};
