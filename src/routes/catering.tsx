import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Cake, Heart, House } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site, waLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Bulk Orders | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Biryani catering in Hyderabad for weddings, corporate lunches, birthdays and house parties. Plan your event with Charminar Biryani.",
      },
      { property: "og:title", content: "Catering & Bulk Orders | Charminar Biryani" },
      {
        property: "og:description",
        content: "Weddings, offices and house parties - Zafrani dum biryani catered hot and on time.",
      },
    ],
  }),
  component: CateringPage,
});

const services = [
  {
    icon: Heart,
    title: "Weddings & receptions",
    body: "Live biryani counters and full Hyderabadi spreads for 100 to 1000 guests.",
    chip: "100 – 1000 guests",
  },
  {
    icon: Briefcase,
    title: "Corporate lunches",
    body: "Individually packed meals from 10 plates upward, delivered on schedule.",
    chip: "From 10 plates",
  },
  {
    icon: House,
    title: "House parties",
    body: "Family and Jumbo packs with raita, salan, salad and dessert included.",
    chip: "Family & Jumbo packs",
  },
  {
    icon: Cake,
    title: "Birthdays & get-togethers",
    body: "Set menus across biryani, tandoor, curries and desserts.",
    chip: "Set menus",
  },
];

function CateringPage() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", type: "Wedding", notes: "" });

  const message = `Hi Charminar Biryani, I'd like to plan a catering order.
Name: ${form.name}
Phone: ${form.phone}
Event: ${form.type}
Date: ${form.date}
Guests: ${form.guests}
Notes: ${form.notes}`;

  const field = "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-navy";

  return (
    <>
      <PageHero
        eyebrow="From 10 plates to 1000"
        title="Catering & Bulk Orders"
        intro="The same sealed-handi dum biryani, scaled for your event and delivered hot, on time and beautifully packed."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-navy hover:bg-navy hover:shadow-premium"
              >
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl text-navy/[0.05] transition-colors duration-300 group-hover:text-gold/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="relative mt-6 text-xl text-navy transition-colors duration-300 group-hover:text-cream">{s.title}</h2>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-cream/70">
                  {s.body}
                </p>
                <span className="relative mt-6 inline-flex self-start rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-navy/70 transition-colors duration-300 group-hover:text-gold">
                  {s.chip}
                </span>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <ScrollFloat className="text-3xl">Plan your catering</ScrollFloat>
          <p className="mt-3 text-sm text-muted-foreground">
            Share your event details and we'll get back to you on WhatsApp.
          </p>
          <form
            className="mt-8 grid gap-5 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink(message), "_blank", "noreferrer");
            }}
          >
            <label className="text-sm font-medium">
              Your name
              <input
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="text-sm font-medium">
              Phone number
              <input
                required
                type="tel"
                className={field}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label className="text-sm font-medium">
              Event type
              <select
                className={field}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option>Wedding</option>
                <option>Corporate lunch</option>
                <option>House party</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Event date
              <input
                type="date"
                className={field}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className="text-sm font-medium">
              Number of guests
              <input
                type="number"
                min="10"
                className={field}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
              />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Anything else?
              <textarea
                rows={4}
                className={field}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream"
              >
                Send on WhatsApp
              </button>
              <a href={site.phoneHref} className="ml-4 text-sm font-semibold underline">
                or call {site.phone}
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
