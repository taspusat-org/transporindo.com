"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
};

export default function WhatsAppButton({
  phoneNumber,
  message = "Halo Transporindo, saya mau dapatkan penawaran harga!",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Text (Slides out on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            className="mr-3 overflow-hidden whitespace-nowrap bg-white text-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 text-sm font-semibold hidden md:block"
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:bg-[#20b858] transition-colors relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse Effect Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>

        {/* WhatsApp Icon PNG */}
        <Image src="/white-whatsapp-icon.png" alt="WhatsApp Logo" height={200} width={200} />
      </motion.a>
    </motion.div>
  );
}
