
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

export const LanguageScreen: React.FC<Props> = ({ onBack }) => {
  const [selected, setSelected] = useState('English');
  const languages = [
    { name: 'English', native: 'English' },
    { name: 'Hindi', native: 'हिन्दी' },
    { name: 'Marathi', native: 'मराठी' },
    { name: 'Gujarati', native: 'ગુજરાતી' },
    { name: 'Bengali', native: 'বাংলা' },
    { name: 'Tamil', native: 'தமிழ்' },
    { name: 'Telugu', native: 'తెలుగు' },
    { name: 'Kannada', native: 'ಕನ್ನಡ' },
    { name: 'Malayalam', native: 'മലയാളം' },
    { name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { name: 'Odia', native: 'ଓଡ଼ିଆ' }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">Select Language</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 gap-3">
        {languages.map((lang) => (
          <button 
            key={lang.name}
            onClick={() => setSelected(lang.name)}
            className={`p-5 rounded-3xl border flex items-center justify-between transition-all active:scale-95 ${
              selected === lang.name 
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                : 'bg-white border-slate-100 text-slate-700 shadow-sm'
            }`}
          >
            <div className="text-left">
              <p className="font-bold text-lg leading-tight">{lang.native}</p>
              <p className={`text-[10px] font-black uppercase tracking-wider ${selected === lang.name ? 'text-indigo-200' : 'text-slate-400'}`}>
                {lang.name}
              </p>
            </div>
            {selected === lang.name && (
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
            )}
          </button>
        ))}
      </div>
      
      <div className="p-6 bg-white border-t border-slate-100">
         <button 
           onClick={onBack}
           className="w-full py-4 bg-indigo-900 text-white font-bold rounded-2xl active:scale-95 transition-transform"
         >
           Save Selection
         </button>
      </div>
    </div>
  );
};
