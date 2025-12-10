import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CulturalValue from "@/components/CulturalValue";
import Founders from "@/components/Founders";
import Gallery from "@/components/Gallery";
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
        <CulturalValue />
        <Founders />
        <Gallery />
        <Testimonials />
        <TrustedBy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
