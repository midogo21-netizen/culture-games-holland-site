import { CheckCircle } from "lucide-react";
import valueImage from "@/assets/gallery/windmill-group.jpg";

const learningPoints = [
  "Communicate clearly and confidently with Dutch colleagues",
  "Understand directness without misreading it",
  "Navigate pragmatic, low-drama decision making",
  "Build workplace relationships with more ease",
  "Reduce friction and avoid small cultural misunderstandings",
];

const CulturalValue = () => {
  return (
    <section id="value" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="highlight-bar" />
              <h2 className="text-3xl md:text-4xl font-bold">
                The Cultural Value
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg font-medium text-foreground">
                  This is not just a game.
                </p>
                <p>
                  Each challenge opens the door to meaningful conversations about Dutch work 
                  culture — the things nobody tells you during onboarding, but everyone feels.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-medium text-foreground">Participants learn to:</p>
                <ul className="space-y-3">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground italic">
                It's fun, but also genuinely useful for day-to-day collaboration.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={valueImage}
                alt="Team members proudly displaying their handmade windmill creation during Culture Games Holland"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-light rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalValue;
