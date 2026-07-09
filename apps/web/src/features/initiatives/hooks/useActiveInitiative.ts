import { useState, useEffect, useRef, useCallback } from 'react';

interface UseActiveInitiativeProps {
  totalItems: number;
  autoPlayInterval?: number;
}

export function useActiveInitiative({ totalItems, autoPlayInterval = 6000 }: UseActiveInitiativeProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    
    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);
  }, [totalItems, autoPlayInterval]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isInteracting) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isInteracting, startAutoPlay, stopAutoPlay]);

  const handleSelect = (index: number) => {
    setIsInteracting(true);
    setActiveIndex(index);
  };

  return {
    activeIndex,
    handleSelect,
    setIsInteracting,
  };
}