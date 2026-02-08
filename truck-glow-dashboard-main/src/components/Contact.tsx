import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">
            Ready to ship? Have questions? We're here to help 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">Phone</h3>
                <a href="tel:+17785551234" className="text-brand-slate hover:text-accent transition-colors">
                  +1 (778) 555-1234
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">Email</h3>
                <a href="mailto:JagSukhTransport@gmail.com" className="text-brand-slate hover:text-accent transition-colors">
                  JagSukhTransport@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">Location</h3>
                <p className="text-brand-slate">
                  Serving all of British Columbia<br />
                  and across Canada
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">Hours</h3>
                <p className="text-brand-slate">
                  24/7 Dispatch Available<br />
                  Office: Mon-Fri 8AM-6PM PST
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background" />
                <Input type="email" placeholder="Email Address" className="bg-background" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Phone Number" className="bg-background" />
                <Input placeholder="Company Name" className="bg-background" />
              </div>
              <Input placeholder="Pickup Location" className="bg-background" />
              <Input placeholder="Delivery Location" className="bg-background" />
              <Textarea 
                placeholder="Additional Details (cargo type, weight, special requirements...)" 
                className="bg-background min-h-[120px]" 
              />
              <Button variant="accent" size="xl" className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
