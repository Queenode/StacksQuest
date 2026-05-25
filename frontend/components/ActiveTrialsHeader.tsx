import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

/**
 * Component: ActiveTrialsHeader
 * Handles the UI and state for ActiveTrialsHeader in StacksQuest.
 */
export function ActiveTrialsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-primary" />
        Active Trials
      </h2>
      <Link href="/roadmap" className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">
        View All
      </Link>
    </div>
  );
}
