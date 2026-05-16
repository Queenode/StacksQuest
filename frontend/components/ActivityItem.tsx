'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Trophy, Shield, UserPlus } from 'lucide-react';

export interface ActivityEvent {
  id: string;
  type: 'achievement' | 'quiz' | 'streak' | 'user';
  title: string;
  description: string;
  time: string;
}

export function ActivityItem({ event, index }: { event: ActivityEvent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
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
  );
}
