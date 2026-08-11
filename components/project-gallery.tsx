"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/placeholder-1.jpg",
  "/placeholder-2.jpg",
  "/placeholder-3.jpg",
];

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Gallery */}
      <section className="relative mt-16 -mx-6 sm:-mx-10 lg:-mx-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-[3/2] overflow-hidden rounded-sm border border-border bg-panel text-left transition-all duration-300 hover:-translate-y-1 hover:border-lavender-glow/40"
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Capture {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded project image"
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto rounded-sm object-contain"
            />

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black"
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
