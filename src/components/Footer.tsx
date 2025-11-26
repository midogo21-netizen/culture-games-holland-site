import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-narrow mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CG</span>
              </div>
              <span className="font-semibold text-background">Culture Games Holland</span>
            </div>
            <p className="text-background/60 text-sm">
              Helping international teams understand and thrive in Dutch work culture.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <a 
              href="mailto:info@culturegamesholland.com" 
              className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              info@culturegamesholland.com
            </a>
            <a 
              href="tel:+31612345678" 
              className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +31 6 1234 5678
            </a>
            <div className="flex items-center gap-3 text-background/70 text-sm">
              <MapPin className="w-4 h-4" />
              Based in the Netherlands
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-background mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} Culture Games Holland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
