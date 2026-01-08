
import React, { useState, useEffect, useCallback } from 'react';
import { AppView, CartItem, Product } from './types';
import { SplashScreen } from './components/SplashScreen';
import { AuthScreen } from './components/AuthScreen';
import { HomeScreen } from './components/HomeScreen';
import { ScannerScreen } from './components/ScannerScreen';
import { CartScreen } from './components/CartScreen';
import { PaymentScreen } from './components/PaymentScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { LanguageScreen } from './components/LanguageScreen';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.SPLASH);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  useEffect(() => {
    if (currentView === AppView.SPLASH) {
      const timer = setTimeout(() => {
        setCurrentView(AppView.AUTH);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleScan = (barcode: string) => {
    const found = MOCK_PRODUCTS.find(p => p.barcode === barcode);
    const product = found || MOCK_PRODUCTS[Math.floor(Math.random() * MOCK_PRODUCTS.length)];
    addToCart(product);
    setCurrentView(AppView.CART);
  };

  const handlePaymentSuccess = (total: number) => {
    setLastOrderTotal(total);
    clearCart();
    setCurrentView(AppView.SUCCESS);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 overflow-hidden">
      <div className="relative w-full h-full max-w-[450px] bg-white shadow-2xl overflow-hidden flex flex-col">
        {currentView === AppView.SPLASH && <SplashScreen />}
        {currentView === AppView.AUTH && <AuthScreen onContinue={() => setCurrentView(AppView.HOME)} />}
        {currentView === AppView.HOME && (
          <HomeScreen 
            onViewChange={setCurrentView} 
            cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
          />
        )}
        {currentView === AppView.SCANNER && (
          <ScannerScreen 
            onBack={() => setCurrentView(AppView.HOME)} 
            onScan={handleScan} 
          />
        )}
        {currentView === AppView.CART && (
          <CartScreen 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onReset={clearCart}
            onBack={() => setCurrentView(AppView.SCANNER)}
            onHome={() => setCurrentView(AppView.HOME)}
            onProceedToPay={() => setCurrentView(AppView.PAYMENT)}
          />
        )}
        {currentView === AppView.PAYMENT && (
          <PaymentScreen 
            total={cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0)}
            onBack={() => setCurrentView(AppView.CART)}
            onSuccess={(total) => handlePaymentSuccess(total)}
          />
        )}
        {currentView === AppView.SUCCESS && (
          <SuccessScreen 
            total={lastOrderTotal}
            onDone={() => setCurrentView(AppView.HOME)} 
          />
        )}
        {currentView === AppView.HISTORY && <HistoryScreen onBack={() => setCurrentView(AppView.HOME)} />}
        {currentView === AppView.PROFILE && <ProfileScreen onBack={() => setCurrentView(AppView.HOME)} />}
        {currentView === AppView.SETTINGS && <SettingsScreen onBack={() => setCurrentView(AppView.HOME)} />}
        {currentView === AppView.LANGUAGE && <LanguageScreen onBack={() => setCurrentView(AppView.HOME)} />}
      </div>
    </div>
  );
};

export default App;
