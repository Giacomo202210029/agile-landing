import { Reveal } from "../ui/Reveal";
import { CtaLink } from "../ui/CtaLink";
import { ReportMockup } from "./ReportMockup";

const REPORT_ITEMS = [
  "Top 5 Tendencias — Qué Producir Esta Semana",
  "Riesgos de Inventario — Qué Evitar",
  "Plan de Contenido — 3 Ideas Listas para Publicar",
];

export function ReportPreview() {
  return (
    <section id="reportes" className="bg-surface-container-low py-16 md:py-stack-xl relative overflow-hidden">
      <div className="px-6 md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter items-center">
        <Reveal className="col-span-12 md:col-span-5 z-10">
          <h2 className="font-display-sm text-[32px] md:text-display-sm mb-8 leading-tight">
            REPORTES QUE <br />
            <span className="text-primary italic">DEFINEN</span> EL MERCADO.
          </h2>
          <ul className="space-y-6 mb-12">
            {REPORT_ITEMS.map((item, index) => (
              <li
                key={item}
                className="flex items-center space-x-4 border-b border-on-background/20 pb-4"
              >
                <span className="font-utility-bold text-utility-bold text-primary">
                  0{index + 1}
                </span>
                <span className="font-body-lg text-body-lg">{item}</span>
              </li>
            ))}
          </ul>
          <CtaLink to="/formulario?origen=demo" variant="dark">
            Ver Demo de Reporte
          </CtaLink>
        </Reveal>

        <Reveal delay={150} className="col-span-12 md:col-span-7 relative flex justify-end mt-12 md:mt-0">
          <div className="w-full max-w-2xl relative">
            <div className="absolute top-8 left-8 w-full h-full border border-on-background translate-x-4 translate-y-4 -z-10" />
            <ReportMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
