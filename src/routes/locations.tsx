import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { OutletCards } from "@/components/site/OutletCards";
import { outlets, site } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Outlets & Locations | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Find Charminar Biryani outlets in Hyderabad - Kondapur and Gachibowli. Addresses, opening hours, directions and phone numbers.",
      },
      { property: "og:title", content: "Outlets & Locations | Charminar Biryani" },
      {
        property: "og:description",
        content: "Addresses, hours and directions for every Charminar Biryani outlet in Hyderabad.",
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Find us in Hyderabad"
        title="Our Outlets"
        intro="Dine in, take away or get it delivered hot. Every outlet cooks to the same Zafrani standard."
      />

      <section className="surface-royal">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6">
          <OutletCards />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollFloat className="text-3xl">More outlets on the way</ScrollFloat>
          <p className="mt-3 text-muted-foreground">
            We're expanding across Hyderabad. Message us and we'll tell you the nearest
            outlet that delivers to your area.
          </p>
        </div>
      </section>
    </>
  );
}
