import valueImage from "@/assets/gallery/windmill-group.jpg";

const pillars = [
  {
    title: "Directness",
    subtitle: "Clarity over cushioning",
    description:
      "Dutch communication prioritises honesty and efficiency. Feedback is given openly, opinions are stated plainly, and clarity is valued above diplomacy.",
  },
  {
    title: "Egalitarianism",
    subtitle: "Low hierarchy, high individual responsibility",
    description:
      "Titles and formality matter less than competence and initiative. Employees are expected to speak up, take ownership, and treat each other as equals.",
  },
  {
    title: "Pragmatism",
    subtitle: "Action before perfection",
    description:
      'The Dutch focus on practical outcomes. "Good enough" often wins over "perfect but late." Efficiency and problem-solving are prized over form.',
  },
  {
    title: "Consensus & Shared Responsibility",
    subtitle: "Inclusive decisions, collective ownership",
    description:
      "Major decisions are often made through consultation and agreement. Once made, everyone is expected to support the outcome and share responsibility for results.",
  },
];

const CulturalValue = () => {
  return (
    <section id="value" className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              The Four Pillars of Dutch Workplace Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each game we play is tied to a core cultural concept that shapes how Dutch 
              professionals communicate, collaborate, and make decisions.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl card-shadow space-y-3"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-primary font-medium">{pillar.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={valueImage}
                alt="Team members proudly displaying their handmade windmill creation during Culture Games Holland"
                className="w-full h-auto object-cover aspect-[16/9]"
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
