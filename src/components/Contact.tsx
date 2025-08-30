import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Music, Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-shadow-glow">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to book the coolest, funniest, hottest band in Lawrence? Let's rock together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <Card className="p-8 bg-gradient-hero border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Based in Lawrence, Kansas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-secondary" />
                <span>Available for shows, events, and good times</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Music className="w-5 h-5 text-accent" />
                <span>Rock, indie, and whatever gets the crowd moving</span>
              </div>
            </div>
          </Card>

          {/* Social & Booking */}
          <Card className="p-8 bg-gradient-secondary border-2 border-secondary/20 text-secondary-foreground">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full border-secondary-foreground/20 hover:bg-secondary-foreground/10"
              >
                <a 
                  href="https://www.instagram.com/limestone.music/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full border-secondary-foreground/20 hover:bg-secondary-foreground/10"
              >
                <a 
                  href="https://www.tiktok.com/@limestone.music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full border-secondary-foreground/20 hover:bg-secondary-foreground/10"
              >
                <a 
                  href="https://linktr.ee/limestonemusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  All Our Links
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-stripe animate-stripe-slide text-center shadow-2xl">
            <h3 className="text-3xl font-black mb-4 text-background">
              Ready to Rock?
            </h3>
            <p className="text-lg text-background/90 font-semibold mb-6">
              Whether you need a band for your venue, event, or just want to jam, 
              we're the Kansas band that brings the energy every single time.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="bg-background/20 border-background/30 text-background hover:bg-background/30"
            >
              <a 
                href="https://linktr.ee/limestonemusic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Music className="w-5 h-5" />
                Contact Us Today
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;