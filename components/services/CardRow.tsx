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
  const { addToCart } = useCartContext();

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="mb-10 mt-20">
      {/* Header */}
      <div className="min-h-20">
        <h2 className="text-xl font-bold">{header}</h2>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => openModal(product)}
            className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 min-h-40 flex items-center justify-between"
          >
            <h3 className="text-lg font-semibold text-gray-200">{product.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-gray-900 shadow-lg w-full max-w-md p-6 transform transition-transform duration-300 translate-x-0 text-gray-100 flex flex-col justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-200 hover:text-primary"
            >
              Close
            </button>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 mt-4">
              {selectedProduct.title}
            </h3>
            <h4 className="font-semibold mb-2">Product Details</h4>
            <ul className="list-disc list-inside space-y-1">
              {selectedProduct.data.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-primary mb-4">
              Price: {selectedProduct.price}
            </p>
            <button
              onClick={() => {
                addToCart(selectedProduct.id);
                closeModal();
              }}
              className="bg-primary text-white py-2 px-4 rounded-lg transition mb-10"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardRow;
