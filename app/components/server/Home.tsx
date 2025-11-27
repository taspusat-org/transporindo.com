import { client } from "@/sanity/lib/client";
import HomeClient from "../client/HomeClient";

type HomeData = {
  title?: string;
  description?: string;
  image1?: string;
  image2?: string;
};

async function fetchHomeData(locale: string): Promise<HomeData | null> {
  const query = `*[_type == "home" && language == $locale][0] { 
    title, 
    description, 
    "image1": image1, 
    "image2": image2 
  }`;
  return await client.fetch(query, { locale });
}

export default async function Home({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const homeData = await fetchHomeData(locale);

  return <HomeClient data={homeData || {}} />;
}
