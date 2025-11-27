import Categories from "../client/Categories";
import { client } from "@/sanity/lib/client";

type CategoryList = {
  icon: any;
  title: String;
  description: String;
};

type CategoryData = {
  title: String;
  heading: String;
  categoriesList: CategoryList[];
  image: String;
};

async function fetchCategories(locale: string) {
  const query = `*[_type == "categories" && language == $locale][0]{ 
    title, 
    heading, 
    categoriesList[]{ 
      icon, 
      title, 
      description 
    }, 
    image 
  }`;
  return await client.fetch(query, { locale });
}

export default async function CategoriesServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const data: CategoryData = await fetchCategories(locale);

  return <Categories data={data} />;
}
