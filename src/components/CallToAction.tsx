import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Interested?</h2>

            <p className="text-muted-foreground leading-relaxed">
              If your organisation works with international professionals and wants to 
              reduce friction, confusion, and cultural misunderstandings, Culture Games 
              Holland offers a focused, engaging, and practical solution.
            </p>

            <p className="text-foreground font-medium">
              Get in touch to discuss availability, pricing, or a pilot workshop.
            </p>
          </div>

          {/* Practical info badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-grey-warm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">In-person workshop</span>
            </div>
            <div className="flex items-center gap-2 bg-grey-warm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">2.5 hours</span>
            </div>
            <div className="flex items-center gap-2 bg-grey-warm px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">8–15 participants</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:info@culturegamesholland.com">Get in Touch</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Hosted anywhere in the Netherlands — Amsterdam, Utrecht, Rotterdam, 
            The Hague, Eindhoven and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
