"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { usePathname } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { StarRating } from "@/components/star-rating";
import { motion } from "framer-motion";

type TestimonyData = {
  smallHeading: string;
  bigHeading: string;
  description: string;
  testimonylist: TestimonyList[];
};

type TestimonyList = {
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
  content: string;
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TestimonialPage() {
  const [testimonialData, setTestimonialData] = useState<TestimonyData | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "testimonials" && language == $locale][0] { 
            smallHeading, 
            bigHeading, 
            description, 
            testimonylist[] { 
              name, 
              logo, 
              role, 
              company, 
              rating, 
              content 
            } 
          }`;
        const data = await client.fetch(query, { locale });
        setTestimonialData(data);
      } catch (error) {
        console.error("Error fetching testimonials data: ", error);
      }
    };
    fetchData();
  }, [locale]);

  if (!testimonialData) return null;

  return (
    <section id="testimony" className="bg-slate-50 py-12 sm:py-12 overflow-hidden">
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
        <motion.div
          className="mx-10 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialData?.testimonylist?.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="h-full"
            >
              <Card className="flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 border-muted">
                {/* Header: Author & Logo */}
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white border p-1 overflow-hidden">
                    {testimonial.logo && (
                      <img
                        src={urlFor(testimonial.logo).url()}
                        alt="Company Logo"
                        className="h-full w-full object-contain"
                      />
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
        </motion.div>
      </div>
    </section>
  );
}
