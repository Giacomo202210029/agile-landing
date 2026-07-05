import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router doesn't reset scroll position on navigation by default. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}
