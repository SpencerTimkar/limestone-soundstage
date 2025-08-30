import Hero from "@/components/Hero";
import About from "@/components/About";
import MusicSection from "@/components/Music";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MusicSection />
      <Contact />
    </div>
  );
};

export default Index;
