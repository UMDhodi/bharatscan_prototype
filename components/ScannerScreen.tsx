
import React, { useRef, useEffect, useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';

interface Props {
  onBack: () => void;
  onScan: (barcode: string) => void;
}

export const ScannerScreen: React.FC<Props> = ({ onBack, onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasPermission(true);
      } catch (err) {
        console.error("Camera access denied", err);
        setHasPermission(false);
      }
    }
    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const simulateScan = () => {
    // Pick a random product from the mock database to simulate a varied scan
    const randomIndex = Math.floor(Math.random() * MOCK_PRODUCTS.length);
    const randomBarcode = MOCK_PRODUCTS[randomIndex].barcode;
    onScan(randomBarcode); 
  };

  return (
    <div className="flex-1 bg-black relative overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        {hasPermission === false ? (
          <div className="h-full flex flex-col items-center justify-center p-10 text-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Camera Access Denied</h3>
            <p className="text-slate-400 text-sm mb-6">We need camera access to scan product barcodes.</p>
            <button onClick={onBack} className="px-6 py-2 bg-white/20 rounded-lg">Go Back</button>
          </div>
        ) : (
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover grayscale opacity-80"
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col">
        <div className="p-6 pt-12 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Barcode Only</span>
          </div>
          <div className="w-12"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-12">
          <div className="relative w-full aspect-square max-w-[280px]">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white rounded-br-3xl"></div>
            
            <div className="absolute left-4 right-4 h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-[scan_2s_ease-in-out_infinite] rounded-full"></div>
          </div>
          
          <p className="mt-8 text-white/80 font-medium text-center bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm">
            Align barcode inside the frame
          </p>
        </div>

        <div className="p-8 pb-12 flex flex-col items-center gap-4">
          <button 
            onClick={simulateScan}
            className="w-full py-4 bg-white text-indigo-900 font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-black/50"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Simulate Scan (Random Product)
          </button>
          <div className="flex gap-8">
            <button className="flex flex-col items-center gap-1">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
               </div>
               <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Torch</span>
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scan {
            0%, 100% { top: 10%; }
            50% { top: 90%; }
          }
        `}
      </style>
    </div>
  );
};
