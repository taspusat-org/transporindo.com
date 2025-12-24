// @/app/components/server/PostDetailServer.tsx
import { client } from "@/sanity/lib/client";
import PostDetailClient from "../client/PostDetailClient";
import { BlogPost } from "./PostServer";
import { redirect } from "next/navigation";

// main post
async function fetchPostDetail(slug: string, locale: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && language == $locale][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage { asset->{ _id, url }, alt },
    publishedAt,
    body,
    categories,
    language
  }`;
  return await client.fetch(query, { slug, locale });
}

// 3 most recent posts (excluding current one)
async function fetchRecentPosts(locale: string, currentId: string): Promise<BlogPost[]> {
  const query = `*[_type == "post" && language == $locale && _id != $currentId && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage { asset->{ _id, url }, alt },
    publishedAt,
    categories
  }`;
  return await client.fetch(query, { locale, currentId });
}

export default async function PostDetailServer({ params }: { params: Promise<{ locale?: string; slug?: string }> }) {
  const { locale = "id", slug = "" } = await params;
  const post = await fetchPostDetail(slug, locale);

  if (!post) redirect("/not-found");

  // Get recent posts
  const recentPosts = await fetchRecentPosts(locale, post._id);

  return <PostDetailClient post={post} locale={locale} recentPosts={recentPosts} />;
}
