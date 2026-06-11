'use client';

import Link from "next/link"
import { motion } from "framer-motion"
import { FortressButton } from "@/components/fortress-button"
import { ConnectButton } from "@/components/ConnectButton"
import { Shield, BookOpen, Swords, Trophy, Zap } from "lucide-react"

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden flex flex-col items-center justify-center bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center text-center"
      >


        <motion.h1 
          variants={itemVariants}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-6"
        >
          <span className="block text-foreground">Stacks</span>
          <span className="text-gradient drop-shadow-2xl">Quest</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Master Bitcoin through the lens of Stacks. Embark on a journey through 15 chambers of knowledge and emerge as a <span className="text-foreground font-medium">Fortress Master</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="/roadmap">
            <FortressButton size="xl" className="group h-14 px-10 text-lg">
              Enter the Fortress
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </FortressButton>
          </Link>
          <ConnectButton />
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          {[
            { icon: BookOpen, title: "Learn", desc: "Interactive lessons on BTC & Stacks" },
            { icon: Swords, title: "Conquer", desc: "On-chain quizzes and challenges" },
            { icon: Trophy, title: "Earn", desc: "Exclusive achievement NFTs" }
          ].map((feature, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-left hover:border-primary/40 transition-colors group">
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]"
      >
        <span>Anchored to Truth</span>
        <div className="w-10 h-px bg-muted-foreground/20" />
        <span>Bitcoin Security</span>
      </motion.div>
    </div>
  )
}
