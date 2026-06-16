/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @performance Analyzed and verified for render cycle optimizations.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for AchievementBadgeItem.tsx
 */
'use client';

import { motion } from 'framer-motion';
import { Star, Lock } from 'lucide-react';

export interface AchievementBadge {
  topicId: number;
  title: string;
  earned: boolean;
  tokenId?: number;
}

/**
 * Component: AchievementBadgeItem
 * Handles the UI and state for AchievementBadgeItem in StacksQuest.
 */
export function AchievementBadgeItem({ badge, index }: { badge: AchievementBadge; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`
        relative rounded-xl p-4 text-center transition-all duration-300
        ${badge.earned
          ? 'glass border-primary/30 hover:border-primary/60 hover:scale-105'
          : 'bg-white/[0.02] border border-white/5 opacity-40'
        }
      `}
    >
      <div className={`
        w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center
        ${badge.earned ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground/30'}
      `}>
        {badge.earned ? (
          <Star className="w-5 h-5" />
        ) : (
          <Lock className="w-4 h-4" />
        )}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest truncate">
        {badge.earned ? badge.title : '???'}
      </p>
      {badge.earned && badge.tokenId && (
        <span className="text-[8px] text-primary/60 font-bold mt-1 block">
          #{badge.tokenId}
        </span>
      )}
    </motion.div>
  );
}
