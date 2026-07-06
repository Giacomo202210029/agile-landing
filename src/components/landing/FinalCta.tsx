import { Reveal } from "../ui/Reveal";
import { CtaLink } from "../ui/CtaLink";

export function FinalCta() {
  return (
    <section className="py-16 md:py-stack-xl px-6 md:px-margin-desktop bg-primary text-surface relative overflow-hidden">
      <Reveal className="max-w-3xl mx-auto">
        <div className="grid grid-cols-12 gap-gutter relative">
          <div className="col-span-12 md:col-span-2 flex flex-col gap-4 font-utility-sm text-[10px] tracking-[0.3em] uppercase opacity-60 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-surface rounded-full" />
              <span>Fase: Lanzamiento</span>
            </div>
            <div>Lima, Perú</div>
            <div>Sistema: Trend_Engine_v2.1</div>
          </div>

          <div className="col-span-12 md:col-span-10 relative">
            <h2 className="font-display-lg text-[52px] sm:text-[72px] md:text-[110px] lg:text-[160px] leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-12">
              ¿LISTO <br />
              <span className="italic ml-6 sm:ml-12 md:ml-24">PARA EL</span> <br />
              <span className="text-on-background">FUTURO?</span>
            </h2>

            <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
              <p className="font-body-lg text-body-lg max-w-md opacity-90">
                Tiendas de ropa en Lima ya están usando TrendOps AI para decidir qué producir
                antes de comprometer stock con el taller.
              </p>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <CtaLink to="/formulario?origen=cta-final" variant="dark" className="w-full">
                  Suscribirse Ahora
                </CtaLink>
                <CtaLink to="/formulario?origen=contacto" variant="outline-light" className="w-full">
                  Contacto Corporativo
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 font-utility-bold text-[80px] md:text-[120px] leading-none opacity-5 pointer-events-none select-none">
            001
          </div>
        </div>
      </Reveal>
    </section>
  );
}
