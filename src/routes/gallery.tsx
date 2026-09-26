import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

// Videos are served from the public/gallery/ folder (not bundled by Vite).
// Place the MOV files in public/gallery/ locally — they are excluded from git
// due to file size, but the paths below will resolve at runtime.
const videos = [
  "/gallery/IMG_4362.MOV",
  "/gallery/IMG_4363.MOV",
  "/gallery/IMG_4364.MOV",
  "/gallery/IMG_4365.MOV",
  "/gallery/IMG_4366.MOV",
  "/gallery/IMG_4367.MOV",
  "/gallery/IMG_4368.MOV",
  "/gallery/IMG_4369.MOV",
  "/gallery/IMG_4370.MOV",
  "/gallery/IMG_4371.MOV",
  "/gallery/IMG_4372.MOV",
  "/gallery/IMG_4374.MOV",
  "/gallery/IMG_4379.MOV",
  "/gallery/IMG_4380.MOV",
  "/gallery/IMG_4381.MOV",
  "/gallery/IMG_4382.MOV",
  "/gallery/IMG_4383.MOV",
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content:
          "Videos of Charminar Biryani - Zafrani dum biryani, tandoor starters and our Hyderabad dining rooms.",
      },
      { property: "og:title", content: "Gallery | Charminar Biryani" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Look before you taste"
        title="Gallery"
        intro="Our handis, our tandoor, our tables - watch exactly how we do it."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* First row - 3 larger landscape videos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {videos.slice(0, 3).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-card bg-black aspect-video">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Second row - 4 portrait videos */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {videos.slice(3, 7).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-card bg-black aspect-[9/16]">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Third row - remaining portrait videos */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {videos.slice(7).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-card bg-black aspect-[9/16]">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
