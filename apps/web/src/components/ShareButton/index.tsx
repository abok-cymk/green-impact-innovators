import React from "react";
import { Megaphone } from "lucide-react";
import { useToast } from "@/components/ui/ToastContext";

export function ShareButton() {
  const { addToast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: "Green Impact Innovators",
      text: "Follow and share the journey of a community-led environmental initiative.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        addToast("Thank you for helping spread our mission.", "success");
      } catch {
        addToast("Sharing cancelled.", "info");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      addToast("Link copied to clipboard.", "success");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-2

       w-auto

        px-6
        py-3

        rounded-xl

        bg-[#2F6B2F]
        hover:bg-[#255525]

        text-white
        font-medium
        tracking-wide

        border border-[#255525]

        shadow-sm
        hover:shadow-lg
        hover:shadow-[#2F6B2F]/20

        transition-all
        duration-300

        hover:-translate-y-0.5
        active:translate-y-0
        active:scale-[0.98]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8FBF74]
        focus-visible:ring-offset-2

        cursor-pointer
      "
    >
      <Megaphone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]" />
      <span>Spread the Word</span>
    </button>
  );
};
