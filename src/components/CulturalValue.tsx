

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
      "Titles and formality matter less than competence and initiative. Employees are expected to speak up, take ownership, and treat colleagues as equals.",
  },
  {
    title: "Pragmatism",
    subtitle: "Action before perfection",
    description:
      'The Dutch focus on practical outcomes. "Good enough" often beats "perfect but late." Efficiency and problem-solving matter more than formality.',
  },
  {
    title: "Consensus & Shared Responsibility",
    subtitle: "Inclusive decisions, collective ownership",
    description:
      "Decisions are often made through discussion and agreement. Once made, everyone is expected to support the outcome and share responsibility for results.",
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
              Each activity in the workshop connects directly to one of these cultural principles.
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

        </div>
      </div>
    </section>
  );
};

export default CulturalValue;
