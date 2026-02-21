import TechStack from "@/components/TechStack";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AIHighlight from "@/components/AIHighlight";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lalshan Solutions Pvt Ltd",
  description: "We offer tailored tech solutions, including custom web and mobile app development, IT consulting, IoT systems, cloud services, and AI insights, to drive business success and innovation.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AIHighlight />
      <Features />
      <Video />
      <TechStack />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
