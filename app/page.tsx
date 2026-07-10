import AboutMeSection from "@/components/aboutmeSection";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import SkillsSection from "@/components/skillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMeSection />
      <SkillsSection />
      <ContactUs />
      <Footer />
    </>
  );
}
