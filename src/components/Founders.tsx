import roryPhoto from "@/assets/founders/rory.jpg";
import mehdiPhoto from "@/assets/founders/mehdi.jpg";

const Founders = () => {
  return <section id="founders" className="section-padding bg-grey-warm">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="highlight-bar mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Facilitation &amp; Background
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p className="font-medium text-foreground text-xl px-[33px]">Culture Games Holland is delivered by Rory and Mehdi, facilitators who combine cultural insight with strong group facilitation.</p>

            <div className="text-left space-y-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <img src={roryPhoto} alt="Rory" className="w-20 h-20 rounded-full object-cover shrink-0" />
                <p>
                  <span className="font-semibold text-foreground">Rory</span> has led communication and improvisation-based workshops in corporate settings, helping teams improve listening, feedback, and collaboration. He also brings deep, applied knowledge of Dutch culture, developed through years of helping international professionals navigate Dutch workplace culture.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src={mehdiPhoto} alt="Mehdi" className="w-20 h-20 rounded-full object-cover shrink-0" />
                <p>
                  <span className="font-semibold text-foreground">Mehdi</span> is a passionate host, workshop facilitator, and polyglot who has worked with international groups across multiple countries. He combines strong knowledge of Dutch workplace culture with humour and clear facilitation to help international teams connect and collaborate more smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Founders;
