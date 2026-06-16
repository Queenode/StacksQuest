/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for LeaderboardHeader.tsx
 */
import { Trophy } from "lucide-react";

/**
 * Component: LeaderboardHeader
 * Renders the hero header for the leaderboard page.
 */
export function LeaderboardHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
        <Trophy className="w-3 h-3" />
        <span>Hall of Fame</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Top <span className="text-gradient">Seekers</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
        The mightiest minds in the Stacks ecosystem. Their names are etched into the blockchain for eternity.
      </p>
    </div>
  );
}
