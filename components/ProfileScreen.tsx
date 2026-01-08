
import React from 'react';

interface Props {
  onBack: () => void;
}

export const ProfileScreen: React.FC<Props> = ({ onBack }) => {
  const user = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@bharatscan.in',
    phone: '+91 98765 43210',
    memberSince: 'Oct 2023',
    points: 4250,
    address: 'HSR Layout, Sector 2, Bengaluru, 560102'
  };

  const sections = [
    { title: 'Personal Info', items: [
      { label: 'Email Address', value: user.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { label: 'Saved Address', value: user.address, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
    ]},
    { title: 'Payments & Rewards', items: [
      { label: 'BharatPoints Balance', value: `${user.points} Points`, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Linked UPI Handles', value: 'rahul@paytm, rsharma@okhdfc', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z' }
    ]}
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="p-6 pt-12 bg-white shadow-sm flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">User Profile</h3>
      </div>

      <div className="p-8 flex flex-col items-center bg-white border-b border-slate-100">
        <div className="relative mb-4 group">
          <div className="w-28 h-28 bg-indigo-50 rounded-full flex items-center justify-center border-4 border-indigo-100 overflow-hidden shadow-xl shadow-indigo-100/50">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4`} 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-1 right-1 w-9 h-9 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </button>
        </div>
        <h4 className="text-2xl font-black text-slate-800 tracking-tight">{user.name}</h4>
        <p className="text-slate-500 font-bold tracking-tight mb-2">{user.phone}</p>
        <div className="flex gap-2">
           <span className="text-[9px] bg-indigo-100 text-indigo-700 font-black px-3 py-1 rounded-full uppercase tracking-widest">Premium Member</span>
           <span className="text-[9px] bg-orange-100 text-orange-700 font-black px-3 py-1 rounded-full uppercase tracking-widest">Verified</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1">{section.title}</h5>
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex items-start gap-4 active:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-slate-700 leading-tight">{item.value}</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-6 pb-12">
          <button className="w-full bg-red-50 text-red-600 font-black py-5 rounded-[24px] active:bg-red-100 active:scale-95 transition-all flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out of BharatScan
          </button>
        </div>
      </div>
    </div>
  );
};
