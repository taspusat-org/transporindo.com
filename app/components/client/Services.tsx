"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CardItem = {
  image: String;
  cardTitle: String;
  cardDescription: any;
  cardExtendedDescription: any;
};

type ServicesProps = {
  title: string;
  services: CardItem[];
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services({ data }: { data: ServicesProps }) {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  return (
    <div id="services" className="flex flex-col min-h-screen items-center pb-16 pt-12 bg-slate-50">
      <span className="font-bold text-[35px] text-center mx-8">{data?.title}</span>

      <motion.div
        className="mt-10 grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data?.services.map((service, idx) => {
          const isExpanded = expandedCardIndex === idx;

          return (
            <motion.div key={idx} variants={cardVariants} layout>
              <Card className="flex flex-col h-full">
                <CardHeader className="items-center gap-4 justify-center">
                  {service.image && (
                    <Image
                      src={urlFor(service.image).width(300).height(200).url()}
                      alt="Image Cover"
                      width={300}
                      height={300}
                      className="rounded-2xl shadow-xl object-cover"
                    />
                  )}

                  <CardTitle className="mt-2 text-center">
                    <span className="text-[24px]">{service.cardTitle}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {service.cardDescription && (
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <PortableText value={service.cardDescription} />
                    </div>
                  )}

                  <AnimatePresence>
                    {isExpanded && service.cardExtendedDescription && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="prose prose-sm dark:prose-invert max-w-none mt-4">
                          <PortableText value={service.cardExtendedDescription} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
                <CardFooter className="justify-center">
                  <button
                    onClick={() => setExpandedCardIndex(isExpanded ? null : idx)}
                    className="font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}