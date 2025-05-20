'use client';

import React, { useState } from 'react';
import { useCartContext } from '@/utils/context/CartContext';
import { useTranslations } from 'next-intl';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
import { IntProduct, IntSubscription, IntProductOption } from '@/utils/types';

type TranslatedItem = (IntProduct | IntSubscription) & {
  title: string;
  description?: string;
  titleKey?: string;
  itemType: string;
};

interface CardRowProps {
  items: TranslatedItem[];
  header: string;
}

const CardRow: React.FC<CardRowProps> = ({ items, header }) => {
  const [selectedProduct, setSelectedProduct] = useState<TranslatedItem | null>(
    null
  );
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations('common.services');
  const cartT = useTranslations('common.cart');

  const { addToCart, selectCounter, cartCount, cart } = useCartContext();

  // Helper function to get translated description
  const getTranslatedDescription = (item: TranslatedItem) => {
    if (!item.titleKey) return item.data;
    const key = item.titleKey.split('.')[0];
    const namespace =
      item.itemType === 'subscription' ? 'subscriptions' : 'products';
    const desc = t.raw(`${namespace}.${key}.description`);
    return Array.isArray(desc) ? desc : [desc];
  };

  const openModal = (item: TranslatedItem) => {
    if (selectCounter === 0) {
      setShowPlanModal(true);
      return;
    }

    if (cartCount >= selectCounter) {
      setShowUpgradeModal(true);
      return;
    }

    setSelectedProduct(item);
    setShowAll(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowAll(false);
    setShowPlanModal(false);
    setShowUpgradeModal(false);
  };

  const handleSelect = (item: TranslatedItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.type === item.type
    );

    if (existingItem) {
      const existingOption = existingItem.option as IntProductOption;
      const itemOption = item.option as IntProductOption;
      if (existingOption === 'subscription' && itemOption === 'product') {
        setShowUpgradeModal(true);
      } else {
        addToCart(item.id);
        closeModal();
      }
    } else {
      addToCart(item.id);
      closeModal();
    }
  };

  return (
    <section className='mb-10 mt-20'>
      {/* Header */}
      <div className='min-h-20'>
        <h2 className='text-xl font-bold'>{header}</h2>
      </div>

      {/* Product List */}
      <div className='space-y-4'>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className='cursor-pointer bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 min-h-40 flex items-center justify-between'
          >
            <h3 className='text-lg font-semibold text-gray-200'>
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-end'>
          <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 relative max-h-screen overflow-y-auto'>
            <button onClick={closeModal} className='absolute top-4 right-4'>
              {cartT('actions.close')}
            </button>
            <h3 className='text-2xl font-bold mb-4 mt-8'>
              {selectedProduct.title}
            </h3>
            {selectedProduct.description && (
              <p className='text-xl font-bold mb-4 mt-4'>
                {cartT('modals.productDetails')}
              </p>
            )}

            {/* Display only first 3 items unless expanded */}
            <ul className='list-disc space-y-1'>
              {getTranslatedDescription(selectedProduct)
                .slice(0, showAll ? undefined : 3)
                .map((detail, index) => (
                  <li key={index} className='text-left p-2'>
                    {detail}
                  </li>
                ))}
            </ul>

            {/* More Details / Show Less Buttons */}
            {getTranslatedDescription(selectedProduct).length > 3 && (
              <div className='mt-4'>
                {!showAll ? (
                  <button
                    className='text-primary underline'
                    onClick={() => setShowAll(true)}
                  >
                    {cartT('modals.moreDetails')}
                  </button>
                ) : (
                  <button
                    className='text-primary underline mt-2'
                    onClick={() => setShowAll(false)}
                  >
                    {cartT('modals.showLess')}
                  </button>
                )}
              </div>
            )}

            {/* Request Quotation Button */}
            <button
              className='mt-6 px-4 py-2 bg-primary text-white rounded-lg w-full'
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(selectedProduct);
              }}
            >
              {cartT('actions.requestQuotation')}
            </button>
          </div>
        </div>
      )}

      {/* Plan Selection Required Modal */}
      {showPlanModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
          <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
            <h3 className='text-xl font-bold mb-4'>
              {cartT('messages.choosePlan')}
            </h3>
            <p className='text-sm'>{t('messages.planTypes')}</p>
            <button
              onClick={closeModal}
              className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'
            >
              {cartT('actions.close')}
            </button>
          </div>
        </div>
      )}

      {/* Upgrade Plan Modal */}
      {showUpgradeModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
          <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
            <h3 className='text-xl font-bold mb-4'>
              {cartT('messages.upgradePlan')}
            </h3>
            <button
              onClick={closeModal}
              className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'
            >
              {cartT('actions.close')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardRow;
