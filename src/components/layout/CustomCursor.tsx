import { useRef } from "react";
import { useCustomCursor } from "../../hooks/useCustomCursor";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useCustomCursor(dotRef, ringRef);

  return (
    <>
      <div className="custom-cursor-ring" ref={ringRef} />
      <div className="custom-cursor-dot" ref={dotRef} />
    </>
  );
}
