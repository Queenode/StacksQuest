/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for QuestCard.tsx
 */
import Link from 'next/link';
import { FortressButton } from '@/components/fortress-button';
import { QuestTitle } from './QuestTitle';

export interface QuestData {
  id: string;
  title: string;
  chamber: number;
  progress: number;
  difficulty: string;
}

/**
 * Component: QuestCard
 * Handles the UI and state for QuestCard in StacksQuest.
 */
export function QuestCard({ quest }: { quest: QuestData }) {
  return (
    <div className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/[0.03] hover:scale-[1.02] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-bold border border-white/10 group-hover:border-primary/40 transition-colors">
        {quest.chamber}
      </div>
      <QuestTitle 
        title={quest.title}
        chamber={quest.chamber}
        difficulty={quest.difficulty}
      />
      <div className="md:w-48">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
          <span>Progress</span>
          <span>{quest.progress}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: `${quest.progress}%` }} />
        </div>
      </div>
      <FortressButton size="sm" variant={quest.progress === 100 ? 'outline' : 'default'} className="h-10 px-6">
        {quest.progress === 100 ? 'Review' : 'Continue'}
      </FortressButton>
    </div>
  );
}
