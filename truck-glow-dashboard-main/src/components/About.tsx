import { CheckCircle2 } from "lucide-react";

const features = [
  "Licensed and fully insured fleet",
  "Experienced professional drivers",
  "Real-time GPS tracking",
  "Competitive pricing",
  "Flexible scheduling",
  "Excellent safety record",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative animate-slide-in-left">
            <div className="bg-hero-gradient rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-navy-light/50 p-6 rounded-xl text-center">
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
                  <p className="text-primary-foreground text-sm">Years in Business</p>
                </div>
                <div className="bg-brand-navy-light/50 p-6 rounded-xl text-center">
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</p>
                  <p className="text-primary-foreground text-sm">Fleet Vehicles</p>
                </div>
                <div className="bg-brand-navy-light/50 p-6 rounded-xl text-center">
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">1M+</p>
                  <p className="text-primary-foreground text-sm">Miles Driven</p>
                </div>
                <div className="bg-brand-navy-light/50 p-6 rounded-xl text-center">
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">99%</p>
                  <p className="text-primary-foreground text-sm">On-Time Rate</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Jag Sukh Transport Inc.?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 15 years of experience in the Canadian transportation industry, 
              Jag Sukh Transport Inc. has built a reputation for reliability, safety, and 
              exceptional customer service. We treat every shipment as if it were our own.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Our commitment to excellence has earned us the trust of businesses across Canada. 
              We're not just a trucking company – we're your logistics partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
