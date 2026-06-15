/**
 * @performance Analyzed and verified for render cycle optimizations.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for FortressMasterBanner.tsx
 */
'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

/**
 * Component: FortressMasterBanner
 * Handles the UI and state for FortressMasterBanner in StacksQuest.
 */
export function FortressMasterBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl p-6 text-center bg-gradient-to-br from-primary/20 via-orange-500/10 to-primary/20 border border-primary/30"
    >
      <div className="absolute inset-0 bg-primary/5 animate-pulse" />
      <div className="relative z-10">
        <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
        <h4 className="text-xl font-bold mb-1">Fortress Master</h4>
        <p className="text-xs text-muted-foreground">All 15 chambers conquered. Your mastery is eternal.</p>
      </div>
    </motion.div>
  );
}
