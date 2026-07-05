import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "dark" | "outline-light" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-container",
  dark: "bg-on-background text-surface hover:bg-primary",
  "outline-light": "border border-surface text-surface hover:bg-surface/10",
  "outline-dark": "border-b-2 border-primary hover:text-primary",
};

interface CtaLinkProps {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

/** Shared styling for the site's uppercase CTA buttons/links. */
export function CtaLink({ to, variant = "primary", className = "", children }: CtaLinkProps) {
  const base =
    variant === "outline-dark"
      ? "inline-flex items-center font-utility-bold text-utility-bold uppercase pb-2 transition-colors"
      : "font-utility-bold text-utility-bold uppercase px-8 py-4 transition-colors text-center inline-block";

  return (
    <Link to={to} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
