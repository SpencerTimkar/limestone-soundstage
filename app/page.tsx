import Navigation from "@/components/Navigation";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import TourSection from "@/components/TourSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MerchSection from "@/components/MerchSection";
import UpcomingSection from "@/components/UpcomingSection";


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Spacer before Upcoming section */}
      <div className="h-32 md:h-48 bg-black" />

      <UpcomingSection />

      {/* Unified Bottom Section with Star Background */}
      <div className="relative bg-black overflow-hidden pointer-events-auto">
        {/* Shared Background Element */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-lighten overflow-hidden">
          {/* Masked Container for Star & Noise */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-[95vw] min-w-[270vw] h-auto max-w-none opacity-40 mix-blend-screen animate-warble rotate-355"
            style={{
              maskImage: 'url(/images/high_res_star_png.png)',
              WebkitMaskImage: 'url(/images/high_res_star_png.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          >
            {/* Static Star Background */}
            <Image
              src="/images/high_res_star_png.png"
              alt=""
              width={3840}
              height={2160}
              className="w-full h-full object-contain"
              priority
            />
            {/* Noise Overlay */}
            <div className="absolute -inset-[50%] w-[200%] h-[200%] bg-noise-harsh opacity-90 animate-noise mix-blend-hard-light pointer-events-none"></div>
          </div>
        </div>

        {/* Sections */}
        <div className="relative z-10">
          <MusicSection />
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
