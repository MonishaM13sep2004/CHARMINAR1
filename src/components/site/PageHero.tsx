import ScrollFloat from "@/components/ScrollFloat";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="surface-royal">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-36">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <ScrollFloat as="h1" className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</ScrollFloat>
        {intro && <p className="mx-auto mt-5 max-w-2xl text-cream/75">{intro}</p>}
      </div>
    </section>
  );
}
