import React from 'react';
import type { Initiative } from '@/features/initiatives/types/types';
import { cn } from '@/lib/utils';
import { BackProjectButton } from '@/components/support/donation/components/BackProjectButton';


interface ActiveCardProps {
  initiative: Initiative;
}

const CATEGORY_STYLES = {
  'birthday-tree-initiative': {
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'text-[#855FB1]',
  },
  'cleanup-recycling': {
    badge: 'bg-[#4D96A9]/10 text-[#4D96A9] border-[#4D96A9]/20',
    title: 'text-[#4D96A9]',
  },
  'forest-garden-approach': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'text-emerald-700',
  },
  'tree-nursery': {
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    title: 'text-amber-800',
  },
};

export const ActiveCard: React.FC<ActiveCardProps> = ({ initiative }) => {
  const styles = CATEGORY_STYLES[initiative.category];

  return (
    <div 
      key={initiative.id} 
      className="flex flex-col items-center text-center max-w-120 mx-auto py-8 px-4 md:px-0 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4"
    >
      {/* Category Badge */}
      <span className={cn(
        "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border mb-6",
        styles.badge
      )}>
        {initiative.category.replace(/-/g, ' ')}
      </span>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#28283D] leading-tight mb-4 min-h-18 flex items-center justify-center">
        {initiative.title}
      </h2>

      {/* Description */}
      <p className="text-[#87879D] font-medium leading-[1.6] text-base md:text-lg mb-8 min-h-20">
        {initiative.description}
      </p>

      {/* Call to Action */}
      <BackProjectButton />
    </div>
  );
};