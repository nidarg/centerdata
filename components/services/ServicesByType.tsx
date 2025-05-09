'use client';

import { useTranslations } from 'next-intl';
import { products, subscriptions } from '@/utils/products';
import { useCartContext } from '@/utils/context/CartContext';

import CardRow from './CardRow';
import AdditionalServices from './AdditionalServices';
import RemainingSelectionsCounter from '../RemainingSelectionsCounter';

function ServicesByType({ type }: { type: string }) {
  const t = useTranslations('services');
  const { selectCounter, cartCount } = useCartContext();

  const filteredProducts = [
    ...products.filter((product) => product.type === type),
    ...subscriptions.filter((subscription) => subscription.type === type),
  ];

  const subscriptionItems = filteredProducts.filter(
    (item) => item.option === 'subscription'
  );
  const addonItems = filteredProducts.filter((item) => item.option === 'addon');

  const remainingSelections = selectCounter - cartCount;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[auto_auto_auto] gap-4 lg:gap-y-4 p-1 text-center min-w-full'>
      {/* Counter for all Modules */}
      {selectCounter > 10 && (
        <div className='col-span-full text-center text-white p-4 bg-teal-700 rounded-lg shadow-md'>
          <p>{t('allModules')}</p>
        </div>
      )}

      {/* Counter for Remaining Selections */}
      {selectCounter > 0 && selectCounter <= 10 && (
        <RemainingSelectionsCounter remainingSelections={remainingSelections} />
      )}

      <CardRow products={subscriptionItems} header={t('modules.management')} />
      <CardRow products={addonItems} header={t('modules.implement')} />
      <AdditionalServices />
    </div>
  );
}

export default ServicesByType;
