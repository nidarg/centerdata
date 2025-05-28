// components/card/CardItem.tsx
'use client';
import React from 'react';
import { IntProduct, IntSubscription } from '@/utils/types';
import { useCartContext } from '@/utils/context/CartContext';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';

type CardItemProps = {
  product: IntProduct | IntSubscription;
  expanded: boolean;
  onToggleExpand: () => void;
};

export default function CardItem({
  product,
  expanded,
  onToggleExpand,
}: CardItemProps) {
  const { addToCart } = useCartContext();
  const t = useTranslations('cart');
  const tProduct = useTranslations('products');

  return (
    <div
      className={`relative pb-20 border p-4 rounded-lg shadow-md transition-all ${
        expanded ? 'col-span-full' : ''
      } ${
        expanded
          ? 'grid grid-cols-1 md:grid-cols-2 gap-4 bg-secondary'
          : 'bg-background hover:shadow-lg'
      }`}
    >
      {/* Basic Info Column */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-primary'>{tProduct(product.titleKey)}</h3>

        <div className='space-y-2 text-sm text-muted-foreground'>
          <p>
            <span className='font-medium'>{t('item.level')}:</span>{' '}
            {product.type}
          </p>
          <p>
            <span className='font-medium'>{t('item.option')}:</span>{' '}
            {product.option === 'subscription'
              ? t('subscriptions.type')
              : t('subscriptions.service')}
          </p>
          <p>
            {product.option === 'subscription'
              ? `${t('subscriptions.price')}: ${product.price} DKK`
              : `${t('item.price')}: ${product.price} DKK`}
          </p>
        </div>
      </div>

      {/* Product Details Column (only shows if expanded) */}
      {expanded && (
        <div className='mt-4 md:mt-0 bg-violet-500/10 dark:bg-violet-500/20 text-primary p-4 rounded-lg'>
          <h4 className='font-semibold mb-3 text-lg'>
            {t('modals.productDetails')}
          </h4>
          <ul className='list-disc list-inside space-y-2 text-sm'>
            {product.data.map((detail, index) => (
              <li key={index} className='text-muted-foreground'>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className='absolute bottom-4 left-0 right-0 flex justify-between px-4'>
        {/* Toggle Details Button */}
        <Button
          variant={expanded ? 'default' : 'secondary'}
          size='sm'
          onClick={onToggleExpand}
          className='flex items-center gap-2'
        >
          {expanded ? (
            <>
              {t('actions.close')}
              <ChevronUp className='h-4 w-4' />
            </>
          ) : (
            <>
              {t('actions.details')}
              <ChevronDown className='h-4 w-4' />
            </>
          )}
        </Button>

        {/* Add to Cart Button */}
        <Button
          variant={expanded ? 'default' : 'secondary'}
          size='sm'
          onClick={() => addToCart(product.id)}
          className='flex items-center gap-2 bg-teal hover:bg-teal/90 text-white'
        >
          <ShoppingCart className='h-4 w-4' />
          {t('actions.addToCart')}
        </Button>
      </div>
    </div>
  );
}
