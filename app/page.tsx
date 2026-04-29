import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const TourSection = dynamic(() => import("@/components/TourSection"));
const MerchSection = dynamic(() => import("@/components/MerchSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const StarBackground = dynamic(() => import("@/components/StarBackground"));


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
