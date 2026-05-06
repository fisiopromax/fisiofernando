import { site } from "@/content/site";

export const waLink = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
  "Hola, quiero agendar una cita de fisioterapia."
)}`;

export const telLink = `tel:${site.phoneRaw}`;
