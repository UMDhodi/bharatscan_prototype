
import React from 'react';
import { AppView } from '../types';

interface Props {
  onViewChange: (view: AppView) => void;
  cartCount: number;
}

export const HomeScreen: React.FC<Props> = ({ onViewChange, cartCount }) => {
  const menuItems = [
    { id: AppView.HISTORY, label: 'Scan History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-blue-50 text-blue-600' },
    { id: AppView.PROFILE, label: 'User Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: 'bg-purple-50 text-purple-600' },
    { id: AppView.SETTINGS, label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', color: 'bg-orange-50 text-orange-600' },
    { id: AppView.LANGUAGE, label: 'Language', icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.19 15.378 3 18.5', color: 'bg-red-50 text-red-600' },
    { id: 'support', label: 'Support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-green-50 text-green-600' },
    { id: 'about', label: 'About App', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-teal-50 text-teal-600' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-indigo-900 px-6 pt-12 pb-20 rounded-b-[40px] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onViewChange(AppView.PROFILE)}
              className="w-12 h-12 bg-white rounded-full border border-white/20 overflow-hidden shadow-lg active:scale-90 transition-transform"
            >
               <img 
                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4" 
                 alt="User Avatar" 
                 className="w-full h-full object-cover"
               />
            </button>
            <div>
              <p className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.2em]">Member ID: B-1029</p>
              <h3 className="text-white text-xl font-bold">Rahul Sharma</h3>
            </div>
          </div>
          <button 
            onClick={() => onViewChange(AppView.CART)}
            className="relative p-2 bg-white/10 rounded-xl border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-indigo-900">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        
        <div className="bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-md">
          <p className="text-white/80 text-sm">Active Shopping Session at</p>
          <p className="text-white font-bold text-lg">Reliance Smart, Mumbai</p>
        </div>
      </div>

      <div className="px-6 -mt-10 flex-1 overflow-y-auto pb-10">
        <div className="grid grid-cols-1 gap-6 mb-8">
          <button 
            onClick={() => onViewChange(AppView.SCANNER)}
            className="group relative overflow-hidden bg-white p-6 rounded-[32px] shadow-xl shadow-indigo-100 flex items-center gap-6 border-2 border-indigo-50 active:scale-[0.98] transition-all"
          >
            <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-2xl font-black text-indigo-900">Start Scanning</h4>
              <p className="text-slate-500 font-medium text-sm">Scan items as you pick them</p>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => {
                if (Object.values(AppView).includes(item.id as AppView)) {
                  onViewChange(item.id as AppView);
                }
              }}
              className="bg-white p-5 rounded-3xl shadow-md flex flex-col items-center gap-3 border border-slate-100 active:bg-slate-50 active:scale-95 transition-all"
            >
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
