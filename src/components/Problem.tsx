const problemPoints = [
  "People are very direct — sometimes it feels rude.",
  "Everything seems informal, until suddenly it's very strict.",
  "Decisions feel fast, but everyone still wants endless discussion.",
  "There's no hierarchy, but a lot of individual responsibility.",
];

const Problem = () => {
  return (
    <section className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              The Problem We Address
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            International professionals often describe Dutch workplaces like this:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className="bg-background p-5 rounded-xl border-l-4 border-primary"
              >
                <p className="text-muted-foreground italic">"{point}"</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            These observations are accurate — but without context, they lead to frustration, miscommunication, and disengagement.
          </p>

          <p className="text-foreground font-medium max-w-2xl mx-auto">
            Culture Games Holland helps participants understand why these behaviours exist, and how to work with them rather than against them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
