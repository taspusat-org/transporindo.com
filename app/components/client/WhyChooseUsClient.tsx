"use client";

import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "motion/react";

type Reason = {
  icon: string;
  title: string;
  description: string;
};

type WhyChooseUsClientProps = {
  smallHeading?: string;
  title?: string;
  reasonsList?: Reason[];
  image?: string;
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

export default function WhyChooseUsClient({ data }: { data: WhyChooseUsClientProps }) {
  return (
    <div
      className="flex flex-col min-h-screen items-center pb-8 pt-16 bg-red-100 shadow-xl overflow-hidden"
      id="why-us"
    >
      {/* Header Section - Animated as a block */}
      <motion.div
        className="flex flex-col items-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <span className="font-bold opacity-70 underline text-center text-[14px]">
          {data?.smallHeading}
        </span>
        <span className="font-bold text-center text-[35px] mt-4 px-12">{data?.title}</span>
        <Separator className="!h-2 !w-32 bg-orange-800 my-4" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center mx-24">
        {/* Main Image - Slides in from the left */}
        {data?.image && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={urlFor(data.image).url()}
              alt="Why Choose Us Image"
              width={350}
              height={350}
              className="mt-16 rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}

        {/* Features Grid - Staggered Animation */}
        <motion.div
          className="mt-8 grid w-full lg max-w-5xl gap-10 sm:px-8 md:grid-cols-2 lg:ml-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data?.reasonsList?.map((reason: Reason, idx: number) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="flex flex-col lg:flex-row items-center lg:items-start justify-center"
            >
              {/* White and Orange Div */}
              <div className="relative w-16 h-16 mx-auto lg:mx-0 flex-shrink-0">
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-red-400 shadow-lg rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl flex justify-center items-center">
                  <Image src={urlFor(reason.icon).url()} alt="Icon" width={32} height={32} />
                </div>
              </div>

              <div className="flex-1 text-sm leading-7 md:text-lg flex flex-col items-center lg:items-start lg:pl-6">
                <span className="font-bold text-[16px] text-center lg:text-left mt-8 lg:mt-0">{reason.title}</span>

                <span className="text-center text-[16px] opacity-60 sm:px-8 lg:px-0 lg:text-left">
                  {reason.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
