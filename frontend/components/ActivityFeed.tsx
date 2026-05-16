'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Trophy, Shield, UserPlus } from 'lucide-react';

import { ActivityItem, ActivityEvent } from './ActivityItem';

const mockEvents: ActivityEvent[] = [
  { id: '1', type: 'achievement', title: 'New Achievement', description: 'Seeker @Alice just earned the Genesis Seal', time: 'Just now' },
  { id: '2', type: 'quiz', title: 'Chamber Conquered', description: 'Seeker @Bob mastered Clarity Smart Contracts', time: '2m ago' },
  { id: '3', type: 'streak', title: 'Streak Milestone', description: '@Charlie hit a 10-day learning streak!', time: '5m ago' },
  { id: '4', type: 'user', title: 'New Seeker', description: '@Dana just entered the Fortress', time: '12m ago' },
];

export function ActivityFeed() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/5">
      <div className="p-4 border-b border-white/5 bg-white/[0.02]">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          Fortress Activity
        </h3>
      </div>
      <div className="divide-y divide-white/5">
        {mockEvents.map((event, i) => (
          <ActivityItem key={event.id} event={event} index={i} />
        ))}
      </div>
      <button className="w-full py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-primary hover:bg-white/[0.02] transition-all border-t border-white/5">
        View All Activity
      </button>
    </div>
  );
}
