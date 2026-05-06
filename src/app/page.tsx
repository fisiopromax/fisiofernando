import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Promo from "@/components/sections/Promo";
import Servicios from "@/components/sections/Servicios";
import Especialidades from "@/components/sections/Especialidades";
import VideoSection from "@/components/sections/VideoSection";
import Certificaciones from "@/components/sections/Certificaciones";
import Enfoque from "@/components/sections/Enfoque";
import Ubicacion from "@/components/sections/Ubicacion";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink-1">
      <Header />
      <Hero />
      <Promo />
      <Servicios />
      <Especialidades />
      <VideoSection />
      <Certificaciones />
      <Enfoque />
      <Ubicacion />
      <Contacto />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
