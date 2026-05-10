import Container from "@/components/Container";
import VerticalVideoCard from "@/components/VerticalVideoCard";

export default function VideoValoracion() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent-50 opacity-80 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">

          {/* Video — goes first on desktop visually */}
          <div className="reveal order-1 flex justify-center lg:order-2">
            <VerticalVideoCard
              src="/videos/valoracion-inicial.mp4"
              title="Valoración inicial — El punto de partida"
              badge="Evaluación clínica"
              badgeColor="blue"
            />
          </div>

          {/* Text */}
          <div className="reveal order-2 lg:order-1">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
              Así empezamos
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              La valoración inicial lo cambia todo
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-3">
              Sin una evaluación precisa, no hay tratamiento efectivo. Fernando realiza un análisis
              funcional completo antes de tocar ningún tejido. Así cada sesión tiene propósito,
              dirección y evidencia.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Análisis postural y de movimiento",
                "Pruebas funcionales específicas",
                "Identificación de la causa raíz",
                "Diseño del plan de tratamiento personalizado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 text-[10px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
