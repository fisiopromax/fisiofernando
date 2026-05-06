import { site } from "@/content/site";
import { waLink, telLink } from "@/lib/links";
import { IcWhatsapp, IcPhone, IcMapPin } from "@/components/icons";
import Container from "@/components/Container";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white py-20">
      <Container>
        <div className="reveal mb-10">
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

          <div className="reveal flex flex-col gap-4">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-100 hover:shadow-soft">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <IcMapPin cls="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-ink-1">Direccion</p>
                <p className="mt-1 text-sm text-ink-2">{site.address.line1}</p>
                <p className="text-sm text-ink-3">{site.address.line2}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-100 hover:shadow-soft">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <IcPhone cls="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-ink-1">Citas</p>
                <a href={telLink} className="mt-1 block text-sm text-ink-2 transition-colors duration-150 hover:text-brand-600">
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.socials.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink-3 transition-colors duration-150 hover:text-brand-600"
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
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-accent-500"
              >
                <IcWhatsapp cls="h-4 w-4" />
                Agendar
              </a>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-ink-2 transition-[transform,border-color,color] duration-200 hover:-translate-y-px hover:border-brand-300 hover:text-brand-700"
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

          <div className="reveal overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-soft">
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
  );
}
