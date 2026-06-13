/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for WalletBalanceCard.tsx
 */
import { Wallet, Zap } from 'lucide-react';

interface WalletBalanceCardProps {
  stxBalance: string;
}

/**
 * Component: WalletBalanceCard
 * Handles the UI and state for WalletBalanceCard in StacksQuest.
 */
export function WalletBalanceCard({ stxBalance }: WalletBalanceCardProps) {
  return (
    <div className="glass p-6 rounded-2xl mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Wallet className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold text-muted-foreground uppercase">Available</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">STX Holdings</p>
      <h3 className="text-3xl font-bold">{stxBalance} <span className="text-sm font-normal text-muted-foreground">STX</span></h3>
      <p className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
        <Zap className="w-3 h-3 text-primary" />
        Earning 8.5% APY via Stacking
      </p>
    </div>
  );
}
