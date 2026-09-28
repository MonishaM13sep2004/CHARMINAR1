import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { faqs, site, waLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Answers about Charminar Biryani - spice levels, veg biryani, family packs, catering, reservations, delivery and direct ordering.",
      },
      { property: "og:title", content: "FAQ | Charminar Biryani" },
      {
        property: "og:description",
        content: "Common questions about our biryani, packs, catering, delivery and reservations.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        intro="Everything guests usually ask before their first order."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="divide-y divide-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border p-7 text-center shadow-card">
          <ScrollFloat className="text-2xl">Still have a question?</ScrollFloat>
          <p className="mt-3 text-sm text-muted-foreground">
            Message us on WhatsApp or call {site.phone} — we reply quickly.
          </p>
          <a
            href={waLink("Hi Charminar Biryani, I have a question.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
