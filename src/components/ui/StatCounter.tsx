import { useCountUp } from "../../hooks/useCountUp";

interface StatCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function StatCounter({ target, suffix = "", className = "" }: StatCounterProps) {
  const { ref, value } = useCountUp(target);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {value}
      {suffix}
    </span>
  );
}
