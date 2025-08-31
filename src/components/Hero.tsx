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
        {/* Band Photos */}
        <div className="mb-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/b1d6bb1a-9469-4769-8d08-964e271695e2.png" 
              alt="Limestone Band - Fun and energetic band from Lawrence, Kansas"
              className="w-full rounded-lg shadow-glow hover:shadow-soft transition-smooth"
            />
            <img 
              src="/lovable-uploads/abf9aec8-d4b1-4606-827f-1375086025f2.png" 
              alt="Limestone Band live performance"
              className="w-full rounded-lg shadow-soft hover:shadow-glow transition-smooth"
            />
          </div>
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
            variant="default" 
            size="lg"
            asChild
            className="bg-gradient-warm hover:shadow-glow transition-smooth"
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
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
            className="text-foreground/60 hover:text-accent transition-smooth"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@limestone.music"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-smooth"
          >
            <Music className="w-5 h-5" />
          </a>
          <a 
            href="https://linktr.ee/limestonemusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-secondary transition-smooth"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;