"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
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

  const toggleLocaleHref = useMemo(() => {
    const targetLocale = locale === "en" ? "id" : "en";
    const suffix = restPath === "/" ? "" : restPath;
    const targetPath = `/${targetLocale}${suffix}`;
    return queryString ? `${targetPath}?${queryString}` : targetPath;
  }, [locale, queryString, restPath]);

  const handleLanguageToggle = () => {
    router.push(toggleLocaleHref);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, isExternalPage?: boolean) => {
    if (isExternalPage) return;

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
      blog: "News",
    },
    id: {
      home: "Beranda",
      whyUs: "Mengapa Kami",
      services: "Layanan",
      categories: "Kategori",
      achievements: "Pencapaian",
      testimonies: "Testimoni",
      contactUs: "Hubungi Kami",
      blog: "News",
    },
  } as const;

  const t = formCopy[locale === "en" ? "en" : "id"];

  const navLinks = useMemo(
    () => [
      { href: "#hero", label: t.home },
      { href: "#why-us", label: t.whyUs },
      { href: "#services", label: t.services },
      { href: "#categories", label: t.categories },
      { href: "#achievements", label: t.achievements },
      { href: "#testimony", label: t.testimonies },
      { href: "#contact-us", label: t.contactUs },
      { href: `/${locale}/blog`, label: t.blog, isExternalPage: true },
    ],
    [t, locale]
  );

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;
      navLinks.forEach((link) => {
        if (link.isExternalPage) return;
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
      });
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navLinks]);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-sm filter drop-shadow-md z-50 text-black text-sm font-semibold">
      <div className="flex py-4 items-center justify-between px-6 lg:px-12">
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
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            if (link.isExternalPage) {
              return (
                <div key={link.href} className="flex items-center gap-6">
                  {/* Vertical Divider */}
                  <div className="h-6 w-px bg-gray-300 mx-2" />
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all shadow-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.isExternalPage)}
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

          <div className="flex items-center gap-2 ml-4">
            <span className={`text-xs ${locale === "en" ? "font-bold text-orange-500" : "text-gray-400"}`}>EN</span>
            <Switch
              checked={locale === "id"}
              onCheckedChange={handleLanguageToggle}
              className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-gray-300"
            />
            <span className={`text-xs ${locale === "id" ? "font-bold text-orange-500" : "text-gray-400"}`}>ID</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg h-screen">
          <div className="flex flex-col items-center pt-10 space-y-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.isExternalPage)}
                  className={`text-xl font-bold transition-colors ${
                    link.isExternalPage
                      ? "bg-orange-100 text-orange-600 px-10 py-3 rounded-full mt-4"
                      : isActive
                        ? "text-orange-500"
                        : "hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-3 mt-8 scale-125">
              <span className={`text-sm ${locale === "en" ? "font-bold text-orange-500" : "text-gray-400"}`}>EN</span>
              <Switch
                checked={locale === "id"}
                onCheckedChange={() => {
                  handleLanguageToggle();
                  setIsOpen(false);
                }}
              />
              <span className={`text-sm ${locale === "id" ? "font-bold text-orange-500" : "text-gray-400"}`}>ID</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
