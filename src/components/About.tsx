const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 text-foreground">
            About
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              From Lawrence, Kansas comes the most electrifying, fun-loving, and genuinely awesome band 
              you've never heard of... until now.
            </p>
            <p>
              We're not just another band from Kansas. We're the band from Kansas. 
              With infectious energy, killer tunes, and enough personality to power 
              the entire Midwest, Limestone brings the party wherever we go.
            </p>
            <p className="text-foreground font-medium text-xl tracking-wide">
              The coolest, funniest, hottest band in Lawrence freaking Kansas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;