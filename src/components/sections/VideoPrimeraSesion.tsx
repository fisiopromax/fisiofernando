import Container from "@/components/Container";
import VerticalVideoCard from "@/components/VerticalVideoCard";
import { waLink } from "@/lib/links";
import { IcWhatsapp } from "@/components/icons";

export default function VideoPrimeraSesion() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-700 opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent-800 opacity-20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div className="reveal order-2 lg:order-1">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-300">
              Tu primera vez
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              ¿Cómo es una primera sesión?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              En la primera sesión hacemos una evaluación completa: analizamos tu movimiento,
              identificamos la causa raíz del problema y diseñamos un plan personalizado para ti.
              Sin rodeos. Con propósito claro.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "Evaluación", d: "Análisis funcional completo" },
                { n: "Diagnóstico", d: "Causa raíz identificada" },
                { n: "Plan", d: "Objetivos claros por sesión" },
                { n: "Seguimiento", d: "Medición de avance real" },
              ].map((item) => (
                <div key={item.n} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-300">{item.n}</p>
                  <p className="mt-1 text-xs text-white/50">{item.d}</p>
                </div>
              ))}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-400"
            >
              <IcWhatsapp cls="h-4 w-4" />
              Agendar mi primera sesión
            </a>
          </div>

          {/* Video */}
          <div className="reveal order-1 flex justify-center lg:order-2">
            <VerticalVideoCard
              src="/videos/primer-sesion.mp4"
              title="Así es tu primera sesión de fisioterapia"
              badge="Primera sesión"
              badgeColor="blue"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
