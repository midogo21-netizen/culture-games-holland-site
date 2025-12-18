import { Users, Clock } from "lucide-react";
import workshopImage from "@/assets/gallery/meisjes-laugh.jpg";

const targetAudiences = [
  "International employees new to the Netherlands",
  "Relocated professionals adjusting to a Dutch workplace",
  "Mixed teams navigating cross-cultural collaboration",
  "Organisations experiencing friction between Dutch and international staff",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={workshopImage}
                alt="Participants laughing together during a Culture Games Holland workshop activity"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="highlight-bar" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Who Is This For?
              </h2>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                {targetAudiences.map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">{audience}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                This workshop is especially effective for teams who want less confusion, 
                fewer frustrations, and smoother collaboration.
              </p>
            </div>

            {/* Practical info badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">8–15 participants</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">2.5 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
