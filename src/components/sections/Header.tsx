import Image from "next/image";
import LogoImg from "@/app/logo.png";
import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcMenu } from "@/components/icons";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-soft backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[68px]">

        <a href="#inicio" className="flex shrink-0 items-center gap-3 transition-opacity duration-200 hover:opacity-80">
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-brand-50 ring-1 ring-brand-100">
            <Image src={LogoImg} alt="FS Therapy" fill className="object-contain p-1" />
          </span>
          <div className="leading-none">
            <p className="text-[15px] font-bold tracking-tight text-brand-900">{site.brand}</p>
            <p className="hidden text-[11px] text-ink-3 sm:block">{site.title}</p>
          </div>
        </a>

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
              className="nav-link text-sm font-medium text-ink-2 transition-colors duration-200 hover:text-brand-600"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-500 sm:inline-flex"
          >
            <IcWhatsapp cls="h-3.5 w-3.5" />
            Agendar
          </a>
          <a
            href={telLink}
            className="hidden items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-ink-2 transition-[border-color,color] duration-200 hover:border-brand-200 hover:text-brand-700 md:inline-flex"
          >
            <IcPhone cls="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </a>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 p-2.5 text-ink-2 transition-colors duration-200 hover:bg-slate-50">
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
                  className="block px-5 py-3 text-sm font-medium text-ink-2 transition-colors duration-150 hover:bg-slate-50 hover:text-brand-700"
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
  );
}
