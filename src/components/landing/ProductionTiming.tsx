import { Reveal } from "../ui/Reveal";
import { CtaLink } from "../ui/CtaLink";

export function ProductionTiming() {
  return (
    <>
      <Reveal
        delay={150}
        className="col-span-12 md:col-span-7 mt-stack-md flex flex-col md:flex-row items-start gap-gutter"
      >
        <div className="w-full md:w-2/3">
          <h2 className="font-display-sm text-[32px] md:text-display-sm mb-6">
            Timing de Producción
          </h2>
          <p className="font-body-lg text-body-lg mb-8">
            El reporte llega cada lunes a primera hora, antes de que hagas tu pedido semanal
            al taller. La ventana entre detectar la tendencia y producir es de días, no de
            meses — perderla significa producir cuando la tendencia ya bajó.
          </p>
          <CtaLink to="/formulario?origen=planes" variant="outline-dark">
            Explorar Planes <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </CtaLink>
        </div>
        <div className="w-full md:w-1/3 bg-on-background text-surface p-6 aspect-[3/4] flex flex-col justify-end group transition-transform duration-500 hover:-translate-y-2">
          <span className="font-utility-bold text-utility-bold uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            Para Compradores
          </span>
          <h3 className="font-headline-lg text-headline-lg mt-2 italic">Decide con Datos</h3>
        </div>
      </Reveal>

      <Reveal delay={220} className="col-span-12 md:col-span-5 mt-stack-md">
        <div className="relative w-full aspect-square overflow-hidden editorial-border group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            alt="Estudio de moda minimalista con paredes de concreto y un maniqui con un abrigo rojo estructurado bajo luz natural."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKOqPFz_q_ewcszjx1T8lin2cyu7NBDNxrJvxK7BGAir73Q_NSY7s1QDTHRVaEyW7LhIdQiJAnyao3py9pD5g5PrH2oJC-6tT7ejdbJlbnsY-5D-IfwtuFrAZTayIeqvANZ1deZXq_63eKwdT5AJNLQZAptCP82M6Elk-gITFw1eS437r_yRqtJo0Jy2XJir9BC8M0WLv-EWtBdmJyDgrclMzfogJLDtR_0aJmgWuBBA1VVmexQgfF_oEai4YWj7FeD_S-gDaVDRw"
          />
        </div>
      </Reveal>
    </>
  );
}
