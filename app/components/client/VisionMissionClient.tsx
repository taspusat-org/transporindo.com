"use client";

import { Eye, Mountain } from "lucide-react";
import { motion } from "motion/react";
import { PortableText, PortableTextComponents } from "next-sanity";
import { PortableTextBlock } from "sanity";

type VisionMissionProps = {
  visionTitle?: string;
  vision?: PortableTextBlock[];
  missionTitle?: string;
  mission?: PortableTextBlock[];
};

const textComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-600 leading-relaxed mb-4 text-base">{children}</p>,
    h2: ({ children }) => <h2 className="text-xl font-bold text-slate-800 mb-3">{children}</h2>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 text-gray-600 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5 text-gray-600 mb-4 space-y-2">{children}</ol>,
  },
};

export default function VisionMissionClient({ data }: { data: VisionMissionProps }) {
  if (!data?.vision && !data?.mission) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-16 lg:mx-0">
          {/* Vision */}
          {data.vision && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye size={24} color="blue" />
                <h2 className="text-2xl font-bold text-slate-900 ml-3">{data.visionTitle}</h2>
              </div>

              <div className="flex-grow">
                <PortableText value={data.vision} components={textComponents} />
              </div>
            </motion.div>
          )}

          {/* Mission */}
          {data.mission && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mountain size={24} color="green" />
                <h2 className="text-2xl font-bold text-slate-900 ml-3">{data.missionTitle}</h2>
              </div>

              <div className="flex-grow">
                <PortableText value={data.mission} components={textComponents} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
