import { Metadata } from "next";

const DOMAIN = "https://transporindo.com";


export const localeMetadata: Record<string, { 
  title: string; 
  description: string; 
  keywords: string;
  blogTitle: string;
  blogDescription: string;
}> = {
  id: {
    title: "Transporindo | Freight Forwarder Indonesia & EMKL Terpercaya",
    description: "Transporindo adalah EMKL Jakarta, Surabaya, Medan & Makassar terpercaya. Layanan freight forwarder, pengiriman container, ekspedisi, dan trucking nasional.",
    keywords: "freight forwarder Indonesia, EMKL Jakarta, logistik Indonesia, pengiriman kargo, tips logistik",
    blogTitle: "Blog Logistik Transporindo | Wawasan & Berita Pengiriman",
    blogDescription: "Dapatkan tips pengiriman terbaru, panduan efisiensi rantai pasok, dan berita industri kargo dari para ahli di Transporindo.",
  },
  en: {
    title: "Transporindo | Freight Forwarder Indonesia & EMKL Services",
    description: "Transporindo is a trusted freight forwarder in Jakarta, Surabaya, Medan & Makassar. Offering container shipping and international logistics solutions.",
    keywords: "freight forwarder Indonesia, logistics services, cargo shipping, international freight, shipping tips",
    blogTitle: "Transporindo Logistics Blog | Shipping Insights & News",
    blogDescription: "Discover the latest shipping tips, supply chain efficiency guides, and cargo industry news from our experts at Transporindo.",
  },
};

export function generateBlogMetadata(locale: string): Metadata {
  const meta = localeMetadata[locale] || localeMetadata.en;
  const url = `${DOMAIN}/${locale}/blog`;

  return {
    title: meta.blogTitle,
    description: meta.blogDescription,
    alternates: {
      canonical: url,
      languages: {
        "id-ID": `${DOMAIN}/id/blog`,
        "en-US": `${DOMAIN}/en/blog`,
      },
    },
    openGraph: {
      title: meta.blogTitle,
      description: meta.blogDescription,
      url: url,
      type: "website",
      siteName: "Transporindo",
      locale: locale === "id" ? "id_ID" : "en_US",
    },
  };
}

export function generatePostMetadata(post: any, locale: string): Metadata {
  const title = `${post?.title} | Transporindo Blog`;
  const description = post?.excerpt || post?.title;
  const url = `${DOMAIN}/${locale}/blog/${post?.slug}`;
  const imageUrl = post?.mainImage?.asset?.url || "/default-og-image.jpg";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: "article",
      publishedTime: post?.publishedAt,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
}

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
  description: "Freight forwarder Indonesia terpercaya dengan layanan EMKL. Pengiriman container dan trucking nasional.",
  applicationName: "Transporindo",
  formatDetection: {
    email: false,
    telephone: false,
  },
};