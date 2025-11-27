import { client } from "@/sanity/lib/client";
import WhyChooseUsClient from "../client/WhyChooseUsClient";

type WhyChooseUsData = {
  smallHeading: string;
  title: string;
  reasonsList: Reason[];
  image: string;
};

type Reason = {
  icon: string;
  title: string;
  description: string;
};

async function fetchWhyChooseUs(locale: string): Promise<WhyChooseUsData | null> {
  const query = `*[_type == "whychooseus" && language == $locale][0]{ 
    smallHeading, 
    title, 
    reasonsList[]{ 
      icon, 
      title, 
      description 
    }, 
    image 
  }`;
  return await client.fetch(query, { locale });
}

export default async function WhyChooseUs({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const whyChooseUsData = await fetchWhyChooseUs(locale);

  return <WhyChooseUsClient data={whyChooseUsData || {}} />;
}
