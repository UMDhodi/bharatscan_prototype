
import React from 'react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white">
      <div className="relative mb-8 animate-bounce">
        <div className="w-24 h-24 bg-indigo-900 rounded-3xl flex items-center justify-center shadow-lg transform rotate-12">
           <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">BharatScan</h1>
      <p className="mt-2 text-indigo-500 font-medium">Shop Smart. Scan Bharat.</p>
      
      <div className="absolute bottom-16 flex flex-col items-center">
        <div className="flex gap-1 mb-4">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
        </div>
        <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase">Made with ❤️ in India</p>
      </div>
    </div>
  );
};
