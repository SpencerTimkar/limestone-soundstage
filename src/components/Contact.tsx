import { Button } from "@/components/ui/button";
import { Instagram, Music, ExternalLink, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 text-foreground">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to book the coolest, funniest, hottest band in Lawrence? We've played everything from tiny bar gigs to sorority formals. Whatever the occasion, we are the band for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Location */}
          <div className="text-center animate-fade-in">
            <div className="bg-background rounded-lg p-10 shadow-subtle">
              <div className="flex justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">Based in</h3>
              <p className="text-2xl font-light text-foreground mb-2">Lawrence, Kansas</p>
              <p className="text-muted-foreground">
                Available for shows, events, and good times
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center animate-fade-in space-y-4">
            <div className="bg-background rounded-lg p-10 shadow-subtle">
              <h3 className="text-xl font-medium mb-6 tracking-wide">Connect</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="w-full border-2 hover:bg-primary/5 hover:border-primary/30"
                >
                  <a 
                    href="https://www.instagram.com/limestone.music/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="w-full border-2 hover:bg-primary/5 hover:border-primary/30"
                >
                  <a 
                    href="https://www.tiktok.com/@limestone.music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Music className="w-4 h-4" />
                    TikTok
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="w-full border-2 hover:bg-primary/5 hover:border-primary/30"
                >
                  <a 
                    href="https://linktr.ee/limestonemusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4" />
                    All Links
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm tracking-wider">
            © 2025 Limestone Band LLC. The coolest, funniest, hottest band in Lawrence freaking Kansas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;