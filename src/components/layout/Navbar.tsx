import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CtaLink } from "../ui/CtaLink";

const NAV_LINKS = [
  { label: "Metodología", to: "#metodologia" },
  { label: "Reportes", to: "#reportes" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-on-background">
      <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop py-4 md:py-6 max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="font-display-sm text-[26px] md:text-display-sm font-bold text-on-background tracking-tighter"
        >
          TRENDOPS AI
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="nav-link font-utility-bold text-utility-bold uppercase transition-colors duration-200 text-on-background hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <CtaLink to="/formulario?origen=acceso" className="hidden md:inline-block">
          Obtener Acceso
        </CtaLink>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-on-background"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-on-background bg-background px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="font-utility-bold text-utility-bold uppercase text-on-background"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <CtaLink to="/formulario?origen=acceso" className="mt-2 w-full">
            Obtener Acceso
          </CtaLink>
        </div>
      )}
    </nav>
  );
}
