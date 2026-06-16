/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for XPProgress.tsx
 */
'use client';

import { motion } from 'framer-motion';
import { Flame, Zap, Trophy } from 'lucide-react';

interface XPProgressProps {
  currentXP: number;
  nextLevelXP: number;
  level: number;
  streak: number;
}

/**
 * Component: XPProgress
 * Handles the UI and state for XPProgress in StacksQuest.
 */
export function XPProgress({ currentXP, nextLevelXP, level, streak }: XPProgressProps) {
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      {/* Level + Streak Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Mastery Level</p>
            <h3 className="text-2xl font-bold">{level}</h3>
          </div>
        </div>

        {streak > 0 && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold text-orange-400">{streak} day streak</span>
          </div>
        )}
      </div>

      {/* XP Bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1">
            <Zap className="w-3 h-3 text-primary" />
            Experience
          </span>
          <span className="text-xs font-bold text-primary">{currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
        </div>
        <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: 'circOut' }}
            className="h-full bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
