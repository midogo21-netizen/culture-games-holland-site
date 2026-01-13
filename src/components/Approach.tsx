import approachImage from "@/assets/gallery/two-van-goghs.jpg";

const approachPoints = [
  "Carefully designed group challenges",
  "Guided reflection and discussion",
  "Real workplace scenarios",
  "Shared problem-solving",
];

const Approach = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={approachImage}
                alt="Van Gogh portrait recreation activity during Culture Games Holland workshop"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="highlight-bar" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Approach: Learning by Doing
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of PowerPoint slides or abstract cultural theory, participants learn through:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {approachPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-grey-warm p-5 rounded-xl flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The games create moments of insight that theory alone cannot. Participants experience Dutch cultural patterns first-hand, then unpack them together.
              </p>
              <p className="font-medium text-foreground">
                The result is not just understanding, but practical behavioural adjustment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Approach;
