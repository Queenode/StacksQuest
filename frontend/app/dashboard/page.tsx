'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FortressButton } from "@/components/fortress-button";
import { Shield, Zap, Trophy, History, ArrowUpRight, BarChart3, Wallet, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data reflecting the 15 Chambers
const userStats = {
  masteryLevel: 4,
  chambersConquered: 6,
  totalChambers: 15,
  xp: 4200,
  xpToNextLevel: 5000,
  stxBalance: "1,240.50",
  rank: 12,
  totalSeekers: 850,
};

const activeQuests = [
  { id: '1', title: 'Proof of Transfer (PoX)', chamber: 3, progress: 65, difficulty: 'Medium' },
  { id: '2', title: 'Clarity Smart Contracts', chamber: 2, progress: 100, difficulty: 'Hard' },
  { id: '3', title: 'Bitcoin Fundamentals', chamber: 4, progress: 10, difficulty: 'Easy' },
];

const activityHistory = [
  { id: '1', type: 'chamber', title: 'Conquered: Bitcoin Mining', time: '2h ago', xp: 450 },
  { id: '2', type: 'achievement', title: 'Unlocked: PoX Pioneer', time: '1d ago', xp: 1000 },
  { id: '3', type: 'reward', title: 'STX Reward Distribution', time: '2d ago', value: '25.0 STX' },
];

export default function DashboardPage() {
  const xpProgress = (userStats.xp / userStats.xpToNextLevel) * 100;
  const chamberProgress = (userStats.chambersConquered / userStats.totalChambers) * 100;

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Seeker Profile</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Your <span className="text-gradient">Chamber Dashboard</span></h1>
            <p className="text-muted-foreground mt-2 font-light">Track your journey through the 15 Chambers of Truth.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/roadmap">
              <FortressButton variant="outline" className="h-12 px-6">
                Continue Path
              </FortressButton>
            </Link>
            <FortressButton className="h-12 px-6">
              Claim Rewards
            </FortressButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Mastery Level", value: userStats.masteryLevel, icon: Zap, sub: `Rank #${userStats.rank} among ${userStats.totalSeekers}` },
            { label: "Chambers Conquered", value: `${userStats.chambersConquered}/${userStats.totalChambers}`, icon: Trophy, progress: chamberProgress },
            { label: "Knowledge XP", value: userStats.xp.toLocaleString(), icon: GraduationCap, progress: xpProgress },
            { label: "STX Holdings", value: userStats.stxBalance, icon: Wallet, sub: "Available for Stacking" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="w-5 h-5" />
                </div>
                {stat.progress !== undefined && (
                  <span className="text-[10px] font-bold text-primary">{Math.round(stat.progress)}%</span>
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              {stat.progress !== undefined ? (
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    className="h-full bg-primary"
                  />
                </div>
              ) : (
                <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
              )}
            </motion.div>
          ))}
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
              {activeQuests.map((quest, i) => (
                <div key={quest.id} className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/[0.02] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-bold border border-white/10 group-hover:border-primary/40 transition-colors">
                    {quest.chamber}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chamber {quest.chamber}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${quest.difficulty === 'Hard' ? 'text-red-400' : 'text-primary'}`}>
                        {quest.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{quest.title}</h3>
                  </div>
                  <div className="md:w-48">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span>Progress</span>
                      <span>{quest.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${quest.progress}%` }} />
                    </div>
                  </div>
                  <FortressButton size="sm" variant={quest.progress === 100 ? 'outline' : 'default'} className="h-10 px-6">
                    {quest.progress === 100 ? 'Review' : 'Continue'}
                  </FortressButton>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              Recent Activity
            </h2>
            <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
              {activityHistory.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1.5 rounded bg-primary/10 text-primary">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold group-hover:text-primary transition-colors">{activity.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{activity.time} • {activity.xp ? `+${activity.xp} XP` : activity.value}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-colors">
                View Full History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
