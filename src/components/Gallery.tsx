import smilesImg from "@/assets/gallery/smiles.jpg";
import meisjesImg from "@/assets/gallery/meisjes-laugh.jpg";
import spijkerImg from "@/assets/gallery/spijkerpoepen.jpg";
import selfieImg from "@/assets/gallery/selfie.jpg";
import windmillsImg from "@/assets/gallery/windmills.jpg";
import painting1Img from "@/assets/gallery/painting-1.jpg";
import painting2Img from "@/assets/gallery/painting-2.jpg";
import fransHalsImg from "@/assets/gallery/frans-hals.jpg";

const galleryImages = [
  { src: smilesImg, alt: "Team members smiling during Culture Games Holland workshop" },
  { src: meisjesImg, alt: "Participants laughing in traditional Dutch costumes" },
  { src: spijkerImg, alt: "Teams competing in a fun Dutch game challenge" },
  { src: selfieImg, alt: "Group selfie moment at Culture Games Holland" },
  { src: windmillsImg, alt: "Windmill building activity with team participants" },
  { src: painting1Img, alt: "Drawing challenge inspired by Dutch masters" },
  { src: painting2Img, alt: "Teams reviewing their artistic creations" },
  { src: fransHalsImg, alt: "Participant sketching a Frans Hals masterpiece" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="highlight-bar mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Workshop Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the fun, laughter, and learning that happens at Culture Games Holland
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
