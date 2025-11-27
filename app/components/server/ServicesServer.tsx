import Services from "../client/Services";
import { client } from "@/sanity/lib/client";

type CardItem = {
  image: String;
  cardTitle: String;
  cardDescription: any;
  cardExtendedDescription: any;
};

type ServicesData = {
  title: string;
  servicesList: CardItem[];
};

async function fetchServices(locale: string) {
  const query = `*[_type == "services" && language == $locale][0]{ 
    title, 
    servicesList[]{ 
      image, 
      cardTitle, 
      cardDescription, 
      cardExtendedDescription 
    }
  }`;
  return await client.fetch(query, { locale });
}

export default async function ServicesServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: ServicesData = await fetchServices(locale);

  return <Services data={{ title: data.title, services: data.servicesList || [] }} />;
}
