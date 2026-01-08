
import React from 'react';

interface Props {
  total: number;
  onDone: () => void;
}

export const SuccessScreen: React.FC<Props> = ({ total, onDone }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-green-50 rounded-b-[60px] -z-10"></div>
      
      <div className="mb-8 flex flex-col items-center">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-100 mb-6 scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-slate-800">Payment Successful!</h2>
        <p className="text-green-600 font-bold mt-1 tracking-widest uppercase text-xs">Transaction ID: TXN9201928374</p>
      </div>

      {/* Bill Card */}
      <div className="w-full bg-white rounded-[40px] shadow-2xl p-8 border border-slate-50 flex flex-col items-center mb-8 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-900 text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em]">
           Official Bill
        </div>

        <div className="w-full space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm font-medium text-slate-500 border-b border-dashed border-slate-100 pb-2">
            <span>Amount Paid</span>
            <span className="text-lg font-black text-indigo-900">₹{total}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-medium text-slate-500">
            <span>Date & Time</span>
            <span className="text-slate-800 font-bold">{new Date().toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-medium text-slate-500">
            <span>Payment Method</span>
            <span className="text-slate-800 font-bold">Unified Payments Interface</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-3xl mb-4">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BharatScanOrder_Total_938" 
            alt="Bill QR Code" 
            className="w-32 h-32"
          />
        </div>
        <p className="text-xs text-slate-400 font-medium text-center mb-6">
          Scan this QR at the exit gate for verification.
        </p>

        <button 
          className="w-full py-4 border-2 border-slate-200 text-slate-600 font-bold rounded-2xl flex items-center justify-center gap-2 active:bg-slate-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download E-Bill
        </button>
      </div>

      <button 
        onClick={onDone}
        className="w-full py-5 bg-indigo-900 text-white font-bold rounded-3xl shadow-xl shadow-indigo-100 active:scale-95 transition-transform"
      >
        Back to Home
      </button>
      
      <p className="mt-6 text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        Environment Friendly Digital Receipt
      </p>
    </div>
  );
};
