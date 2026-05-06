import { site } from "@/content/site";
import Image from "next/image";
import FerImg from "./Fer.png";
import FerFoto2 from "./fer foto 2.jpeg";
import FerCertificado from "./fer certificado.jpeg";
import FerTeleton from "./fer teleton.jpeg";
import LogoImg from "./logo.png";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IcPhone({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function IcWhatsapp({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IcMapPin({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IcInstagram({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IcFacebook({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IcCheck({ cls = "h-3.5 w-3.5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IcMenu({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

// ─── Service Icons ────────────────────────────────────────────────────────────

function IcBone({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

function IcActivity({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2l2-7 4 14 3-9 2 4 2-2h3" />
    </svg>
  );
}

function IcHeart({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IcSun({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function IcChart({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IcClipboard({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Fisioterapia Ortopédica": <IcBone />,
  "Fisioterapia Deportiva": <IcActivity />,
  "Postoperatoria": <IcHeart />,
  "Terapia de descarga": <IcSun />,
  "Valoración con dinamometría": <IcChart />,
  "Plan personalizado": <IcClipboard />,
};

// ─── Layout ───────────────────────────────────────────────────────────────────

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const waLink = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    "Hola, quiero agendar una cita de fisioterapia."
  )}`;
  const telLink = `tel:${site.phoneRaw}`;

  return (
    <div className="min-h-screen bg-white text-ink-1">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-soft backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-[68px]">

          {/* Brand */}
          <a href="#inicio" className="flex shrink-0 items-center gap-3">
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-brand-50 ring-1 ring-brand-100">
              <Image src={LogoImg} alt="FS Therapy" fill className="object-contain p-1" />
            </span>
            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-tight text-brand-900">{site.brand}</p>
              <p className="hidden text-[11px] text-ink-3 sm:block">{site.title}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {(
              [
                ["#servicios", "Servicios"],
                ["#especialidades", "Especialidades"],
                ["#ubicacion", "Ubicacion"],
                ["#contacto", "Contacto"],
              ] as [string, string][]
            ).map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-ink-2 transition-colors hover:text-brand-600"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-500 sm:inline-flex"
            >
              <IcWhatsapp cls="h-3.5 w-3.5" />
              Agendar
            </a>
            <a
              href={telLink}
              className="hidden items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-ink-2 transition hover:border-brand-200 hover:text-brand-700 md:inline-flex"
            >
              <IcPhone cls="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 p-2.5 text-ink-2 hover:bg-slate-50">
                <IcMenu />
              </summary>
              <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
                {(
                  [
                    ["#servicios", "Servicios"],
                    ["#especialidades", "Especialidades"],
                    ["#ubicacion", "Ubicacion"],
                    ["#contacto", "Contacto"],
                  ] as [string, string][]
                ).map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="block px-5 py-3 text-sm font-medium text-ink-2 transition hover:bg-slate-50"
                  >
                    {label}
                  </a>
                ))}
                <div className="mx-3 mt-2 space-y-2 border-t border-slate-100 pt-3 pb-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <IcWhatsapp cls="h-4 w-4" />
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={telLink}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-ink-2"
                  >
                    <IcPhone cls="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </details>
          </div>

        </Container>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full bg-brand-50 opacity-70 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-accent-50 opacity-50 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Fisioterapia Profesional · Roma Sur · CDMX
              </div>

              <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.15] tracking-tight text-ink-1 sm:text-5xl">
                {site.name}
              </h1>

              <p className="mt-3 text-base font-semibold text-brand-600">{site.title}</p>
              <p className="text-sm text-ink-3">{site.subtitle}</p>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-2">
                {site.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent-100 transition hover:-translate-y-0.5 hover:bg-accent-500"
                >
                  <IcWhatsapp cls="h-4 w-4" />
                  Agendar por WhatsApp
                </a>
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-ink-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                >
                  <IcPhone cls="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-ink-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                >
                  <IcMapPin cls="h-4 w-4" />
                  Como llegar
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 pt-8">
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
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl shadow-hero">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={FerImg}
                      alt="Fernando Junior Delgado Castañeda — Licenciado en Fisioterapia"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/65 via-brand-900/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-base font-bold text-white">{site.name}</p>
                      <p className="text-sm text-white/75">{site.title}</p>
                      <p className="mt-1 text-xs text-white/50">Ced. Prof. {site.cedula}</p>
                    </div>
                  </div>
                </div>

                {/* Floating cards — hidden on very small screens */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 sm:block">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-3">Consultorio</p>
                  <p className="mt-1 text-sm font-semibold text-ink-1">{site.address.line1}</p>
                  <p className="text-xs text-ink-3">{site.address.line2}</p>
                </div>

                <div className="absolute -right-5 top-8 hidden rounded-2xl bg-brand-900 px-4 py-3 shadow-card sm:block">
                  <p className="text-[10px] text-white/60">Citas directas</p>
                  <p className="text-sm font-bold text-white">{site.phoneDisplay}</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── PROMO ──────────────────────────────────────────────────────────── */}
      {site.promo.enabled && (
        <section className="bg-brand-900 py-10">
          <Container>
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-300">
                  Promocion activa
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {site.promo.title}{" "}
                  <span className="text-accent-400">{site.promo.price}</span>
                </h3>
                <p className="mt-1 text-sm text-brand-300">{site.promo.note}</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-400"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Preguntar por la promo
              </a>
            </div>
          </Container>
        </section>
      )}

      {/* ── SERVICIOS ──────────────────────────────────────────────────────── */}
      <section id="servicios" className="bg-slate-50 py-20">
        <Container>
          <div className="mb-12">
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  {SERVICE_ICONS[s.title] ?? <IcClipboard />}
                </div>
                <div>
                  <h3 className="font-semibold text-ink-1">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ESPECIALIDADES ─────────────────────────────────────────────────── */}
      <section id="especialidades" className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>
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
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-500"
                >
                  <IcWhatsapp cls="h-4 w-4" />
                  Consultar mi caso
                </a>
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-ink-2 transition hover:border-brand-300 hover:text-brand-700"
                >
                  <IcPhone cls="h-4 w-4" />
                  Llamar
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {site.specialties.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <IcCheck />
                  </span>
                  <span className="text-sm text-ink-2">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── VIDEO ──────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
                Conoce al especialista
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
                &ldquo;Si algo he aprendido como fisioterapeuta&hellip;&rdquo;
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-3">
                Fernando comparte su enfoque y filosofía de tratamiento. Formación continua, técnicas actualizadas y compromiso real con cada paciente.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-500"
                >
                  <IcWhatsapp cls="h-4 w-4" />
                  Agendar cita
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-hero">
              <video
                src="/fervidio.mp4"
                controls
                playsInline
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── CERTIFICACIONES ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
              Formación y certificaciones
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              Especialización continua
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-[15px] text-ink-3">
              Formación constante para ofrecer técnicas de alto nivel y respaldo en cada diagnóstico.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* EPTE Certificate */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={FerCertificado}
                  alt="Fernando Junior sosteniendo su certificación EPTE — Electrólisis Percutánea Terapéutica"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                  Certificación reciente
                </span>
                <p className="mt-2 font-semibold text-ink-1">EPTE® — Electrólisis Percutánea Terapéutica</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-3">
                  Tratamiento clínico de tendinopatías y ecografía. Técnica invasiva de alta precisión para lesiones de tejido blando.
                </p>
                <p className="mt-2.5 text-xs font-medium text-brand-600">Abril 2026 · Puebla, México</p>
              </div>
            </div>

            {/* Teletón */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={FerTeleton}
                  alt="Fernando Junior en el evento ADN Teletón ENFEI 2024 — Fundación Teletón"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-accent-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-700">
                  Compromiso social
                </span>
                <p className="mt-2 font-semibold text-ink-1">Fundación Teletón · ADN TELETÓN</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-3">
                  Participación en el evento ENFEI 2024. Fernando es parte de la red de fisioterapeutas comprometidos con la rehabilitación inclusiva.
                </p>
                <p className="mt-2.5 text-xs font-medium text-brand-600">ENFEI 2024 · Fundación Teletón</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── ABOUT / ENFOQUE ────────────────────────────────────────────────── */}
      <section className="bg-[#071D3F] py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={FerFoto2}
                    alt="Fernando Junior Delgado Castañeda en su consultorio de fisioterapia — certificados al fondo"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
                </div>
              </div>
              {site.permisoPublicidadCofepris && (
                <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-accent-600 px-5 py-4 shadow-xl sm:block">
                  <p className="text-[10px] font-semibold text-white/80">Permiso COFEPRIS</p>
                  <p className="mt-0.5 text-xs font-bold text-white">
                    {site.permisoPublicidadCofepris}
                  </p>
                </div>
              )}
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-300">
                Enfoque clinico
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Rehabilitacion con evaluacion, plan y seguimiento
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-brand-200">
                Cada paciente recibe una evaluacion completa antes de comenzar. El plan se ajusta segun tu progreso y objetivo real. Sin protocolos genericos.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Evaluacion clinica inicial completa",
                  "Plan de tratamiento personalizado",
                  "Seguimiento de progreso con dinamometria",
                  "Educacion al paciente en cada sesion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                      <IcCheck cls="h-3 w-3" />
                    </span>
                    <span className="text-sm text-brand-100">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-400"
                >
                  <IcWhatsapp cls="h-4 w-4" />
                  Agendar cita
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── UBICACION ──────────────────────────────────────────────────────── */}
      <section id="ubicacion" className="bg-white py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
              Ubicacion
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              Consultorio en Roma Sur
            </h2>
            <p className="mt-2 text-[15px] text-ink-3">
              Agenda por WhatsApp o llamada. Puedes abrir el mapa para rutas desde tu ubicacion.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <IcMapPin cls="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-ink-1">Direccion</p>
                  <p className="mt-1 text-sm text-ink-2">{site.address.line1}</p>
                  <p className="text-sm text-ink-3">{site.address.line2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <IcPhone cls="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-ink-1">Citas</p>
                  <a href={telLink} className="mt-1 block text-sm text-ink-2 hover:text-brand-600">
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={site.socials.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-3 hover:text-brand-600"
                  >
                    {site.socials.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-500"
                >
                  <IcWhatsapp cls="h-4 w-4" />
                  Agendar
                </a>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-ink-2 transition hover:border-brand-300 hover:text-brand-700"
                >
                  <IcMapPin cls="h-4 w-4" />
                  Como llegar
                </a>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-[11px] leading-relaxed text-ink-3">
                <span className="font-semibold text-ink-2">Ced. Prof:</span> {site.cedula}
                {site.permisoPublicidadCofepris && (
                  <>
                    {" · "}
                    <span className="font-semibold text-ink-2">Permiso COFEPRIS:</span>{" "}
                    {site.permisoPublicidadCofepris}
                  </>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-100">
              <iframe
                title="Mapa FS Therapy — Roma Sur"
                src={site.mapEmbedUrl}
                className="h-[440px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* ── CONTACTO ───────────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
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
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent-100 transition hover:-translate-y-0.5 hover:bg-accent-500"
              >
                <IcWhatsapp cls="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <IcPhone cls="h-4 w-4" />
                Llamar
              </a>
              <a
                href={site.socials.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <IcInstagram cls="h-4 w-4" />
                Instagram
              </a>
              <a
                href={site.socials.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-ink-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <IcFacebook cls="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#071D3F]">
        <Container className="py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20">
                  <Image src={LogoImg} alt="FS Therapy" fill className="object-contain p-1.5" />
                </span>
                <div>
                  <p className="font-bold text-white">{site.brand}</p>
                  <p className="text-xs text-white/40">{site.subtitle}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                Atencion clinica profesional en Roma Sur, CDMX. Evaluacion, plan personalizado y seguimiento en cada tratamiento.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={site.socials.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
                >
                  <IcInstagram />
                </a>
                <a
                  href={site.socials.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
                >
                  <IcFacebook />
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
                >
                  <IcWhatsapp />
                </a>
                <a
                  href={telLink}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
                >
                  <IcPhone />
                </a>
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Navegacion
              </p>
              <ul className="mt-4 space-y-2.5">
                {(
                  [
                    ["#inicio", "Inicio"],
                    ["#servicios", "Servicios"],
                    ["#especialidades", "Especialidades"],
                    ["#ubicacion", "Ubicacion"],
                    ["#contacto", "Contacto"],
                  ] as [string, string][]
                ).map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-sm text-white/50 transition hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Contacto
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[10px] text-white/30">Telefono</p>
                  <a href={telLink} className="text-sm text-white/70 transition hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] text-white/30">Instagram</p>
                  <a
                    href={site.socials.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {site.socials.instagramHandle}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] text-white/30">Direccion</p>
                  <p className="text-sm text-white/60">{site.address.line1}</p>
                  <p className="text-xs text-white/40">{site.address.line2}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Legal */}
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white/50">{site.brand}</span>. Todos los derechos reservados.
            </p>
            <p className="text-[10px]">
              <span className="text-white/40">Ced. Prof:</span> {site.cedula}
              {site.permisoPublicidadCofepris && (
                <>
                  {" · "}
                  <span className="text-white/40">COFEPRIS:</span>{" "}
                  {site.permisoPublicidadCofepris}
                </>
              )}
            </p>
          </div>

        </Container>
      </footer>

      {/* ── FLOATING CTA (mobile only) ─────────────────────────────────────── */}
      <div className="fixed bottom-5 right-5 z-50 sm:hidden">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-accent-200 transition hover:bg-accent-500"
        >
          <IcWhatsapp cls="h-4 w-4" />
          Agendar
        </a>
      </div>

    </div>
  );
}
