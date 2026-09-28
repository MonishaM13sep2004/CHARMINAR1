import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TiltedCard from "@/components/TiltedCard";
import StickerPeel from "@/components/StickerPeel";
import CircularGallery from "@/components/CircularGallery";
import { Marquee } from "@/components/ui/marquee";
import { useIsMobile } from "@/hooks/use-mobile";
import chickenBiryani from "@/assets/dishes photos-images/chicken biryani.jpg";
import vegDumBiryani from "@/assets/dishes photos-images/veg dum biryani.jpg";
import gajrHalwa from "@/assets/dishes photos-images/gajar halwa.jpg";
import prawnBiryani from "@/assets/dishes photos-images/prawn biryani.png";
import shrimpCurry from "@/assets/dishes photos-images/shrimp curry.png";
import muttonBiryaniPlaceholder from "@/assets/dishes photos-images/mutton biryani.jpg";
import eggBiryani from "@/assets/dishes photos-images/egg biryani.jpg";
import chickenBiryani2 from "@/assets/dishes photos-images/chicken biryani 1.jpg";
import manchowSoup from "@/assets/dishes photos-images/manchow soup.jpg";
import { orderLink, faqs, waLink } from "@/data/site";
import { OutletCards } from "@/components/site/OutletCards";
import { OffersStack } from "@/components/site/OffersStack";
import { ReviewsMarquee3D } from "@/components/site/ReviewsMarquee";
import ScrollFloat from "@/components/ScrollFloat";

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0e8d8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%23c8a96e'%3E%3F%3C/text%3E%3C/svg%3E";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Zafrani Biryani in Hyderabad | Charminar Biryani" },
      {
        name: "description",
        content:
          "Charminar Biryani serves authentic Zafrani Hyderabadi dum biryani in Kondapur and Gachibowli. Order online, reserve a table or book catering today.",
      },
      { property: "og:title", content: "Best Zafrani Biryani in Hyderabad | Charminar Biryani" },
      {
        property: "og:description",
        content:
          "Authentic Zafrani Hyderabadi dum biryani, slow cooked on dum with premium ingredients. Order direct from Charminar Biryani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const signatures = [
  {
    img: muttonBiryaniPlaceholder,
    name: "Zafrani Hyderabadi Mutton Dum Biryani",
    desc: "Juicy mutton marinated overnight, layered with saffron rice and sealed on slow dum.",
    price: "From ₹489",
  },
  {
    img: chickenBiryani,
    name: "Zafrani Hyderabadi Chicken Dum Biryani",
    desc: "Our signature. Aged basmati, saffron, hand-pounded masala and tender chicken, slow-cooked to perfection.",
    price: "From ₹369",
  },
  {
    img: vegDumBiryani,
    name: "Zafrani Hyderabadi Veg Dum Biryani",
    desc: "Soft paneer and roasted cashew in Zafrani spice, cooked entirely separate from non-veg.",
    price: "From ₹349",
  },
];

const bestsellers = [
  { img: prawnBiryani, name: "Prawn Biryani", price: "₹499", desc: "Fresh prawns cooked with aromatic basmati and coastal spices." },
  { img: shrimpCurry, name: "Shrimp Curry", price: "₹389", desc: "Tender shrimp in a rich, spiced gravy with fresh herbs." },
  { img: gajrHalwa, name: "Gajar Halwa", price: "₹149", desc: "Slow-cooked carrot halwa with khoya, cardamom and ghee." },
  { img: placeholder, name: "More coming soon", price: "", desc: "" },
];

// Module-level so the WebGL gallery isn't rebuilt on every render
const galleryItems = [
  { image: chickenBiryani, text: "Chicken Dum Biryani" },
  { image: muttonBiryaniPlaceholder, text: "Mutton Dum Biryani" },
  { image: "/ingredients.webp", text: "Handpicked Spices" },
  { image: prawnBiryani, text: "Prawn Biryani" },
  { image: vegDumBiryani, text: "Veg Dum Biryani" },
  { image: eggBiryani, text: "Egg Biryani" },
  { image: shrimpCurry, text: "Shrimp Curry" },
  { image: chickenBiryani2, text: "Family Pack" },
  { image: manchowSoup, text: "Manchow Soup" },
  { image: gajrHalwa, text: "Gajar Halwa" },
];

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-navy bg-navy text-cream shadow-premium" : "border-navy/10 bg-background/70 hover:border-gold/60 hover:bg-background"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className={`font-display text-sm transition-colors ${isOpen ? "text-gold" : "text-navy/40"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-semibold sm:text-lg">{f.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  isOpen ? "bg-gold text-navy" : "bg-navy/5 text-navy"
                }`}
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-6 pl-14 text-sm leading-relaxed text-cream/75 sm:px-6 sm:pl-16 sm:text-base">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <>
      {/* Hero - split layout, video background */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Bottom gold line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="py-24 flex flex-col items-center text-center">
            <div className="relative z-10 max-w-2xl fade-up">
              <h1 className="text-4xl font-bold leading-[1.08] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
                The Royal Taste of Hyderabad
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                Zafrani Hyderabadi Dum Biryani. Slow cooked. Saffron steeped. Served with love.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ShinyButton
                  onClick={() => {
                    window.open(orderLink, "_blank", "noopener,noreferrer");
                  }}
                  className="rounded-full border-gold bg-gold px-8 py-4 shadow-lg shadow-gold/30 [&>span:first-child]:font-semibold [&>span:first-child]:text-navy"
                >
                  Order now
                </ShinyButton>
                <InteractiveHoverButton
                  type="button"
                  onClick={() => navigate({ to: "/menu" })}
                  className="border-white/60 bg-transparent px-8 py-4 text-sm tracking-wide text-white"
                >
                  EXPLORE MENU
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand intro — with a draggable, peelable logo sticker (desktop only) */}
      <section className="relative">
        <div className="absolute inset-0 hidden overflow-hidden lg:block">
          <StickerPeel
            imageSrc="/sticker.png"
            width={170}
            rotate={-12}
            peelBackHoverPct={20}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            initialPosition={{ x: 48, y: 40 }}
          />
        </div>
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="eyebrow text-navy/60">More than just biryani. It's Hyderabad.</p>
        <ScrollFloat className="mt-4 text-3xl sm:text-4xl">Rooted in Hyderabad. Made for every table.</ScrollFloat>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Charminar Biryani began with a simple belief - that great food brings people together.
          From the old city's kitchens to your table, we serve Zafrani dum biryani the way this city
          has always made it: unhurried, aromatic and generous.
        </p>
      </div>
      </section>

      {/* Signature */}
      <section className="surface-royal">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-64 lg:shrink-0">
              <p className="eyebrow text-gold">The signature</p>
              <ScrollFloat className="mt-3 text-2xl text-cream sm:text-3xl">Zafrani Hyderabadi Dum Biryani</ScrollFloat>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                Saffron-steeped milk, aged long-grain basmati and meat marinated for hours, sealed in
                a handi and finished on slow dum. Nothing rushed, nothing reheated.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              {signatures.map((s) => (
                <TiltedCard
                  key={s.name}
                  containerHeight="auto"
                  containerWidth="100%"
                  imageHeight="auto"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                >
                  <article
                    className="flex h-full flex-col rounded-2xl bg-cream/[0.06] ring-1 ring-cream/15 p-3"
                  >
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-xl object-cover"
                    />
                    <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                      <h3 className="text-sm font-semibold leading-snug text-cream">{s.name}</h3>
                      <p className="mt-1 text-xs text-cream/60 line-clamp-2 flex-1">{s.desc}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-xs font-semibold text-gold">{s.price}</span>
                        <a
                          href={orderLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold text-navy"
                        >
                          Order
                        </a>
                      </div>
                    </div>
                  </article>
                </TiltedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers - rotating circular dishes */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-navy/60">Best sellers</p>
            <ScrollFloat className="mt-3 text-3xl sm:text-4xl">What Hyderabad keeps ordering</ScrollFloat>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-navy underline underline-offset-4">
            See full menu
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 lg:max-w-4xl">
          {bestsellers.filter(b => b.name !== "More coming soon").map((b, idx) => (
            <article key={b.name} className="flex flex-col items-center gap-3 text-center">
              <div
                className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-gold/25 shadow-lg sm:h-36 sm:w-36"
                style={{ animation: `spin ${18 + idx * 4}s linear infinite` }}
              >
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ animation: `spin ${18 + idx * 4}s linear infinite reverse` }}
                />
              </div>
              <h3 className="text-sm font-semibold leading-tight">{b.name}</h3>
              <span className="text-sm font-bold text-navy">{b.price}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Outlets — full-bleed maps with a frosted info panel */}
      <section className="surface-royal">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-gold">Where to find us</p>
              <ScrollFloat className="mt-3 text-3xl text-cream sm:text-4xl">Our outlets in Hyderabad</ScrollFloat>
            </div>
            <p className="max-w-xs text-sm text-cream/60">Two kitchens in Kondapur, same slow dum. Walk in, order ahead or book a table.</p>
          </div>
          <OutletCards />
        </div>
      </section>

      {/* Gallery */}
      {/* White fading into the cream of the reviews section below, so there's no hard edge */}
      <section className="bg-gradient-to-b from-background from-45% to-secondary py-14">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow text-navy/60">A look inside</p>
            <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Food. Ambience. Hyderabad.</ScrollFloat>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-navy underline underline-offset-4">
            View menu
          </Link>
        </div>
      </div>
        {isMobile ? (
          /* Phones: a simple auto-scrolling strip of dishes */
          <Marquee pauseOnHover className="mt-2 [--duration:35s] [--gap:1rem]">
            {galleryItems.map((g) => (
              <figure key={g.text} className="w-48 shrink-0">
                <img src={g.image} alt={g.text} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
                <figcaption className="mt-3 text-center font-display text-base text-navy">{g.text}</figcaption>
              </figure>
            ))}
          </Marquee>
        ) : (
          /* Tablet & desktop: drag, swipe, scroll-wheel or arrow keys to move through the dishes */
          <div className="relative -mt-24 h-[640px]">
            <CircularGallery items={galleryItems} bend={3} textColor="#091231" borderRadius={0.05} scrollEase={0.02} font="600 30px Fraunces" />
          </div>
        )}
      </section>

      {/* Reviews - full-width 3D marquee */}
      <section className="overflow-hidden bg-secondary py-16">
        <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
          <p className="eyebrow text-navy/60">Google reviews</p>
          <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Loved by Hyderabad</ScrollFloat>
        </div>
        <ReviewsMarquee3D />
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/search?q=charminar+biryani+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-[1.03]"
          >
            See all Google reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Offers — cards stack on top of each other as you scroll.
          Full-width wrapper fades the reviews' cream into white so there's no hard edge. */}
      <div className="bg-[linear-gradient(to_bottom,var(--secondary),var(--background)_420px)]">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[20vh] lg:self-start">
            <p className="eyebrow text-navy/60">Offers</p>
            <ScrollFloat className="mt-3 text-3xl sm:text-5xl">Running this month</ScrollFloat>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Family feasts, weekend combos and office lunches. Keep scrolling to see every offer.
            </p>
            <Link
              to="/offers"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              See all offers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <OffersStack />
        </div>
      </section>
      </div>

      {/* FAQ — sticky intro + animated numbered accordion */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-navy/60">Good to know</p>
            <ScrollFloat className="mt-3 text-3xl sm:text-4xl">Frequently Asked Questions</ScrollFloat>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Spice levels, veg options, family packs and catering, answered.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-3xl bg-navy p-6 text-cream shadow-premium"
            >
              <MessageCircle className="h-6 w-6 text-gold" />
              <p className="mt-3 font-display text-xl">Still hungry for answers?</p>
              <p className="mt-1 text-sm text-cream/65">Our team replies on WhatsApp within minutes.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={waLink("Hi! I have a question about Charminar Biryani.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                </a>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-cream/10"
                >
                  All FAQs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <ScrollFloat className="text-2xl font-bold text-cream">Ready to taste Hyderabad's finest?</ScrollFloat>
              <p className="mt-1 text-sm text-cream/60">
                Fresh dum biryani, straight from our kitchen to your table. Every single time.
              </p>
            </div>
            <a
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03]"
            >
              ORDER BIRYANI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
