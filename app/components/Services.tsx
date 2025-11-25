"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";

type Services = {
  title: String;
  servicesList: Card[];
};

type Card = {
  image: String;
  cardTitle: String;
  cardDescription: any;
  cardExtendedDescription: any;
};

export default function Services() {
  const [servicesData, setServicesData] = useState<Services | null>();
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  // 1. Parent Variant
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Child Variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "services" && language == $locale][0]{ 
              title, 
              servicesList[]{ 
                image, 
                cardTitle, 
                cardDescription, 
                cardExtendedDescription 
              }, 
            }`;
        const data = await client.fetch(query, { locale });
        setServicesData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <>
      <div id="services" className="flex flex-col min-h-screen items-center pb-16 pt-12 bg-slate-50">
        {/*Title*/}
        <span className="font-bold text-[35px] text-center mx-8">{servicesData?.title}</span>

        <motion.div
          className="mt-10 grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData?.servicesList.map((service, idx) => {
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
                    {/*Base Description*/}
                    {service.cardDescription && (
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <PortableText value={service.cardDescription} />
                      </div>
                    )}

                    {/* Animate the expansion of text */}
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
    </>
  );
}
