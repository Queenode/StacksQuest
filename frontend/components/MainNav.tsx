'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useStacksAuth } from '@/contexts/StacksAuthContext';
import { Shield, LayoutDashboard, Map, Trophy, ShoppingBag, LogIn, LogOut, User } from 'lucide-react';

export default function MainNav() {
  const pathname = usePathname();
  const { user, connect, disconnect } = useStacksAuth();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Roadmap', href: '/roadmap', icon: Map },
    { name: 'Quests', href: '/quest', icon: Shield },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full px-4 py-6 pointer-events-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            Stacks<span className="text-primary">Quest</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 glass px-2 py-1.5 rounded-2xl border border-white/10 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-white'
                )}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Auth Actions */}
        <div className="flex items-center gap-3">
          {user?.isConnected ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="hidden sm:flex items-center gap-2 glass px-3 py-1.5 rounded-xl border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground">
                  {user.address.slice(0, 4)}...{user.address.slice(-4)}
                </span>
              </Link>
              <button 
                onClick={disconnect}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center border-white/5 hover:bg-red-500/10 hover:border-red-500/30 transition-all text-muted-foreground hover:text-red-400"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={connect}
              className="flex items-center gap-2 glass px-6 py-2.5 rounded-xl border-primary/20 hover:border-primary/50 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-all shadow-[0_0_20px_rgba(255,100,0,0.1)]"
            >
              <LogIn className="w-4 h-4" />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
