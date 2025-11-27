import TrustedBy from "../client/TrustedBy";
import { client } from "@/sanity/lib/client";

type CompanyList = {
  logo: any;
  name: string;
};

type TrustedByData = {
  title: string;
  companyList: CompanyList[];
};

async function fetchTrustedBy(locale: string) {
  const query = `*[_type == "trustedby" && language == $locale][0]{
    title,
    companyList[]{
      logo,
      name
    }
  }`;
  return await client.fetch(query, { locale });
}

export default async function TrustedByServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: TrustedByData = await fetchTrustedBy(locale);

  return <TrustedBy data={data} />;
}
