'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FortressButton } from "@/components/fortress-button";
import { Shield, Zap, Trophy, History, ArrowUpRight, BarChart3, Wallet, GraduationCap } from "lucide-react";
import { XPProgress } from "@/components/XPProgress";
import { AchievementGrid } from "@/components/AchievementGrid";
import { ActivityFeed } from "@/components/ActivityFeed";
import { WalletBalanceCard } from "@/components/WalletBalanceCard";

import { QuestCard, QuestData } from "@/components/quests/QuestCard";

const activeQuests: QuestData[] = [
  { id: '1', title: 'Proof of Transfer (PoX)', chamber: 3, progress: 65, difficulty: 'Medium' },
  { id: '2', title: 'Clarity Smart Contracts', chamber: 2, progress: 100, difficulty: 'Hard' },
  { id: '3', title: 'Bitcoin Fundamentals', chamber: 4, progress: 10, difficulty: 'Easy' },
];

const activityHistory = [
  { id: '1', type: 'chamber', title: 'Conquered: Bitcoin Mining', time: '2h ago', xp: 450 },
  { id: '2', type: 'achievement', title: 'Unlocked: PoX Pioneer', time: '1d ago', xp: 1000 },
  { id: '3', type: 'reward', title: 'STX Reward Distribution', time: '2d ago', value: '25.0 STX' },
];

// Mock data reflecting the 15 Chambers
const userStats = {
  level: 4,
  chambersConquered: 6,
  totalChambers: 15,
  xp: 4200,
  xpToNextLevel: 5000,
  stxBalance: "1,240.50",
  rank: 12,
  totalSeekers: 850,
  streak: 5
};

const userBadges = [
  { topicId: 1, title: "Genesis Seeker", earned: true, tokenId: 452 },
  { topicId: 2, title: "Clarity Adept", earned: true, tokenId: 891 },
  { topicId: 3, title: "PoX Pioneer", earned: true, tokenId: 1024 },
  { topicId: 4, title: "Bitcoin Anchor", earned: false },
  { topicId: 5, title: "Stacking Master", earned: false },
  { topicId: 6, title: "Mining Scout", earned: false },
];

import { DashboardHeader } from "@/components/DashboardHeader";

export default function DashboardPage() {
  const chamberProgress = (userStats.chambersConquered / userStats.totalChambers) * 100;

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <XPProgress 
              currentXP={userStats.xp} 
              nextLevelXP={userStats.xpToNextLevel} 
              level={userStats.level} 
              streak={userStats.streak} 
            />
            
            <WalletBalanceCard stxBalance={userStats.stxBalance} />
          </div>

          <div className="lg:col-span-2">
            <AchievementGrid badges={userBadges} isFortressMaster={userStats.chambersConquered === userStats.totalChambers} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Chamber Trials */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Active Trials
              </h2>
              <Link href="/roadmap" className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {activeQuests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              Live Feed
            </h2>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
