import Container from "@/components/Container";

const PALETTE = [
  { bg: "#F3F7FF", label: "brand-50" },
  { bg: "#CFE0FF", label: "brand-200" },
  { bg: "#3B6CFF", label: "brand-500" },
  { bg: "#0B2A5B", label: "brand-800" },
  { bg: "#071D3F", label: "brand-900" },
  { bg: "#FFE4EC", label: "accent-100" },
  { bg: "#FF2E6D", label: "accent-500" },
  { bg: "#B91349", label: "accent-700" },
];

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "blue" | "pink" | "dark";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  variant = "blue",
}: PageHeroProps) {
  const blobA =
    variant === "dark"
      ? "bg-brand-800"
      : variant === "pink"
        ? "bg-accent-200"
        : "bg-brand-100";
  const blobB =
    variant === "dark"
      ? "bg-accent-900"
      : variant === "pink"
        ? "bg-brand-100"
        : "bg-accent-100";

  return (
    <div className="relative overflow-hidden border-b border-slate-100 bg-white pb-10 pt-14">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full ${blobA} opacity-60 blur-3xl`}
        />
        <div
          className={`absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full ${blobB} opacity-50 blur-3xl`}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3B6CFF 1px, transparent 1px), linear-gradient(90deg, #3B6CFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container>
        {/* Color palette swatches */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            {PALETTE.map((swatch) => (
              <span
                key={swatch.label}
                title={swatch.label}
                className="h-4 w-4 rounded-full ring-1 ring-black/10 transition-transform duration-200 hover:scale-125"
                style={{ backgroundColor: swatch.bg }}
              />
            ))}
          </div>
          <span className="ml-1 text-[10px] font-medium uppercase tracking-widest text-ink-3">
            Paleta FS Therapy
          </span>
        </div>

        {/* Eyebrow + Title */}
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-ink-1 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-3">
            {description}
          </p>
        )}

        {/* Decorative color bar */}
        <div className="mt-8 flex h-1.5 max-w-xs overflow-hidden rounded-full">
          <div className="flex-1 bg-brand-500" />
          <div className="flex-1 bg-brand-300" />
          <div className="flex-1 bg-accent-400" />
          <div className="flex-1 bg-accent-600" />
        </div>
      </Container>
    </div>
  );
}
