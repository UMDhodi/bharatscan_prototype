
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

export const SettingsScreen: React.FC<Props> = ({ onBack }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    biometrics: true,
    offerUpdates: true,
    darkMode: false,
    autoCheckout: true,
    locationAccess: true
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    {
      title: 'App Experience',
      items: [
        { label: 'Push Notifications', key: 'notifications' as const, desc: 'Real-time billing & scan alerts' },
        { label: 'Dark Mode (Beta)', key: 'darkMode' as const, desc: 'Optimized for night shopping' },
        { label: 'Express Checkout', key: 'autoCheckout' as const, desc: 'Proceed to pay automatically' }
      ]
    },
    {
      title: 'Security & Privacy',
      items: [
        { label: 'Biometric Login', key: 'biometrics' as const, desc: 'FaceID or Fingerprint for payments' },
        { label: 'Precise Location', key: 'locationAccess' as const, desc: 'Detect nearby stores automatically' },
        { label: 'Offer Personalization', key: 'offerUpdates' as const, desc: 'Ads based on your scan history' }
      ]
    }
  ];

  const actionLinks = [
    { label: 'Change Transaction PIN', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { label: 'Privacy Policy', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { label: 'Help & Support Center', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">Settings</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1">{section.title}</h4>
            <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm divide-y divide-slate-50">
              {section.items.map((item, i) => (
                <div key={i} className="p-5 flex items-center justify-between">
                  <div className="flex-1 pr-4">
                    <p className="font-bold text-slate-700">{item.label}</p>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => toggle(item.key)}
                    className={`w-12 h-6 rounded-full transition-all relative ${settings[item.key] ? 'bg-indigo-600' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${settings[item.key] ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1">Account & Support</h4>
          <div className="space-y-3">
            {actionLinks.map((link, i) => (
              <button key={i} className="w-full bg-white p-5 rounded-[24px] flex items-center justify-between shadow-sm border border-slate-100 active:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                     </svg>
                   </div>
                   <span className="font-bold text-slate-700 text-sm">{link.label}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 pb-10">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">App Version 2.6.4 Build 88</p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-6 bg-slate-200"></div>
            <p className="text-[10px] text-slate-300 font-bold">BHARATSCAN SECURED 🔒</p>
            <div className="h-px w-6 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
