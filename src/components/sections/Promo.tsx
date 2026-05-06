import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { IcWhatsapp } from "@/components/icons";
import Container from "@/components/Container";

export default function Promo() {
  if (!site.promo.enabled) return null;

  return (
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
  );
}
