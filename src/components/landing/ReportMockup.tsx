const MOCK_ROWS = [
  { termino: "Blazer mujer", fase: "Emergente", bg: "bg-[#dcfce7]", text: "text-[#15803d]", pct: 35 },
  { termino: "Falda tableada", fase: "En ascenso", bg: "bg-[#fef9c3]", text: "text-[#92400e]", pct: 58 },
  { termino: "Color camel", fase: "En pico", bg: "bg-[#ffedd5]", text: "text-[#c2410c]", pct: 82 },
];

/** Stylized stand-in for a real report screenshot: mirrors the email/demo layout. */
export function ReportMockup() {
  return (
    <div className="editorial-border bg-surface-container-lowest p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-utility-bold text-utility-bold uppercase text-primary">
            TrendOps AI
          </p>
          <p className="font-utility-sm text-[11px] text-on-background/50 uppercase tracking-widest">
            Reporte Semanal · Lima, Perú
          </p>
        </div>
        <span className="material-symbols-outlined text-on-background/30 text-3xl">
          insights
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {MOCK_ROWS.map((row, index) => (
          <div key={row.termino} className="flex items-center gap-4">
            <span className="font-utility-bold text-utility-bold text-on-background/40 w-5">
              0{index + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-body-md text-[14px] font-medium">{row.termino}</span>
                <span
                  className={`font-utility-sm text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${row.bg} ${row.text}`}
                >
                  {row.fase}
                </span>
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-on-background/10 flex items-center justify-between">
        <span className="font-utility-sm text-[11px] text-on-background/50">
          Actualizado cada lunes 6:00 AM
        </span>
        <span className="font-utility-sm text-[11px] text-primary font-bold uppercase">
          Ver reporte completo →
        </span>
      </div>
    </div>
  );
}
