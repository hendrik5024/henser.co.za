"use client";
import { useState } from "react";
import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageLightbox({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <figure
            key={i}
            className="group rounded-lg border overflow-hidden bg-white shadow-sm transition hover:shadow-md cursor-pointer"
            onClick={() => setOpenIndex(i)}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image src={it.src} alt={it.alt} fill className="object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />
            </div>
            {it.caption && (
              <figcaption className="px-3 py-2 text-sm text-slate-700">{it.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute -top-10 right-0 bg-white/90 text-slate-900 rounded px-3 py-1 shadow"
            >
              Close
            </button>
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={items[openIndex].src}
                alt={items[openIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            {items[openIndex].caption && (
              <div className="mt-3 text-center text-white text-sm opacity-90">
                {items[openIndex].caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
