import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import v1 from "@/gallery/IMG_4362.MOV";
import v2 from "@/gallery/IMG_4363.MOV";
import v3 from "@/gallery/IMG_4364.MOV";
import v4 from "@/gallery/IMG_4365.MOV";
import v5 from "@/gallery/IMG_4366.MOV";
import v6 from "@/gallery/IMG_4367.MOV";
import v7 from "@/gallery/IMG_4368.MOV";
import v8 from "@/gallery/IMG_4369.MOV";
import v9 from "@/gallery/IMG_4370.MOV";
import v10 from "@/gallery/IMG_4371.MOV";
import v11 from "@/gallery/IMG_4372.MOV";
import v12 from "@/gallery/IMG_4374.MOV";
import v13 from "@/gallery/IMG_4379.MOV";
import v14 from "@/gallery/IMG_4380.MOV";
import v15 from "@/gallery/IMG_4381.MOV";
import v16 from "@/gallery/IMG_4382.MOV";
import v17 from "@/gallery/IMG_4383.MOV";

const videos = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Charminar Biryani Hyderabad" },
      {
        name: "description",
        content: "Videos of Charminar Biryani - Zafrani dum biryani, tandoor starters and our Hyderabad dining rooms.",
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
              <video src={src} controls playsInline preload="metadata" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        {/* Second row - 4 portrait videos */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {videos.slice(3, 7).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-card bg-black aspect-[9/16]">
              <video src={src} controls playsInline preload="metadata" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        {/* Third row - remaining portrait videos */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {videos.slice(7).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-card bg-black aspect-[9/16]">
              <video src={src} controls playsInline preload="metadata" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
