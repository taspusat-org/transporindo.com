"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, User, ChevronDown } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { StarRating } from "@/components/star-rating";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TestimonyList = {
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
  content: string;
};

type TestimonyProps = {
  smallHeading: string;
  bigHeading: string;
  description: string;
  testimonylist: TestimonyList[];
};

export default function Testimonies({ data }: { data: TestimonyProps }) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 6;

  if (!data) return null;
  const testimonialData = data;
  const hasMoreTestimonials = testimonialData?.testimonylist?.length > INITIAL_DISPLAY_COUNT;
  const displayedTestimonials = showAll
    ? testimonialData?.testimonylist
    : testimonialData?.testimonylist?.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="testimony" className="bg-slate-50 py-12 sm:py-12 overflow-hidden px-16 md:px-8 lg:px-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Animated as a block */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <h2 className="font-bold opacity-70 underline text-[14px] mx-10">{testimonialData?.smallHeading}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl mx-10">
            {testimonialData?.bigHeading}
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{testimonialData?.description}</p>
        </motion.div>

        {/* Card Grid - Staggered Animation */}
        <div className="grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <AnimatePresence initial={false} mode="sync">
            {displayedTestimonials?.map((testimonial: TestimonyList, idx: number) => (
              <motion.div
                key={`${testimonial.name}-${testimonial.company}-${idx}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: idx >= INITIAL_DISPLAY_COUNT && showAll ? (idx - INITIAL_DISPLAY_COUNT) * 0.08 : 0,
                  },
                }}
                exit={{
                  opacity: 1,
                  transition: {
                    duration: 0,
                  },
                }}
                className="h-full"
              >
                <Card className="flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 border-muted">
                  {/* Header: Author & Logo */}
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    {/* Updated Image Container with Fallback Logic */}
                    <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white border p-1 overflow-hidden flex items-center justify-center relative">
                      {testimonial.logo ? (
                        <img
                          src={urlFor(testimonial.logo).url()}
                          alt="Company Logo"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        // Fallback UI
                        <div className="h-full w-full bg-slate-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-slate-400" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm text-foreground leading-none mb-1">{testimonial.company}</h3>
                      <span className="text-xs text-muted-foreground">{testimonial.name}</span>
                    </div>
                  </CardHeader>

                  {/* Content: Quote */}
                  <CardContent className="flex-1 pt-2">
                    <div className="mb-3">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <div className="relative">
                      <Quote className="h-8 w-8 text-muted/20 absolute -top-2 -left-2 transform -scale-x-100" />
                      <p className="text-muted-foreground leading-relaxed text-sm relative z-10 pl-4">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {hasMoreTestimonials && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center cursor-pointer gap-2 px-8 py-3 bg-white border-2 border-slate-200 text-foreground font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-slate-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{showAll ? "Show Less" : "Show More"}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
