import { Button } from "@/components/ui/button";
import { Music, Instagram, ExternalLink } from "lucide-react";
import { useHalloween } from "@/hooks/useHalloween";

const Hero = () => {
  const { isHalloweenMode, toggleHalloweenMode } = useHalloween();

  return (
    <section className="relative flex flex-col justify-between bg-gradient-hero py-16">
      {/* Halloween Toggle Button */}
      <div className="absolute top-6 left-6 z-30">
        <Button
          onClick={toggleHalloweenMode}
          variant={isHalloweenMode ? "default" : "outline"}
          size="icon"
          className={`transition-all duration-500 ${
            isHalloweenMode 
              ? "bg-gradient-warm shadow-glow animate-eerie-glow" 
              : "hover:bg-accent"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.65 3.33 1.72 4.55C7.45 14.54 8 15.23 8 16c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.77.55-1.46 1.28-2.45C18.35 12.33 19 10.74 19 9c0-3.87-3.13-7-7-7zm-3 16.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5H9zm1-1.5v-.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V17h-4zm-1.5-2c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </Button>
      </div>

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

      <div className="container mx-auto px-6 text-center z-10 items-center">
        {/* Band Photo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/df46aa76-dfcb-435d-8d54-0b15b0deb4d2.png" 
            alt="Limestone Band - The Coolest Funniest Hottest Band in Lawrence, Kansas"
            className="mx-auto max-w-4xl w-full rounded-lg shadow-glow hover:shadow-soft transition-smooth"
          />
        </div>

        {/* Band Name - Large and Simple */}
        <div className="mb-4 animate-fade-in">
          <h1 className={`text-7xl md:text-9xl font-light tracking-wider mb-6 text-foreground transition-all duration-500 ${
            isHalloweenMode ? "animate-spooky-float animate-eerie-glow" : ""
          }`}>
            {isHalloweenMode ? "Limest👻ne" : "Limestone"}
          </h1>
        </div>

        {/* Simple Call to Action */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in mt-6">
          <Button 
            variant="default" 
            size="lg"
            asChild
            className="bg-gradient-warm hover:shadow-glow transition-smooth"
          >
            <a 
              href="#music"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
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