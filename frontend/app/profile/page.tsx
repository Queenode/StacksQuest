/**
 * Auto-generated JSDoc for page.tsx
 * This helps maintain code documentation standards.
 */
'use client';

import { useRouter } from 'next/navigation';
import { useStacksAuth } from '@/contexts/StacksAuthContext';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FortressButton } from '@/components/fortress-button';
import { Shield, Trophy, Zap, Wallet, Twitter, Github, Globe, Edit3, Save, X, BadgeCheck } from 'lucide-react';
import { getUserProgress, getUserAchievements } from '@/lib/stacks-contract';

export default function ProfilePage() {
  const { user, disconnect } = useStacksAuth();
  const [onChainProgress, setOnChainProgress] = useState<any>(null);
  const [onChainAchievements, setOnChainAchievements] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user?.isConnected) {
      router.push('/');
      return;
    }

    async function fetchData() {
      if (user?.address) {
        const [progress, achievements] = await Promise.all([
          getUserProgress(user.address),
          getUserAchievements(user.address)
        ]);
        setOnChainProgress(progress);
        setOnChainAchievements(achievements);
        setLoading(false);
      }
    }

    fetchData();
  }, [user, router]);

  if (!user?.isConnected) return null;

  const stats = {
    chambers: onChainProgress?.['topics-completed']?.value || 0,
    xp: onChainProgress?.['total-xp']?.value || 0,
    streak: onChainProgress?.['streak-count']?.value || 1,
    isMaster: onChainProgress?.['fortress-master']?.value || false
  };

  const badges = onChainAchievements?.['topic-badges']?.value || [];

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar / Stats */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-3xl text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group flex items-center justify-center text-4xl font-bold bg-primary/10 text-primary">
                    {user.address.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-1 truncate px-2">{user.address}</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
                  {stats.isMaster ? 'Fortress Master' : 'Seeker of Truth'}
                </p>
                
                <div className="flex justify-center gap-4 py-6 border-y border-white/5">
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary">{stats.chambers}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chambers</p>
                  </div>
                  <div className="w-px h-8 bg-white/5 mt-1" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary">{stats.xp.toLocaleString()}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">XP</p>
                  </div>
                  <div className="w-px h-8 bg-white/5 mt-1" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary">{stats.streak}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Streak</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                    <Wallet className="w-4 h-4" />
                    <span className="font-mono text-[10px]">{user.address.slice(0, 12)}...{user.address.slice(-12)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-3xl"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                Achievement NFTs
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {badges.length > 0 ? (
                  badges.map((badgeId: any, i: number) => (
                    <div key={i} className="aspect-square rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-primary" />
                    </div>
                  ))
                ) : (
                  [1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white/5" />
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gradient">Seeker Lore</h2>
                <div className="flex items-center gap-2">
                  <FortressButton 
                    variant="outline" 
                    size="sm" 
                    onClick={disconnect}
                    className="text-red-400 border-red-500/20 hover:bg-red-500/10"
                  >
                    Disconnect
                  </FortressButton>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">On-Chain Bio</h4>
                  <p className="text-lg font-light leading-relaxed text-foreground/80">
                    This identity is anchored to the Bitcoin blockchain via Stacks. Your progress and achievements are immutable proof of your mastery of the chambers.
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-4">Journey Milestones</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Mastery</span>
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-2xl font-bold">{stats.xp} XP</h5>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Knowledge Points</p>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Streaks</span>
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-2xl font-bold">{stats.streak} Days</h5>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Consecutive Activity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
