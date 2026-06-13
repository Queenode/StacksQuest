/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for LeaderboardRow.tsx
 */
import { motion } from "framer-motion";
import { Shield, ArrowUp } from "lucide-react";
import { LeaderboardEntry } from "@/types/leaderboard";

interface LeaderboardRowProps {
  seeker: LeaderboardEntry;
  index: number;
}

/**
 * Component: LeaderboardRow
 * Renders a single row in the leaderboard table.
 */
export function LeaderboardRow({ seeker, index }: LeaderboardRowProps) {
  return (
    <motion.tr 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.05 }}
      className="group hover:bg-white/[0.02] transition-colors"
    >
      <td className="px-8 py-6">
        <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">#{seeker.rank}</span>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary/40" />
          </div>
          <span className="font-bold">{seeker.address}</span>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{seeker.title}</span>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-2">
          <ArrowUp className="w-3 h-3 text-primary" />
          <span className="font-bold">{seeker.chambers}</span>
        </div>
      </td>
      <td className="px-8 py-6 text-right">
        <span className="font-bold text-primary">{seeker.xp.toLocaleString()}</span>
      </td>
    </motion.tr>
  );
}
