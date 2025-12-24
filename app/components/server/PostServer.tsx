import { client } from "@/sanity/lib/client";
import PostClient from "../client/PostClient";
import { redirect } from "next/navigation";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  publishedAt: string;
  excerpt?: string;
  language: string;
  categories?: string[];
  body?: any[];
};

async function fetchBlogPosts(locale: string): Promise<BlogPost[]> {
  const query = `*[_type == "post" && language == $locale && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset->{ _id, url },
      alt
    },
    publishedAt,
    excerpt,
    language,
    categories
  }`;

  return await client.fetch(query, { locale });
}

export default async function PostServer({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale = "id" } = await params;
  const posts = await fetchBlogPosts(locale);

  if (!posts || posts.length === 0) {
    redirect("/not-found");
  }

  return <PostClient posts={posts || []} locale={locale} />;
}
