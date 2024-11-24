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

const STORAGE_CART = 'app_cart';
const STORAGE_TYPE = 'app_type';

export type IntProductOption = 'subscription' | 'addon' | 'product';
export type IntProductType = 'startup' | 'micro' | 'sme';

const CartContext = createContext<IntShopContext>({
  cart: [],
  shopType: 'startup',
  cartCount: 0,
  setType: () => undefined,
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  removeAllFromCart: () => undefined,
});

export const ShopProvider = ({ children }: PropsWithChildren) => {
  const allProducts = [...products, ...onetimeproduct, ...subscriptions];
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const storedCart = Cookies.get(STORAGE_CART);
    if (!storedCart) Cookies.set(STORAGE_CART, JSON.stringify([]));
    const storedType = Cookies.get(STORAGE_TYPE);
    if (!storedType) Cookies.set(STORAGE_TYPE, 'micro');
  }, []);

  const storedCart = JSON.parse(
    Cookies.get(STORAGE_CART) ?? '[]'
  ) as IntProductPayload[];
  const storedType = (Cookies.get(STORAGE_TYPE) ?? 'micro').replace(
    /"/g,
    ''
  ) as IntProductType;

  const [cart, setCart] = useState<IntProductPayload[]>(storedCart);
  const [shopType, setShopType] = useState<IntProductType>(storedType);

  const addToCart = (productId: number) => {
    const product = allProducts.find((item) => item.id === productId);

    if (!product) {
      console.error('Invalid add product to cart in provider!');
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

    const cartItems = [...cart, payload];
    setCart(cartItems);
    setCartCount((prevCount) => prevCount + 1);
    Cookies.set(STORAGE_CART, JSON.stringify(cartItems));
  };

  const removeFromCart = (productId: number) => {
    // Filter out only the item matching the provided productId
    const remainingItems = cart.filter((item) => item.id !== productId);
  
    // Update the state and cookies
    setCart(remainingItems);
    setCartCount(remainingItems.length); // Update cart count to match remaining items
    Cookies.set(STORAGE_CART, JSON.stringify(remainingItems));
  };

  const removeAllFromCart = () => {
    setCart([]);
    setCartCount(0);
    Cookies.set(STORAGE_CART, JSON.stringify([]));
  };

  const setType = (type: IntProductType) => {
    setShopType(type);
    Cookies.set(STORAGE_TYPE, JSON.stringify(type));
  };

  // useEffect(() => {
  //   if (cart.every((item) => item.option === 'addon') && cart.length)
  //     removeAllFromCart();
  // }, [cart]);

  const value = {
    cart,
    shopType,
    setType,
    cartCount,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
