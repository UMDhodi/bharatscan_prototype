
import React, { useState } from 'react';

interface Props {
  onContinue: () => void;
}

export const AuthScreen: React.FC<Props> = ({ onContinue }) => {
  return (
    <div className="flex-1 flex flex-col p-8 pt-20 bg-white">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
        <p className="text-slate-500 mt-2">Join BharatScan for faster checkouts across any store in India.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
          <input 
            type="text" 
            placeholder="e.g. Rahul Sharma" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile Number</label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 text-sm font-bold">
              +91
            </span>
            <input 
              type="tel" 
              placeholder="9876543210" 
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email (Optional)</label>
          <input 
            type="email" 
            placeholder="rahul@example.com" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900"
          />
        </div>
      </div>

      <button 
        onClick={onContinue}
        className="mt-10 w-full py-4 bg-indigo-900 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-800 active:scale-[0.98] transition-all"
      >
        Create Account
      </button>

      <div className="mt-6 text-center">
        <p className="text-slate-500 text-sm">
          Already have an account? <button className="text-indigo-600 font-bold">Login</button>
        </p>
      </div>

      <div className="mt-auto pb-4 flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="h-px w-8 bg-slate-200"></div>
          <span>Modern Retail for Bharat</span>
          <div className="h-px w-8 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};
