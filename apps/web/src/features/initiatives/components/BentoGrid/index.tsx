import React from 'react';
import type { GalleryItem } from "@/features/initiatives/types/types";

interface BentoGridProps {
  galleryItems: GalleryItem[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ galleryItems }) => {
  // Safe layout maps to ensure elements align neatly across grid viewports
  const gridPositions = [
    "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 h-[300px] md:h-auto", // Item 1 (Featured)
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 h-[200px]",          // Item 2
    "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 h-[200px]",          // Item 3
    "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 h-[200px]",          // Item 4
    "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 h-[300px] md:h-auto", // Item 5
    "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 h-[200px]",          // Item 6
    "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 h-[300px] md:h-auto", // Item 7
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="sr-only text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#4D96A9]">Visual Showcase</span>
        <h3 className="text-2xl md:text-3xl font-black text-[#28283D] mt-2">Our Field Operations</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 --auto-rows-50">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`${gridPositions[index] || "col-span-1"} group relative overflow-hidden rounded-2xl bg-zinc-100 shadow-sm border border-zinc-200 transition-all duration-300 hover:shadow-lg`}
          >
            {/* Image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://placehold.co/600x400/e4e4e7/27272a?text=${encodeURIComponent(item.title)}`;
              }}
            />

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

            {/* Content Details */}
            <div className="sr-only absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-left z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#8FE3F9] mb-1">
                {item.category}
              </span>
              <h4 className="text-white text-base md:text-lg font-extrabold tracking-tight leading-snug">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};