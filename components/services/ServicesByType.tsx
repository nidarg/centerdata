'use client';

import { products, subscriptions } from '@/utils/products';
import { useCartContext } from '@/utils/context/CartContext';
// import { IntProduct, IntSubscription } from '@/utils/types';
import CardRow from './CardRow';
import AdditionalServices from './AdditionalServices';
import RemainingSelectionsCounter from '../RemainingSelectionsCounter';
import { useTranslations } from 'next-intl';

type ServicesByTypeProps = {
  type: string;
};

export default function ServicesByType({ type }: ServicesByTypeProps) {
  const t = useTranslations('common.services');
  const { selectCounter, cartCount } = useCartContext();

  const remainingSelections = selectCounter - cartCount;

  // Filter products and subscriptions by type
  const filteredProducts = products.filter((p) => p.type === type);
  const filteredSubscriptions = subscriptions.filter((s) => s.type === type);

  // Helper function to handle array descriptions
  const getDescription = (key: string, isSubscription: boolean = false) => {
    const namespace = isSubscription ? 'subscriptions' : 'products';
    const desc = t.raw(`${namespace}.${key.split('.')[0]}.description`);
    return Array.isArray(desc) ? desc.join('\n') : desc;
  };

  // Translate products and subscriptions
  const translatedProducts = filteredProducts.map((product) => ({
    ...product,
    title: t(`products.${product.titleKey.split('.')[0]}.title`),
    description: getDescription(product.titleKey),
  }));

  const translatedSubscriptions = filteredSubscriptions.map((subscription) => ({
    ...subscription,
    title: t(`subscriptions.${subscription.titleKey.split('.')[0]}.title`),
    description: subscription.descriptionKey
      ? getDescription(subscription.titleKey, true)
      : undefined,
  }));

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

      <CardRow items={translatedProducts} header={t('modules.management')} />
      <CardRow
        items={translatedSubscriptions}
        header={t('modules.implement')}
      />
      <AdditionalServices type={type} />
    </div>
  );
}
