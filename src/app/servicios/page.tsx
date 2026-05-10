import type { Metadata } from "next";
import Servicios from "@/components/sections/Servicios";
import VideoValoracion from "@/components/sections/VideoValoracion";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Servicios — FS Therapy | Fisioterapia Roma Sur CDMX",
  description:
    "Fisioterapia ortopédica, deportiva, postoperatoria y más. Evaluación clínica, plan personalizado y seguimiento en cada sesión.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Tratamientos enfocados en resultados"
        description="Evaluación clínica, plan personalizado y seguimiento. Cada sesión con propósito claro."
        variant="blue"
      />
      <Servicios />
      <VideoValoracion />
    </>
  );
}
