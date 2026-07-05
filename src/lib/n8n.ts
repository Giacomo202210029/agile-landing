import type { ClientProfilePayload, TrendReportSummary } from "../types/clientProfile";

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

// The workflow calls SerpAPI, Gemini and Gmail synchronously before it
// responds, so a short timeout would fail healthy requests. 90s covers
// that chain with headroom.
const REQUEST_TIMEOUT_MS = 90_000;

export class N8nRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "N8nRequestError";
  }
}

export async function submitClientProfile(
  payload: ClientProfilePayload,
): Promise<TrendReportSummary> {
  if (!WEBHOOK_URL) {
    throw new N8nRequestError(
      "Falta configurar VITE_N8N_WEBHOOK_URL (ver .env.example).",
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new N8nRequestError(
        `El servidor respondio con un error (${response.status}).`,
      );
    }

    return (await response.json()) as TrendReportSummary;
  } catch (error) {
    if (error instanceof N8nRequestError) throw error;
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new N8nRequestError(
        "El reporte esta tardando mas de lo esperado. Intenta nuevamente en un momento.",
      );
    }
    throw new N8nRequestError(
      "No se pudo conectar con el motor de tendencias. Revisa tu conexion e intenta de nuevo.",
    );
  } finally {
    clearTimeout(timeout);
  }
}
