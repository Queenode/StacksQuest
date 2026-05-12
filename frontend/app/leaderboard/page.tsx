'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FortressButton } from "@/components/fortress-button";
import { Trophy, Medal, Star, Shield, ArrowUp } from "lucide-react";

type LeaderboardEntry = {
  rank: number;
  address: string;
  chambers: number;
  xp: number;
  title: string;
};

const topSeekers: LeaderboardEntry[] = [
  { rank: 1, address: "SP3...QRTX", chambers: 15, xp: 12850, title: "Fortress Master" },
  { rank: 2, address: "SP2...MKLP", chambers: 14, xp: 11500, title: "Chamber Lord" },
  { rank: 3, address: "SP1...JKOW", chambers: 13, xp: 11050, title: "High Seeker" },
  { rank: 4, address: "SP5...PLM9", chambers: 12, xp: 9800, title: "Scholar" },
  { rank: 5, address: "SP4...BVC2", chambers: 10, xp: 9200, title: "Acolyte" },
  { rank: 6, address: "SP8...NMH1", chambers: 9, xp: 8450, title: "Initiate" },
  { rank: 7, address: "SP9...XZA4", chambers: 8, xp: 8100, title: "Initiate" },
  { rank: 8, address: "SP7...KJL6", chambers: 6, xp: 7500, title: "Initiate" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Leaderboard Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <Trophy className="w-3 h-3" />
            <span>Hall of Fame</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Top <span className="text-gradient">Seekers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            The mightiest minds in the Stacks ecosystem. Their names are etched into the blockchain for eternity.
          </p>
        </div>

        {/* Podium / Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topSeekers.slice(0, 3).map((seeker, i) => (
            <motion.div
              key={seeker.address}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-3xl text-center relative overflow-hidden ${i === 0 ? 'border-primary/50 bg-primary/5' : ''}`}
            >
              {i === 0 && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl
                  ${i === 0 ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 
                    i === 1 ? 'bg-slate-400 text-slate-900' : 'bg-orange-700 text-orange-100'}`}>
                  {i === 0 ? <Trophy className="w-8 h-8" /> : i === 1 ? <Medal className="w-8 h-8" /> : <Star className="w-8 h-8" />}
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">{seeker.title}</h3>
              <p className="text-2xl font-bold mb-4">{seeker.address}</p>
              <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                <span>{seeker.chambers} Chambers</span>
                <span className="w-1 h-1 bg-primary/40 rounded-full" />
                <span>{seeker.xp.toLocaleString()} XP</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Table */}
        <div className="glass rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Rank</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Seeker</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Title</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chambers</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 text-right">XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topSeekers.map((seeker, i) => (
                <motion.tr 
                  key={seeker.address}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-6">
                    <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">#{seeker.rank}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary/40" />
                      </div>
                      <span className="font-bold">{seeker.address}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{seeker.title}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <ArrowUp className="w-3 h-3 text-primary" />
                      <span className="font-bold">{seeker.chambers}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-bold text-primary">{seeker.xp.toLocaleString()}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
