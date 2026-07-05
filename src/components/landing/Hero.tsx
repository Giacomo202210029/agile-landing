import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/hero-editorial.png";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ origen: "hero" });
    if (email.trim()) params.set("email", email.trim());
    navigate(`/formulario?${params.toString()}`);
  }

  return (
    <header className="relative min-h-[135svh] md:min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Fotografia editorial de alta moda con cuero negro y satin drapeados en un set de estudio, iluminados por un spot cenital."
          className="hero-bg-image absolute top-0 left-0 w-full h-full object-cover object-top grayscale brightness-50"
          src={heroImage}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 px-6 md:px-margin-desktop w-full max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <p
            className="font-utility-bold text-utility-bold uppercase tracking-widest text-primary mb-6 reveal"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            Inteligencia de Tendencias para Retail de Moda · Perú
          </p>

          <Reveal as="h1" delay={120} className="font-display-lg text-[40px] sm:text-[56px] md:text-display-lg text-surface mb-10 leading-[1.05] md:leading-none">
            PRODUCE LO QUE VA A VENDER,
            <br />
            <span className="italic font-normal">ANTES DE QUE SEA TENDENCIA.</span>
          </Reveal>

          <Reveal delay={280} className="max-w-xl">
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubscribe}
              noValidate
            >
              <div className="flex-grow border-b border-surface/50 focus-within:border-primary transition-colors">
                <input
                  className="w-full bg-transparent border-none text-surface placeholder:text-surface/50 font-utility-bold uppercase py-4 focus:ring-0"
                  placeholder="TU CORREO ELECTRÓNICO"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Tu correo electronico"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-on-primary font-utility-bold text-utility-bold uppercase px-12 py-4 hover:bg-primary-container transition-colors shrink-0 flex items-center justify-center text-center"
              >
                Suscribirse al Reporte
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
