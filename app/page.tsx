import Navigation from "@/components/Navigation";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import TourSection from "@/components/TourSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MerchSection from "@/components/MerchSection";

import StarBackground from "@/components/StarBackground";


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Spacer before Upcoming section */}
      <div className="h-32 md:h-48 bg-black" />

      <MusicSection />

      {/* Unified Bottom Section with Star Background */}
      <div className="relative bg-black overflow-hidden pointer-events-auto ">
        {/* Shared Background Element */}
        <StarBackground />

        {/* Sections */}
        <div className="relative z-10">
          <TourSection />
          <MerchSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
