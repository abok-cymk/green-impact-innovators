import { BACKING_TARGET_GOAL } from "@/lib/constants";
import { BACKER_EVENTS } from "@/lib/events";
import { useEffect, useState } from "react";

export function useBackers() {
  const [backerCount, setBackerCount] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const savedCount = Number(localStorage.getItem("gii_backers") ?? "2");

    setBackerCount(savedCount);

    const percentage = Math.min(
      (savedCount / BACKING_TARGET_GOAL) * 100,
      100
    );

    const timeout = setTimeout(() => {
      setProgressPercentage(percentage);
    }, 150);

    const handleIncrement = () => {
      setBackerCount((prev) => {
        const next = prev + 1;

        localStorage.setItem("gii_backers", next.toString());

        setProgressPercentage(
          Math.min((next / BACKING_TARGET_GOAL) * 100, 100)
        );

        return next;
      });
    };

    window.addEventListener(
      BACKER_EVENTS.INCREMENT,
      handleIncrement
    );

    return () => {
      clearTimeout(timeout);

      window.removeEventListener(
        BACKER_EVENTS.INCREMENT,
        handleIncrement
      );
    };
  }, []);

  return {
    backerCount,
    targetGoal: BACKING_TARGET_GOAL,
    progressPercentage,
  };
}