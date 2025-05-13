export type ThemeColor = 'light' | 'dark';

export interface IntThemeContext {
  theme: ThemeColor;
  toggleTheme: () => void;
}

export interface IntContact {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  period?: Date;
  check: boolean;
}

export interface IntContactError {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  check: string;
}

export interface IntSelectOption {
  name: string;
}

export interface IntShopContext {
  shopType: IntProductType;
  cart: IntProductPayload[];
  cartCount: number;
  selectCounter: number;
  totalModules:number;
  setSelectCounter: (count: number) => void;
  setType: (type: IntProductType) => void;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
}

export interface IntProductPayload {
  title: string;
  type: string;
  price: number;
  priceApi: string;
  id: number;
  option: IntProductOption;
}

export interface IntProductCard {
  product: IntProduct;
  disabled?: boolean;
}

export interface IntProductDescription {
  visible: boolean;
  onClose: () => void;
  product: IntSubscription;
}

export type IntProductType = 'startup' | 'micro' | 'sme';
export type IntProductOption = 'subscription' | 'addon' | 'product';

export type ProductType = 'startup' | 'micro' | 'sme';
export type OptionType = 'subscription' | 'addon';

interface BaseItem {
  titleKey: string;
  price: number;
  priceApi: string;
  id: number;
  type: ProductType;
  data: string[];
  option: OptionType;
  itemType: 'product' | 'subscription';
}

export interface IntProduct extends BaseItem {
  descriptionKey: string;
  itemType: 'product';
}

export interface IntSubscription extends BaseItem {
  descriptionKey?: string;
  itemType: 'subscription';
}

export interface IntLogo {
  big?: boolean;
}

export interface IntDescriptor {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  id?: string;
}

export interface IntCartItem {
  item: IntProductPayload;
}

export interface IntProductTypeBox {
  name: string;
  data: string[];
  type: IntProductType;
  imageUrl?: string;
}

export interface IntTestimonial {
  item: {
    role: string;
    text: string;
  };
}
