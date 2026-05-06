import { waLink } from "@/lib/links";
import { IcWhatsapp } from "@/components/icons";
import Container from "@/components/Container";

export default function VideoSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="reveal order-2 lg:order-1">
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
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-500"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Agendar cita
              </a>
            </div>
          </div>

          <div className="reveal order-1 overflow-hidden rounded-2xl shadow-hero transition-shadow duration-300 hover:shadow-[0_40px_90px_rgba(2,6,23,0.22)] lg:order-2">
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
  );
}
