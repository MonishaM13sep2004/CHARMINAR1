import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Lock, LogOut, Plus, Trash2, Save, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin | Charminar Biryani" }],
  }),
  component: AdminPage,
});

// Password stored client-side — sufficient for a simple CMS.
// Change this value to update the password.
const ADMIN_PASSWORD = "charminar2024";
const STORAGE_KEY = "cb_offers";
const AUTH_KEY = "cb_admin_auth";

type Offer = {
  id: string;
  title: string;
  detail: string;
  badge: string;
};

const DEFAULT_OFFERS: Offer[] = [
  {
    id: "1",
    title: "Family Pack Feast",
    detail: "Zafrani Chicken Dum Biryani Family Pack with raita, salan and dessert for four.",
    badge: "Family",
  },
  {
    id: "2",
    title: "Weekend Zafrani Combo",
    detail: "Any Full biryani + a signature starter at a special weekend price.",
    badge: "Fri – Sun",
  },
  {
    id: "3",
    title: "Corporate Lunch Offer",
    detail: "Bulk office lunches from 10 plates upward, delivered hot and on time.",
    badge: "Corporate",
  },
  {
    id: "4",
    title: "New Outlet Launch",
    detail: "Complimentary Double Ka Meetha on Jumbo Pack orders at our newest outlet.",
    badge: "Launch",
  },
];

function loadOffers(): Offer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Offer[]) : DEFAULT_OFFERS;
  } catch {
    return DEFAULT_OFFERS;
  }
}

function saveOffers(offers: Offer[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(offers));
}

// ─── Login screen ────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      onLogin();
    } else {
      setError(true);
      setPw("");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-premium">
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy">
            <Lock className="h-6 w-6 text-gold" />
          </div>
        </div>
        <h1 className="mt-5 text-center text-2xl font-semibold text-navy">Admin Access</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Enter your password to manage offers
        </p>
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-navy ${
              error ? "border-red-400 bg-red-50" : "border-border"
            }`}
          />
          {error && (
            <p className="text-xs text-red-500">Incorrect password. Please try again.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-navy py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Offer card editor ────────────────────────────────────────────────────────
function OfferEditor({
  offer,
  index,
  onChange,
  onDelete,
}: {
  offer: Offer;
  index: number;
  onChange: (updated: Offer) => void;
  onDelete: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-xs text-navy/40">{String(index + 1).padStart(2, "0")}</span>
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center gap-1 rounded-full px-3 py-1 text-xs text-red-500 hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" /> Remove
        </button>
      </div>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-navy/60">Offer Title</label>
          <input
            type="text"
            value={offer.title}
            onChange={(e) => onChange({ ...offer, title: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-navy"
            placeholder="e.g. Weekend Combo"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-navy/60">Description</label>
          <textarea
            value={offer.detail}
            onChange={(e) => onChange({ ...offer, detail: e.target.value })}
            rows={3}
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-navy resize-none"
            placeholder="Describe the offer..."
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-navy/60">Badge Label</label>
          <input
            type="text"
            value={offer.badge}
            onChange={(e) => onChange({ ...offer, badge: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-navy"
            placeholder="e.g. Family, Weekend, Launch"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main admin dashboard ─────────────────────────────────────────────────────
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [offers, setOffers] = useState<Offer[]>(loadOffers);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    saveOffers(offers);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function addOffer() {
    setOffers((prev) => [
      ...prev,
      { id: Date.now().toString(), title: "", detail: "", badge: "" },
    ]);
  }

  function updateOffer(index: number, updated: Offer) {
    setOffers((prev) => prev.map((o, i) => (i === index ? updated : o)));
  }

  function deleteOffer(index: number) {
    setOffers((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo-navy.svg" alt="Charminar Biryani" className="h-7 w-auto" />
            <span className="text-sm font-semibold text-navy">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                <CheckCircle className="h-4 w-4" /> Saved
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-cream hover:opacity-90"
            >
              <Save className="h-3.5 w-3.5" /> Save changes
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground hover:bg-secondary"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* Offers section */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-navy">Current Offers</h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Add, edit or remove offers shown on the website. Click Save changes when done.
            </p>
          </div>
          <button
            type="button"
            onClick={addOffer}
            className="flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2 text-xs font-semibold text-navy hover:bg-navy hover:text-cream transition-colors"
          >
            <Plus className="h-3.5 w-3.5" /> Add offer
          </button>
        </div>

        {offers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-white py-16 text-center text-sm text-muted-foreground">
            No offers yet. Click <strong>Add offer</strong> to create one.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {offers.map((offer, i) => (
              <OfferEditor
                key={offer.id}
                offer={offer}
                index={i}
                onChange={(updated) => updateOffer(i, updated)}
                onDelete={() => deleteOffer(i)}
              />
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-navy/5 border border-navy/10 p-5">
          <p className="text-xs text-navy/60">
            <strong className="text-navy">Note:</strong> Changes are saved to this browser's local storage. 
            To update offers across all visitors, edit the <code className="rounded bg-navy/10 px-1">offers</code> array 
            in <code className="rounded bg-navy/10 px-1">src/data/site.ts</code> and redeploy.
          </p>
        </div>
      </main>
    </div>
  );
}

// ─── Page entry ───────────────────────────────────────────────────────────────
function AdminPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
  }, []);

  function handleLogout() {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  }

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
  return <AdminDashboard onLogout={handleLogout} />;
}
