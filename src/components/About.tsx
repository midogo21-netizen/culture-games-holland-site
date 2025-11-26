import workshopImage from "@/assets/gallery/meisjes-laugh.jpg";

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
                What is Culture Games Holland?
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Culture Games Holland is an interactive cultural workshop for international 
                employees working in the Netherlands. Teams compete in a series of fast-paced 
                challenges inspired by real Dutch behaviours — from direct communication to 
                pragmatic problem-solving.
              </p>
              <p>
                The format is lively and social, but the learning is real: participants gain 
                a clearer understanding of how Dutch people communicate, collaborate, and make 
                decisions.
              </p>
              <p className="font-medium text-foreground">
                Perfect for onboarding, cross-cultural team-building and international teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
