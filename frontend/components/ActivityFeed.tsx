'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Trophy, Shield, UserPlus } from 'lucide-react';

interface ActivityEvent {
  id: string;
  type: 'achievement' | 'quiz' | 'streak' | 'user';
  title: string;
  description: string;
  time: string;
}

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
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1.5 rounded-lg bg-primary/10 text-primary">
                {event.type === 'achievement' && <Trophy className="w-3.5 h-3.5" />}
                {event.type === 'quiz' && <Shield className="w-3.5 h-3.5" />}
                {event.type === 'streak' && <Zap className="w-3.5 h-3.5" />}
                {event.type === 'user' && <UserPlus className="w-3.5 h-3.5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-bold group-hover:text-primary transition-colors">{event.title}</h4>
                  <span className="text-[10px] text-muted-foreground">{event.time}</span>
                </div>
                <p className="text-[10px] text-muted-foreground/80 leading-relaxed">{event.description}</p>
              </div>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
      <button className="w-full py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-primary hover:bg-white/[0.02] transition-all border-t border-white/5">
        View All Activity
      </button>
    </div>
  );
}
