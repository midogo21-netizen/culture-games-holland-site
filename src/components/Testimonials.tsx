import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our team had an amazing time! The games were hilarious, but the cultural insights we gained were genuinely valuable for working with our Dutch colleagues.",
    author: "Sarah M.",
    role: "HR Manager, Tech Company",
  },
  {
    quote: "Perfect for our international onboarding. New hires left with a real understanding of Dutch work culture, not just a list of dos and don'ts.",
    author: "Thomas K.",
    role: "People & Culture Lead",
  },
  {
    quote: "Mehdi and Rory created such a welcoming atmosphere. Everyone was laughing, competing, and learning together. Highly recommend!",
    author: "Priya S.",
    role: "Team Lead, Consulting Firm",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="highlight-bar mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            What Teams Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 card-shadow relative overflow-hidden"
            >
              {/* Orange accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
