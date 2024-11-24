// components/card/DetailedCard.tsx
import { IntProduct, IntSubscription } from '@/utils/types';
import React from 'react';
import { Button } from '../ui/button';

type DetailedCardProps = {
  product: IntProduct | IntSubscription | null;
  onClose: () => void;
};

export default function DetailedCard({ product, onClose }: DetailedCardProps) {
  if (!product) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-primary p-8 rounded-lg shadow-lg max-w-lg w-full'>
        <Button variant='outline' size='sm' onClick={onClose}>
          close
        </Button>
        <h2 className='text-2xl font-bold mb-4'>{product.title}</h2>
        <p className='mb-2'>Level: {product.type}</p>
        <p className='mb-2'>Option: {product.option}</p>
        <p className='mb-4'>
          {product.option === 'subscription' || product.option === 'addon'
            ? `Per month: ${product.price} DKK`
            : `Price: ${product.price} DKK`}
        </p>
        <ul className='list-disc pl-6 space-y-2'>
          {product.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
