"use client";

import { PortableText } from "@portabletext/react";
import { BlogPost } from "../server/PostServer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function PostDetailClient({
  post,
  locale,
  recentPosts,
}: {
  post: BlogPost;
  locale: string;
  recentPosts: BlogPost[];
}) {
  return (
    <div className="bg-white">
      <article className="max-w-4xl mx-auto px-16 py-12 md:py-20">
        {/* --- ARTICLE HEADER --- */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {post.categories?.map((cat, index) => (
              <span
                key={index}
                className="bg-[#fcd9cc] text-[#9c3a19] text-xs px-4 py-1.5 rounded-full font-bold uppercase"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-500 font-medium text-sm">
            <Image src="/transporindo_logo_only.png" alt="Transporindo Logo" width={30} height={30} />
            <span>Transporindo Admin</span>
            <span className="mx-2">•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* --- HERO IMAGE --- */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
            <img src={post.mainImage.asset.url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* --- ARTICLE CONTENT --- */}
        <div className="prose prose-lg prose-orange max-w-none prose-headings:font-extrabold prose-p:text-gray-700 prose-p:leading-relaxed border-b pb-20">
          <PortableText value={post.body as any} />
        </div>
      </article>

      {/* --- RECENT BLOGS SECTION --- */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
            {locale === "id" ? "Blog Terbaru Lainnya" : "Other Recent Blogs"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recentPosts.map((recent) => (
              <Link key={recent._id} href={`/${locale}/blog/${recent.slug}`} className="group">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-row sm:flex-col h-full p-3 sm:p-0">
                  <div className="w-28 h-28 sm:w-full sm:h-48 flex-shrink-0 rounded-2xl sm:rounded-none overflow-hidden bg-gray-200">
                    {recent.mainImage?.asset?.url && (
                      <img
                        src={recent.mainImage.asset.url}
                        alt={recent.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-center sm:justify-start flex-grow">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 group-hover:text-[#f15a24] transition-colors">
                      {recent.title}
                    </h3>
                    <p className="mt-4 text-[10px] text-gray-400">
                      {new Date(recent.publishedAt).toLocaleDateString(locale === "id" ? "id-ID" : "en-US")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* --- BACK TO BLOG BUTTON --- */}
          <div className="flex justify-center">
            <Link
              href={`/${locale}/blog`}
              className="bg-[#f15a24] hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-extrabold shadow-lg shadow-orange-100 transition-all flex items-center gap-2"
            >
              <ArrowLeft /> {locale === "id" ? "KEMBALI KE BLOG" : "BACK TO BLOG"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
