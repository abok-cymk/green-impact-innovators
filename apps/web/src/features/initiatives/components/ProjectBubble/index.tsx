import type { Initiative } from "@/features/initiatives/types/types";
import { cn } from "@/lib/utils";

interface ProjectBubbleProps {
  initiative: Initiative;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  positionClass: string;
}

const CATEGORY_RING_COLORS = {
  "birthday-tree-initiative": "ring-[#855FB1] hover:ring-[#855FB1]",
  "cleanup-recycling": "ring-[#4D96A9] hover:ring-[#4D96A9]",
  "forest-garden-approach": "ring-emerald-600 hover:ring-emerald-600",
  "tree-nursery": "ring-amber-500 hover:ring-amber-500",
};

export function ProjectBubble({
  initiative,
  isActive,
  onClick,
  onMouseEnter,
  positionClass,
}: ProjectBubbleProps) {
  const borderRingColor = CATEGORY_RING_COLORS[initiative.category];

  return (
      <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      aria-label={`View details for ${initiative.title}`}
      className={cn(
        "absolute rounded-full overflow-hidden transition-all duration-500 ease-out focus:outline-none focus:ring-4 focus:ring-offset-2",
        // Distinct size configurations based on active state
        isActive 
          ? "w-20 h-20 md:w-36 md:h-36 z-20 scale-100 shadow-xl ring-4" 
          : "w-14 h-14 md:w-32 md:h-32 z-10 scale-80 opacity-60 hover:opacity-100 hover:scale-100 shadow-md hover:z-20 ring-2 ring-transparent",
        borderRingColor,
        positionClass
      )}
    >
      <div className="w-full h-full relative bg-zinc-200">
        <img
          src={initiative.imageSrc}
          alt={initiative.title}
          className="w-full h-full object-cover transition-transform duration-300"
          onError={(e) => {
            // Fallback placeholder with initial if image doesn't load
            (e.currentTarget as HTMLImageElement).src = `https://placehold.co/150/f4f4f5/27272a?text=${encodeURIComponent(initiative.title.slice(0, 2))}`;
          }}
        />
        {/* Subtle overlay on inactive bubbles */}
        {!isActive && <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />}
      </div>
    </button>
  )
}
