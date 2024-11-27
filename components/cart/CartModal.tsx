'use client';
import { useCartContext } from '@/utils/context/CartContext';
import { FaTimes } from 'react-icons/fa';
import { CartItem } from './cart-item/CartItem';
// import { Button } from '../ui/button';
import Link from 'next/link';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cart } = useCartContext();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-background sm:min-w-[600px] p-5 rounded-lg relative max-h-screen overflow-y-auto '>
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-600'
        >
          <FaTimes size={20} />
        </button>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>

        {cart.length > 0 ? (
          <>
            {/* Grid layout for items */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-200'>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className='bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-primary transition'
                >
                  <CartItem item={item} />
                  {/* Remove Button Below Item */}
                </li>
              ))}
            </ul>

            {/* Checkout Button */}

            <div className='flex justify-center  mt-10'>
              <Link href='/checkout' className='w-full'>
                <button
                  className='relative  h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 block w-full '
                  onClick={onClose}
                >
                  {/* Larger animation with proper scaling */}
                  <span className='absolute  inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9b08c_0%,#e64833_50%,#d9b08c_100%)] ' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-destructive  text-md font-medium text-white backdrop-blur-3xl px-2 py-3 '>
                    Checkout
                  </span>
                </button>
              </Link>
            </div>

            {/* <Button
              asChild
              onClick={onClose}
              className='bg-primary text-white py-2 px-4 rounded-lg transition mt-4 block w-full'
            >
              <Link className='text-center' href='/checkout'>Checkout</Link>
            </Button> */}
          </>
        ) : (
          <p className='text-destructive'>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
