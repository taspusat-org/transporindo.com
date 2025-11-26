"use client";
import { useEffect, useState } from "react";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "motion/react";

type ContactSettings = {
  _id: string;
  _type: "contactsettings";
  title?: string;
  description?: string;
  emailIcon?: any;
  emailTitle?: string;
  email?: string;
  officeIcon?: any;
  officeTitle?: string;
  offices?: OfficeItem[];
};

type OfficeItem = {
  _key: string;
  city?: string;
  address?: string;
  phoneNum?: string;
  mapURL?: string;
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ContactSection() {
  const [contactUs, setContactUs] = useState<ContactSettings | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "contactsettings" && language == $locale][0] {
            _id,
            _type,
            title,
            description,
            emailTitle,
            email,
            emailIcon,
            officeTitle,
            officeIcon,
            offices[] {
              _key,
              city,
              address,
              phoneNum,
              mapURL
            }
          }`;
        const data = await client.fetch(query, { locale });
        setContactUs(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <section
      id="contact-us"
      className="py-8 bg-[#FFF0F0] text-slate-900 flex items-center justify-center min-h-[90vh] overflow-hidden"
    >
      <div className="w-full max-w-7xl px-4 lg:px-8">
        {/* Header Animation */}
        <motion.div
          className="text-center mb-8"
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
          <h2 className="text-3xl font-bold tracking-tight text-black">{contactUs?.title}</h2>
          {contactUs?.description && <p className="text-slate-600 mt-2">{contactUs?.description}</p>}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT COLUMN: Info */}
          <motion.div
            className="lg:col-span-12 flex flex-col justify-center items-center gap-6 w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer} // Trigger stagger for children
          >
            {/* 2. OFFICES SECTION */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              {/* Icon Column */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden mx-auto sm:mx-0">
                {contactUs?.officeIcon ? (
                  <img src={urlFor(contactUs.officeIcon).url()} alt="Office Icon" className="w-6 h-6 object-contain" />
                ) : (
                  <MapPin className="h-6 w-6 text-black" />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-lg font-bold text-black mb-3">{contactUs?.officeTitle || "Our Offices"}</h3>

                {contactUs?.offices && contactUs.offices.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 justify-items-center w-full"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {contactUs.offices.map((office, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.4, ease: "easeOut" },
                          },
                        }}
                        className="w-full max-w-xs bg-white/50 p-4 rounded border border-red-100/50 hover:bg-white transition-colors text-center"
                      >
                        <p className="font-bold text-sm text-black mb-1">{office.city}</p>
                        <p className="text-xs leading-tight mb-2 line-clamp-3 text-gray-600" title={office.address}>
                          {office.address}
                        </p>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-xs font-medium text-gray-800">{office.phoneNum}</span>
                        </div>
                        {office.mapURL && (
                          <a
                            href={office.mapURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[10px] text-[#6366f1] hover:underline font-bold uppercase tracking-wider mt-1"
                          >
                            Map <ExternalLink className="ml-0.5 h-2.5 w-2.5" />
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 border border-dashed border-gray-300 rounded-lg bg-white/30 text-center">
                    <MapPin className="w-8 h-8 text-gray-300 mb-2" />
                    <p className="text-sm text-gray-500 font-medium">No office locations found.</p>
                    <p className="text-xs text-gray-400">Please contact us via email for assistance.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
