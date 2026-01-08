
import React from 'react';
import { PaymentMethod } from '../types';

interface Props {
  total: number;
  onBack: () => void;
  onSuccess: (total: number) => void;
}

export const PaymentScreen: React.FC<Props> = ({ total, onBack, onSuccess }) => {
  const paymentMethods: { name: PaymentMethod; icon: string; color: string }[] = [
    { name: 'Paytm', icon: 'P', color: 'bg-blue-500' },
    { name: 'Google Pay', icon: 'G', color: 'bg-slate-800' },
    { name: 'PhonePe', icon: 'Ph', color: 'bg-purple-600' },
    { name: 'Amazon Pay', icon: 'A', color: 'bg-orange-500' },
    { name: 'Card', icon: '💳', color: 'bg-slate-700' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">Payment Options</h3>
      </div>

      <div className="p-8 text-center">
        <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Total Payable Amount</p>
        <h2 className="text-4xl font-black text-indigo-900">₹{total}</h2>
      </div>

      <div className="px-6 flex-1">
        <h4 className="text-sm font-bold text-slate-700 mb-4 px-2 uppercase tracking-tight">Select Payment Method</h4>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <button 
              key={method.name}
              onClick={() => onSuccess(total)}
              className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group active:bg-indigo-50 active:border-indigo-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <span className="font-bold text-slate-700">{method.name}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 text-center text-slate-400">
         <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Secured by BharatPay 256-bit Encryption</p>
      </div>
    </div>
  );
};
