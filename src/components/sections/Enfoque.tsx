import Image from "next/image";
import FerFoto2 from "@/app/fer foto 2.jpeg";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { IcWhatsapp, IcCheck } from "@/components/icons";
import Container from "@/components/Container";

export default function Enfoque() {
  return (
    <section className="bg-[#071D3F] py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="reveal relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={FerFoto2}
                  alt="Fernando Junior Delgado Castañeda en su consultorio de fisioterapia — certificados al fondo"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
              </div>
            </div>
            {site.permisoPublicidadCofepris && (
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-accent-600 px-5 py-4 shadow-xl transition-transform duration-300 hover:scale-105 sm:block">
                <p className="text-[10px] font-semibold text-white/80">Permiso COFEPRIS</p>
                <p className="mt-0.5 text-xs font-bold text-white">
                  {site.permisoPublicidadCofepris}
                </p>
              </div>
            )}
          </div>

          <div className="reveal">
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400 transition-colors duration-200">
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
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-400"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Agendar cita
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
