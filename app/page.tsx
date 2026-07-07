import AboutMeSection from "@/components/aboutmeSection";
import ContactUs from "@/components/contactUs";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMeSection />
      <ContactUs />
    </>
  );
}
