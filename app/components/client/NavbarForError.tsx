"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";

export default function NavbarForError() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryString = searchParams?.toString();

  const normalizedPath = pathname || "/";
  const supportedLocales = ["en", "id"] as const;
  const localeSegment = normalizedPath.split("/")[1];
  const hasLocalePrefix = supportedLocales.includes(localeSegment as (typeof supportedLocales)[number]);
  const locale = (hasLocalePrefix ? localeSegment : "id") as "en" | "id";

  const restPathRaw = hasLocalePrefix ? normalizedPath.slice(localeSegment.length + 1) || "/" : normalizedPath;
  const restPath = restPathRaw.startsWith("/") ? restPathRaw : `/${restPathRaw}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      e.preventDefault();
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const formCopy = {
    en: {
      home: "Home",
      whyUs: "Why Us",
      services: "Services",
      categories: "Categories",
      achievements: "Achievements",
      testimonies: "Testimonies",
      contactUs: "Contact Us",
    },
    id: {
      home: "Beranda",
      whyUs: "Mengapa Kami",
      services: "Layanan",
      categories: "Kategori",
      achievements: "Pencapaian",
      testimonies: "Testimoni",
      contactUs: "Hubungi Kami",
    },
  } as const;

  const t = formCopy[locale === "en" ? "en" : "id"];

  const navLinks = useMemo(
    () => [
      { href: "/id#hero", label: t.home },
      { href: "/id#why-us", label: t.whyUs },
      { href: "/id#services", label: t.services },
      { href: "/id#categories", label: t.categories },
      { href: "/id#achievements", label: t.achievements },
      { href: "/id#testimony", label: t.testimonies },
      { href: "/id#contact-us", label: t.contactUs },
    ],
    [t]
  );

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;

      for (const link of navLinks) {
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);

        if (element) {
          const offset = 150;
          const elementTop = element.offsetTop - offset;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
          }
        }
      }
    };
    handleScrollSpy();

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navLinks]);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-sm filter drop-shadow-md z-50 text-black text-sm font-semibold">
      <div className="flex py-4 items-center justify-between px-6 lg:px-12">
        {/* Logo Section */}
        <div>
          <Image
            src="/Logo-Transporindo.png"
            alt="Logo Transporindo"
            width={300}
            height={200}
            className="w-40 lg:w-[300px] h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className={`transition-all duration-300 pb-1 border-b-2 ${
                  isActive
                    ? "text-orange-500 border-orange-500"
                    : "border-transparent hover:text-orange-500 hover:border-orange-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile/Tablet Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none" aria-label="Toggle menu">
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg h-screen">
          <div className="flex flex-col items-center pt-10 space-y-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                  className={`text-xl font-bold transition-colors ${
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
