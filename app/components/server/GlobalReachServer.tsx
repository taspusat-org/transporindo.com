import GlobalReach from "../client/GlobalReach";
import { client } from "@/sanity/lib/client";

type GlobalReachList = {
  value: number;
  label: String;
};

type GlobalReachData = {
  title: String;
  globalReach: GlobalReachList[];
};

async function fetchGlobalReach(locale: string) {
  const query = `*[_type == "globalReach" && language == $locale][0]{ 
    title, 
    globalReach[]{ 
      value, 
      label
    }
  }`;
  return await client.fetch(query, { locale });
}

export default async function GlobalReachServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: GlobalReachData = await fetchGlobalReach(locale);

  return <GlobalReach data={data} />;
}
