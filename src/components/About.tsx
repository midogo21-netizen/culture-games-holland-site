import { Users, Clock, MapPin } from "lucide-react";
import workshopImage from "@/assets/gallery/group-mind.jpg";
const About = () => {
  return <section id="about" className="section-padding pt-2 pb-10 -mt-8">
      <div className="container-narrow mx-auto">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">Culture Games Holland is a facilitator-led intercultural workshop designed for international professionals working in the Netherlands. Through structured, gamified challenges, participants learn how Dutch workplace culture actually functions — and how to collaborate within it confidently and effectively.</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground">
              This is not a lecture.<br />
              It is not a checklist of do's and don'ts.
            </p>
            <p>It is a practical, experience-based workshop that helps teams work better together.</p>
          </div>
        </div>

        {/* When Is This Workshop Useful */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="highlight-bar" />
              <h2 className="text-3xl md:text-4xl font-bold">
                When Is This Workshop Useful?
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Culture Games Holland is typically booked by organisations when:
            </p>

            <ul className="space-y-3">
              {["International employees struggle with Dutch directness and feedback", "Meetings feel confusing, inefficient, or unexpectedly confrontational", "Teams misinterpret informality as a lack of structure", "Decision-making feels slow despite an emphasis on efficiency", "Onboarding explains policies, but not behaviour"].map((item, index) => <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>)}
            </ul>

            <p className="text-foreground font-medium">
              If your teams are technically capable but culturally misaligned, this workshop addresses the gap.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img src={workshopImage} alt="Participants laughing together during a Culture Games Holland workshop activity" className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-grey-warm rounded-2xl p-8 lg:p-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="highlight-bar" />
              <h2 className="text-3xl md:text-4xl font-bold">Who It's For</h2>
            </div>

            <ul className="space-y-3">
              {["International employees new to the Netherlands", "Relocated professionals adjusting to Dutch workplace norms", "Mixed Dutch–international teams", "Organisations experiencing friction between Dutch and international staff"].map((audience, index) => <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">{audience}</span>
                </li>)}
            </ul>

            {/* Practical info badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">8–15 participants</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">2.5 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">In-person, facilitator-led</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;