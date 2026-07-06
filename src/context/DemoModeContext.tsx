import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "trendops-live-mode";

/**
 * Typed anywhere on the page (outside form fields) to flip real/mock mode
 * on this browser only. Change this if it ever leaks around the classroom —
 * it's a deterrent against casual abuse, not real security (it ships in the
 * public JS bundle, so anyone inspecting devtools can find it).
 */
const SECRET_PHRASE = "trendopslive";
const BUFFER_RESET_MS = 2500;

function readStoredMode(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

const DemoModeContext = createContext<{ isLive: boolean }>({ isLive: false });

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [isLive, setIsLive] = useState(readStoredMode);

  useEffect(() => {
    let buffer = "";
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const isEditable =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);
      if (isEditable || e.key.length !== 1) return;

      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET_PHRASE.length);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        buffer = "";
      }, BUFFER_RESET_MS);

      if (buffer === SECRET_PHRASE) {
        buffer = "";
        setIsLive((prev) => {
          const next = !prev;
          localStorage.setItem(STORAGE_KEY, String(next));
          console.info(`[TrendOps] Modo ${next ? "EN VIVO" : "DEMO"} activado en esta laptop.`);
          return next;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <DemoModeContext.Provider value={{ isLive }}>
      {children}
      <div
        className="fixed bottom-3 right-3 z-[200]"
        aria-hidden="true"
      >
        <span
          className={`block w-2 h-2 rounded-full ${
            isLive ? "bg-error animate-pulse" : "bg-on-background/15"
          }`}
        />
      </div>
    </DemoModeContext.Provider>
  );
}

export function useDemoMode() {
  return useContext(DemoModeContext);
}
