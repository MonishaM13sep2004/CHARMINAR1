import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/data/site";

const ReviewCard = ({ name, source, text }: { name: string; source: string; text: string }) => (
  <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-navy/10 bg-white p-5 shadow-card">
    <div className="flex flex-row items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/25 text-xs font-bold text-navy">
        {name.charAt(0)}
      </div>
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium text-navy">{name}</figcaption>
        <p className="flex items-center gap-1 text-xs font-medium text-navy/50">
          {source}
          <span className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-current" />
            ))}
          </span>
        </p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm text-navy/80">{text}</blockquote>
  </figure>
);

// Deal reviews across columns so neighbouring columns never show the same one
const REVIEW_COLUMNS = 8;
const reviewColumns = Array.from({ length: REVIEW_COLUMNS }, (_, c) =>
  testimonials.filter((_, i) => i % REVIEW_COLUMNS === c),
);

export function ReviewsMarquee3D() {
  return (
    <div className="relative flex h-[36rem] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-180px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {reviewColumns.map((column, c) => (
          <Marquee key={c} vertical pauseOnHover reverse={c % 2 === 1} className="[--duration:20s]">
            {column.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-secondary" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-secondary" />
    </div>
  );
}

