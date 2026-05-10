"use client";

interface VerticalVideoCardProps {
  src: string;
  title: string;
  badge?: string;
  badgeColor?: "blue" | "pink" | "green";
  stat?: string;
  statLabel?: string;
}

const badgeStyles = {
  blue: "bg-brand-500 text-white",
  pink: "bg-accent-500 text-white",
  green: "bg-emerald-500 text-white",
};

export default function VerticalVideoCard({
  src,
  title,
  badge,
  badgeColor = "blue",
  stat,
  statLabel,
}: VerticalVideoCardProps) {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Phone-frame wrapper */}
      <div className="relative w-full max-w-[260px] overflow-hidden rounded-[2rem] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-4 ring-white/10 transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(59,108,255,0.25)] group-hover:ring-brand-200">

        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="mt-2 h-5 w-24 rounded-full bg-black/80 ring-1 ring-white/10" />
        </div>

        {/* Video — 9:16 */}
        <div className="aspect-[9/16] w-full">
          <video
            src={src}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom gradient overlay with title */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
          {badge && (
            <span className={`mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeStyles[badgeColor]}`}>
              {badge}
            </span>
          )}
          <p className="text-[13px] font-semibold leading-snug text-white">{title}</p>
          {stat && (
            <p className="mt-1 text-[11px] text-white/60">
              <span className="font-bold text-white">{stat}</span> {statLabel}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
