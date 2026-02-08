import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Truck className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-primary-foreground">
                <h2 className="text-2xl font-bold">Jag Sukh Transport Inc.</h2>
              </div>
            </div>
            <p className="text-brand-slate mb-6 max-w-md">
              Your trusted partner for reliable freight transportation across Canada. 
              With over 15 years of experience, we deliver excellence on every mile.
            </p>
            <div className="flex gap-4">
              <a href="tel:+17785551234" className="bg-brand-navy-light p-3 rounded-lg text-brand-slate hover:text-accent hover:bg-brand-navy-light/80 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:JagSukhTransport@gmail.com" className="bg-brand-navy-light p-3 rounded-lg text-brand-slate hover:text-accent hover:bg-brand-navy-light/80 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-brand-slate hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brand-slate">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+17785551234" className="hover:text-accent transition-colors">
                  +1 (778) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-slate">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:JagSukhTransport@gmail.com" className="hover:text-accent transition-colors text-sm">
                  JagSukhTransport@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-slate">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>British Columbia, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-navy-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-slate text-sm">
              © {currentYear} Jag Sukh Transport Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-brand-slate hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-brand-slate hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
