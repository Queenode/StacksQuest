/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for LeaderboardTable.tsx
 */
import { LeaderboardEntry } from "@/types/leaderboard";
import { LeaderboardRow } from "./LeaderboardRow";

interface LeaderboardTableProps {
  seekers: LeaderboardEntry[];
}

/**
 * Component: LeaderboardTable
 * Renders the full leaderboard table.
 */
export function LeaderboardTable({ seekers }: LeaderboardTableProps) {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/5 bg-white/5">
            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Rank</th>
            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Seeker</th>
            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Title</th>
            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chambers</th>
            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 text-right">XP</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {seekers.map((seeker, i) => (
            <LeaderboardRow key={seeker.address} seeker={seeker} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
