'use client';

import { motion } from 'framer-motion';
import { Award, Star, Shield, Lock } from 'lucide-react';

interface AchievementBadge {
  topicId: number;
  title: string;
  earned: boolean;
  tokenId?: number;
}

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
          <motion.div
            key={badge.topicId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
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
        ))}
      </div>
    </div>
  );
}
