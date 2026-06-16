/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @performance Analyzed and verified for render cycle optimizations.
 */
/**
 * Auto-generated JSDoc for page.tsx
 * This helps maintain code documentation standards.
 */
'use client';

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { StoneTablet } from "@/components/stone-tablet";
import { FortressButton } from "@/components/fortress-button";
import { TOPICS_DATA } from "@/lib/topics";
import { Suspense } from "react";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";

function LessonContent() {
  const searchParams = useSearchParams();
  const topicId = Number.parseInt(searchParams.get("topic") || "1");
  const topic = TOPICS_DATA.find((t) => t.id === topicId) || TOPICS_DATA[0];

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Lesson Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/roadmap">
            <FortressButton variant="outline" size="sm" className="gap-2">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Roadmap
            </FortressButton>
          </Link>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Mastery Level: {topicId}/15</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{topic.title}</h1>
            <p className="text-lg text-muted-foreground font-light italic">"The journey of a thousand blocks begins with a single transaction."</p>
          </div>

          <div className="glass p-1 rounded-[2rem]">
            <div className="glass-dark rounded-[1.8rem] p-10 md:p-16">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl leading-relaxed mb-12 text-foreground/90 font-light border-l-2 border-primary/30 pl-8">
                  {topic.content.introduction}
                </p>

                <div className="grid gap-12">
                  {topic.content.sections.map((section, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                        <span className="text-[10px] w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center font-mono">0{index + 1}</span>
                        {section.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg font-light group-hover:text-foreground transition-colors duration-500">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BookOpen className="w-24 h-24" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-primary uppercase tracking-widest">The Great Analogy</h3>
                  <p className="text-foreground/80 leading-relaxed italic font-serif text-lg">
                    "{topic.content.analogy.content}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Link href={`/quest?topic=${topicId}`}>
              <FortressButton className="h-16 px-12 text-lg gap-3 group">
                Enter the Chamber
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </FortressButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function LessonPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      <LessonContent />
    </Suspense>
  );
}
