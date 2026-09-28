import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import chickenBiryaniImg from "@/assets/dishes photos-images/chicken biryani.jpg";
import vegDumBiryaniImg from "@/assets/dishes photos-images/veg dum biryani.jpg";
import prawnBiryaniImg from "@/assets/dishes photos-images/prawn biryani.png";
import shrimpCurryImg from "@/assets/dishes photos-images/shrimp curry.png";
import InfiniteMenu from "@/components/InfiniteMenu";
import ScrollFloat from "@/components/ScrollFloat";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content: "The story of Charminar Biryani - rooted in Hyderabad, rich with Zafrani flavour, made with care.",
      },
    ],
  }),
  component: StoryPage,
});

const journey = [
  {
    step: "01",
    title: "The Finest Ingredients",
    body: "Handpicked spices from across India - cardamom, saffron, cloves and more. Only the best make it into our kitchen.",
    img: "/ingredients.webp",
  },
  {
    step: "02",
    title: "They Find Their Home",
    body: "These extraordinary ingredients arrive in Hyderabad, the city that has perfected the art of biryani for centuries.",
    img: chickenBiryaniImg,
  },
  {
    step: "03",
    title: "A Royal Tradition",
    body: "Using time-honoured Dum cooking, we blend these ingredients with the finest aged basmati to create our Signature Zafrani Biryani.",
    img: vegDumBiryaniImg,
  },
  {
    step: "04",
    title: "Charminar Biryani",
    body: "A celebration of heritage, crafted for today - bringing the authentic taste of Hyderabad to your table, every single time.",
    img: prawnBiryaniImg,
  },
];

const journeyItems = journey.map((j) => ({
  image: j.img,
  title: j.title,
  description: j.body,
  step: j.step,
}));

// Scroll distance (in vh) spent on each step while the sphere is pinned
const SCROLL_PER_STEP_VH = 70;

function JourneySphere() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, scrollable)));
      setActive(Math.min(journey.length - 1, Math.floor(progress * journey.length)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="surface-royal relative"
      style={{ height: `calc(100svh + ${(journey.length - 1) * SCROLL_PER_STEP_VH}vh)` }}
    >
      <div className="sticky top-0 flex h-[calc(100svh-60px)] flex-col sm:h-svh">
        <div className="mx-auto max-w-7xl px-4 pt-24 text-center sm:px-6 sm:pt-28">
          <p className="eyebrow text-gold">The journey</p>
          <ScrollFloat className="mt-3 text-3xl text-cream sm:text-4xl">Four steps to every handi</ScrollFloat>
          <p className="mt-2 text-sm text-cream/60">Scroll to follow the journey</p>
        </div>
        <div className="relative min-h-0 flex-1">
          <InfiniteMenu items={journeyItems} scale={1} backgroundColor="transparent" activeIndex={active} />
          {/* Step progress */}
          <ol className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3 sm:right-8" aria-hidden="true">
            {journey.map((j, i) => (
              <li
                key={j.step}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "scale-125 bg-gold" : "bg-cream/25"
                }`}
              />
            ))}
          </ol>
        </div>
      </div>
      {/* Screen-reader version of the journey (the sphere is visual only) */}
      <ol className="sr-only">
        {journey.map((j) => (
          <li key={j.step}>
            <h3>{j.title}</h3>
            <p>{j.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="surface-royal px-4 pb-20 pt-32 text-center sm:pt-36">
        <p className="eyebrow text-gold tracking-widest">Hyderabad | Biryani | Beyond</p>
        <ScrollFloat as="h1" className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-cream">A Journey of Flavour</ScrollFloat>
        <p className="mt-3 text-sm tracking-[0.3em] uppercase text-cream/60">From Land to Legacy</p>
        <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Journey steps — sphere pinned while scrolling; each scroll stretch rotates to the next step */}
      <JourneySphere />

      {/* Full story text */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">
          {/* Side image */}
          <div className="lg:w-80 lg:shrink-0 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img src={shrimpCurryImg} alt="Charminar Biryani food" className="w-full object-cover h-[420px] lg:h-[560px]" />
            </div>
          </div>
          <div className="max-w-2xl flex-1 text-[17px] leading-[1.8] text-navy/85">
            <ScrollFloat className="text-3xl leading-tight text-navy sm:text-4xl">
              {"A Taste of Hyderabad.\nA Story Made to Travel."}
            </ScrollFloat>
            <p className="mt-5 font-display text-xl italic leading-snug text-navy/60">
              Some stories are told through words. Hyderabad tells many of its best stories through food.
            </p>
            <div className="mt-6 h-px w-16 bg-gold" />

            <div className="mt-8 space-y-5">
              <p>
                At Charminar Biryani, ours begins with the unmistakable aroma of Dum Biryani: fragrant rice,
                carefully selected ingredients, aromatic spices and the luxurious richness of Zafrani flavours
                coming together slowly, just as great biryani should.
              </p>
              <blockquote className="my-8 rounded-r-2xl border-l-4 border-gold bg-secondary/60 px-6 py-5 font-display text-xl leading-snug text-navy sm:text-2xl">
                Authentic food should feel special, but it should never feel out of reach.
              </blockquote>
              <p>
                That is why we bring together Hyderabad's warmth and culinary heritage with a modern, accessible
                dining experience, creating food worthy of a celebration yet familiar enough to become part of
                your everyday life.
              </p>
              <p>
                But great biryani is only the beginning. <span className="font-semibold text-navy">What we truly want to build is trust.</span>
              </p>
              <p>
                The confidence that when you see the Charminar name, the aroma, flavour, quality and experience you
                loved last time will be waiting for you again.
              </p>
              <p className="text-navy/60">
                Because a memorable meal may bring someone through the door once. Consistency brings them back.
              </p>
            </div>

            <div className="mt-10 border-t border-navy/10 pt-8">
              <p>From Hyderabad to every neighbourhood we serve next, our promise remains the same:</p>
              <p className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
                Reliable Biryani. <span className="text-gold">Every Time.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
