import type { Metadata } from "next";
import Ubicacion from "@/components/sections/Ubicacion";
import Contacto from "@/components/sections/Contacto";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto — FS Therapy | Fisioterapia Roma Sur CDMX",
  description:
    "Agenda tu cita en Roma Sur, CDMX. WhatsApp, teléfono o redes sociales. Calle Tlaxcala #116, Consultorio 3.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contáctanos"
        title="Agenda tu cita hoy"
        description="Estamos en Roma Sur, CDMX. Escríbenos por WhatsApp, llámanos o visítanos directamente."
        variant="blue"
      />
      <Ubicacion />
      <Contacto />
    </>
  );
}
