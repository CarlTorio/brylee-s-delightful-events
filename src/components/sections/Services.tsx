import SectionHeader from "@/components/ui/SectionHeader";
import { UtensilsCrossed, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Event Catering",
      description: "Delicious food prepared fresh for your event. Complete buffet setup with uniformed staff.",
      events: ["Weddings", "Baptismals", "Birthday Parties", "Seminars", "Reunions", "Anniversary", "All kinds of occasions"],
    },
    {
      icon: Palette,
      title: "Event Styling",
      description: "Beautiful event decoration and setup that matches your theme and vision.",
      events: ["Theme backdrop", "Table setup", "Stage design", "Venue decoration"],
    },
  ];

  const handleInquire = () => {
    const element = document.querySelector("#book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Complete event solutions for every occasion"
        />
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gradient-hero rounded-2xl p-6 lg:p-8 text-white card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/80 mb-5">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.events.map((event) => (
                  <span
                    key={event}
                    className="text-xs bg-white/15 px-3 py-1.5 rounded-full"
                  >
                    {event}
                  </span>
                ))}
              </div>
              
              <button
                onClick={handleInquire}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
