'use client';

import { useStacksAuth } from '@/contexts/StacksAuthContext';
import { FortressButton } from './fortress-button';
import { LogOut } from 'lucide-react';

export function ConnectButton() {
  const { user, connect, disconnect } = useStacksAuth();

  if (user?.isConnected) {
    return (
      <FortressButton variant="outline" onClick={disconnect} className="gap-2">
        <LogOut className="w-4 h-4" /> Disconnect
      </FortressButton>
    );
  }

  return (
    <div className="flex justify-center">
      <FortressButton onClick={connect}>Connect Wallet</FortressButton>
    </div>
  );
}
