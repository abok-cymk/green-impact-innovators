import React, { useEffect, useState } from 'react';
import { INITIATIVES_DATA, GALLERY_DATA } from '@/features/initiatives/data/initiativesData';
import { useActiveInitiative } from '@/features/initiatives/hooks/useActiveInitiative';
import { ProjectBubble } from '@/features/initiatives/components/ProjectBubble';
import { ActiveCard } from '@/features/initiatives/components/ActiveCard';
import { BentoGrid } from '@/features/initiatives/components/BentoGrid';

// Positioning styles designed to create a staggered, natural, cloud-like layout
const LEFT_CLOUD_CLASSES = [
  "top-[5%] left-[10%]",
  "top-[22%] left-[45%]",
  "top-[40%] left-[5%]",
  "top-[52%] left-[55%]",
  "top-[75%] left-[12%]",
  "top-[70%] left-[48%]",
];

const RIGHT_CLOUD_CLASSES = [
  "top-[5%] right-[45%]",
  "top-[20%] right-[10%]",
  "top-[50%] right-[50%]",
  "top-[45%] right-[8%]",
  "top-[72%] right-[45%]",
  "top-[78%] right-[12%]",
];

export const InitiativesLayout: React.FC = () => {
  const { activeIndex, handleSelect, setIsInteracting } = useActiveInitiative({
    totalItems: INITIATIVES_DATA.length,
    autoPlayInterval: 10000,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const leftBubbles = INITIATIVES_DATA.slice(0, 6);
  const rightBubbles = INITIATIVES_DATA.slice(6, 12);
  const activeInitiative = INITIATIVES_DATA[activeIndex];

  if (!hasMounted) {
    return <div className="min-h-screen bg-[#FAFAFA]" />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col justify-between">
      {/* 1. Header / Interactive Cloud Section */}
      <div className="w-full max-w-360 mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between min-h-175 relative">
        
        {/* MOBILE: Circular selector bubbles */}
        <div className="w-full lg:hidden flex flex-wrap justify-center gap-2 mb-8">
          {INITIATIVES_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'bg-[#28283D] scale-125 ring-2 ring-[#855FB1] ring-offset-1' 
                  : 'bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={`Show project ${idx + 1}`}
            />
          ))}
        </div>

        {/* DESKTOP: Left Side Bubble Cloud */}
        <div 
          className="hidden lg:block relative w-85 h-150"
          onMouseLeave={() => setIsInteracting(false)}
        >
          {leftBubbles.map((item, index) => {
            const globalIndex = index;
            const isActive = globalIndex === activeIndex;
            return (
              <ProjectBubble
                key={item.id}
                initiative={item}
                isActive={isActive}
                onClick={() => handleSelect(globalIndex)}
                onMouseEnter={() => handleSelect(globalIndex)}
                positionClass={LEFT_CLOUD_CLASSES[index]}
              />
            );
          })}
        </div>

        {/* Central Details Segment */}
        <div className="flex-1 max-w-125 z-30 lg:px-6">
          <ActiveCard initiative={activeInitiative} />
        </div>

        {/* DESKTOP: Right Side Bubble Cloud */}
        <div 
          className="hidden lg:block relative w-85 h-150"
          onMouseLeave={() => setIsInteracting(false)}
        >
          {rightBubbles.map((item, index) => {
            const globalIndex = index + 6;
            const isActive = globalIndex === activeIndex;
            return (
              <ProjectBubble
                key={item.id}
                initiative={item}
                isActive={isActive}
                onClick={() => handleSelect(globalIndex)}
                onMouseEnter={() => handleSelect(globalIndex)}
                positionClass={RIGHT_CLOUD_CLASSES[index]}
              />
            );
          })}
        </div>
      </div>

      {/* 3. Bento Grid Gallery Section */}
        <BentoGrid galleryItems={GALLERY_DATA} />
    
    </div>
  );
};