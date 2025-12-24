import { Suspense } from "react";
import PostDetailServer from "@/app/components/server/PostDetailServer";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/client/Navbar";
import Footer from "@/app/components/client/Footer";
import NavbarForError from "@/app/components/client/NavbarForError";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  return (
    <main className={`min-h-screen bg-white ${inter.className}`}>
      <NavbarForError />

      <div className="py-12"></div>
      <Suspense fallback={<div className="py-100 text-center">Loading article...</div>}>
        <PostDetailServer params={params} />
      </Suspense>

      <Footer />
    </main>
  );
}
