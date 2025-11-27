import { MetadataRoute } from "next";

const DOMAIN = "https://transporindo.id";
const LOCALES = ["id", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: DOMAIN,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
  ];

  const localeRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => [
    {
      url: `${DOMAIN}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${DOMAIN}/${locale}/privacy-policy`,
      changeFrequency: "monthly",
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: `${DOMAIN}/${locale}/terms-and-conditions`,
      changeFrequency: "monthly",
      priority: 0.5,
      lastModified: new Date(),
    },
  ]);

  return [...baseRoutes, ...localeRoutes];
}
