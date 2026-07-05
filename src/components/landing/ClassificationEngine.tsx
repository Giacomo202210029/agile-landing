import { Reveal } from "../ui/Reveal";

export function ClassificationEngine() {
  return (
    <Reveal
      className="col-span-12 md:col-span-5 editorial-border p-6 md:p-stack-md bg-surface flex flex-col justify-between group hover:bg-on-background transition-colors duration-300"
    >
      <div>
        <h2 className="font-display-sm text-[32px] md:text-display-sm mb-6 group-hover:text-surface group-hover:translate-x-2 transition-all duration-500">
          Motor de Clasificación
        </h2>
        <p className="font-body-lg text-body-lg mb-12 group-hover:text-surface/80 group-hover:translate-x-2 transition-all duration-500">
          Cada tendencia pasa por 5 fases: emergente, en ascenso, en pico, saturada o en
          declive. Te decimos exactamente en cuál está y qué decisión tomar — producir,
          publicar o esperar — antes de comprometer tu inversión con el taller.
        </p>
      </div>
      <div className="flex items-end justify-between">
        <span className="material-symbols-outlined text-[48px] md:text-display-sm text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
          analytics
        </span>
        <span className="font-utility-bold text-utility-bold uppercase group-hover:text-surface transition-colors duration-500">
          01 / ANALYTICS
        </span>
      </div>
    </Reveal>
  );
}
