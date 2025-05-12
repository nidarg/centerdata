'use client';

import Cookies from 'js-cookie';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { onetimeproduct, products, subscriptions } from '../products';
import { IntShopContext, IntProductPayload } from '../types';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';

const STORAGE_CART = 'app_cart';
const STORAGE_TYPE = 'app_type';

export type IntProductOption = 'subscription' | 'addon' | 'product';
export type IntProductType = 'startup' | 'micro' | 'sme';

const CartContext = createContext<IntShopContext>({
  cart: [],
  shopType: 'startup',
  cartCount: 0,
  selectCounter: 0,
  setSelectCounter: () => undefined,
  totalModules: 0,
  setType: () => undefined,
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  removeAllFromCart: () => undefined,
});

export const ShopProvider = ({ children }: PropsWithChildren) => {
  const t = useTranslations('cart.messages');
  const allProducts = [...products, ...onetimeproduct, ...subscriptions];
  const { toast } = useToast(); // Initialize the toast
  const totalModules = products.length + subscriptions.length;
  const [selectCounter, setSelectCounter] = useState<number>(0);
  // Initialize state
  const [cart, setCart] = useState<IntProductPayload[]>(() => {
    const storedCart = Cookies.get(STORAGE_CART);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartCount, setCartCount] = useState(() => {
    const storedCart = Cookies.get(STORAGE_CART);
    return storedCart ? JSON.parse(storedCart).length : 0;
  });

  const [shopType, setShopType] = useState<IntProductType>(() => {
    const storedType = Cookies.get(STORAGE_TYPE);
    return storedType
      ? (storedType.replace(/"/g, '') as IntProductType)
      : 'micro';
  });

  // Sync cartCount with cart length
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  // Add product to the cart
  const addToCart = (productId: number) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === productId);

    if (isProductInCart) {
      // Show a toast message if the product is already in the cart
      const product = allProducts.find((item) => item.id === productId);
      toast({
        description: t('alreadyInCart', { title: product?.title! }),
      });
      return; // Exit the function to prevent adding the duplicate
    }

    // Proceed to add the product to the cart
    const product = allProducts.find((item) => item.id === productId);

    if (!product) {
      console.error('Invalid product ID!');
      return;
    }

    const payload: IntProductPayload = {
      title: product.title,
      type: product.type,
      price: product.price,
      priceApi: product.priceApi,
      option: product.option,
      id: productId,
    };

    const updatedCart = [...cart, payload];
    setCart(updatedCart);
    Cookies.set(STORAGE_CART, JSON.stringify(updatedCart));
  };

  // Remove product from the cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    Cookies.set(STORAGE_CART, JSON.stringify(updatedCart));
  };

  // Remove all items from the cart
  const removeAllFromCart = () => {
    setCart([]);
    Cookies.set(STORAGE_CART, JSON.stringify([]));
  };

  // Update shop type
  const setType = (type: IntProductType) => {
    setShopType(type);
    Cookies.set(STORAGE_TYPE, JSON.stringify(type));
  };

  const value = {
    cart,
    shopType,
    setType,
    cartCount,
    selectCounter,
    setSelectCounter,
    totalModules,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook to use the CartContext
export const useCartContext = () => useContext(CartContext);
