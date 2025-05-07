


'use client';

import { products, subscriptions } from '@/utils/products';
import { useCartContext } from '@/utils/context/CartContext';

import CardRow from './CardRow';
import AdditionalServices from './AdditionalServices';
import RemainingSelectionsCounter from '../RemainingSelectionsCounter';

function ServicesByType({ type }: { type: string }) {
  const { selectCounter, cartCount } = useCartContext();

  const filteredProducts = [
    ...products.filter((product) => product.type === type),
    ...subscriptions.filter((subscription) => subscription.type === type),
  ];

  const subscriptionItems = filteredProducts.filter((item) => item.option === 'subscription');
  const addonItems = filteredProducts.filter((item) => item.option === 'addon');

  const remainingSelections = selectCounter - cartCount;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[auto_auto_auto] gap-4 lg:gap-y-4 p-1 text-center min-w-full'>

      {/* Counter for all Modules */}
      {selectCounter > 10 && (
         <div className='col-span-full text-center text-white p-4 bg-teal-700 rounded-lg shadow-md'>
           <p>You can add <strong>all modules</strong>. </p>
          </div>
      )}
      
      {/* Counter for Remaining Selections */}

       {(selectCounter > 0 && selectCounter <= 10) && (
        <RemainingSelectionsCounter remainingSelections={remainingSelections} />
      )}


      {/* {(selectCounter > 0 && selectCounter <= 10) && (
      <div className='col-span-full text-center text-white p-4 bg-teal-700 rounded-lg shadow-md'>
        {remainingSelections > 0  ? (
          <p>You can add <strong>{remainingSelections}</strong> more modules.</p>
        ) : (
          <p className='text-red-500'>For more modules, please upgrade your plan.</p>
        )}
      </div>
      )} */}
      <CardRow products={subscriptionItems} header='MIX AND MATCH MODULES MANAGEMENT' />
      <CardRow products={addonItems} header='MIX AND MATCH MODULES IMPLEMENT' />
      <AdditionalServices />
    </div>
  );
}

export default ServicesByType;
