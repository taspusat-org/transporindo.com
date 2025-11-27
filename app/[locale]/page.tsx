import { Suspense } from "react";
import { generateMetadata } from "./metadata";
import Navbar from "../components/client/Navbar";
import HeroSliderServer from "../components/server/HeroSliderServer";
import Home from "../components/server/Home";
import WhyChooseUs from "../components/server/WhyChooseUs";
import ContactUs from "../components/server/ContactUs";
import Footer from "../components/client/Footer";
import WhatsAppButton from "../components/client/WhatsAppButton";
import ServicesServer from "../components/server/ServicesServer";
import CategoriesServer from "../components/server/CategoriesServer";
import GlobalReachServer from "../components/server/GlobalReachServer";
import TestimonialsServer from "../components/server/TestimonialsServer";
import TrustedByServer from "../components/server/TrustedByServer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export { generateMetadata };

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Suspense fallback={<div className="w-full h-screen bg-zinc-50" />}>
        <HeroSliderServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-80 bg-slate-50" />}>
        <Home params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 bg-red-100" />}>
        <WhyChooseUs params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-screen bg-slate-50" />}>
        <ServicesServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-screen bg-slate-50" />}>
        <CategoriesServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-screen bg-slate-50" />}>
        <GlobalReachServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 bg-slate-50" />}>
        <TestimonialsServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 bg-white" />}>
        <TrustedByServer params={params} />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 bg-pink-50" />}>
        <ContactUs params={params} />
      </Suspense>
      <Footer />
      <WhatsAppButton phoneNumber="6282123699386" />
    </div>
  );
}
