import { Hero } from "../components/landing/Hero";
import { TrendTicker } from "../components/landing/TrendTicker";
import { ClassificationEngine } from "../components/landing/ClassificationEngine";
import { DataReal } from "../components/landing/DataReal";
import { ProductionTiming } from "../components/landing/ProductionTiming";
import { ReportPreview } from "../components/landing/ReportPreview";
import { FinalCta } from "../components/landing/FinalCta";

export function LandingPage() {
  return (
    <>
      <Hero />
      <TrendTicker />

      <section id="metodologia" className="py-16 md:py-stack-xl px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          <ClassificationEngine />
          <div className="hidden md:block col-span-1" />
          <DataReal />
          <ProductionTiming />
        </div>
      </section>

      <ReportPreview />
      <FinalCta />
    </>
  );
}
