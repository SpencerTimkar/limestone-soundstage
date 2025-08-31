import { Button } from "@/components/ui/button";
import { Music, Instagram, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-6 z-20">
        <div className="flex gap-6 text-sm uppercase tracking-wider font-medium">
          <a href="#music" className="text-foreground/70 hover:text-foreground transition-smooth">
            Music
          </a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-smooth">
            About
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-smooth">
            Contact
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Band Photo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/df46aa76-dfcb-435d-8d54-0b15b0deb4d2.png" 
            alt="Limestone Band - The Coolest Funniest Hottest Band in Lawrence, Kansas"
            className="mx-auto max-w-4xl w-full rounded-lg shadow-soft"
          />
        </div>

        {/* Band Name - Large and Simple */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light tracking-wider mb-6 text-foreground">
            limestone
          </h1>
        </div>

        {/* Simple Call to Action */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-2 bg-accent/10 hover:bg-accent/20"
          >
            <a 
              href="https://open.spotify.com/artist/60Ms8qhGHWJAeZgbOA6Dyq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase tracking-wider"
            >
              Listen Now
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-2 bg-secondary/20 hover:bg-secondary/30"
          >
            <a 
              href="https://limestoneband.printify.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase tracking-wider"
            >
              Shop
            </a>
          </Button>
        </div>
      </div>

      {/* Simple Social Links - Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/limestone.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-smooth"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@limestone.music"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-smooth"
          >
            <Music className="w-5 h-5" />
          </a>
          <a 
            href="https://linktr.ee/limestonemusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-smooth"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;