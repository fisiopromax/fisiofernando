import type { Metadata } from "next";
import Especialidades from "@/components/sections/Especialidades";
import VideosCasos from "@/components/sections/VideosCasos";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Especialidades — FS Therapy | Fisioterapia Roma Sur CDMX",
  description:
    "Ortopedia, deporte, linfedema y más de 20 condiciones tratadas. Atención clínica con enfoque humano y personalizado.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialidades clínicas"
        title="Ortopedia, deporte y linfedema"
        description="Atención a más de 20 condiciones ortopédicas y deportivas, rehabilitación postoperatoria y fisioterapia oncológica."
        variant="pink"
      />
      <Especialidades />
      <VideosCasos />
    </>
  );
}
