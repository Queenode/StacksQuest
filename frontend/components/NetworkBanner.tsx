'use client';

import { useEffect, useState } from 'react';
import { useStacksAuth } from '@/contexts/StacksAuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, CheckCircle2, X } from 'lucide-react';

/**
 * Component: NetworkBanner
 * Handles the UI and state for NetworkBanner in StacksQuest.
 */
export function NetworkBanner() {
  const { user } = useStacksAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (user?.isConnected) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [user?.isConnected]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] w-full max-w-md px-4"
        >
          <div className="glass-dark border-primary/30 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Network Verified</p>
              <h4 className="text-sm font-bold">Connected to Stacks Mainnet</h4>
            </div>
            <button 
              onClick={() => setShow(false)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
