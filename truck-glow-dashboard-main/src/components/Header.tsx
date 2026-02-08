import { useState } from "react";
import { Menu, X, Phone, Mail, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-brand-navy-light">
      {/* Top bar */}
      <div className="bg-accent py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm text-accent-foreground">
          <a href="tel:+17785551234" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+1 (778) 555-1234</span>
          </a>
          <a href="mailto:JagSukhTransport@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>JagSukhTransport@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="bg-accent p-2 rounded-lg">
              <Truck className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="text-primary-foreground">
              <h1 className="text-xl md:text-2xl font-bold leading-tight">Jag Sukh Transport Inc.</h1>
              <p className="text-xs text-brand-slate">Reliable Trucking Solutions</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="accent" size="lg">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-navy-light pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="accent" size="lg" className="mt-2">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
