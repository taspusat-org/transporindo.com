"use client";

import Link from "next/link";
import { BlogPost } from "../server/PostServer";
import { Clock, Home } from "lucide-react";

export default function PostClient({ posts, locale }: { posts: BlogPost[]; locale: string }) {
  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="mx-auto py-8 md:py-12">
      {/* --- FEATURED LATEST POST --- */}
      <div className="relative w-full h-auto md:h-[500px] mb-12 md:mb-20 overflow-hidden bg-gray-100 shadow-xl flex flex-col">
        {/* Featured Image */}
        <div className="w-full h-64 md:h-full md:absolute inset-0 brightness-75">
          {latestPost.mainImage?.asset?.url && (
            <img src={latestPost.mainImage.asset.url} alt={latestPost.title} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Floating Card Content */}
        <div className="relative md:absolute md:bottom-10 md:right-10 lg:right-20 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl md:max-w-lg mx-8 -mt-10 md:mt-0 mb-6 md:mb-0 text-center md:text-left">
          <p className="text-xs md:text-sm font-bold text-gray-400 uppercase mb-2">Blog Terbaru</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {latestPost.categories?.map((cat, index) => (
              <span
                key={index}
                className="bg-[#fcd9cc] text-[#9c3a19] text-[10px] px-3 py-1 rounded-lg font-bold uppercase"
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">{latestPost.title}</h2>

          {/* <div className="opacity-60">{latestPost.excerpt}</div> */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-500" />
              <span className="text-xs md:text-sm text-gray-500">
                {new Date(latestPost.publishedAt).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <Link
              href={`/${locale}/blog/${latestPost.slug}`}
              className="w-full md:w-auto bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg transition-all flex justify-center items-center"
            >
              READ MORE &gt;&gt;
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {otherPosts.map((post) => (
          <Link key={post._id} href={`/${locale}/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-row sm:flex-col h-full p-3 sm:p-0">
              {/* Card Image */}
              <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-full sm:h-48 md:h-56 flex-shrink-0 rounded-2xl sm:rounded-none overflow-hidden bg-gray-200">
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex flex-col justify-center sm:justify-start flex-grow overflow-hidden">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.categories?.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-[#fcd9cc] text-[#9c3a19] text-[8px] md:text-[9px] px-2 py-0.5 rounded-lg font-bold uppercase"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-[#f15a24] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center gap-2 text-[10px] text-gray-400">
                  <Clock size={16} className="text-gray-500" />
                  {new Date(post.publishedAt).toLocaleDateString(locale === "id" ? "id-ID" : "en-US")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
