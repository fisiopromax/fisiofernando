import { site } from "@/content/site";
import Image from "next/image";

import FerImg from "./Fer.png";
import LogoImg from "./logo.png";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-1 sm:text-3xl">
        {title}
      </h2>
      {desc && <p className="mt-2 text-ink-3">{desc}</p>}
    </div>
  );
}

/** ✅ Botones SIN degradado / SIN dos colores */
function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "cta";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold " +
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const styles =
    variant === "primary"
      ? "bg-brand-900 text-white shadow-[0_18px_55px_rgba(7,29,63,0.18)] hover:bg-brand-800 hover:-translate-y-0.5 hover:shadow-[0_28px_95px_rgba(7,29,63,0.26)] active:translate-y-0"
      : variant === "cta"
      ? "bg-accent-600 text-white shadow-[0_18px_55px_rgba(230,30,93,0.16)] hover:bg-accent-500 hover:-translate-y-0.5 hover:shadow-[0_28px_95px_rgba(230,30,93,0.24)] active:translate-y-0"
      : "border border-slate-200/70 bg-white/75 text-ink-1 shadow-soft backdrop-blur hover:-translate-y-0.5 hover:bg-white active:translate-y-0";

  const isExternal = href.startsWith("http");
  return (
    <a
      className={`${base} ${styles}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

/** ✅ Pills sin degradado (se ve más “clínica”) */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-900 shadow-soft backdrop-blur">
      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent-600" />
      {children}
    </span>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-5 shadow-[0_18px_55px_rgba(2,6,23,0.10)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_95px_rgba(2,6,23,0.14)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-accent-100/70 blur-2xl" />
      <p className="font-semibold text-ink-1">{title}</p>
      <p className="mt-1 text-sm text-ink-3">{desc}</p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-accent-500/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  );
}

function ProfessionalLegend() {
  return (
    <div className="text-[11px] leading-relaxed text-ink-3">
      <span className="font-semibold text-ink-2">Céd. Prof:</span> {site.cedula}
      {site.avisoFuncionamiento ? (
        <>
          {" · "} <span className="font-semibold text-ink-2">Aviso de funcionamiento:</span>{" "}
          {site.avisoFuncionamiento}
        </>
      ) : null}
      {site.permisoPublicidadCofepris ? (
        <>
          {" · "} <span className="font-semibold text-ink-2">Permiso de publicidad COFEPRIS:</span>{" "}
          {site.permisoPublicidadCofepris}
        </>
      ) : null}
    </div>
  );
}

/** Logo pro (PNG transparente) */
function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <span
      className={`relative ${dims} overflow-hidden rounded-[22px] border border-white/70 bg-white/85 shadow-[0_18px_55px_rgba(2,6,23,0.10)] backdrop-blur`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(33,78,230,0.14),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,46,109,0.12),transparent_55%)]" />
      <Image src={LogoImg} alt="FS Therapy" fill priority className="object-contain p-2" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-brand-600/40" />
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative text-sm font-semibold text-ink-2 transition-colors hover:text-brand-900"
    >
      {children}
      <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-accent-500/70 transition-all duration-200 group-hover:w-full" />
    </a>
  );
}

export default function Home() {
  const waLink = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    "Hola, quiero agendar una cita de fisioterapia."
  )}`;
  const telLink = `tel:${site.phoneRaw}`;

  return (
    <div className="min-h-screen bg-white text-ink-1">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-accent-100/55 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/3 h-[640px] w-[640px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(243,247,255,0.76))]" />
      </div>

     {/* ✅ HEADER RESPONSIVO (compacto + menú móvil) */}
<header className="sticky top-0 z-50">
  {/* barra superior delgada */}
  <div className="h-[3px] w-full bg-brand-700" />

  {/* Top mini bar (en móvil se compacta y oculta lo pesado) */}
  <div className="border-b border-white/60 bg-white/70 backdrop-blur">
    <Container>
      <div className="flex items-center justify-between py-2">
        {/* izquierda: ciudad + tel (una sola línea) */}
        <div className="flex min-w-0 items-center gap-2 text-xs text-ink-3">
          <span className="truncate font-medium">{site.cityLine}</span>
          <span className="text-slate-300">•</span>
          <a className="shrink-0 font-semibold hover:text-brand-900" href={telLink}>
            {site.phoneDisplay}
          </a>
        </div>

        {/* derecha: en móvil solo instagram; en sm+ muestra todo */}
        <div className="flex items-center gap-3 text-xs text-ink-3">
          <a
            className="font-semibold hover:text-brand-900"
            href={site.socials.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {site.socials.instagramHandle}
          </a>

          <span className="hidden sm:inline text-slate-300">•</span>

          <a
            className="hidden sm:inline font-semibold hover:text-brand-900"
            href={site.socials.facebookUrl}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* ✅ “ProfessionalLegend” solo en desktop para que NO engorde el header */}
      <div className="hidden sm:block pb-2">
        <ProfessionalLegend />
      </div>
    </Container>
  </div>

  {/* Main nav row */}
  <div className="border-b border-white/60 bg-white/80 backdrop-blur">
    <Container>
      <div className="flex h-16 items-center justify-between sm:h-[72px]">
        {/* Brand (logo más pequeño en móvil) */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="scale-[0.92] sm:scale-100">
            <LogoMark size="sm" />
          </div>

          <div className="leading-tight">
            <p className="text-[15px] font-extrabold tracking-tight text-brand-900 sm:text-base">
              {site.brand}
            </p>
            <p className="hidden text-[12px] font-medium text-ink-3 sm:block">
              {site.subtitle}
            </p>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          <a className="group relative text-sm font-semibold text-ink-2 hover:text-brand-900" href="#servicios">
            Servicios
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-accent-500/70 transition-all duration-200 group-hover:w-full" />
          </a>
          <a className="group relative text-sm font-semibold text-ink-2 hover:text-brand-900" href="#especialidades">
            Especialidades
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-accent-500/70 transition-all duration-200 group-hover:w-full" />
          </a>
          <a className="group relative text-sm font-semibold text-ink-2 hover:text-brand-900" href="#ubicacion">
            Ubicación
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-accent-500/70 transition-all duration-200 group-hover:w-full" />
          </a>
          <a className="group relative text-sm font-semibold text-ink-2 hover:text-brand-900" href="#contacto">
            Contacto
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-accent-500/70 transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>

        {/* CTAs desktop */}
        <div className="hidden items-center gap-2 sm:flex">
          <ButtonLink href={waLink} variant="cta">
            WhatsApp
          </ButtonLink>
          <ButtonLink href={telLink} variant="outline">
            Llamar
          </ButtonLink>
        </div>

        {/* ✅ Menú móvil (sin JS, solo details) */}
        <details className="relative md:hidden">
          <summary className="list-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200/70 bg-white/75 px-3 py-2 text-sm font-semibold text-ink-1 shadow-soft backdrop-blur"
            >
              Menú
            </button>
          </summary>

          {/* panel */}
          <div className="absolute right-0 mt-3 w-[min(92vw,360px)] overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-3 shadow-[0_28px_95px_rgba(2,6,23,0.18)] backdrop-blur">
            <div className="grid gap-1 p-1 text-sm">
              <a className="rounded-2xl px-3 py-2 font-semibold text-ink-2 hover:bg-white" href="#servicios">
                Servicios
              </a>
              <a className="rounded-2xl px-3 py-2 font-semibold text-ink-2 hover:bg-white" href="#especialidades">
                Especialidades
              </a>
              <a className="rounded-2xl px-3 py-2 font-semibold text-ink-2 hover:bg-white" href="#ubicacion">
                Ubicación
              </a>
              <a className="rounded-2xl px-3 py-2 font-semibold text-ink-2 hover:bg-white" href="#contacto">
                Contacto
              </a>
            </div>

            <div className="mt-2 grid gap-2 p-1">
              <ButtonLink href={waLink} variant="cta">
                Agendar por WhatsApp
              </ButtonLink>
              <ButtonLink href={telLink} variant="outline">
                Llamar
              </ButtonLink>
            </div>

            <div className="mt-3 rounded-2xl border border-white/60 bg-white/75 p-3 shadow-soft">
              <ProfessionalLegend />
            </div>
          </div>
        </details>
      </div>
    </Container>
  </div>
</header>


      {/* Floating CTA */}
      
<div className="fixed bottom-4 right-4 z-50 sm:hidden">
         <ButtonLink href={waLink} variant="cta">
          Agendar
        </ButtonLink>
        <div className="hidden sm:block">
          <ButtonLink href={telLink} variant="outline">
            Llamar
          </ButtonLink>
        </div>
      </div>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <Container>
          <div className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
            {/* Watermark grande del logo detrás del texto */}
            <div className="pointer-events-none absolute -left-10 top-8 hidden opacity-[0.08] lg:block">
              <div className="relative h-56 w-56">
                <Image src={LogoImg} alt="FS Therapy" fill className="object-contain" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-wrap gap-2">
                <Pill>Atención personalizada</Pill>
                <Pill>Ortopedia · Deporte · Onco</Pill>
                <Pill>Roma Sur</Pill>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-5xl">
                {site.name}
              </h1>

              <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-2 shadow-soft backdrop-blur">
                <span className="text-sm font-semibold text-brand-900">{site.title}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="text-sm font-medium text-ink-3">{site.subtitle}</span>
              </div>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2">
                {site.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={waLink} variant="cta">
                  Agendar por WhatsApp
                </ButtonLink>
                <ButtonLink href={telLink} variant="outline">
                  {site.phoneDisplay}
                </ButtonLink>
                <ButtonLink href={site.directionsUrl} variant="outline">
                  Cómo llegar
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Card title="Alivio del dolor" desc="Manejo clínico, preciso y personalizado." />
                <Card title="Mejor movilidad" desc="Progreso seguro y medible en cada sesión." />
                <Card title="Recuperación real" desc="Plan según tu objetivo y actividad." />
              </div>
            </div>

            {/* Foto */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-[0_30px_110px_rgba(2,6,23,0.18)] backdrop-blur">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-brand-600/45" />

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={FerImg}
                    alt="Fernando Junior Delgado Castañeda"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/40 via-brand-900/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-3 rounded-3xl border border-white/60 bg-white/75 px-4 py-3 shadow-soft backdrop-blur">
                    <LogoMark size="sm" />
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold text-ink-1">{site.brand}</p>
                      <p className="text-[11px] font-medium text-ink-3">Rehabilitación</p>
                      <div className="mt-1 h-[2px] w-20 rounded-full bg-accent-500/70" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-5 shadow-soft backdrop-blur">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-200/40 blur-2xl" />
                  <p className="text-xs font-semibold tracking-[0.22em] text-ink-3 uppercase">
                    Consultorio
                  </p>
                  <p className="mt-2 font-semibold text-ink-1">{site.address.line1}</p>
                  <p className="text-sm text-ink-3">{site.address.line2}</p>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-5 text-white shadow-glow">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-accent-500/15 blur-2xl" />
                  <p className="text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
                    Contacto
                  </p>
                  <p className="mt-2 text-sm text-white/85">Citas</p>
                  <p className="text-lg font-extrabold">{site.phoneDisplay}</p>
                  <p className="mt-2 text-sm text-white/85">{site.socials.instagramHandle}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Promo */}
      {site.promo.enabled && (
        <section className="py-10">
          <Container>
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/75 p-8 shadow-[0_26px_80px_rgba(2,6,23,0.12)] backdrop-blur">
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-accent-100/70 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase">
                    Promoción
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-1">
                    {site.promo.title}{" "}
                    <span className="text-accent-700">{site.promo.price}</span>
                  </h3>
                  <p className="mt-2 text-ink-3">{site.promo.note}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href={waLink} variant="cta">
                    Quiero la promo
                  </ButtonLink>
                  <ButtonLink href={telLink} variant="outline">
                    Llamar
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Servicios */}
      <section id="servicios" className="py-14">
        <Container>
          <SectionTitle
            eyebrow="Servicios"
            title="Tratamientos enfocados en resultados"
            desc="Evaluación clínica, plan personalizado y seguimiento. Todo explicado con claridad."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-[26px] border border-white/60 bg-white/70 p-6 shadow-[0_18px_55px_rgba(2,6,23,0.10)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_95px_rgba(2,6,23,0.14)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-200/35 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-accent-100/70 blur-2xl" />
                <p className="text-lg font-semibold text-ink-1">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-3">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-14">
        <Container>
          <div className="rounded-[28px] border border-white/60 bg-white/65 p-8 shadow-[0_26px_80px_rgba(2,6,23,0.12)] backdrop-blur">
            <SectionTitle
              eyebrow="Especialidades"
              title="Ortopedia, deporte y manejo de linfedema"
              desc="Atención a lesiones ortopédicas/deportivas y fisioterapia oncológica con enfoque humano."
            />

            <div className="mt-8 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {site.specialties.map((c) => (
                  <div key={c} className="flex items-start gap-2 rounded-xl p-2">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-accent-600" />
                    <span className="text-sm text-ink-2">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Ubicación"
                title="Consultorio en Roma Sur"
                desc="Agenda por WhatsApp o llama. Puedes abrir el mapa para rutas."
              />

              <div className="mt-6 rounded-[26px] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
                <p className="font-semibold text-ink-1">Dirección</p>
                <p className="mt-2 text-sm text-ink-2">{site.address.line1}</p>
                <p className="text-sm text-ink-2">{site.address.line2}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href={waLink} variant="cta">
                    Agendar
                  </ButtonLink>
                  <ButtonLink href={site.directionsUrl} variant="outline">
                    Cómo llegar
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-4 rounded-[26px] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
                <ProfessionalLegend />
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_26px_80px_rgba(2,6,23,0.14)] backdrop-blur">
              <div className="pointer-events-none h-[3px] w-full bg-brand-600/55" />
              <iframe
                title="Mapa"
                src={site.mapEmbedUrl}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-14">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-b from-white/80 to-white/60 p-8 shadow-[0_26px_80px_rgba(2,6,23,0.12)] backdrop-blur">
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-200/35 blur-3xl" />
            <div className="pointer-events-none absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-accent-100/70 blur-3xl" />

            <div className="relative">
              <SectionTitle
                eyebrow="Contacto"
                title="Agenda tu cita"
                desc="Sin formularios. Contacto directo por WhatsApp o llamada."
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={waLink} variant="cta">
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={telLink} variant="outline">
                  Llamar
                </ButtonLink>
                <ButtonLink href={site.socials.facebookUrl} variant="outline">
                  Facebook
                </ButtonLink>
                <ButtonLink href={site.socials.instagramUrl} variant="outline">
                  Instagram
                </ButtonLink>
              </div>

              <div className="mt-6 rounded-2xl border border-white/60 bg-white/75 p-4 shadow-soft backdrop-blur">
                <ProfessionalLegend />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ✅ FOOTER NUEVO (más profesional y estético) */}
      <footer className="mt-10">
        <div className="h-[4px] w-full bg-brand-800" />
        <div className="border-t border-white/60 bg-white/80 py-12 backdrop-blur">
          <Container>
            <div className="grid gap-10 lg:grid-cols-4">
              {/* Marca */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4">
                  <LogoMark size="lg" />
                  <div>
                    <p className="text-xl font-extrabold tracking-tight text-brand-900">
                      {site.brand}
                    </p>
                    <p className="text-sm font-medium text-ink-3">{site.subtitle}</p>
                    <p className="mt-3 max-w-md text-sm text-ink-3">
                      Atención profesional y humana. Evaluación clínica, plan personalizado y seguimiento.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <ButtonLink href={waLink} variant="cta">
                        WhatsApp
                      </ButtonLink>
                      <ButtonLink href={telLink} variant="outline">
                        Llamar
                      </ButtonLink>
                      <ButtonLink href={site.directionsUrl} variant="outline">
                        Cómo llegar
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navegación */}
              <div className="grid gap-2 text-sm">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase">
                  Navegación
                </p>
                <a className="font-semibold text-ink-2 hover:text-brand-900" href="#inicio">
                  Inicio
                </a>
                <a className="font-semibold text-ink-2 hover:text-brand-900" href="#servicios">
                  Servicios
                </a>
                <a className="font-semibold text-ink-2 hover:text-brand-900" href="#especialidades">
                  Especialidades
                </a>
                <a className="font-semibold text-ink-2 hover:text-brand-900" href="#ubicacion">
                  Ubicación
                </a>
                <a className="font-semibold text-ink-2 hover:text-brand-900" href="#contacto">
                  Contacto
                </a>
              </div>

              {/* Contacto / redes / legal */}
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-6 shadow-soft backdrop-blur">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-200/40 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-accent-100/70 blur-2xl" />

                <p className="text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase">
                  Contacto
                </p>

                <p className="mt-3 text-sm text-ink-3">Citas</p>
                <p className="text-lg font-extrabold text-ink-1">{site.phoneDisplay}</p>

                <div className="mt-4 text-sm text-ink-3">
                  <a
                    className="font-semibold hover:text-brand-900"
                    href={site.socials.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.socials.instagramHandle}
                  </a>{" "}
                  <span className="text-slate-300">·</span>{" "}
                  <a
                    className="font-semibold hover:text-brand-900"
                    href={site.socials.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </div>

                <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-soft backdrop-blur">
                  <ProfessionalLegend />
                </div>
              </div>
            </div>

            {/* Legal bar */}
            <div className="mt-10 flex flex-col gap-2 border-t border-white/60 pt-6 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} · <span className="font-semibold text-ink-2">{site.brand}</span>{" "}
                · Todos los derechos reservados
              </p>
              <p className="opacity-90">
                Aviso de privacidad{" "}
                <span className="text-slate-300">·</span>{" "}
                Términos (puedes linkearlos después)
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}
