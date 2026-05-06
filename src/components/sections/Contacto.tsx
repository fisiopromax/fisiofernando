import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcInstagram, IcFacebook } from "@/components/icons";
import Container from "@/components/Container";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-slate-50 py-20">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
            Contacto
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
            Agenda tu cita hoy
          </h2>
          <p className="mt-4 text-[15px] text-ink-3">
            Sin formularios. Contacto directo por WhatsApp, llamada o redes sociales.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent-100 transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-200"
            >
              <IcWhatsapp cls="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <IcPhone cls="h-4 w-4" />
              Llamar
            </a>
            <a
              href={site.socials.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <IcInstagram cls="h-4 w-4" />
              Instagram
            </a>
            <a
              href={site.socials.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <IcFacebook cls="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
