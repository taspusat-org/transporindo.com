"use client";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
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

const inria = { className: "font-sans" };

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
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactUs, setContactUs] = useState<ContactSettings | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  const formCopy = {
    en: {
      heading: "Send us a message:",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "How can we help?",
      buttonText: "SEND MESSAGE",
      buttonTextSending: "SENDING...",
    },
    id: {
      heading: "Kirim pesan kepada kami:",
      namePlaceholder: "Nama",
      emailPlaceholder: "Email",
      messagePlaceholder: "Bagaimana kami dapat membantu?",
      buttonText: "KIRIM PESAN",
      buttonTextSending: "SEDANG KIRIM...",
    },
  } as const;

  const { heading, namePlaceholder, emailPlaceholder, messagePlaceholder, buttonText, buttonTextSending } =
    formCopy[locale === "en" ? "en" : "id"];

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !userID) {
      toast.error("Configuration error. Please contact support.");
      return;
    }

    const emailParams = {
      name: userInput.name,
      email: userInput.email,
      message: userInput.message,
    };

    setIsSubmitting(true);

    toast
      .promise(emailjs.send(serviceID, templateID, emailParams, userID), {
        pending: "Sending your message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again later.",
      })
      .then(() => {
        setUserInput({ name: "", email: "", message: "" });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            className="lg:col-span-7 flex flex-col justify-center items-center gap-6 w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer} // Trigger stagger for children
          >
            {/* 1. EMAIL SECTION */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full text-center sm:text-left"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden mx-auto sm:mx-0">
                {contactUs?.emailIcon ? (
                  <img src={urlFor(contactUs?.emailIcon).url()} alt="Email Icon" className="w-6 h-6 object-contain" />
                ) : (
                  <Mail className="h-6 w-6 text-black" />
                )}
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-lg font-bold text-black mb-1">{contactUs?.emailTitle || "E-mail"}</h3>
                {contactUs?.email ? (
                  <a href={`mailto:${contactUs?.email}`} className="text-[#6366f1] hover:underline font-medium text-sm">
                    {contactUs?.email}
                  </a>
                ) : (
                  <span className="text-sm text-red-500 italic">No email address set in CMS</span>
                )}
              </div>
            </motion.div>

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

          {/* RIGHT COLUMN: Form Animation */}
          <motion.div
            className="lg:col-span-5 w-full px-8 lg:px-0 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }} // Slight delay so it comes after left column starts
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm w-full max-w-lg mx-auto lg:mx-0 h-full flex flex-col">
              <p className="text-gray-600 mb-4 font-medium">{heading}</p>

              <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs font-bold text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={namePlaceholder}
                      className="bg-white h-9 text-sm"
                      value={userInput.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs font-bold text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={emailPlaceholder}
                      className="bg-white h-9 text-sm"
                      value={userInput.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-1 space-y-1">
                  <Label htmlFor="message" className="text-xs font-bold text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={messagePlaceholder}
                    className="bg-white flex-1 h-full text-sm resize-none"
                    value={userInput.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full h-10 bg-red-400 hover:bg-red-500 text-white font-bold cursor-pointer ${inria.className}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? buttonTextSending : buttonText}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
    </section>
  );
}
