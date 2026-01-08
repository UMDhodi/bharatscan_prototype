
import React, { useState, useMemo } from 'react';
import { MOCK_HISTORY, MOCK_PRODUCTS } from '../constants';
import { HistoryEntry } from '../types';

interface Props {
  onBack: () => void;
}

export const HistoryScreen: React.FC<Props> = ({ onBack }) => {
  const [selectedReceipt, setSelectedReceipt] = useState<HistoryEntry | null>(null);

  // Helper to generate unique items for each receipt based on its itemCount
  const receiptItems = useMemo(() => {
    if (!selectedReceipt) return [];
    
    // We deterministically pick products based on the receipt ID for prototype stability
    const count = selectedReceipt.itemCount;
    const items = [];
    let remainingAmount = selectedReceipt.amount - Math.round(selectedReceipt.amount * 0.12); // Exclude GST
    
    for (let i = 0; i < Math.min(count, 4); i++) {
        const prod = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
        const qty = i === 0 && count > 4 ? count - 3 : 1;
        const itemPrice = Math.round(remainingAmount / (Math.min(count, 4)));
        items.push({
            name: prod.name,
            qty: qty,
            price: itemPrice
        });
    }
    return items;
  }, [selectedReceipt]);

  return (
    <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">Scan History</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {MOCK_HISTORY.map((entry) => (
          <div key={entry.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 active:bg-slate-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-slate-800">{entry.storeName}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{entry.date} • {entry.time}</p>
              </div>
              <span className="text-indigo-600 font-black">₹{entry.amount}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-bold">
                {entry.itemCount} Items
              </span>
              <button 
                onClick={() => setSelectedReceipt(entry)}
                className="text-indigo-600 text-xs font-black flex items-center gap-1 bg-indigo-50 px-3 py-2 rounded-xl active:scale-95 transition-transform"
              >
                View Receipt
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Receipt Modal */}
      {selectedReceipt && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center">
          <div className="w-full h-[92%] bg-white rounded-t-[40px] flex flex-col animate-[slideUp_0.3s_ease-out] shadow-2xl">
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2"></div>
            
            <div className="flex justify-between items-center px-8 py-4 border-b border-slate-50">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="text-xl font-black text-slate-800 tracking-tight">E-Receipt</h4>
               </div>
               <button 
                 onClick={() => setSelectedReceipt(null)}
                 className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="text-center mb-6">
                <h5 className="text-2xl font-black text-indigo-900">{selectedReceipt.storeName}</h5>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Certified BharatScan Store</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-[32px] space-y-4 mb-6 shadow-inner border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Date & Time</span>
                  <span className="text-sm font-bold text-slate-700">{selectedReceipt.date} • {selectedReceipt.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Payment Method</span>
                  <span className="text-sm font-bold text-slate-700">{selectedReceipt.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Reference ID</span>
                  <span className="text-sm font-bold text-slate-700 font-mono tracking-tight">{selectedReceipt.referenceId}</span>
                </div>
                
                <div className="h-px bg-slate-200 border-dashed border-b my-2"></div>
                
                <div className="pt-1">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Items Detailed ({selectedReceipt.itemCount})</p>
                   <div className="space-y-3">
                      {receiptItems.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-800 leading-tight">{item.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium">Quantity: {item.qty}</p>
                          </div>
                          <span className="text-sm font-black text-slate-700">₹{item.price}</span>
                        </div>
                      ))}
                      
                      <div className="h-px bg-slate-200/50 mt-4"></div>
                      
                      <div className="flex justify-between text-[11px] font-medium text-slate-500 pt-1">
                        <span>Includes GST (12%)</span>
                        <span>₹{Math.round(selectedReceipt.amount * 0.12)}</span>
                      </div>
                   </div>
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-slate-200">
                   <span className="text-lg font-black text-slate-800">Total Paid</span>
                   <span className="text-2xl font-black text-indigo-900">₹{selectedReceipt.amount}</span>
                </div>
              </div>

              <div className="flex flex-col items-center pb-8">
                 <div className="p-4 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-indigo-100/50 mb-4 scale-105">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BharatScan_VERIFY_${selectedReceipt.referenceId}`} 
                      alt="Receipt QR" 
                      className="w-32 h-32"
                    />
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] text-center max-w-[220px] leading-relaxed">
                    Verify this QR at the exit gate for security clearance.
                 </p>
              </div>
            </div>

            <div className="p-8 bg-white border-t border-slate-100 flex gap-3 pb-10">
               <button className="flex-1 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl active:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
               </button>
               <button className="flex-[2] py-4 bg-indigo-900 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200/50 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download E-Bill
               </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};
