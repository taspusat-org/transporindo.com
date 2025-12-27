"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "motion/react";

type CategoryList = {
  icon: any;
  title: String;
  description: String;
};

type CategoriesProps = {
  title: String;
  heading: String;
  categoriesList: CategoryList[];
  image: String;
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Categories({ data }: { data: CategoriesProps }) {
  const categoryData = data;

  return (
    <>
      <div
        id="categories"
        className="flex flex-col min-h-screen items-center px-16 md:px-8 lg:px-0 py-12 bg-slate-50 overflow-hidden"
      >
        {/* Header Section - Animated */}
        <motion.div
          className="text-center px-6 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <span className="block font-bold text-[35px]">{categoryData?.title}</span>
          <span className="block font text-[20px] opacity-60 mt-2">{categoryData?.heading}</span>
        </motion.div>

        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-16 px-6 mt-12">
          {/* Image Section - Left on Desktop - Slide In Animation */}
          {categoryData?.image && (
            <motion.div
              className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <Image
                src={urlFor(categoryData.image).width(400).height(400).url()}
                alt="Categories"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          )}

          {/* Grid Section - Right on Desktop - Staggered Animation */}
          <motion.div
            className="w-full lg:w-2/3 grid md:grid-cols-2 gap-x-8 gap-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {categoryData?.categoriesList?.map((cat, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col lg:flex-row items-center lg:items-start"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {/* Icon Container */}
                <div className="relative w-16 h-16 mx-auto lg:mx-0 flex-shrink-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-red-100 rounded-2xl flex justify-center items-center">
                    <Image src={urlFor(cat.icon).url()} alt="Logo" width={32} height={32} />
                  </div>
                </div>

                {/* Text Container */}
                <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-5 mt-4 lg:mt-0 text-sm leading-7 md:text-lg">
                  <span className="font-bold text-[16px] text-center lg:text-left mb-2 lg:mb-1">{cat.title}</span>
                  <span className="text-center lg:text-left text-[16px] opacity-60 px-4 lg:px-0">
                    {cat.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
