import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { OffersStack } from "@/components/site/OffersStack";
import { orderLink, waLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Combos | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Family packs, weekend combos and corporate lunch deals on Zafrani Hyderabadi dum biryani at Charminar Biryani.",
      },
      { property: "og:title", content: "Offers & Combos | Charminar Biryani" },
      {
        property: "og:description",
        content: "Current biryani offers, family packs and corporate lunch deals in Hyderabad.",
      },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Worth the extra plate"
        title="Offers & Combos"
        intro="Running deals across family packs, weekends and office lunches. Order direct to claim them."
      />

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[20vh] lg:self-start">
            <p className="eyebrow text-navy/60">This month</p>
            <ScrollFloat className="mt-3 text-3xl sm:text-5xl">Deals worth the extra plate</ScrollFloat>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Keep scrolling to see every offer, then claim it on WhatsApp or when you order.
            </p>
            <a
              href={waLink("Hi! I'd like to know about your current offers.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              Ask on WhatsApp
            </a>
            <p className="mt-6 max-w-sm text-xs text-muted-foreground">
              Offers are available at participating outlets and cannot be combined with other discounts. Please
              confirm availability while ordering.
            </p>
          </div>
          <OffersStack />
        </div>
      </section>

      <section className="surface-royal">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollFloat className="text-3xl text-cream">Hungry already?</ScrollFloat>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy"
          >
            ORDER BIRYANI
          </a>
        </div>
      </section>
    </>
  );
}
