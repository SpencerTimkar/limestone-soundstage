import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, ExternalLink, Play, Headphones } from "lucide-react";

const MusicSection = () => {
  const platforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/60Ms8qhGHWJAeZgbOA6Dyq",
      icon: Music,
      description: "Stream our latest tracks",
      color: "primary"
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/limestone/1820102301",
      icon: Headphones,
      description: "High-quality streaming",
      color: "secondary"
    },
    {
      name: "All Links",
      url: "https://linktr.ee/limestonemusic",
      icon: ExternalLink,
      description: "Find us everywhere",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-shadow-glow">
            Our Music
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rock, energy, and pure Kansas spirit. Available on all your favorite platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card 
                key={platform.name}
                className="p-8 text-center hover:scale-105 transition-bounce bg-card/80 border-2 border-primary/20 hover:border-primary/40"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-full bg-${platform.color}/20`}>
                    <Icon className={`w-12 h-12 text-${platform.color} animate-pulse-glow`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {platform.description}
                </p>
                <Button 
                  variant="hero" 
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a 
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Listen Now
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Featured Track Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-primary text-primary-foreground shadow-2xl">
            <h3 className="text-3xl font-black mb-4">Latest Release</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out our newest tracks and see why we're Kansas's hottest band!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary" 
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
                  Stream on Spotify
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
                  Get Merch
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;