'use client';

import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FortressButton } from "@/components/fortress-button";
import { TOPICS_DATA } from "@/lib/topics";
import { Search, Eye, Sparkles, ChevronRight, Hash, Key } from "lucide-react";
import { useSound } from "@/lib/use-sound";

function QuestContent() {
  const searchParams = useSearchParams();
  const topicId = Number.parseInt(searchParams.get("topic") || "1");
  const topic = TOPICS_DATA.find((t) => t.id === topicId) || TOPICS_DATA[0];
  const sounds = useSound();

  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);
  const [activeWall, setActiveWall] = useState(0);

  const targetWords = [
    "BITCOIN", "SCARCITY", "DECENTRALIZED", "PROOF", "MINING",
    "STACKS", "SMART", "CONTRACTS", "CLARITY", "SECURITY"
  ].slice(0, 5); // Simplification for demo

  const wallNames = ["North Wall", "East Wall", "South Wall", "West Wall"];
  const wallContent = [
    topic.content.introduction,
    topic.content.sections[0]?.content || "",
    topic.content.sections[1]?.content || "",
    topic.content.analogy.content
  ];

  const checkWord = () => {
    const guess = currentGuess.toUpperCase().trim();
    if (!guess) return;
    if (foundWords.includes(guess)) {
      setFeedback("Already discovered!");
      return;
    }
    if (targetWords.includes(guess)) {
      sounds.success();
      const newFound = [...foundWords, guess];
      setFoundWords(newFound);
      setFeedback(`Found! "${guess}" revealed.`);
      setCurrentGuess("");
      if (newFound.length === targetWords.length) {
        setCompleted(true);
        sounds.complete();
      }
    } else {
      sounds.error();
      setFeedback("Word not found on walls.");
    }
  };

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Quest Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <Search className="w-3 h-3" />
            <span>Chamber of Inscriptions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Discover the <span className="text-gradient">Sacred Terms</span></h1>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Scan the ancient inscriptions on the four walls to find the {targetWords.length} hidden concepts of this chamber.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="glass p-6 rounded-3xl mb-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/5" />
                <motion.circle 
                  cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" 
                  className="text-primary" strokeDasharray="176" 
                  initial={{ strokeDashoffset: 176 }}
                  animate={{ strokeDashoffset: 176 - (176 * (foundWords.length / targetWords.length)) }}
                />
              </svg>
              <span className="absolute text-sm font-bold">{foundWords.length}/{targetWords.length}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Knowledge Sync</p>
              <h3 className="text-xl font-bold">Uncovering Inscriptions</h3>
            </div>
          </div>
          <div className="flex gap-2">
            {targetWords.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i < foundWords.length ? 'bg-primary shadow-[0_0_10px_rgba(255,100,0,0.5)]' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discovery Console */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-8 rounded-3xl min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  {wallNames.map((name, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveWall(i)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all
                        ${activeWall === i ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-white/5 hover:bg-white/10 text-muted-foreground'}`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-2xl p-8 mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWall}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-lg leading-relaxed text-foreground/80 font-light font-serif italic"
                  >
                    "{wallContent[activeWall]}"
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                  <input
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && checkWord()}
                    placeholder="Enter discovered term..."
                    className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 focus:border-primary/50 transition-colors uppercase tracking-widest"
                  />
                </div>
                <FortressButton onClick={checkWord} className="h-14 px-8">Reveal</FortressButton>
              </div>
              {feedback && <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-primary animate-pulse">{feedback}</p>}
            </div>
          </div>

          {/* Found Words List */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-3xl h-full">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Discovered Wisdom
              </h3>
              <div className="space-y-3">
                {targetWords.map((word, i) => (
                  <div key={i} className={`p-4 rounded-xl border flex items-center justify-between transition-all duration-500
                    ${foundWords.includes(word) ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-white/[0.02] border-white/5 text-muted-foreground/20'}`}>
                    <span className="text-xs font-bold tracking-widest uppercase">{foundWords.includes(word) ? word : '??????'}</span>
                    {foundWords.includes(word) ? <Sparkles className="w-3 h-3" /> : <Hash className="w-3 h-3" />}
                  </div>
                ))}
              </div>

              {completed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 pt-8 border-t border-white/5 text-center"
                >
                  <h4 className="text-xl font-bold mb-4">Chamber Unsealed!</h4>
                  <Link href={`/trial?topic=${topicId}`}>
                    <FortressButton className="w-full h-14 gap-2">
                      Enter the Trial
                      <ChevronRight className="w-4 h-4" />
                    </FortressButton>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <QuestContent />
    </Suspense>
  );
}
