import { Card } from "@/components/ui/card";
import { Music, Heart, Star, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-shadow-glow">
            About The Band
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Lawrence, Kansas comes the most electrifying, fun-loving, and genuinely awesome band 
            you've never heard of... until now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:scale-105 transition-bounce bg-card/80 border-primary/20">
            <div className="mb-4 flex justify-center">
              <Music className="w-12 h-12 text-primary animate-pulse-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rock Solid</h3>
            <p className="text-muted-foreground">
              Our sound hits harder than Kansas weather
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-bounce bg-card/80 border-secondary/20">
            <div className="mb-4 flex justify-center">
              <Heart className="w-12 h-12 text-secondary animate-pulse-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Kansas Born</h3>
            <p className="text-muted-foreground">
              Proudly representing the heart of America
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-bounce bg-card/80 border-accent/20">
            <div className="mb-4 flex justify-center">
              <Star className="w-12 h-12 text-accent animate-pulse-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Star Quality</h3>
            <p className="text-muted-foreground">
              The coolest, funniest, hottest band around
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-bounce bg-card/80 border-primary/20">
            <div className="mb-4 flex justify-center">
              <Zap className="w-12 h-12 text-primary animate-pulse-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">High Energy</h3>
            <p className="text-muted-foreground">
              Every show is an unforgettable experience
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-stripe bg-gradient-to-r p-8 rounded-lg animate-stripe-slide text-center shadow-2xl">
            <h3 className="text-3xl font-black mb-4 text-background">
              What Makes Us Special?
            </h3>
            <p className="text-lg text-background/90 font-semibold">
              We're not just another band from Kansas. We're the band from Kansas. 
              With infectious energy, killer tunes, and enough personality to power 
              the entire Midwest, Limestone brings the party wherever we go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;