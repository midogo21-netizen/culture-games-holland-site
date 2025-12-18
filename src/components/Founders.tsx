const Founders = () => {
  return (
    <section className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Facilitation & Background
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p className="font-medium text-foreground text-xl">
              Culture Games Holland is delivered by Rory and Mehdi, facilitators with 
              hands-on experience in Dutch workplaces and international teams.
            </p>

            <div className="text-left space-y-4 max-w-2xl mx-auto">
              <p>
                <span className="font-semibold text-foreground">Rory</span> brings years 
                of experience explaining Dutch culture to international professionals. 
                He understands what confuses newcomers and how to make Dutch behaviour 
                feel less strange.
              </p>
              <p>
                <span className="font-semibold text-foreground">Mehdi</span> contributes 
                a global perspective, having worked and lived across 65 countries. He 
                knows what it's like to adapt to new cultures and brings energy and 
                curiosity to every session.
              </p>
            </div>

            <p className="font-medium text-foreground">
              Together, they've designed a format that's been tested with real teams 
              and refined for clarity, warmth, and lasting impact.
            </p>

            <p className="text-base italic">
              The facilitation style is informal, inclusive, and conversational — designed 
              to feel like a group experience, not a lecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
