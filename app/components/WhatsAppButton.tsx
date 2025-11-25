"use client";

import { motion, AnimatePresence } from "motion/react";
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

        {/* WhatsApp Icon SVG */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.11 14.382 16.014 13.899 15.807 13.799C15.6 13.699 15.449 13.649 15.298 13.899C15.147 14.149 14.717 14.649 14.566 14.799C14.415 14.949 14.264 14.949 14.057 14.849C12.981 14.316 11.635 13.279 10.707 12.146C10.457 11.839 10.957 11.829 11.237 11.269C11.287 11.169 11.262 11.069 11.187 10.919C11.112 10.769 10.509 9.279 10.258 8.679C10.008 8.089 9.768 8.169 9.608 8.169C9.458 8.169 9.283 8.159 9.108 8.159C8.933 8.159 8.632 8.229 8.382 8.499C8.132 8.769 7.42099 9.439 7.42099 10.799C7.42099 12.159 8.411 13.469 8.551 13.669C8.691 13.869 10.479 16.83 13.337 17.925C15.292 18.673 15.698 18.528 16.128 18.455C16.85 18.333 17.989 17.653 18.239 16.923C18.489 16.193 18.489 15.573 18.414 15.443C18.339 15.313 18.139 15.253 17.939 15.153H17.472ZM12.003 21.996C6.485 21.996 2.003 17.514 2.003 11.996C2.003 6.478 6.485 1.996 12.003 1.996C17.521 1.996 22.003 6.478 22.003 11.996C22.003 17.514 17.521 21.996 12.003 21.996ZM12.003 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12.003 0Z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
