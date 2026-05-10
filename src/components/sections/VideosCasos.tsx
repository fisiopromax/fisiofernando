import Container from "@/components/Container";
import VerticalVideoCard from "@/components/VerticalVideoCard";

const VIDEOS = [
  {
    src: "/videos/dorsiflexion-tobillo.mp4",
    title: "¿Por qué evaluar correctamente la dorsiflexión de tobillo?",
    badge: "Educación clínica",
    badgeColor: "blue" as const,
    eyebrow: "Tobillo y biomecánica",
    description:
      "La dorsiflexión de tobillo es uno de los movimientos más subestimados y más influyentes en la cadena cinética. Una limitación aquí afecta rodilla, cadera y columna.",
  },
  {
    src: "/videos/caso-meniscal-rodilla.mp4",
    title: "Flexión completa y sin dolor en 3 sesiones",
    badge: "Caso real",
    badgeColor: "green" as const,
    stat: "3 sesiones",
    statLabel: "para recuperar rango completo",
    eyebrow: "Post artroscopia meniscal",
    description:
      "Paciente post artroscopia de menisco recupera flexión total de rodilla sin dolor. Resultado alcanzado en las primeras tres sesiones con plan progresivo.",
  },
  {
    src: "/videos/caso-fractura-codo.mp4",
    title: "Excelente avance en flexión y extensión de codo",
    badge: "Caso real",
    badgeColor: "pink" as const,
    eyebrow: "Post fractura de codo",
    description:
      "Paciente post operada de fractura de codo muestra avance significativo en arco de movimiento. La rehabilitación progresiva permitió recuperar funcionalidad completa.",
  },
];

export default function VideosCasos() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-80 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-50 opacity-60 blur-3xl" />
      </div>

      <Container>
        <div className="reveal mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
            En acción
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
            Educación clínica y casos reales
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[15px] text-ink-3">
            Videos que muestran el enfoque clínico de Fernando, con educación sobre evaluación y resultados reales de pacientes.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <div key={v.src} className="reveal flex flex-col gap-5">
              {/* Text above the video */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600">
                  {v.eyebrow}
                </p>
                <p className="mt-1 text-[14px] font-semibold leading-snug text-ink-1">
                  {v.description}
                </p>
              </div>

              {/* Video card — centered */}
              <div className="flex justify-center">
                <VerticalVideoCard
                  src={v.src}
                  title={v.title}
                  badge={v.badge}
                  badgeColor={v.badgeColor}
                  stat={v.stat}
                  statLabel={v.statLabel}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
