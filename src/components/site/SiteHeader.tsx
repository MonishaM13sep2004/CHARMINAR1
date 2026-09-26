import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { orderLink } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/catering", label: "Catering" },
  { to: "/offers", label: "Offers" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
];

/*
 * Floating glassmorphism bar. The header is fixed and overlays the page,
 * so each page's first section reserves ~6rem of top space for it.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border border-white/10 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open
            ? "bg-navy/95 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.55)]"
            : "bg-navy/80 shadow-[0_8px_30px_-16px_rgb(0_0_0/0.4)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2.5 pl-3 pr-2.5 sm:pl-4">
          <Link to="/" className="shrink-0" aria-label="Charminar Biryani home">
            <img src="/logo-cream.png" alt="Charminar Biryani" className="h-10 w-auto sm:h-12" />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap text-sm font-medium text-cream/60 transition-colors hover:text-cream xl:text-[15px]"
                activeProps={{ className: "!text-gold" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="hidden whitespace-nowrap rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Order Biryani
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-cream transition-colors hover:bg-white/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-white/10 px-3 pb-4 pt-2 lg:hidden">
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-cream/75 hover:bg-white/10 hover:text-cream"
                    activeProps={{ className: "!text-gold" }}
                    activeOptions={{ exact: true }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-xl bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Order Biryani
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
