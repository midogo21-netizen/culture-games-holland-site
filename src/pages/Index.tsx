import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import CulturalValue from "@/components/CulturalValue";
import Takeaways from "@/components/Takeaways";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Problem />
        <Approach />
        <CulturalValue />
        <Takeaways />
        <Founders />
        <Testimonials />
        <TrustedBy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
