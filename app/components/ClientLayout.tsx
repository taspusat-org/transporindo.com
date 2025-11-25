"use client";

import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import WhyChooseUs from "../components/WhyChooseUs";
import { Inter } from "next/font/google";
import Services from "../components/Services";
import Categories from "../components/Categories";
import GlobalReach from "../components/GlobalReach";
import TestimonialPage from "../components/Testimonies";
import TrustedBy from "../components/TrustedBy";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <HeroSlider />
        <Home />
        <WhyChooseUs />
        <Services />
        <Categories />
        <GlobalReach />
        <TestimonialPage />
        <TrustedBy />
        <ContactUs />
        <Footer />
        <WhatsAppButton phoneNumber="6282123699386" />
      </div>
    </>
  );
}
