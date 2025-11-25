"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TrustedByData = {
  title: string;
  companyList: CompanyList[];
};

type CompanyList = {
  logo: any;
  name: string;
};

export default function TrustedBy() {
  const [trustedByData, setTrustedByData] = useState<TrustedByData | null>(null);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "id";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "trustedby" && language == $locale][0]{
            title,
            companyList[]{
              logo,
              name
            },
          }`;
        const data = await client.fetch(query, { locale });
        setTrustedByData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">{trustedByData?.title}</h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-scroll gap-16 sm:gap-24 items-center">
            {/* SET 1: Original */}
            {trustedByData?.companyList?.map((company, index) => (
              <div
                key={`original-${index}`}
                className="flex items-center justify-center h-12 w-[150px] shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                {company.logo ? (
                  <img
                    src={urlFor(company.logo).url()}
                    alt={`${company.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-500">{company.name}</span>
                )}
              </div>
            ))}

            {/* SET 2: Duplicate (For infinite loop) */}
            {trustedByData?.companyList?.map((company, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center h-12 w-[150px] shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                {company.logo ? (
                  <img
                    src={urlFor(company.logo).url()}
                    alt={`${company.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-500">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
