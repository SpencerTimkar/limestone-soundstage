import { Button } from "@/components/ui/button";
import { Instagram, Music, ExternalLink, MapPin, Mail, Link } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div className="text-center animate-fade-in">
            <div className="bg-background rounded-lg p-8 shadow-subtle">
              <div className="flex justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Based in</h3>
              <p className="text-xl font-light text-foreground mb-2">Lawrence, Kansas</p>
              <p className="text-muted-foreground text-sm">
                Available for shows, events, and good times
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="text-center animate-fade-in">
            <div className="bg-background rounded-lg p-8 shadow-subtle">
              <div className="flex justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Email</h3>
              <p className="text-lg text-foreground mb-2 break-words whitespace-normal">
                Official.limestone.band@gmail.com
              </p>
              <p className="text-muted-foreground text-sm">
                For bookings and inquiries
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center animate-fade-in space-y-4">
            <div className="bg-background rounded-lg p-8 shadow-subtle">
              <div className="flex justify-center mb-4">
                <Link className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-medium mb-4 tracking-wide">Connect</h3>
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