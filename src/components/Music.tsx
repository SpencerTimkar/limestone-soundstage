import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const MusicSection = () => {
  return (
    <section id="music" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 text-foreground">
            Music
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            You can find our music on all major streaming platforms worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Spotify */}
          <div className="text-center animate-fade-in group">
            <div className="bg-card rounded-lg p-12 shadow-subtle hover:shadow-soft transition-smooth">
              <h3 className="text-2xl font-light mb-6 tracking-wide">Spotify</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Stream our latest tracks and discover why we're Kansas's hottest band.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full border-2 group-hover:bg-primary/5 group-hover:border-primary/30"
              >
                <a 
                  href="https://open.spotify.com/artist/60Ms8qhGHWJAeZgbOA6Dyq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  Listen on Spotify
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Apple Music */}
          <div className="text-center animate-fade-in group">
            <div className="bg-card rounded-lg p-12 shadow-subtle hover:shadow-soft transition-smooth">
              <h3 className="text-2xl font-light mb-6 tracking-wide">Apple Music</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                High-quality streaming for the ultimate Limestone experience.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full border-2 group-hover:bg-primary/5 group-hover:border-primary/30"
              >
                <a 
                  href="https://music.apple.com/us/artist/limestone/1820102301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  Listen on Apple Music
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Merch Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-accent/10 rounded-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-8 tracking-wide">Merch</h3>
            
            {/* Merch Photo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/4838483c-a99d-4acd-867f-89a1242c3cd5.png"
                alt="Limestone band members wearing band merchandise - t-shirts with band logo and designs"
                className="w-full max-w-md mx-auto rounded-lg shadow-subtle"
              />
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Rep the coolest band in Kansas with our exclusive merchandise.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
              className="shadow-subtle"
            >
              <a 
                href="https://limestoneband.printify.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 uppercase tracking-wider"
              >
                Shop Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;