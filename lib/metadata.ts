import { Metadata } from "next";

const DOMAIN = "https://transporindo.id";

export const localeMetadata: Record<string, { title: string; description: string }> = {
  id: {
    title: "Transporindo | Jasa Pengiriman Kargo & Freight Forwarder Terpercaya",
    description:
      "Transporindo menyediakan solusi logistik profesional, pengiriman kargo internasional, dan freight forwarding dengan jangkauan global. Layanan terpercaya untuk kebutuhan pengiriman Anda.",
  },
  en: {
    title: "Transporindo | Reliable Cargo & Freight Forwarding Services",
    description:
      "Transporindo offers professional logistics solutions, international cargo shipping, and freight forwarding services with global reach. Trusted shipping partner for your needs.",
  },
};

export function generateLocaleMetadata(locale: string): Metadata {
  const meta = localeMetadata[locale] || localeMetadata.en;

  return {
    title: meta.title,
    description: meta.description,
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
  title: "Transporindo | Cargo & Freight Forwarder",
  description: "Professional logistics and freight forwarding solutions",
  applicationName: "Transporindo",
  formatDetection: {
    email: false,
    telephone: false,
  },
};
