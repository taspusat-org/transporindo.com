import { Suspense } from "react";
import PostServer from "@/app/components/server/PostServer";
import Navbar from "@/app/components/client/Navbar";
import Footer from "@/app/components/client/Footer";
import WhatsAppButton from "@/app/components/client/WhatsAppButton";
import { Inter } from "next/font/google";
import NavbarForError from "@/app/components/client/NavbarForError";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <div className={inter.className}>
      <NavbarForError />

      <div className="py-5"></div>
      <Suspense fallback={<div className="p-80 text-center">Loading posts...</div>}>
        <PostServer params={params} />
      </Suspense>

      <Footer />
      <WhatsAppButton phoneNumber="6282123699386" />
    </div>
  );
}
