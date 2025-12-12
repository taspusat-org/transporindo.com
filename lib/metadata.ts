import { Metadata } from "next";

const DOMAIN = "https://transporindo.com";

export const localeMetadata: Record<string, { title: string; description: string; keywords: string }> = {
  id: {
    title: "Transporindo | Freight Forwarder Indonesia & EMKL Terpercaya",
    description:
      "Transporindo adalah EMKL Jakarta, Surabaya, Medan & Makassar terpercaya. Layanan freight forwarder, pengiriman container, ekspedisi, dan trucking dengan jangkauan nasional. Solusi logistik profesional untuk kebutuhan Anda.",
    keywords:
      "freight forwarder Indonesia, EMKL Jakarta, EMKL Surabaya, pengiriman container, ekspedisi Jakarta, ekspedisi Surabaya, trucking Jakarta, trucking Surabaya, EMKL Medan, EMKL Makassar, jasa pengiriman kargo, logistik Jakarta, logistik Surabaya",
  },
  en: {
    title: "Transporindo | Freight Forwarder Indonesia & EMKL Services",
    description:
      "Transporindo is a trusted freight forwarder in Jakarta, Surabaya, Medan & Makassar. Offering container shipping, expedition, trucking, and international logistics solutions with nationwide coverage.",
    keywords:
      "freight forwarder Indonesia, EMKL Jakarta, EMKL Surabaya, container shipping, expedition Jakarta, expedition Surabaya, trucking Jakarta, trucking Surabaya, EMKL Medan, EMKL Makassar, cargo shipping, logistics",
  },
};

export function generateLocaleMetadata(locale: string): Metadata {
  const meta = localeMetadata[locale] || localeMetadata.en;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      url: `${DOMAIN}/${locale}`,
      siteName: "Transporindo",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${DOMAIN}/${locale}`,
      languages: {
        "id-ID": `${DOMAIN}/id`,
        "en-US": `${DOMAIN}/en`,
      },
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: "Transporindo | Freight Forwarder Indonesia & EMKL Terpercaya",
  description: "Freight forwarder Indonesia terpercaya dengan layanan EMKL di Jakarta, Surabaya, Medan, Makassar. Pengiriman container, ekspedisi, dan trucking nasional.",
  keywords:
    "freight forwarder Indonesia, EMKL Jakarta, EMKL Surabaya, pengiriman container, ekspedisi Jakarta, ekspedisi Surabaya, trucking Jakarta, trucking Surabaya, EMKL Medan, EMKL Makassar",
  applicationName: "Transporindo",
  formatDetection: {
    email: false,
    telephone: false,
  },
};
