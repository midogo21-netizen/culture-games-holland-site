import mobiquityLogo from "@/assets/logos/mobiquity.jpg";
import philipsLogo from "@/assets/logos/philips.jpg";
import worldHotelsLogo from "@/assets/logos/world-hotels.jpg";
import rhiLogo from "@/assets/logos/rhi-magnesita.jpg";
import productHuntLogo from "@/assets/logos/product-hunt.png";
import meatlessFarmLogo from "@/assets/logos/meatless-farm.jpg";
import patagoniaLogo from "@/assets/logos/patagonia.jpg";
import thnkLogo from "@/assets/logos/thnk.jpg";

const logos = [
  { src: mobiquityLogo, alt: "Mobiquity" },
  { src: philipsLogo, alt: "Philips" },
  { src: worldHotelsLogo, alt: "World Hotels Collection" },
  { src: rhiLogo, alt: "RHI Magnesita" },
  { src: productHuntLogo, alt: "Product Hunt" },
  { src: meatlessFarmLogo, alt: "Meatless Farm" },
  { src: patagoniaLogo, alt: "Patagonia" },
  { src: thnkLogo, alt: "THNK School of Creative Leadership" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-10">
          Trusted by Leading Organizations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 md:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
