import { Truck, Package, Warehouse, BarChart3, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description: "Dedicated trucks for large shipments ensuring fast and secure delivery across Canada.",
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective shipping for smaller loads, sharing truck space with other shipments.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management and distribution services.",
  },
  {
    icon: BarChart3,
    title: "Logistics Planning",
    description: "Strategic route optimization and supply chain management for efficiency.",
  },
  {
    icon: Shield,
    title: "Specialized Freight",
    description: "Handling of oversized, hazardous, or temperature-sensitive cargo with expertise.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service and real-time shipment tracking.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Trucking Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jag Sukh Transport Inc. offers a full range of transportation and logistics services 
            tailored to meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
