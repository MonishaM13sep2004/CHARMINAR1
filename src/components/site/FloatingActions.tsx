import { MessageCircle, Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { site, orderLink, outlets } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      {/* Desktop / tablet persistent WhatsApp */}
      <a
        href={orderLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-premium transition-transform hover:scale-105 sm:flex"
      >
        <MessageCircle className="h-7 w-7 text-white" strokeWidth={2.2} />
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-cream/15 bg-navy text-cream sm:hidden">
        <a href={orderLink} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-2.5">
          <UtensilsCrossed className="h-5 w-5 text-gold" />
          <span className="text-[11px] font-medium">Order</span>
        </a>
        <a href={site.phoneHref} className="flex flex-col items-center gap-1 py-2.5">
          <Phone className="h-5 w-5 text-gold" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <a href={orderLink} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-2.5">
          <MessageCircle className="h-5 w-5 text-gold" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href={outlets[0]!.maps}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5"
        >
          <MapPin className="h-5 w-5 text-gold" />
          <span className="text-[11px] font-medium">Directions</span>
        </a>
      </div>
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
