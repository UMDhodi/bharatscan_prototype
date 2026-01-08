
export interface Product {
  id: string;
  name: string;
  category: string;
  mrp: number;
  discount: number;
  finalPrice: number;
  weight: string;
  barcode: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum AppView {
  SPLASH = 'SPLASH',
  AUTH = 'AUTH',
  HOME = 'HOME',
  SCANNER = 'SCANNER',
  CART = 'CART',
  PAYMENT = 'PAYMENT',
  SUCCESS = 'SUCCESS',
  HISTORY = 'HISTORY',
  PROFILE = 'PROFILE',
  SETTINGS = 'SETTINGS',
  LANGUAGE = 'LANGUAGE'
}

export type PaymentMethod = 'Paytm' | 'Google Pay' | 'Amazon Pay' | 'PhonePe' | 'Card';

export interface HistoryEntry {
  id: string;
  storeName: string;
  date: string;
  time: string;
  amount: number;
  itemCount: number;
  paymentMethod: string;
  referenceId: string;
}
