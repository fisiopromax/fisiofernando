import Image from "next/image";
import FerImg from "@/app/Fer.png";
import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcMapPin } from "@/components/icons";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full bg-brand-50 opacity-70 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-accent-50 opacity-50 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Fisioterapia Profesional · Roma Sur · CDMX
            </div>

            {/* Color palette decoration */}
            <div className="mt-4 flex animate-fade-in items-center gap-2 [animation-delay:60ms]">
              {[
                "#3B6CFF",
                "#6C99FF",
                "#CFE0FF",
                "#FF2E6D",
                "#FF93B2",
                "#FFE4EC",
              ].map((color) => (
                <span
                  key={color}
                  className="h-3 w-3 rounded-full ring-1 ring-black/10"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="ml-1 text-[10px] text-ink-3">Paleta FS Therapy</span>
            </div>

            <h1 className="mt-5 animate-fade-up text-[2.4rem] font-extrabold leading-[1.15] tracking-tight text-ink-1 [animation-delay:100ms] sm:text-5xl">
              {site.name}
            </h1>

            <p className="mt-3 animate-fade-up text-base font-semibold text-brand-600 [animation-delay:180ms]">{site.title}</p>
            <p className="animate-fade-up text-sm text-ink-3 [animation-delay:200ms]">{site.subtitle}</p>

            <p className="mt-5 animate-fade-up max-w-lg text-[15px] leading-relaxed text-ink-2 [animation-delay:260ms]">
              {site.description}
            </p>

            <div className="mt-8 animate-fade-up flex flex-wrap gap-3 [animation-delay:340ms]">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent-100 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-200"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Agendar por WhatsApp
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <IcPhone cls="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <IcMapPin cls="h-4 w-4" />
                Como llegar
              </a>
            </div>

            <div className="mt-10 animate-fade-up grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 pt-8 [animation-delay:440ms]">
              <div className="pr-4">
                <p className="text-2xl font-extrabold text-ink-1">100%</p>
                <p className="mt-0.5 text-xs text-ink-3">Personalizado</p>
              </div>
              <div className="px-4">
                <p className="text-2xl font-extrabold text-ink-1">3+</p>
                <p className="mt-0.5 text-xs text-ink-3">Especialidades</p>
              </div>
              <div className="pl-4">
                <p className="text-2xl font-extrabold text-ink-1">20+</p>
                <p className="mt-0.5 text-xs text-ink-3">Condiciones</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md animate-scale-in [animation-delay:80ms] lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl shadow-hero transition-shadow duration-500 hover:shadow-[0_40px_100px_rgba(2,6,23,0.22)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={FerImg}
                    alt="Fernando Junior Delgado Castañeda — Licenciado en Fisioterapia"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/65 via-brand-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-base font-bold text-white">{site.name}</p>
                    <p className="text-sm text-white/75">{site.title}</p>
                    <p className="mt-1 text-xs text-white/50">Ced. Prof. {site.cedula}</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 sm:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-3">Consultorio</p>
                <p className="mt-1 text-sm font-semibold text-ink-1">{site.address.line1}</p>
                <p className="text-xs text-ink-3">{site.address.line2}</p>
              </div>

              <div className="absolute -right-5 top-8 hidden animate-float rounded-2xl bg-brand-900 px-4 py-3 shadow-card [animation-delay:350ms] sm:block">
                <p className="text-[10px] text-white/60">Citas directas</p>
                <p className="text-sm font-bold text-white">{site.phoneDisplay}</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
