/**
 * Shape expected by the n8n "Perfil del Cliente" node (body of the
 * trendops-report webhook). Field names are in Spanish to match 1:1
 * with what the workflow reads from `body.*`.
 */
export interface ClientProfilePayload {
  nombre: string;
  email: string;
  ciudad: string;
  pais: string;
  canal: string;
  estilo: string;
  ticket: string;
  publicoObjetivo: string;
  estilosExcluidos: string[];
  estilosAfines: string[];
}

/**
 * Shape returned by the webhook today: the "Logger Final" node's
 * output, echoed back by "Responder Webhook". The full report body
 * is emailed via Gmail, not returned in this response.
 */
export interface TrendReportSummary {
  timestamp: string;
  version: string;
  cliente: string;
  destinatario: string;
  estado: string;
  resumen: {
    emergentes: number;
    en_ascenso: number;
    en_pico: number;
    saturados: number;
    decayendo: number;
  };
  top5: string[];
  evitar: string[];
  caracteres_reporte: number;
}
