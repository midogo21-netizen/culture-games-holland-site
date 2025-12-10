import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container-narrow mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Culture Games Holland" className="h-14 w-auto" />
          <span className="font-semibold text-foreground hidden sm:block">Culture Games Holland</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </a>
          <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Why It Works
          </a>
          <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Gallery
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Testimonials
          </a>
        </div>

        <Button variant="default" size="sm" asChild>
          <a href="#contact">Get a Quote</a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
