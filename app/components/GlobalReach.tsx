"use client";

import { client } from "@/sanity/lib/client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

type GlobalReachData = {
  title: String;
  globalReach: GlobalReachList[];
};

type GlobalReachList = {
  value: number;
  label: String;
};

// --- FIXED COUNTER COMPONENT ---
const Counter = ({ value }: { value: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, Number(value), {
        duration: 2.5,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = roundedValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toLocaleString("id-ID");
      }
    });

    return () => unsubscribe();
  }, [roundedValue]);
  return <span ref={nodeRef}>0</span>;
};
// -------------------------------

export default function GlobalReach() {
  const [globalReachData, setGlobalReachData] = useState<GlobalReachData | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "globalReach" && language == $locale][0]{ 
            title, 
            globalReach[]{ 
              value, 
              label, 
            } 
          }`;
        const data = await client.fetch(query, { locale });
        setGlobalReachData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <section id="achievements" className="w-full pt-12">
      {/* Top Orange Bar */}
      <div className="h-4 bg-orange-500"></div>

      <div className="bg-neutral-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            {globalReachData?.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {globalReachData?.globalReach.map((stat, idx) => (
              <div key={idx} className="text-center">
                {/* Counter Number */}
                <p className="text-[36px] font-bold text-orange-500">
                  <Counter value={stat.value} />
                </p>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                  className="mt-2 text-[16px] text-gray-300"
                >
                  {stat.label}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Orange Bar */}
      <div className="h-4 bg-orange-500"></div>
    </section>
  );
}
