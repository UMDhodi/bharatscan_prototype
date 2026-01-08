
import { Product, HistoryEntry } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Maggi 2-Minute Noodles (560g)',
    category: 'Snacks & Instant Food',
    mrp: 98,
    discount: 5,
    finalPrice: 93,
    weight: '560g Pack',
    barcode: '8901058000101',
    image: 'https://picsum.photos/seed/maggi/200/200'
  },
  {
    id: '2',
    name: 'Amul Gold Milk (1L)',
    category: 'Dairy',
    mrp: 66,
    discount: 0,
    finalPrice: 66,
    weight: '1L Tetra',
    barcode: '8901262010011',
    image: 'https://picsum.photos/seed/milk/200/200'
  },
  {
    id: '3',
    name: 'Parle-G Gold Biscuits (1kg)',
    category: 'Biscuits',
    mrp: 120,
    discount: 10,
    finalPrice: 108,
    weight: '1kg Family Pack',
    barcode: '8901209101017',
    image: 'https://picsum.photos/seed/parle/200/200'
  },
  {
    id: '4',
    name: 'Tata Tea Gold (500g)',
    category: 'Beverages',
    mrp: 340,
    discount: 0,
    finalPrice: 340,
    weight: '500g Jar',
    barcode: '8901058100100',
    image: 'https://picsum.photos/seed/tea/200/200'
  },
  {
    id: '5',
    name: "Haldiram's Bhujia Sev",
    category: 'Snacks',
    mrp: 220,
    discount: 20,
    finalPrice: 176,
    weight: '400g Pack',
    barcode: '8904063200111',
    image: 'https://picsum.photos/seed/snack/200/200'
  },
  {
    id: '6',
    name: 'Dettol Liquid Soap (250ml)',
    category: 'Personal Care',
    mrp: 110,
    discount: 12,
    finalPrice: 96,
    weight: '250ml Pump',
    barcode: '8901396111111',
    image: 'https://picsum.photos/seed/soap/200/200'
  }
];

export const MOCK_HISTORY: HistoryEntry[] = [
  { id: 'h1', storeName: 'Reliance Smart, Mumbai', date: '24 May 2024', time: '14:30', amount: 1250, itemCount: 12, paymentMethod: 'UPI (PhonePe)', referenceId: 'BS9201928374' },
  { id: 'h2', storeName: 'Big Bazaar, Bangalore', date: '15 May 2024', time: '11:15', amount: 450, itemCount: 4, paymentMethod: 'Google Pay', referenceId: 'BS8827311209' },
  { id: 'h3', storeName: 'D-Mart, Pune', date: '02 May 2024', time: '19:45', amount: 3200, itemCount: 28, paymentMethod: 'Credit Card', referenceId: 'BS7736251002' },
  { id: 'h4', storeName: 'Spencers, Kolkata', date: '20 Apr 2024', time: '16:20', amount: 890, itemCount: 7, paymentMethod: 'Amazon Pay', referenceId: 'BS1129388475' },
  { id: 'h5', storeName: 'More Retail, Hyderabad', date: '10 Apr 2024', time: '09:10', amount: 115, itemCount: 1, paymentMethod: 'Paytm Wallet', referenceId: 'BS0092837461' },
  { id: 'h6', storeName: 'Spar Hypermarket, Chennai', date: '05 Apr 2024', time: '13:05', amount: 2150, itemCount: 15, paymentMethod: 'UPI (BHIM)', referenceId: 'BS5546372819' },
  { id: 'h7', storeName: 'Star Bazar, Delhi', date: '28 Mar 2024', time: '17:50', amount: 670, itemCount: 5, paymentMethod: 'Debit Card', referenceId: 'BS4491028374' },
  { id: 'h8', storeName: 'Nature\'s Basket, Gurgaon', date: '12 Mar 2024', time: '12:30', amount: 4200, itemCount: 18, paymentMethod: 'Net Banking', referenceId: 'BS3327110928' },
  { id: 'h9', storeName: 'Ratnadeep, Hyderabad', date: '01 Mar 2024', time: '20:15', amount: 320, itemCount: 3, paymentMethod: 'Google Pay', referenceId: 'BS2281029384' },
  { id: 'h10', storeName: 'EasyDay, Chandigarh', date: '15 Feb 2024', time: '10:40', amount: 980, itemCount: 9, paymentMethod: 'PhonePe', referenceId: 'BS1192837465' }
];

export const APP_THEME = {
  primary: '#1e3a8a',
  accent: '#f97316',
  success: '#16a34a',
  background: '#f8fafc'
};
