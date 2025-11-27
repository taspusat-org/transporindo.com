import { client } from "@/sanity/lib/client";
import ContactUsClient from "../client/ContactUsClient";

type ContactSettings = {
  _id: string;
  _type: "contactsettings";
  title?: string;
  description?: string;
  officeIcon?: any;
  officeTitle?: string;
  offices?: OfficeItem[];
};

type OfficeItem = {
  _key: string;
  city?: string;
  address?: string;
  phoneNum?: string;
  mapURL?: string;
};

async function fetchContactSettings(locale: string): Promise<ContactSettings | null> {
  const query = `*[_type == "contactsettings" && language == $locale][0] {
    _id,
    _type,
    title,
    description,
    officeTitle,
    officeIcon,
    offices[] {
      _key,
      city,
      address,
      phoneNum,
      mapURL
    }
  }`;
  return await client.fetch(query, { locale });
}

export default async function ContactSection({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const contactUs = await fetchContactSettings(locale);

  return <ContactUsClient data={contactUs || {}} />;
}
