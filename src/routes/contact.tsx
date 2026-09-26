import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { outlets, site, waLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Table Reservations | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Reserve a table, call us or message on WhatsApp. Contact details and opening hours for every Charminar Biryani outlet in Hyderabad.",
      },
      { property: "og:title", content: "Contact & Reservations | Charminar Biryani" },
      {
        property: "og:description",
        content: "Book a table or reach our Hyderabad outlets by phone or WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    outlet: outlets[0]?.area ?? "",
    date: "",
    time: "",
    guests: "2",
  });

  const message = `Hi Charminar Biryani, I'd like to reserve a table.
Name: ${form.name}
Phone: ${form.phone}
Outlet: ${form.outlet}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}`;

  const field =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-navy";

  return (
    <>
      <PageHero
        eyebrow="We're a message away"
        title="Contact & Reservations"
        intro="Book a table, ask about an order or plan an event - pick whichever is quickest for you."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ScrollFloat className="text-3xl">Reserve a table</ScrollFloat>
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
                Outlet
                <select
                  className={field}
                  value={form.outlet}
                  onChange={(e) => setForm({ ...form, outlet: e.target.value })}
                >
                  {outlets.map((o) => (
                    <option key={o.slug}>{o.area}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium">
                Guests
                <input
                  type="number"
                  min="1"
                  className={field}
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                />
              </label>
              <label className="text-sm font-medium">
                Date
                <input
                  type="date"
                  className={field}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
              <label className="text-sm font-medium">
                Time
                <input
                  type="time"
                  className={field}
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream"
                >
                  Confirm on WhatsApp
                </button>
              </div>
            </form>
          </div>

          <div>
            <ScrollFloat className="text-3xl">Reach us</ScrollFloat>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="text-muted-foreground">Phone: </span>
                <a href={site.phoneHref} className="font-semibold underline">
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Email: </span>
                <a href={`mailto:${site.email}`} className="font-semibold underline">
                  {site.email}
                </a>
              </p>
              <p className="text-muted-foreground">Open 11:30 AM – 11:30 PM, all days</p>
            </div>

            <div className="mt-10 space-y-6">
              {outlets.map((o) => (
                <article key={o.slug} className="rounded-2xl border border-border p-6 shadow-card">
                  <h3 className="text-lg">{o.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.address}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{o.hours}</p>
                  <a
                    href={o.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-xs font-semibold"
                  >
                    Get directions
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
