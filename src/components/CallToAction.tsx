import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
const CallToAction = () => {
  return <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bring Culture Games Holland to Your Team
            </h2>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 text-primary mx-0 w-[28px] px-0 py-0 mb-[22px]" />
              <p>
                Hosted anywhere in the Netherlands — Amsterdam, Utrecht, Rotterdam, 
                The Hague, Eindhoven and beyond.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:info@culturegamesholland.com">Get a Quote</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:info@culturegamesholland.com">Let's Have a Chat</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;