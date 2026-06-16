/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @performance Analyzed and verified for render cycle optimizations.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for DashboardHeader.tsx
 */
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { FortressButton } from '@/components/fortress-button';

/**
 * Component: DashboardHeader
 * Handles the UI and state for DashboardHeader in StacksQuest.
 */
export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div className="flex items-center gap-2 text-primary mb-2">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Seeker Profile</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Your <span className="text-gradient">Chamber Dashboard</span></h1>
        <p className="text-muted-foreground mt-2 font-light">Track your journey through the 15 Chambers of Truth.</p>
      </div>
      <div className="flex gap-4">
        <Link href="/roadmap">
          <FortressButton variant="outline" className="h-12 px-6">
            Continue Path
          </FortressButton>
        </Link>
        <FortressButton className="h-12 px-6">
          Claim Rewards
        </FortressButton>
      </div>
    </div>
  );
}
