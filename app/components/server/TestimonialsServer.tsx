import Testimonies from "../client/Testimonies";
import { client } from "@/sanity/lib/client";

type TestimonyList = {
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
  content: string;
};

type TestimonyData = {
  smallHeading: string;
  bigHeading: string;
  description: string;
  testimonylist: TestimonyList[];
};

async function fetchTestimonials(locale: string) {
  const query = `*[_type == "testimonials" && language == $locale][0] { 
    smallHeading, 
    bigHeading, 
    description, 
    testimonylist[] { 
      name, 
      logo, 
      role, 
      company, 
      rating, 
      content 
    }
  }`;
  return await client.fetch(query, { locale });
}

export default async function TestimonialsServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: TestimonyData = await fetchTestimonials(locale);

  return <Testimonies data={data} />;
}
