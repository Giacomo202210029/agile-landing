import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ClientProfileForm } from "../components/form/ClientProfileForm";
import { FormResult } from "../components/form/FormResult";
import { submitClientProfile } from "../lib/n8n";
import type { ClientProfilePayload, TrendReportSummary } from "../types/clientProfile";

const INTRO_COPY: Record<string, { eyebrow: string; title: string; description: string }> = {
  demo: {
    eyebrow: "Demo del Reporte",
    title: "Genera tu reporte demo en vivo",
    description:
      "Cuéntanos sobre tu marca y en unos momentos generamos, con datos reales, el mismo reporte semanal que reciben nuestros clientes.",
  },
  default: {
    eyebrow: "Perfil de Cliente",
    title: "Registra tu marca en TrendOps AI",
    description:
      "Estos datos alimentan directamente el motor de curación de tendencias. Cuanto más preciso sea tu perfil, más afinadas serán las alertas y reportes que recibas.",
  },
};

export function FormPage() {
  const [searchParams] = useSearchParams();
  const origen = searchParams.get("origen") ?? "";
  const prefilledEmail = searchParams.get("email") ?? "";
  const copy = INTRO_COPY[origen] ?? INTRO_COPY.default;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<TrendReportSummary | null>(null);

  async function handleSubmit(payload: ClientProfilePayload) {
    setSubmitting(true);
    setError(null);
    try {
      const result = await submitClientProfile(payload);
      setSummary(result);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrio un error inesperado.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      <nav className="w-full border-b border-on-background">
        <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop py-6 max-w-[1440px] mx-auto">
          <Link className="font-display-sm text-[26px] md:text-display-sm font-bold text-on-background tracking-tighter" to="/">
            TRENDOPS AI
          </Link>
          <Link
            className="font-utility-bold text-utility-bold uppercase text-on-background hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
            to="/"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Volver
          </Link>
        </div>
      </nav>

      <main className="px-6 md:px-margin-desktop py-12 md:py-stack-xl max-w-[880px] mx-auto">
        {summary ? (
          <FormResult summary={summary} onReset={() => setSummary(null)} />
        ) : (
          <>
            <div className="mb-stack-md">
              <p className="font-utility-bold text-utility-bold uppercase tracking-widest text-primary mb-4">
                {copy.eyebrow}
              </p>
              <h1 className="font-display-sm text-[28px] md:text-display-sm mb-6 leading-tight">
                {copy.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-background/70 max-w-2xl">
                {copy.description}
              </p>
            </div>

            {error && (
              <div className="mb-stack-md border border-error text-error px-4 py-3 flex items-start gap-3">
                <span className="material-symbols-outlined text-lg">error</span>
                <p className="font-body-md text-[14px]">{error}</p>
              </div>
            )}

            <ClientProfileForm
              initialEmail={prefilledEmail}
              submitting={submitting}
              onSubmit={handleSubmit}
            />

            {submitting && (
              <p className="font-utility-sm text-[12px] text-on-background/50 mt-4">
                Esto puede tardar hasta un minuto: estamos consultando Google Trends, TikTok y
                generando tu análisis con IA.
              </p>
            )}
          </>
        )}
      </main>

      <footer className="border-t border-on-background py-8 px-6 md:px-margin-desktop">
        <p className="font-utility-sm text-[11px] tracking-[0.2em] uppercase text-on-background/40 max-w-[1440px] mx-auto">
          TrendOps AI — Trend Engine v4.0
        </p>
      </footer>
    </div>
  );
}
