'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { connect as authenticateWallet, disconnect as logoutWallet, isConnected, getLocalStorage } from '@stacks/connect';

interface StacksUser {
  address: string;
  isConnected: boolean;
}

interface StacksAuthContextType {
  user: StacksUser | null;
  isLoading: boolean;
  connect: () => void;
  disconnect: () => void;
}

const StacksAuthContext = createContext<StacksAuthContextType>({
  user: null,
  isLoading: true,
  connect: () => {},
  disconnect: () => {},
});

export function useStacksAuth() {
  return useContext(StacksAuthContext);
}

export function StacksAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StacksUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isConnected()) {
      try {
        const stored: any = getLocalStorage();
        if (stored && stored.addresses) {
          const stxAddrs = Array.isArray(stored.addresses) ? stored.addresses : (stored.addresses.stx || []);
          const address = stxAddrs.find((a: any) => ['mainnet', undefined].includes(a.network))?.address || stxAddrs[0]?.address || '';
          if (address) {
            setUser({ address, isConnected: true });
          }
        }
      } catch (e) {
        console.error('Error loading stored data:', e);
      }
    }
    setIsLoading(false);
  }, []);

  const connect = async () => {
    try {
      const response = await authenticateWallet({
        forceWalletSelect: true,
      });
      
      if (response && response.addresses) {
        const address = response.addresses.find((a: any) => a.network === 'mainnet')?.address || response.addresses[0]?.address || '';
        setUser({ address, isConnected: true });
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const disconnect = () => {
    logoutWallet();
    setUser(null);
  };

  return (
    <StacksAuthContext.Provider value={{ user, isLoading, connect, disconnect }}>
      {children}
    </StacksAuthContext.Provider>
  );
}
