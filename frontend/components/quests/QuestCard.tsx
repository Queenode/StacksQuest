import Link from 'next/link';
import { FortressButton } from '@/components/fortress-button';

export interface QuestData {
  id: string;
  title: string;
  chamber: number;
  progress: number;
  difficulty: string;
}

export function QuestCard({ quest }: { quest: QuestData }) {
  return (
    <div className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/[0.02] transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-bold border border-white/10 group-hover:border-primary/40 transition-colors">
        {quest.chamber}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
            Chamber {quest.chamber}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${quest.difficulty === 'Hard' ? 'text-red-400' : 'text-primary'}`}>
            {quest.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-bold">{quest.title}</h3>
      </div>
      <div className="md:w-48">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
          <span>Progress</span>
          <span>{quest.progress}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: `${quest.progress}%` }} />
        </div>
      </div>
      <FortressButton size="sm" variant={quest.progress === 100 ? 'outline' : 'default'} className="h-10 px-6">
        {quest.progress === 100 ? 'Review' : 'Continue'}
      </FortressButton>
    </div>
  );
}
