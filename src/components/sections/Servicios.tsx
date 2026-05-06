import { site } from "@/content/site";
import { IcBone, IcActivity, IcHeart, IcSun, IcChart, IcClipboard } from "@/components/icons";
import Container from "@/components/Container";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Fisioterapia Ortopédica": <IcBone />,
  "Fisioterapia Deportiva": <IcActivity />,
  "Postoperatoria": <IcHeart />,
  "Terapia de descarga": <IcSun />,
  "Valoración con dinamometría": <IcChart />,
  "Plan personalizado": <IcClipboard />,
};

export default function Servicios() {
  return (
    <section id="servicios" className="bg-slate-50 py-20">
      <Container>
        <div className="reveal mb-12">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
            Servicios
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
            Tratamientos enfocados en resultados
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-ink-3">
            Evaluacion clinica, plan personalizado y seguimiento. Cada sesion con proposito claro.
          </p>
        </div>

        <div className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(59,108,255,0.12)] hover:ring-brand-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-100">
                {SERVICE_ICONS[s.title] ?? <IcClipboard />}
              </div>
              <div>
                <h3 className="font-semibold text-ink-1 transition-colors duration-200 group-hover:text-brand-700">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
