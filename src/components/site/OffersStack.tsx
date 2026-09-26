import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CalendarDays, Sparkles, Users } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { offers } from "@/data/site";

// Alternating card themes so each offer reads as a separate layer in the stack
const offerThemes = [
  {
    icon: Users,
    card: "surface-royal text-cream",
    icon_: "text-gold/15",
    badge: "border-gold/40 text-gold",
    number: "text-gold/40",
    detail: "text-cream/70",
    cta: "bg-gold text-navy",
  },
  {
    icon: CalendarDays,
    card: "bg-gold text-navy",
    icon_: "text-navy/10",
    badge: "border-navy/30 text-navy",
    number: "text-navy/25",
    detail: "text-navy/75",
    cta: "bg-navy text-cream",
  },
  {
    icon: Briefcase,
    card: "bg-cream text-navy ring-1 ring-navy/10",
    icon_: "text-navy/10",
    badge: "border-navy/25 text-navy",
    number: "text-gold",
    detail: "text-navy/70",
    cta: "bg-navy text-cream",
  },
  {
    icon: Sparkles,
    card: "bg-navy-soft text-cream",
    icon_: "text-gold/20",
    badge: "border-gold/40 text-gold",
    number: "text-gold/40",
    detail: "text-cream/70",
    cta: "bg-gold text-navy",
  },
];


/** Offer cards that pin and stack on top of each other as you scroll. */
export function OffersStack() {
  return (
    <ScrollStack itemDistance={60} itemStackDistance={24} stackPosition="20%" scaleEndPosition="12%" baseScale={0.9} itemScale={0.025}>
      {offers.map((o, i) => {
        const theme = offerThemes[i % offerThemes.length]!;
        const Icon = theme.icon;
        return (
          <ScrollStackItem key={o.title} itemClassName={`flex flex-col overflow-hidden ${theme.card}`}>
            <Icon aria-hidden="true" className={`pointer-events-none absolute -bottom-6 -right-6 h-44 w-44 ${theme.icon_}`} strokeWidth={1} />
            <div className="relative flex items-start justify-between gap-4">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${theme.badge}`}>
                {o.badge}
              </span>
              <span className={`font-display text-5xl leading-none sm:text-6xl ${theme.number}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="relative mt-6 text-3xl leading-tight sm:text-4xl">{o.title}</h3>
            <p className={`relative mt-3 max-w-md text-base leading-relaxed ${theme.detail}`}>{o.detail}</p>
            <Link
              to="/offers"
              className={`relative mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${theme.cta}`}
            >
              Claim offer <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollStackItem>
        );
      })}
    </ScrollStack>
  );
}
