const Founders = () => {
  return (
    <section className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Facilitation & Background
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p className="font-medium text-foreground text-xl">
              Culture Games Holland is delivered by Rory and Mehdi, facilitators with 
              extensive experience working with international professionals, multicultural 
              teams, and organisations navigating cultural complexity.
            </p>

            <div className="text-left space-y-4 max-w-2xl mx-auto">
              <p>
                <span className="font-semibold text-foreground">Rory</span> has led communication and improvisation-based workshops in corporate settings, helping teams improve listening, feedback, and collaboration. He also brings deep, applied knowledge of Dutch culture, developed through years of work translating Dutch norms and behaviour for international audiences in professional contexts.
              </p>
              <p>
                <span className="font-semibold text-foreground">Mehdi</span> is a passionate host, workshop facilitator, and polyglot who has worked with international groups across multiple countries. Having lived between cultures, he understands how small cultural differences can create friction at work. He combines strong knowledge of Dutch workplace culture with humour and clear facilitation to help international teams connect and collaborate more smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;