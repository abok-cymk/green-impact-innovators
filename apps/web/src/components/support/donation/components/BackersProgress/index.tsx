import { useBackers } from "@/hooks/useBackers";
import { ProgressBar } from "@/components/support/donation/components/ProgressBar";

export function BackersProgress() {
  const {
    backerCount,
    targetGoal,
    progressPercentage,
  } = useBackers();

  return (
    <section className="max-w-5xl mx-auto bg-[#12382E] border border-[#214D3D] rounded-2xl p-8 shadow-xl">

      <div className="text-center sm:text-left">

        <div className="flex items-baseline gap-2">

          <span className="text-4xl font-black text-white">
            {backerCount.toLocaleString()}
          </span>

          <span className="text-sm text-emerald-200">
            of {targetGoal.toLocaleString()}
          </span>

        </div>

        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
          Total Backers
        </p>

      </div>

      <div className="mt-6">
        <ProgressBar
          percentage={progressPercentage}
        />
      </div>

    </section>
  );
}