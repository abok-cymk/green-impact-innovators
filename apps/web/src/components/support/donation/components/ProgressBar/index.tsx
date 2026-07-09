interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({
  percentage,
}: ProgressBarProps) {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#2F6B2F] rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}