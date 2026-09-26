import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { site, outlets, orderLink } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-royal border-t border-cream/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/logo-cream-stacked.png" alt="Charminar Biryani" className="h-32 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Zafrani Hyderabadi dum biryani, cooked the way this city has always cooked it.
            Traditional flavours, modern soul.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-cream/70 hover:text-gold" />
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-cream/70 hover:text-gold" />
            </a>
            <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-cream/70 hover:text-gold" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {(
              [
                { to: "/menu", label: "Menu" },
                { to: "/story", label: "Our Story" },
                { to: "/locations", label: "Locations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/catering", label: "Catering & Bulk" },
                { to: "/offers", label: "Offers" },
                { to: "/reviews", label: "Reviews" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ] as const
            ).map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Outlets</h3>
          <ul className="mt-4 space-y-4 text-sm text-cream/75">
            {outlets.map((o) => (
              <li key={o.slug} className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-medium text-cream">{o.area}</span>
                  {o.address}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy"
          >
            Order Biryani
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 px-4 pb-24 pt-5 text-center text-xs text-cream/50 sm:pb-5">
        © {new Date().getFullYear()} Charminar Biryani, Hyderabad. Traditional flavours. Modern
        soul.
      </div>
    </footer>
  );
}
