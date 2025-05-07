

// 'use client';

// import React, { useState } from 'react';
// import { useCartContext } from '@/utils/context/CartContext';

// interface Product {
//   id: number;
//   title: string;
//   data: string[];
//   price: number;
// }

// interface CardRowProps {
//   products: Product[];
//   header: string;
// }

// const CardRow: React.FC<CardRowProps> = ({ products, header }) => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showPlanModal, setShowPlanModal] = useState(false);
//   const [showUpgradeModal, setShowUpgradeModal] = useState(false);
//   const[showAll, setShowAll] = useState(false)

//   const { addToCart, selectCounter, cartCount } = useCartContext();

//   const openModal = (product: Product) => {
//     if (selectCounter === 0) {
//       setShowPlanModal(true);
//       return;
//     }

//     if (cartCount >= selectCounter) {
//       setShowUpgradeModal(true);
//       return;
//     }

//     setSelectedProduct(product);
//   };

//   const closeModal = () => setSelectedProduct(null);
//   const closePlanModal = () => setShowPlanModal(false);
//   const closeUpgradeModal = () => setShowUpgradeModal(false);

//   return (
//     <section className='mb-10 mt-20'>
//       {/* Header */}
//       <div className='min-h-20'>
//         <h2 className='text-xl font-bold'>{header}</h2>
//       </div>

//       {/* Product List */}
//       <div className='space-y-4'>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => openModal(product)}
//             className='cursor-pointer bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 min-h-40 flex items-center justify-between'
//           >
//             <h3 className='text-lg font-semibold text-gray-200'>
//               {product.title}
//             </h3>
//           </div>
//         ))}
//       </div>

//       {/* Product Details Modal */}
//       {/* {selectedProduct && (
//         <div className='fixed inset-0 bg-black/50 z-50 flex justify-end'>
//           <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100'>
//             <button onClick={closeModal} className='absolute top-4 right-4'>
//               Close
//             </button>
//             <h3 className='text-2xl font-bold mb-4 mt-8'>{selectedProduct.title}</h3>
//             <p className='text-xl font-bold mb-4 mt-4'>Details</p>

//             <ul className='list-disc space-y-1'>
//               {selectedProduct.data.map((detail, index) => (
//                 <li key={index} className='text-left'>{detail}</li>
//               ))}
//             </ul>
//             <button
//               className='mt-6 px-4 py-2 bg-primary text-white rounded-lg'
//               onClick={() => {
//                 addToCart(selectedProduct.id);
//                 closeModal();
//               }}
//             >
//               Request a quotation
//             </button>
//           </div>
//         </div>
//       )} */}

//       {selectedProduct && (
//   <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
//     <div className="bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 relative">
//       <button onClick={closeModal} className="absolute top-4 right-4">
//         Close
//       </button>
//       <h3 className="text-2xl font-bold mb-4 mt-8">{selectedProduct.title}</h3>
//       <p className="text-xl font-bold mb-4 mt-4">Details</p>

//       <ul className="list-disc space-y-1">
//         {selectedProduct.data.slice(0, 3).map((detail, index) => (
//           <li key={index} className="text-left">{detail}</li>
//         ))}
//       </ul>

//       {/* Show More Button */}
//       {selectedProduct.data.length > 3 && (
//         <button
//           className="mt-4 text-primary underline"
//           onClick={() => setShowAll(true)}
//         >
//           More Details
//         </button>
//       )}

//       {/* Expanded List */}
//       {showAll && (
//         <ul className="list-disc space-y-1 mt-2">
//           {selectedProduct.data.slice(3).map((detail, index) => (
//             <li key={index + 3} className="text-left">{detail}</li>
//           ))}
//         </ul>
//       )}

//       {/* Request Quotation Button */}
//       <button
//         className="mt-6 px-4 py-2 bg-primary text-white rounded-lg"
//         onClick={() => {
//           addToCart(selectedProduct.id);
//           closeModal();
//         }}
//       >
//         Request a quotation
//       </button>
//     </div>
//   </div>
// )}


//       {/* Plan Selection Required Modal */}
//       {showPlanModal && (
//         <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
//           <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
//             <h3 className='text-xl font-bold mb-4'>Please choose a plan first</h3>
//             <p className='text-sm'>Light, Pro, or Premium</p>
//             <button onClick={closePlanModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'>
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Upgrade Plan Modal */}
//       {showUpgradeModal && (
//         <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
//           <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
//             <h3 className='text-xl font-bold mb-4'>For more services, please upgrade your plan</h3>
//             <button onClick={closeUpgradeModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CardRow;

'use client';

import React, { useState } from 'react';
import { useCartContext } from '@/utils/context/CartContext';

interface Product {
  id: number;
  title: string;
  data: string[];
  price: number;
}

interface CardRowProps {
  products: Product[];
  header: string;
  
}

const CardRow: React.FC<CardRowProps> = ({ products, header }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to control details visibility

  const { addToCart, selectCounter, cartCount } = useCartContext();

  const openModal = (product: Product) => {
    if (selectCounter === 0) {
      setShowPlanModal(true);
      return;
    }

    if (cartCount >= selectCounter) {
      setShowUpgradeModal(true);
      return;
    }

    setSelectedProduct(product);
    setShowAll(false); // Reset showAll when opening a new product modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowAll(false); // Reset when closing modal
  };
    const closePlanModal = () => setShowPlanModal(false);
  const closeUpgradeModal = () => setShowUpgradeModal(false);

  return (
    <section className='mb-10 mt-20'>
      {/* Header */}
      <div className='min-h-20'>
        <h2 className='text-xl font-bold'>{header}</h2>
      </div>

      {/* Product List */}
      <div className='space-y-4'>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => openModal(product)}
            className='cursor-pointer bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 min-h-40 flex items-center justify-between'
          >
            <h3 className='text-lg font-semibold text-gray-200'>
              {product.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 relative max-h-screen overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4">
              Close
            </button>
            <h3 className="text-2xl font-bold mb-4 mt-8">{selectedProduct.title}</h3>
            <p className="text-xl font-bold mb-4 mt-4">Details</p>

            {/* Display only first 3 items unless expanded */}
            <ul className="list-disc space-y-1">
              {selectedProduct.data.slice(0, showAll ? selectedProduct.data.length : 3).map((detail, index) => (
                <li key={index} className="text-left p-2">{detail}</li>
              ))}
            </ul>

            {/* More Details / Show Less Buttons */}
            {selectedProduct.data.length > 3 && (
              <div className="mt-4">
                {!showAll ? (
                  <button
                    className="text-primary underline"
                    onClick={() => setShowAll(true)}
                  >
                    More Details
                  </button>
                ) : (
                  <button
                    className="text-primary underline mt-2"
                    onClick={() => setShowAll(false)}
                  >
                    Show less...
                  </button>
                )}
              </div>
            )}

            {/* Request Quotation Button (Now separated from More Details) */}
            <button
              className="mt-6 px-4 py-2 bg-primary text-white rounded-lg w-full"
              onClick={() => {
                addToCart(selectedProduct.id);
                closeModal();
              }}
            >
              Request a quotation
            </button>
          </div>
        </div>
      )}

      {/* Plan Selection Required Modal */}
      {showPlanModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
          <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
            <h3 className='text-xl font-bold mb-4'>Please choose a plan first</h3>
            <p className='text-sm'>Light, Pro, or Premium</p>
            <button onClick={closePlanModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Upgrade Plan Modal */}
      {showUpgradeModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
          <div className='bg-gray-900 shadow-lg w-full max-w-md p-6 text-gray-100 text-center'>
            <h3 className='text-xl font-bold mb-4'>For more services, please upgrade your plan</h3>
            <button onClick={closeUpgradeModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardRow;

