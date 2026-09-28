import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { biryanis, sections, type Diet } from "@/data/menu";
import { orderLink, waLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Full Charminar Biryani menu: Zafrani chicken, mutton and veg dum biryani, family and jumbo packs, tandoor, starters, curries, breads and desserts with prices.",
      },
      { property: "og:title", content: "Menu & Prices | Charminar Biryani Hyderabad" },
      {
        property: "og:description",
        content:
          "Zafrani Hyderabadi dum biryani, tandoor, starters, curries and desserts - browse the full menu and order direct.",
      },
    ],
  }),
  component: MenuPage,
});

function DietDot({ diet }: { diet: Diet }) {
  return (
    <span
      aria-label={diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
      className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border ${
        diet === "veg" ? "border-veg" : "border-nonveg"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${diet === "veg" ? "bg-veg" : "bg-nonveg"}`}
      />
    </span>
  );
}

function MenuPage() {
  const [filter, setFilter] = useState<"all" | Diet>("all");

  const shownBiryanis = useMemo(
    () => biryanis.filter((b) => filter === "all" || b.diet === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Traditional flavours. Timeless taste."
        title="The Charminar Biryani Menu"
        intro="Every biryani is cooked on dum to order. Sizes run from Serve 1 to Jumbo Pack, so the table is always covered."
      />

      <div className="sticky top-[82px] z-30 sm:top-[86px] border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
          {(
            [
              { key: "all", label: "Everything" },
              { key: "veg", label: "Veg" },
              { key: "nonveg", label: "Non-veg" },
            ] as const
          ).map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                filter === f.key
                  ? "bg-navy text-cream"
                  : "border border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="-mx-4 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:ml-auto sm:w-auto sm:overflow-visible sm:px-0">
            {["soups", "starters", "tandoor", "curries", "breads"].map((id) => {
              const s = sections.find((sec) => sec.id === id);
              if (!s) return null;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 whitespace-nowrap rounded-full border border-border px-3 py-2 text-xs text-muted-foreground hover:bg-secondary"
                >
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Biryani */}
      <section id="biryani" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="eyebrow text-navy/60">The soul of Hyderabad</p>
        <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Biryani</ScrollFloat>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shownBiryanis.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-2xl border border-border shadow-card flex flex-col">
              {/* Dish image placeholder */}
              <div className="h-44 w-full bg-secondary flex items-center justify-center text-3xl text-gold/40">
                ?
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-2">
                  <DietDot diet={b.diet} />
                  <div>
                    <h3 className="text-base font-semibold leading-snug">{b.name}</h3>
                    {b.popular && (
                      <span className="mt-1 inline-block rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm flex-1">
                  {b.sizes.map((s) => (
                    <div key={s.label} className="flex justify-between border-b border-dashed border-border pb-1">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-semibold">₹{s.price}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={waLink(`Hi Charminar Biryani, I'd like to order ${b.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex self-start rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cream"
                >
                  Add to order
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {sections.map((section, idx) => {
        const items = section.items.filter((i) => filter === "all" || i.diet === filter);
        if (!items.length) return null;
        return (
          <section
            key={section.id}
            id={section.id}
            className={idx % 2 === 0 ? "bg-secondary" : undefined}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <ScrollFloat className="text-3xl">{section.title}</ScrollFloat>
                {section.note && (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {section.note}
                  </span>
                )}
              </div>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <li key={item.name} className="overflow-hidden rounded-2xl border border-border shadow-card flex flex-col">
                    <div className="h-36 w-full bg-secondary flex items-center justify-center text-3xl text-gold/40">?</div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <DietDot diet={item.diet} />
                        <span className="text-sm font-medium truncate">
                          {item.name}
                          {item.popular && <span className="ml-2 text-[11px] text-gold">Popular</span>}
                        </span>
                      </div>
                      <span className="text-sm font-semibold shrink-0">
                        ₹{item.price}{item.full ? ` / ₹${item.full}` : ""}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="surface-royal">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollFloat className="text-3xl text-cream">Ready when you are</ScrollFloat>
          <p className="mt-3 text-cream/70">
            Tell us the dishes and the headcount and we will confirm your order right away.
          </p>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy"
          >
            Order Now
          </a>
        </div>
      </section>
    </>
  );
}
