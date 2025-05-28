// components/card/DetailedCard.tsx
import { IntProduct, IntSubscription } from '@/utils/types';
import React from 'react';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

type DetailedCardProps = {
  product: IntProduct | IntSubscription | null;
  onClose: () => void;
};

export default function DetailedCard({ product, onClose }: DetailedCardProps) {
  const t = useTranslations('cart');
  const tProduct = useTranslations('products');

  if (!product) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-primary p-8 rounded-lg shadow-lg max-w-lg w-full'>
        <Button variant='outline' size='sm' onClick={onClose}>
          {t('actions.close')}
        </Button>
        <h2 className='text-2xl font-bold mb-4'>{tProduct(product.titleKey)}</h2>
        <p className='mb-2'>
          <span className='font-medium'>{t('item.level')}:</span> {product.type}
        </p>
        <p className='mb-2'>
          <span className='font-medium'>{t('item.option')}:</span>{' '}
          {product.option === 'subscription'
            ? t('subscriptions.type')
            : t('subscriptions.service')}
        </p>
        <p className='mb-4'>
          {product.option === 'subscription' || product.option === 'addon'
            ? `${t('subscriptions.price')}: ${product.price} DKK`
            : `${t('item.price')}: ${product.price} DKK`}
        </p>
        <ul className='list-disc pl-6 space-y-2'>
          {product.data.map((item, index) => (
            <li key={index} className='text-muted-foreground'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
