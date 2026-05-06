import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcCheck } from "@/components/icons";
import Container from "@/components/Container";

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-white py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          <div className="reveal">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
              Especialidades
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              Ortopedia, deporte y linfedema
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-3">
              Atencion a lesiones ortopedicas y deportivas, rehabilitacion postoperatoria, y fisioterapia oncologica con enfoque humano y clinico.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-500"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Consultar mi caso
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-px hover:border-brand-300 hover:text-brand-700"
              >
                <IcPhone cls="h-4 w-4" />
                Llamar
              </a>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 gap-2 sm:grid-cols-2">
            {site.specialties.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 transition-[border-color,background-color] duration-200 hover:border-brand-200 hover:bg-brand-50"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-colors duration-200">
                  <IcCheck />
                </span>
                <span className="text-sm text-ink-2">{c}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
