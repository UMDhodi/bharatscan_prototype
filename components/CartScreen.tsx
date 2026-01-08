
import React, { useState } from 'react';
import { CartItem } from '../types';

interface Props {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onReset: () => void;
  onBack: () => void;
  onHome: () => void;
  onProceedToPay: () => void;
}

export const CartScreen: React.FC<Props> = ({ 
  cart, 
  onUpdateQuantity, 
  onRemove, 
  onReset,
  onBack,
  onHome,
  onProceedToPay
}) => {
  const [isDone, setIsDone] = useState(false);
  
  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
  const totalMRP = cart.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const totalDiscount = totalMRP - subtotal;
  const gstRate = 0.12; // 12% flat mock GST
  const gstAmount = Math.round(subtotal * gstRate);
  const grandTotal = subtotal + gstAmount;

  if (cart.length === 0) {
    return (
      <div className="flex-1 flex flex-col bg-slate-50">
        <div className="p-6 pt-12 flex items-center justify-between bg-white border-b border-slate-100">
           <button onClick={onHome} className="text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></button>
           <h3 className="text-lg font-bold">Shopping Cart</h3>
           <div className="w-6"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">Cart is Empty</h4>
          <p className="text-slate-500 mb-8">Ready to shop? Head to the scanner to add some items!</p>
          <button 
            onClick={onBack}
            className="w-full py-4 bg-indigo-900 text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
          >
            Open Scanner
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center justify-between z-10">
        <button onClick={onBack} className="text-slate-800 p-2 hover:bg-slate-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">My Cart ({cart.length})</h3>
        <button onClick={onReset} className="text-red-500 font-bold text-sm px-3 py-1 hover:bg-red-50 rounded-lg">Reset</button>
      </div>

      {/* SCROLLABLE SECTION */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex gap-4 animate-in slide-in-from-right duration-300">
            <div className="w-20 h-20 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-slate-800 truncate">{item.name}</h4>
              <p className="text-[10px] text-slate-500 font-medium mb-1 uppercase tracking-wider">{item.category} • {item.weight}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-indigo-900">₹{item.finalPrice}</span>
                {item.discount > 0 && (
                  <>
                    <span className="text-xs text-slate-400 line-through">₹{item.mrp}</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{item.discount}% OFF</span>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1.5 hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="px-3 text-sm font-bold text-slate-800">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1.5 hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-xs text-red-500 font-bold p-1 hover:bg-red-50 rounded">Remove</button>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={onBack}
          className="w-full py-4 border-2 border-dashed border-indigo-200 rounded-3xl text-indigo-500 font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Scan More Items
        </button>
        {/* Extra padding for bottom content */}
        <div className="h-8"></div>
      </div>

      {/* FIXED BOTTOM SECTION */}
      <div className="bg-white p-6 rounded-t-[40px] shadow-[0_-15px_30px_rgba(0,0,0,0.08)] border-t border-slate-100 z-20">
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Price ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
            <span>₹{totalMRP}</span>
          </div>
          {totalDiscount > 0 && (
            <div className="flex justify-between text-sm text-green-600 font-medium">
              <span>Item Discounts</span>
              <span>- ₹{totalDiscount}</span>
            </div>
          )}
          <div className="flex justify-between text-sm text-slate-500">
            <span>GST (12%)</span>
            <span>+ ₹{gstAmount}</span>
          </div>
          <div className="h-px bg-slate-100 my-2"></div>
          <div className="flex justify-between text-xl font-bold text-indigo-900">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>

        <div className="flex gap-3">
          {!isDone ? (
            <>
              <button 
                onClick={onHome}
                className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl active:scale-95 transition-all"
              >
                Home
              </button>
              <button 
                onClick={() => setIsDone(true)}
                className="flex-[2] py-4 bg-indigo-900 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 active:scale-95 transition-all"
              >
                Done
              </button>
            </>
          ) : (
            <button 
              onClick={onProceedToPay}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-2 animate-pulse active:scale-95 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Pay Now ₹{grandTotal}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
