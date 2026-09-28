import { Link } from "@tanstack/react-router";
import { CalendarCheck, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import { outlets } from "@/data/site";

// Open 11:30 AM – 11:30 PM IST daily. Computed after mount so SSR and client markup match.
function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const ist = new Date(Date.now() + (5.5 * 60 + new Date().getTimezoneOffset()) * 60000);
    const mins = ist.getHours() * 60 + ist.getMinutes();
    setOpen(mins >= 11 * 60 + 30 && mins < 23 * 60 + 30);
  }, []);
  if (open === null) return null;
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        open ? "bg-veg/20 text-green-300" : "bg-cream/10 text-cream/60"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "animate-pulse bg-green-400" : "bg-cream/40"}`} />
      {open ? "Open now" : "Closed"}
    </span>
  );
}


/** Outlet cards: full-bleed map, frosted info panel, gold edge glow on hover. */
export function OutletCards() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {outlets.map((o, i) => (
        <BorderGlow
          key={o.slug}
          backgroundColor="#091231"
          borderRadius={24}
          glowColor="40 75 65"
          colors={["#E0B25A", "#F5D9B6", "#C9962E"]}
          glowRadius={40}
          edgeSensitivity={30}
          coneSpread={25}
        >
        <article className="group relative h-[480px] overflow-hidden rounded-3xl sm:h-[440px]">
          <iframe
            title={`Map – ${o.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(o.address)}&output=embed&z=15`}
            className="pointer-events-none absolute inset-0 h-full w-full border-0 [filter:grayscale(0.35)_contrast(1.05)] transition-[filter] duration-300 group-hover:[filter:none]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy/70 to-transparent" />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-navy/80 p-5 text-cream backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-xl leading-tight sm:text-2xl">{o.name}</h3>
              </div>
              <OpenBadge />
            </div>
            <div className="mt-3 space-y-1.5 text-sm text-cream/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {o.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-gold" /> {o.hours}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={o.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy transition-transform hover:scale-[1.03]"
              >
                <Navigation className="h-3.5 w-3.5" /> Get directions
              </a>
              <a
                href={`tel:${o.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-cream/10"
              >
                <Phone className="h-3.5 w-3.5" /> {o.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-cream/10"
              >
                <CalendarCheck className="h-3.5 w-3.5" /> Reserve table
              </Link>
            </div>
          </div>
        </article>
        </BorderGlow>
      ))}
    </div>
  );
}
