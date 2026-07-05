import { useState, type FormEvent } from "react";
import { TagInput } from "./TagInput";
import type { ClientProfilePayload } from "../../types/clientProfile";

const CANAL_OPTIONS = ["Instagram", "TikTok", "Tienda física", "Showroom", "Web propia", "Otro"];

const ESTILO_OPTIONS = [
  { value: "minimalista", label: "Minimalista" },
  { value: "streetwear", label: "Streetwear" },
  { value: "boho", label: "Boho" },
  { value: "sastreria", label: "Sastrería" },
  { value: "casual", label: "Casual" },
  { value: "otro", label: "Otro (escribir)" },
];

const TICKET_OPTIONS = [
  { value: "bajo", label: "Bajo" },
  { value: "medio", label: "Medio" },
  { value: "medio-alto", label: "Medio-alto" },
  { value: "alto", label: "Alto" },
];

interface ClientProfileFormProps {
  initialEmail?: string;
  submitting: boolean;
  onSubmit: (payload: ClientProfilePayload) => void;
}

export function ClientProfileForm({ initialEmail = "", submitting, onSubmit }: ClientProfileFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [ciudad, setCiudad] = useState("Lima");
  const [pais, setPais] = useState("Perú");
  const [canal, setCanal] = useState("");
  const [ticket, setTicket] = useState("medio-alto");
  const [estiloSelect, setEstiloSelect] = useState("");
  const [estiloOtro, setEstiloOtro] = useState("");
  const [publicoObjetivo, setPublicoObjetivo] = useState("");
  const [estilosExcluidos, setEstilosExcluidos] = useState<string[]>([]);
  const [estilosAfines, setEstilosAfines] = useState<string[]>([]);

  const estiloEsOtro = estiloSelect === "otro";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    if (estiloEsOtro && !estiloOtro.trim()) return;

    onSubmit({
      nombre: nombre.trim(),
      email: email.trim(),
      ciudad: ciudad.trim(),
      pais: pais.trim(),
      canal,
      estilo: estiloEsOtro ? estiloOtro.trim() : estiloSelect,
      ticket,
      publicoObjetivo: publicoObjetivo.trim(),
      estilosExcluidos,
      estilosAfines,
    });
  }

  return (
    <form className="form-step" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-stack-md">
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="nombre">
            Nombre del negocio / marca *
          </label>
          <input
            className="field-input"
            id="nombre"
            placeholder="Ej. Estudio Lúmina"
            required
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="email">
            Correo electrónico *
          </label>
          <input
            className="field-input"
            id="email"
            placeholder="tu@marca.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="ciudad">
            Ciudad *
          </label>
          <input
            className="field-input"
            id="ciudad"
            required
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="pais">
            País *
          </label>
          <input
            className="field-input"
            id="pais"
            required
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="canal">
            Canal principal de venta *
          </label>
          <select
            className="field-select"
            id="canal"
            required
            value={canal}
            onChange={(e) => setCanal(e.target.value)}
          >
            <option disabled value="">
              Selecciona un canal
            </option>
            {CANAL_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="estiloSelect">
            Estilo de la marca *
          </label>
          <select
            className="field-select"
            id="estiloSelect"
            required
            value={estiloSelect}
            onChange={(e) => setEstiloSelect(e.target.value)}
          >
            <option disabled value="">
              Selecciona un estilo
            </option>
            {ESTILO_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {estiloEsOtro && (
            <input
              className="field-input mt-3"
              placeholder="Describe el estilo de la marca"
              type="text"
              value={estiloOtro}
              onChange={(e) => setEstiloOtro(e.target.value)}
              autoFocus
            />
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="ticket">
            Ticket promedio *
          </label>
          <select
            className="field-select"
            id="ticket"
            required
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          >
            {TICKET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="field-label" htmlFor="publicoObjetivo">
            Público objetivo
          </label>
          <input
            className="field-input"
            id="publicoObjetivo"
            placeholder="Ej. mujeres 22-35 años urbanas"
            type="text"
            value={publicoObjetivo}
            onChange={(e) => setPublicoObjetivo(e.target.value)}
          />
        </div>

        <TagInput
          id="estilosExcluidosInput"
          label="Estilos a excluir"
          hint="Ej. glam, vintage — presiona Enter después de cada uno"
          value={estilosExcluidos}
          onChange={setEstilosExcluidos}
        />

        <TagInput
          id="estilosAfinesInput"
          label="Estilos afines / a priorizar"
          hint="Ej. minimalista, sastrería — presiona Enter después de cada uno"
          value={estilosAfines}
          onChange={setEstilosAfines}
        />
      </div>

      <div className="mt-stack-lg flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <button
          className="submit-btn bg-primary text-on-primary font-utility-bold text-utility-bold uppercase px-12 py-4 hover:bg-on-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
          type="submit"
          disabled={submitting}
        >
          {submitting && (
            <span className="material-symbols-outlined animate-spin-slow text-lg">
              progress_activity
            </span>
          )}
          {submitting ? "Generando reporte..." : "Generar Reporte Demo"}
        </button>
        <p className="font-utility-sm text-[12px] text-on-background/50 max-w-sm">
          Al enviar aceptas recibir comunicaciones de TrendOps AI relacionadas con tu perfil de
          tendencias.
        </p>
      </div>
    </form>
  );
}
