import { waLink } from "@/lib/links";
import { IcWhatsapp } from "@/components/icons";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:hidden">
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="pulse-ring flex items-center gap-2 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-accent-200 transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-accent-500"
      >
        <IcWhatsapp cls="h-4 w-4" />
        Agendar
      </a>
    </div>
  );
}
