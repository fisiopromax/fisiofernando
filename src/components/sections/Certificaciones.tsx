import Image from "next/image";
import FerCertificado from "@/app/fer certificado.jpeg";
import FerTeleton from "@/app/fer teleton.jpeg";
import Container from "@/components/Container";

export default function Certificaciones() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="reveal mb-12 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
            Formación y certificaciones
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
            Especialización continua
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[15px] text-ink-3">
            Formación constante para ofrecer técnicas de alto nivel y respaldo en cada diagnóstico.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">

          <div className="reveal group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(59,108,255,0.13)] hover:ring-brand-100">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={FerCertificado}
                alt="Fernando Junior sosteniendo su certificación EPTE — Electrólisis Percutánea Terapéutica"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
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

          <div className="reveal group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(230,30,93,0.10)] hover:ring-accent-100">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={FerTeleton}
                alt="Fernando Junior en el evento ADN Teletón ENFEI 2024 — Fundación Teletón"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
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
  );
}
