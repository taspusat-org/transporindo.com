"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const content = {
  en: {
    copyright: "Copyright @ 2025 PT. Transporindo Agung Sejahtera • All Rights Reserved",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
  id: {
    copyright: "Copyright @ 2025 PT. Transporindo Agung Sejahtera • Hak Cipta Dilindungi",
    terms: "Syarat & Ketentuan",
    privacy: "Kebijakan Privasi",
  },
};

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/TransporindoAgungSejahtera1/",
  instagram: "https://www.instagram.com/transporindoagungsejahtera/",
};

export default function Footer() {
  const pathname = usePathname();
  const isIndonesian = pathname?.startsWith("/id");
  const lang = isIndonesian ? "id" : "en";
  const t = content[lang];

  const termsLink = isIndonesian ? "/id/terms-and-conditions" : "/en/terms-and-conditions";
  const privacyLink = isIndonesian ? "/id/privacy-policy" : "/en/privacy-policy";

  return (
    <>
      <div className="p-8 bg-neutral-800 text-center">
        <div className="mb-4 flex justify-center gap-4">
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
        <span className="text-white text-[12px] md:text-sm">{t.copyright} </span> |{" "}
        <Link href={termsLink}>
          <span className="text-[12px] md:text-sm opacity-60 text-white hover:text-gray-400">{t.terms}</span>
        </Link>{" "}
        |{" "}
        <Link href={privacyLink}>
          <span className="text-[12px] md:text-sm opacity-60 text-white hover:text-gray-400">{t.privacy}</span>
        </Link>
      </div>
    </>
  );
}
