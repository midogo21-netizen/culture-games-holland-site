import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gallery/frans-hals-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-8">
      <div className="container-narrow mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                An Experiential Workshop on{" "}
                <span className="text-primary">Working with the Dutch</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                When international teams struggle in Dutch workplaces, the issue is rarely technical skill.
                It's cultural misunderstanding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src={heroImage}
                alt="Culture Games Holland team-building workshop with participants in traditional Dutch costumes taking a fun selfie"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-light rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
