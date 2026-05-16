'use client';

import { motion } from 'framer-motion';
import { Award, Star, Shield, Lock } from 'lucide-react';

import { AchievementBadgeItem, AchievementBadge } from './AchievementBadgeItem';

interface AchievementGridProps {
  badges: AchievementBadge[];
  isFortressMaster: boolean;
}

export function AchievementGrid({ badges, isFortressMaster }: AchievementGridProps) {
  const earnedCount = badges.filter((b) => b.earned).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold">Achievement NFTs</h3>
        </div>
        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {earnedCount} / {badges.length}
        </span>
      </div>

      {/* Fortress Master Banner */}
      {isFortressMaster && (
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
      )}

      {/* Badge Grid */}
      <div className="grid grid-cols-3 gap-3">
        {badges.map((badge, i) => (
          <AchievementBadgeItem key={badge.topicId} badge={badge} index={i} />
        ))}
      </div>
    </div>
  );
}
