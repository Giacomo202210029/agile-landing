import { Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";

export function DataReal() {
  return (
    <Reveal
      delay={100}
      className="col-span-12 md:col-span-6 border-b border-on-background hover:border-primary py-stack-md flex flex-col justify-center group transition-colors duration-500"
    >
      <span className="font-utility-bold text-utility-bold text-primary uppercase mb-4">
        Precision over Hype
      </span>
      <h2 className="font-display-sm text-[32px] md:text-display-sm mb-8 leading-tight transition-transform duration-500 group-hover:translate-x-2">
        DATA REAL. <br />
        SIN ADORNOS.
      </h2>
      <p className="font-body-lg text-body-lg max-w-md transition-transform duration-500 group-hover:translate-x-2">
        Analizamos Google Trends, TikTok Creative Center y búsquedas activas en Lima cada
        semana. Sin intuición, sin adivinar — solo el timing real entre cuándo produces y
        cuándo tu cliente compra.
      </p>
      <div className="mt-12 flex space-x-8">
        <div className="text-center">
          <div className="font-display-sm text-display-sm text-primary">
            <StatCounter target={4} suffix=" sem" />
          </div>
          <div className="font-utility-bold text-utility-bold uppercase">Anticipación</div>
        </div>
        <div className="text-center">
          <div className="font-display-sm text-display-sm text-primary">Lunes</div>
          <div className="font-utility-bold text-utility-bold uppercase">Cada Reporte</div>
        </div>
      </div>
    </Reveal>
  );
}
