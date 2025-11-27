"use client";

import { useRef, useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "motion/react";

type Slide = {
  image?: any;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  order?: number;
};

export default function HeroSlider({ slides: initialSlides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const slides = initialSlides.sort((a, b) => (a.order || 0) - (b.order || 0));

  useEffect(() => {
    if (slides.length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [slides.length]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  if (!slides.length) {
    return (
      <section className="w-full bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6">No slides available</div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-50" id="hero">
      <div className="relative h-full">
        {slides.map((s, i) => {
          const visible = i === index;
          const imgUrl = s.image ? urlFor(s.image).width(1600).url() : null;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${visible ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              aria-hidden={!visible}
            >
              {imgUrl ? (
                <img
                  src={imgUrl}
                  alt={s.heading || "Hero slide"}
                  className="h-full w-full object-cover brightness-50"
                />
              ) : (
                <div className="h-full w-full bg-zinc-200" />
              )}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white mx-16">
                {s.heading && (
                  <motion.h2
                    className="mb-2 text-xl md:text-3xl font-semibold"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={
                      visible
                        ? {
                            // Only animate if visible
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.6,
                              ease: "easeOut",
                            },
                          }
                        : {}
                    }
                  >
                    {s.heading}
                  </motion.h2>
                )}
                {s.subheading && <p className="mb-4 text-lg">{s.subheading}</p>}
                {s.ctaText && s.ctaUrl && (
                  <a
                    href={s.ctaUrl}
                    className="inline-block rounded bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
                  >
                    {s.ctaText}
                  </a>
                )}
              </div>
            </div>
          );
        })}

        {/* Controls */}
        {slides.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow backdrop-blur hover:bg-white"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow backdrop-blur hover:bg-white"
            >
              ›
            </button>
          </>
        )}
      </div>
    </section>
  );
}
