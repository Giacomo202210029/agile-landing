import { useEffect, type RefObject } from "react";

/**
 * Dot tracks the pointer exactly, ring trails with easing. Both grow
 * slightly over interactive elements. Disabled on touch/coarse pointers.
 */
export function useCustomCursor(
  dotRef: RefObject<HTMLDivElement | null>,
  ringRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot!.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
    window.addEventListener("mousemove", handleMouseMove);

    function trackRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring!.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(trackRing);
    }
    trackRing();

    // Delegated on document (not per-element) so it keeps working across
    // route changes without re-querying the DOM on every navigation.
    const interactiveSelector = "a, button, input, select, textarea";
    function handleOver(e: MouseEvent) {
      if ((e.target as Element).closest?.(interactiveSelector)) {
        document.body.classList.add("cursor-hover");
      }
    }
    function handleOut(e: MouseEvent) {
      if ((e.target as Element).closest?.(interactiveSelector)) {
        document.body.classList.remove("cursor-hover");
      }
    }
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("has-custom-cursor", "cursor-hover");
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [dotRef, ringRef]);
}
