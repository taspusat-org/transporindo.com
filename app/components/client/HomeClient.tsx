"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "motion/react";

type HomeClientProps = {
  title?: string;
  description?: string;
  image1?: string;
  image2?: string;
};

export default function HomeClient({ data }: { data: HomeClientProps }) {
  return (
    <section className="bg-slate-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full py-24 lg:py-12">
        {/* --- LEFT SIDE (Images) --- */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center relative h-[300px] md:h-[400px]"
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
          <div className="relative w-[350px] h-[220px] md:w-[400px] md:h-[260px]">
            {data?.image1 && (
              <Image
                width={350}
                height={250}
                src={urlFor(data.image1).url()}
                alt="Main image"
                className="absolute top-0 left-0 rounded-xl filter drop-shadow-lg z-10"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              />
            )}

            {data?.image2 && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-16 top-12 z-20"
              >
                <Image
                  width={350}
                  height={250}
                  src={urlFor(data.image2).url()}
                  alt="Secondary image"
                  className="rounded-xl filter drop-shadow-lg"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 px-6 lg:px-20 mt-12 lg:mt-0 text-[20px] md:text-lg leading-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <span className="font-semibold text-center lg:text-left text-[23px]">{data?.title}</span>
            <br />
            <span className="text-center lg:text-left">{data?.description}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
