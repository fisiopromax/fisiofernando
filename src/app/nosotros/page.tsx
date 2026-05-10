import type { Metadata } from "next";
import VideoSection from "@/components/sections/VideoSection";
import Certificaciones from "@/components/sections/Certificaciones";
import Enfoque from "@/components/sections/Enfoque";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nosotros — FS Therapy | Fisioterapia Roma Sur CDMX",
  description:
    "Conoce a Fernando Junior Delgado Castañeda, licenciado en fisioterapia con formación continua, certificaciones y compromiso social.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre el especialista"
        title="Formación, enfoque y compromiso"
        description="Fernando Junior Delgado Castañeda — Lic. en Fisioterapia con certificaciones de alto nivel y enfoque clínico personalizado."
        variant="dark"
      />
      <VideoSection />
      <Certificaciones />
      <Enfoque />
    </>
  );
}
