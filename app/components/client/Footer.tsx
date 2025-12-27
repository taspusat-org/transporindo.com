"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const content = {
  en: {
    copyright: "Copyright @ 2025 PT. Transporindo Agung Sejahtera • All Rights Reserved",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    halalSerial: "Halal Certificate No:",
  },
  id: {
    copyright: "Copyright @ 2025 PT. Transporindo Agung Sejahtera • Hak Cipta Dilindungi",
    terms: "Syarat & Ketentuan",
    privacy: "Kebijakan Privasi",
    halalSerial: "No. Sertifikat Halal:",
  },
};

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/TransporindoAgungSejahtera1/",
  instagram: "https://www.instagram.com/transporindoagungsejahtera/",
};

const HALAL_SERIAL_NUMBER = "ID00410020872141024";

export default function Footer() {
  const pathname = usePathname();
  const isIndonesian = pathname?.startsWith("/id");
  const lang = isIndonesian ? "id" : "en";
  const t = content[lang];

  const termsLink = isIndonesian ? "/id/terms-and-conditions" : "/en/terms-and-conditions";
  const privacyLink = isIndonesian ? "/id/privacy-policy" : "/en/privacy-policy";

  return (
    <footer className="p-8 bg-neutral-800">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20">
        {/* Left Side: Socials & Copyright */}
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="mb-4 flex gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright and Legal Links */}
          <div className="text-white text-center">
            <p className="text-[12px] md:text-sm">{t.copyright}</p>
            <div className="flex items-center justify-center gap-2 mt-1 opacity-60">
              <Link href={termsLink} className="text-[12px] md:text-sm hover:text-gray-400 transition-colors">
                {t.terms}
              </Link>
              <span>|</span>
              <Link href={privacyLink} className="text-[12px] md:text-sm hover:text-gray-400 transition-colors">
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Halal Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-14 h-20 bg-white rounded-md p-1 flex items-center justify-center">
            <Image
              src="/halal-logo.png"
              alt="Halal Certification Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="text-[10px] md:text-xs text-neutral-400 text-center">
            <p className="opacity-80 leading-tight">{t.halalSerial}</p>
            <p className="font-mono tracking-tighter md:tracking-normal">{HALAL_SERIAL_NUMBER}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
