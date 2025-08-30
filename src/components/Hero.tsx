import { Button } from "@/components/ui/button";
import { Music, Instagram, Youtube, Disc3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-stripe rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* Band Photo */}
        <div className="mb-8 animate-float">
          <img 
            src="/lovable-uploads/df46aa76-dfcb-435d-8d54-0b15b0deb4d2.png" 
            alt="Limestone Band - The Coolest Funniest Hottest Band in Lawrence, Kansas"
            className="mx-auto max-w-2xl w-full rounded-lg shadow-2xl border-4 border-primary/30"
          />
        </div>

        {/* Band Name */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-shadow-glow bg-gradient-primary bg-clip-text text-transparent">
            LIMESTONE
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">
            THE COOLEST FUNNIEST HOTTEST BAND
          </div>
          <div className="text-xl md:text-2xl font-bold text-accent">
            IN LAWRENCE FREAKING KANSAS
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <a 
              href="https://open.spotify.com/artist/60Ms8qhGHWJAeZgbOA6Dyq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              Listen on Spotify
            </a>
          </Button>
          
          <Button 
            variant="rock" 
            size="lg"
            asChild
          >
            <a 
              href="https://music.apple.com/us/artist/limestone/1820102301"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Disc3 className="w-5 h-5" />
              Apple Music
            </a>
          </Button>

          <Button 
            variant="stripe" 
            size="lg"
            asChild
          >
            <a 
              href="https://limestoneband.printify.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Merch Store
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a 
            href="https://www.instagram.com/limestone.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-glow transition-smooth p-2 hover:scale-110"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://www.tiktok.com/@limestone.music"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-secondary-glow transition-smooth p-2 hover:scale-110"
          >
            <Music className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;