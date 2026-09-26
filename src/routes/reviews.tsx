import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ReviewsMarquee3D } from "@/components/site/ReviewsMarquee";
import { orderLink } from "@/data/site";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "What guests say about Charminar Biryani - Zafrani dum biryani, tandoor starters, service and ambience in Hyderabad.",
      },
      { property: "og:title", content: "Reviews | Charminar Biryani" },
      {
        property: "og:description",
        content: "Guest reviews of our Hyderabadi dum biryani, starters and dining rooms.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Straight from our guests"
        title="Reviews"
        intro="We'd rather let the people who eat here every week do the talking."
      />

      <section className="overflow-hidden bg-secondary py-16">
        <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
          <p className="eyebrow text-navy/60">Google reviews</p>
          <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Loved by Hyderabad</ScrollFloat>
          <p className="mt-3 text-sm text-muted-foreground">Hover a column to pause and read.</p>
        </div>
        <ReviewsMarquee3D />
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollFloat className="text-3xl">Tasted it yourself?</ScrollFloat>
          <p className="mt-3 text-muted-foreground">
            Leave us a review on Google - and if something wasn't right, tell us first so we
            can fix it.
          </p>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream"
          >
            ORDER BIRYANI
          </a>
        </div>
      </section>
    </>
  );
}
