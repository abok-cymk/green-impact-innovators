import { BACKER_EVENTS } from "@/lib/events";
import { cn } from "@/lib/utils";

export interface BackProjectButtonProps {
  className?: string;
}

export function BackProjectButton({ className }: BackProjectButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent(BACKER_EVENTS.FOCUS_NEWSLETTER));
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-auto px-8 py-4 rounded-xl bg-[#2F6B2F] hover:bg-[#255525] text-white font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm hover:shadow-lg hover:shadow-[#2F6B2F]/20 cursor-pointer",
        className,
      )}
    >
      Back this project
    </button>
  );
}
