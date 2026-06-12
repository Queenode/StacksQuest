/**
 * Auto-generated JSDoc for page.tsx
 * This helps maintain code documentation standards.
 */
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FortressButton } from "@/components/fortress-button";
import { Search, Filter, ShoppingBag, Shield, Zap, Trophy, History, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";

type MarketplaceItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  category: 'Seal' | 'Scroll' | 'Artifact' | 'Access';
  chamberRequirement: number;
};

const items: MarketplaceItem[] = [
  {
    id: '1',
    name: 'Seal of the First Block',
    description: 'A legendary artifact commemorating the mastery of Bitcoin fundamentals.',
    price: '250 STX',
    rarity: 'Legendary',
    category: 'Seal',
    chamberRequirement: 1
  },
  {
    id: '2',
    name: 'Clarity Auditor Scroll',
    description: 'Grants access to exclusive smart contract security workshops.',
    price: '75 STX',
    rarity: 'Epic',
    category: 'Scroll',
    chamberRequirement: 5
  },
  {
    id: '3',
    name: 'PoX Pioneer Badge',
    description: 'An uncommon badge for those who have mastered the Stacking mechanism.',
    price: '15 STX',
    rarity: 'Uncommon',
    category: 'Artifact',
    chamberRequirement: 3
  },
  {
    id: '4',
    name: 'Fortress Guard Access',
    description: 'Exclusive membership to the Stacks Quest elite community.',
    price: '500 STX',
    rarity: 'Epic',
    category: 'Access',
    chamberRequirement: 10
  },
  {
    id: '5',
    name: 'Decentralization Fragment',
    description: 'A rare shard containing ancient wisdom about peer-to-peer networks.',
    price: '120 STX',
    rarity: 'Rare',
    category: 'Artifact',
    chamberRequirement: 7
  },
  {
    id: '6',
    name: 'Miner\'s Lantern',
    description: 'A common tool but essential for navigating the deeper chambers.',
    price: '5 STX',
    rarity: 'Common',
    category: 'Artifact',
    chamberRequirement: 2
  }
];

const rarityStyles = {
  Common: 'text-muted-foreground border-white/10',
  Uncommon: 'text-green-400 border-green-500/20',
  Rare: 'text-blue-400 border-blue-500/20',
  Epic: 'text-purple-400 border-purple-500/20',
  Legendary: 'text-primary border-primary/20'
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Marketplace Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <ShoppingBag className="w-3 h-3" />
            <span>The Merchant's Bazaar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Rare <span className="text-gradient">Artifacts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Acquire rare seals and scrolls to enhance your standing in the fortress. Every artifact is secured by the Stacks blockchain.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search artifacts..." 
              className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 transition-colors"
            />
          </div>
          <FortressButton variant="outline" className="h-14 px-8 flex gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </FortressButton>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6 group hover:border-primary/40 transition-all flex flex-col h-full"
            >
              <div className="aspect-square bg-white/5 rounded-2xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-primary/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.category === 'Seal' && <Shield className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />}
                  {item.category === 'Scroll' && <History className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />}
                  {item.category === 'Artifact' && <Zap className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />}
                  {item.category === 'Access' && <Trophy className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />}
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${rarityStyles[item.rarity]}`}>
                    {item.rarity}
                  </span>
                </div>
              </div>

              <div className="flex-1 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{item.category}</span>
                  <span className="text-sm font-bold text-primary">{item.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-4">
                  <span className="text-muted-foreground/60">Requirement</span>
                  <span className="text-foreground">Chamber {item.chamberRequirement}+</span>
                </div>
                <FortressButton className="w-full h-12">
                  Acquire Artifact
                </FortressButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
