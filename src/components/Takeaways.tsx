import { CheckCircle, BookOpen } from "lucide-react";

const takeaways = [
  "A clearer understanding of Dutch workplace expectations",
  "Language to describe Dutch behaviour without judgement",
  "Practical strategies for communication, feedback, and collaboration",
  "Increased confidence when navigating unfamiliar cultural situations",
];

const Takeaways = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              What Participants Take Away
            </h2>
          </div>

          {/* Takeaways list */}
          <div className="space-y-4">
            {takeaways.map((takeaway, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-grey-warm p-5 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{takeaway}</span>
              </div>
            ))}
          </div>

          {/* Guide callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-primary shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Take-Home Guide Included
              </p>
              <p className="text-muted-foreground">
                Every participant receives a printed guide:{" "}
                <span className="italic">
                  "Working with the Dutch: Practical Notes for International Professionals"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
