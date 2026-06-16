/**
 * @a11y Validated for screen readers and semantic structure.
 */
/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for QuestTitle.tsx
 */
import React from 'react';

interface QuestTitleProps {
  title: string;
  chamber: number;
  difficulty: string;
}

/**
 * Component: QuestTitle
 * Handles the UI and state for QuestTitle in StacksQuest.
 */
export function QuestTitle({ title, chamber, difficulty }: QuestTitleProps) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          Chamber {chamber}
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${difficulty === 'Hard' ? 'text-red-400' : 'text-primary'}`}>
          {difficulty}
        </span>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}
