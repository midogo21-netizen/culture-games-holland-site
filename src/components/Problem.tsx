const problemPoints = [
  "People here are too direct — sometimes it feels rude",
  "Everything is very informal, but then suddenly very strict",
  "Things move fast, but everyone still wants to discuss everything",
  "There's no clear hierarchy, but also a lot of individual responsibility",
];

const Problem = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              The Problem We Address
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When international professionals work in Dutch organisations, they often experience 
            friction. Common observations sound like this:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className="bg-grey-warm p-5 rounded-xl border-l-4 border-primary"
              >
                <p className="text-muted-foreground italic">"{point}"</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Culture Games Holland helps participants understand why these behaviours exist 
            and how to work with them, not against them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
