const Founders = () => {
  return (
    <section className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              About the Founders
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p className="font-medium text-foreground text-xl">
              Culture Games Holland was dreamed up by two cultural adventurers.
            </p>
            
            <p>
              <span className="font-semibold text-foreground">Mehdi</span>, born in Tunisia 
              and shaped by 65 countries, is a traveller, polyglot, and collector of human 
              stories. He brings the energy, the curiosity, and the global lens that keeps 
              every group laughing and learning at the same time.
            </p>
            
            <p>
              <span className="font-semibold text-foreground">Rory</span>, originally from 
              Ireland, has spent years decoding Dutch history, habits, and quirks for 
              international audiences. He's the walking, talking encyclopedia of "why the 
              Dutch do that," and the creative brain behind turning cultural traits into 
              playful team challenges.
            </p>
            
            <p className="font-medium text-foreground">
              Together, they mix international insight with Dutch know-how to create an 
              experience that's fun, warm, and surprisingly eye-opening for teams working 
              in the Netherlands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
