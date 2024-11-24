// pages/services.tsx

'use client';

// import { useState } from 'react';

import { products, subscriptions } from '@/utils/products';
// import HeaderCard from '@/components/card/HeaderCard';
// import CardItem from '@/components/card/CardItem';
// import { IntProduct, IntSubscription } from '@/utils/types';
import CardRow from './CardRow';
import AdditionalServices from './AdditionalServices';


 function ServicesByType({type}:{type:string}) {
  

//   const [selectedProduct, setSelectedProduct] = useState<IntProduct | IntSubscription | null>(null);

  const filteredProducts = [
    ...products.filter((product) => product.type === type),
    ...subscriptions.filter((subscription) => subscription.type === type),
    // ...onetimeproduct.filter((product) => product.type === type),
  ];

  const subscriptionItems = filteredProducts.filter((item) => item.option === 'subscription');
  const addonItems = filteredProducts.filter((item) => item.option === 'addon');
  // const productItems = filteredProducts.filter((item) => item.option === 'product');

//   const handleToggleExpand = (product: IntProduct | IntSubscription) => {
//     setSelectedProduct(selectedProduct === product ? null : product);
//   };

  return (

    
    <div className='grid grid-cols-1 lg:grid-cols-[auto_auto_auto] gap-4 lg:gap-y-4 p-1 text-center min-w-full '>

    

      {/* {type && <HeaderCard type={type} />} */}

      {/* Render the selected product in expanded view
      {selectedProduct && (
        <div className='mb-8'>
          <CardItem
            product={selectedProduct}
            expanded={true}
            onToggleExpand={() => handleToggleExpand(selectedProduct)}
          />
        </div>
      )} */}

      {/* Render remaining products in compact view */}
      <CardRow products={subscriptionItems} header='MIX AND MATCH MODULES MANAGEMENT' />
      {/* <section className='mb-10'>
      <h2 className='text-2xl font-bold mb-4'>MIX AND MATCH MODULES MANAGEMENT</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {subscriptionItems
          
          .map((product) => (
            <CardItem
              key={product.id}
              product={product}
              expanded={selectedProduct === product}
              onToggleExpand={() => handleToggleExpand(product)}
            />
          ))}
      </div>
      </section> */}

        <CardRow products={addonItems} header='MIX AMD MATCH MODULES IMPLEMENT' />
        <AdditionalServices/>
      {/* <section className='mb-10'>
      <h2 className='text-2xl font-bold mb-4'>MIX AMD MATCH MODULES IMPLEMENT</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {addonItems
          
          .map((product) => (
            <CardItem
              key={product.id}
              product={product}
              expanded={selectedProduct === product}
              onToggleExpand={() => handleToggleExpand(product)}
            />
          ))}
      </div>
      </section> */}



      {/* <section className='mb-10'>
      <h2 className='text-2xl font-bold mb-4'>One-Time Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {productItems
          
          .map((product) => (
            <CardItem
              key={product.id}
              product={product}
              expanded={selectedProduct === product}
              onToggleExpand={() => handleToggleExpand(product)}
            />
          ))}
      </div>
      </section> */}
    </div>
  );
}

export default ServicesByType
// export default function ServicesPageWrapper(){
//   return(
//     <Suspense>
//     <ServicesByType type={''}/>
//     </Suspense>
//   )
// }