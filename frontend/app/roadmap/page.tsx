"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FortressButton } from "@/components/fortress-button"
import { Lock, CheckCircle2, Zap, ArrowRight, ShieldCheck } from "lucide-react"
import { TOPICS_DATA } from "@/lib/topics"

export default function RoadmapPage() {
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("stacksquest_completed")
    if (saved) {
      setCompletedTopics(JSON.parse(saved))
    }
    setIsLoaded(true)
  }, [])

  const isTopicUnlocked = (topicId: number) => {
    if (topicId === 1) return true
    return completedTopics.includes(topicId - 1)
  }

  const isTopicCompleted = (topicId: number) => {
    return completedTopics.includes(topicId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  if (!isLoaded) return null

  return (
    <div className="min-h-screen relative pb-20 bg-background">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <Zap className="w-3 h-3" />
            <span>Path of the Seeker</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Path of <span className="text-gradient">Knowledge</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Navigate through the 15 chambers of truth. Each trial brings you closer to mastering the stack and securing the future of Bitcoin.
          </p>
        </motion.div>

        {/* Progress Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-dark rounded-3xl p-8 mb-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Your Mastery</p>
                <h2 className="text-3xl font-bold">Fortress Progress</h2>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-primary">{completedTopics.length}</span>
                <span className="text-muted-foreground text-xl"> / {TOPICS_DATA.length}</span>
              </div>
            </div>
            <div className="h-4 bg-white/5 rounded-full p-1 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedTopics.length / TOPICS_DATA.length) * 100}%` }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Roadmap Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {TOPICS_DATA.map((topic, index) => {
            const unlocked = isTopicUnlocked(topic.id)
            const completed = isTopicCompleted(topic.id)

            return (
              <motion.div 
                key={topic.id}
                variants={itemVariants}
                className={`group relative ${unlocked ? "opacity-100" : "opacity-40"}`}
              >
                <div className={`
                  relative glass rounded-2xl p-6 transition-all duration-500
                  ${unlocked ? "hover:border-primary/40 hover:bg-white/[0.03]" : ""}
                  ${completed ? "border-primary/30" : ""}
                `}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Status Indicator */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold
                      ${completed ? "bg-primary text-primary-foreground" : 
                        unlocked ? "bg-primary/10 text-primary border border-primary/20" : 
                        "bg-white/5 text-muted-foreground border border-white/10"}
                    `}>
                      {completed ? <ShieldCheck className="w-7 h-7" /> : topic.id}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chamber {topic.id}</span>
                        {completed && <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Mastered</span>}
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 font-light">{topic.description}</p>
                    </div>

                    <div className="md:w-48 text-right">
                      {completed ? (
                        <Link href={`/lesson?topic=${topic.id}`} className="text-sm font-bold text-primary flex items-center justify-end gap-2 hover:gap-3 transition-all">
                          Review Lesson <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : unlocked ? (
                        <Link href={`/lesson?topic=${topic.id}`}>
                          <FortressButton size="sm" className="w-full md:w-auto h-10 px-6">
                            Enter Trial
                          </FortressButton>
                        </Link>
                      ) : (
                        <div className="flex items-center justify-end gap-2 text-muted-foreground/40 text-xs font-bold uppercase">
                          <Lock className="w-3 h-3" />
                          Locked
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Connector line for the last element */}
                {index < TOPICS_DATA.length - 1 && (
                  <div className="absolute left-12 -bottom-4 w-px h-4 bg-white/10 hidden md:block" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Final Achievement Message */}
        <AnimatePresence>
          {completedTopics.length === TOPICS_DATA.length && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 glass rounded-3xl p-10 text-center border-primary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <div className="relative z-10">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">All Chambers Conquered!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  You have successfully navigated the Path of Knowledge. Your achievements are permanently etched into the stack.
                </p>
                <Link href="/profile">
                  <FortressButton size="xl" className="px-12">
                    Claim Your Master Seal
                  </FortressButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
