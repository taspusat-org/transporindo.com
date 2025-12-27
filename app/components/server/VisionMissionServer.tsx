import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import VisionMissionClient from "../client/VisionMissionClient";

type VisionMissionData = {
  visionTitle?: string;
  vision?: any;
  missionTitle?: string;
  mission?: any;
};

async function FetchVisionMission(locale: string) {
  const query = `*[_type == "home" && language == $locale][0] {
      visionTitle,
      vision,
      missionTitle,
      mission
    }`;
  return await client.fetch(query, { locale });
}

export default async function VisionMissionServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: VisionMissionData = await FetchVisionMission(locale);

  return <VisionMissionClient data={data} />;
}
