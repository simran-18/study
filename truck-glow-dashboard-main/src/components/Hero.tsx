import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted Across Canada</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Freight Transportation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-slate mb-8 max-w-xl">
              Jag Sukh Transport Inc. delivers reliable, efficient, and safe trucking solutions 
              across Canada. From coast to coast, we move your freight with care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="accent" size="xl" className="group">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-light" size="xl">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">15+</p>
                <p className="text-brand-slate text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
                <p className="text-brand-slate text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">24/7</p>
                <p className="text-brand-slate text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="animate-slide-in-right">
            <div className="grid gap-4">
              <div className="bg-brand-navy-light/50 backdrop-blur-sm border border-brand-navy-light p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">On-Time Delivery</h3>
                <p className="text-brand-slate">We understand time is money. Count on us for punctual deliveries every time.</p>
              </div>

              <div className="bg-brand-navy-light/50 backdrop-blur-sm border border-brand-navy-light p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Fully Insured</h3>
                <p className="text-brand-slate">Your cargo is protected with comprehensive insurance coverage.</p>
              </div>

              <div className="bg-brand-navy-light/50 backdrop-blur-sm border border-brand-navy-light p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Canada-Wide Coverage</h3>
                <p className="text-brand-slate">From Vancouver to Halifax, we cover all major routes across Canada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
