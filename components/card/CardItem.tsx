
'use client'
// components/card/CardItem.tsx
import React from 'react';
import { IntProduct, IntSubscription } from '@/utils/types';
import { useCartContext } from '@/utils/context/CartContext';

type CardItemProps = {
  product: IntProduct | IntSubscription;
  expanded: boolean;
  onToggleExpand: () => void;
};

export default function CardItem({ product, expanded, onToggleExpand }: CardItemProps) {

    const {addToCart} = useCartContext()

  return (
    <div
      className={`relative pb-20  border p-4 rounded shadow-md transition-all ${
        expanded ? 'col-span-full' : ''
      } ${expanded ? 'grid grid-cols-1 md:grid-cols-2 gap-4 bg-secondary' : ''}`}
    >
      {/* Basic Info Column */}
      <div>
        <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
        <p>Level: {product.type}</p>
        <p>Option: {product.option === 'subscription' ? 'Subscription' : 'Service'}</p>
        <p>
          {product.option === 'subscription' ? `Per month: ${product.price} DKK` : `Price: ${product.price} DKK`}
        </p>
      </div>

      {/* Product Details Column (only shows if expanded) */}
      {expanded && (
        <div className='mt-4 md:mt-0 bg-violet-500 text-white p-4 rounded'>
          <h4 className='font-semibold mb-2'>Product Details</h4>
          <ul className='list-disc list-inside space-y-1'>
            {product.data.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

        {/* Fixed Toggle Button */}
        <button
        className={`absolute  bottom-4 left-4 ${
          expanded ? 'bg-primary' : 'bg-secondary'
        } text-white py-1 px-3 rounded`}
        onClick={onToggleExpand}
      >
        {expanded ? 'Close' : 'Details'}
      </button>

      <button
        className={`absolute  bottom-4 right-4 ${
          expanded ? 'bg-teal hover:bg-cyan' : 'bg-cyan hover:bg-teal'
        } text-white py-1 px-3 rounded`}
        onClick={()=>addToCart(product.id)}
      >
        Add to  cart
      </button>
      </div>
    
  );
}
