'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    // Check for existing session
    const savedAddress = localStorage.getItem('stacks_quest_address');
    if (savedAddress) {
      setUser({ address: savedAddress, isConnected: true });
    }
    setIsLoading(false);
  }, []);

  const connect = async () => {
    try {
      const { showConnect } = await import('@stacks/connect');
      showConnect({
        appDetails: {
          name: 'Stacks Quest',
          icon: '/icon.png',
        },
        onFinish: (data) => {
          const address = data.userSession.loadUserData().profile.stxAddress.testnet;
          setUser({ address, isConnected: true });
          localStorage.setItem('stacks_quest_address', address);
        },
        onCancel: () => {
          console.log('User cancelled connection');
        },
      });
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const disconnect = () => {
    setUser(null);
    localStorage.removeItem('stacks_quest_address');
  };

  return (
    <StacksAuthContext.Provider value={{ user, isLoading, connect, disconnect }}>
      {children}
    </StacksAuthContext.Provider>
  );
}
