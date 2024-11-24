'use client';

import { FaShoppingBasket } from 'react-icons/fa';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useCartContext } from '@/utils/context/CartContext';
import CartModal from '../cart/CartModal';

function Basket() {
  const { cartCount } = useCartContext();
  const [showCart, setShowCart] = useState(false);

  // Toggle cart modal
  const toggleCart = () => setShowCart(!showCart);
  return (
    <>
      <Button
        variant='destructive'
        size='icon'
        onClick={toggleCart}
        className='relative'
      >
        <FaShoppingBasket
          className='text-white'
          style={{ width: '1.7rem', height: '1.7rem' }}
        />
        {cartCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold'>
            {cartCount}
          </span>
        )}
        {/* <span className='absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold'>
          99
        </span> */}
      </Button>

      {showCart && <CartModal onClose={toggleCart} />}
    </>
  );
}

export default Basket;
