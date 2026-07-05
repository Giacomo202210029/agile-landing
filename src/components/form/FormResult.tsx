import type { TrendReportSummary } from "../../types/clientProfile";
import { CtaLink } from "../ui/CtaLink";

const FASE_CONFIG: Record<string, { bg: string; text: string; label: string; emoji: string }> = {
  emergente: { bg: "bg-[#dcfce7]", text: "text-[#15803d]", label: "Emergente", emoji: "🌱" },
  en_ascenso: { bg: "bg-[#fef9c3]", text: "text-[#92400e]", label: "En ascenso", emoji: "📈" },
  en_pico: { bg: "bg-[#ffedd5]", text: "text-[#c2410c]", label: "En pico", emoji: "🔥" },
};

function parseTop5Entry(entry: string) {
  const match = entry.match(/^(.*)\s\(([a-z_]+)\)$/i);
  if (!match) return { termino: entry, fase: null as string | null };
  return { termino: match[1], fase: match[2] };
}

interface FormResultProps {
  summary: TrendReportSummary;
  onReset: () => void;
}

export function FormResult({ summary, onReset }: FormResultProps) {
  const { resumen, top5, evitar } = summary;
  const oportunidades = (resumen.emergentes ?? 0) + (resumen.en_ascenso ?? 0);
  const riesgos = (resumen.saturados ?? 0) + (resumen.decayendo ?? 0);

  return (
    <div className="form-step">
      <span className="material-symbols-outlined text-primary text-[48px] mb-4 inline-block">
        check_circle
      </span>
      <h2 className="font-display-sm text-[28px] md:text-display-sm mb-4 leading-tight">
        Demo generada para {summary.cliente}
      </h2>
      <p className="font-body-lg text-body-lg text-on-background/70 max-w-2xl mb-stack-md">
        El análisis completo fue enviado a <strong>{summary.destinatario}</strong>. Aquí tienes
        un adelanto de lo que encontrarás en tu correo.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-stack-md editorial-border p-4 md:p-6">
        <div className="text-center">
          <div className="font-display-sm text-[28px] md:text-display-sm text-primary">
            {oportunidades}
          </div>
          <div className="font-utility-sm text-utility-sm uppercase text-on-background/60">
            Oportunidades
          </div>
        </div>
        <div className="text-center border-x border-on-background/10">
          <div className="font-display-sm text-[28px] md:text-display-sm text-primary">
            {resumen.en_pico ?? 0}
          </div>
          <div className="font-utility-sm text-utility-sm uppercase text-on-background/60">
            En pico
          </div>
        </div>
        <div className="text-center">
          <div className="font-display-sm text-[28px] md:text-display-sm text-error">
            {riesgos}
          </div>
          <div className="font-utility-sm text-utility-sm uppercase text-on-background/60">
            Riesgos
          </div>
        </div>
      </div>

      <div className="mb-stack-md">
        <h3 className="font-utility-bold text-utility-bold uppercase mb-4">
          Top tendencias de la semana
        </h3>
        {top5.length === 0 ? (
          <p className="font-body-md text-on-background/60">Sin tendencias destacadas esta semana.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {top5.map((entry, index) => {
              const { termino, fase } = parseTop5Entry(entry);
              const cfg = (fase && FASE_CONFIG[fase]) || null;
              return (
                <li
                  key={entry}
                  className="flex items-center gap-4 border-b border-on-background/10 pb-3"
                >
                  <span className="font-utility-bold text-utility-bold text-primary w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body-lg text-body-lg flex-1 capitalize">{termino}</span>
                  {cfg && (
                    <span
                      className={`font-utility-sm text-[10px] font-bold uppercase px-3 py-1 rounded-full ${cfg.bg} ${cfg.text}`}
                    >
                      {cfg.emoji} {cfg.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {evitar.length > 0 && (
        <div className="mb-stack-lg">
          <h3 className="font-utility-bold text-utility-bold uppercase mb-4">
            Riesgos de inventario a evitar
          </h3>
          <div className="flex flex-wrap gap-2">
            {evitar.map((termino) => (
              <span
                key={termino}
                className="font-utility-sm text-[11px] uppercase px-3 py-1 border border-error text-error rounded-full"
              >
                ⚠️ {termino}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <CtaLink to="/">Volver al inicio</CtaLink>
        <button
          type="button"
          className="font-utility-bold text-utility-bold uppercase underline text-on-background/60 hover:text-primary"
          onClick={onReset}
        >
          Generar otro reporte
        </button>
      </div>
    </div>
  );
}
