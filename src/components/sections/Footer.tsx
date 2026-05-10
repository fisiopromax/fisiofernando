import Image from "next/image";
import LogoImg from "@/app/logo.png";
import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcInstagram, IcFacebook } from "@/components/icons";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-[#071D3F]">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

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

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
              Navegacion
            </p>
            <ul className="mt-4 space-y-2.5">
              {(
                [
                  ["/", "Inicio"],
                  ["/servicios", "Servicios"],
                  ["/especialidades", "Especialidades"],
                  ["/nosotros", "Nosotros"],
                  ["/contacto", "Contacto"],
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
  );
}
