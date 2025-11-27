import { client } from "@/sanity/lib/client";
import HeroSlider from "../client/HeroSlider";

type Slide = {
  image?: any;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  order?: number;
};

async function fetchHeroSlides(locale: string): Promise<Slide[]> {
  const query = `*[_type == "hero" && language == $locale][0]{slides[]{image, heading, subheading, ctaText, ctaUrl, order}}`;
  const data = await client.fetch(query, { locale });
  return data?.slides || [];
}

export default async function HeroSliderServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const slides = await fetchHeroSlides(locale);

  return <HeroSlider slides={slides} />;
}
