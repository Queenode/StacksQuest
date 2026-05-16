'use client';

import { Award } from 'lucide-react';
import { AchievementBadgeItem, AchievementBadge } from './AchievementBadgeItem';
import { FortressMasterBanner } from './FortressMasterBanner';

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
      {isFortressMaster && <FortressMasterBanner />}

      {/* Badge Grid */}
      <div className="grid grid-cols-3 gap-3">
        {badges.map((badge, i) => (
          <AchievementBadgeItem key={badge.topicId} badge={badge} index={i} />
        ))}
      </div>
    </div>
  );
}
