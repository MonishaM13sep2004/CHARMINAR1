import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ReviewsMarquee3D } from "@/components/site/ReviewsMarquee";
import ScrollFloat from "@/components/ScrollFloat";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=0187de462875193d&hl=en-IN&q=Charminar+Biryani+Hyderabad&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_49Mt497I9VbSNFIg3cOj3KHV9IB1ZD7VWFPg8moja5aY0Kxsr7cKAxj9h2xwXNSq29yBKctdiDBkVfxwXa4pk7aCTf-I9meKfhc_VY4gp7Q9W5MDw%3D%3D&sa=X&ved=2ahUKEwiMtrzLwpCXAxV3TGwGHZ1kO84QrrQLegQIJRAA";

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
        intro="We are proud to let the people who dine with us every week speak for us."
      />

      <section className="overflow-hidden bg-secondary py-16">
        <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
          <p className="eyebrow text-navy/60">Google reviews</p>
          <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Loved by Hyderabad</ScrollFloat>
          <p className="mt-3 text-sm text-muted-foreground">Hover a column to pause and read.</p>
        </div>
        <ReviewsMarquee3D />
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-[1.03]"
          >
            See all Google reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollFloat className="text-3xl">Share your experience</ScrollFloat>
          <p className="mt-3 text-muted-foreground">
            We would be honoured to hear from you. Your feedback helps us serve Hyderabad better
            and helps others discover authentic Zafrani biryani.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream"
          >
            Write a Google Review <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
