const Introduction = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-narrow mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Culture Games Holland is a facilitator-led intercultural workshop designed for international professionals working in the Netherlands. Through structured, gamified challenges, participants learn how Dutch workplace culture actually functions — and how to collaborate within it confidently and effectively.
          </p>
          
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              This is not a lecture.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              It is not a checklist of do's and don'ts.
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            It is a practical, experience-based intervention for organisations that want smoother collaboration and faster integration of international talent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
