import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Baby, Cake, Users, Home, Award, CalendarDays } from "lucide-react";

const EventTypes = () => {
  const events = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Make your special day unforgettable",
    },
    {
      icon: Baby,
      title: "Baptismals",
      description: "Celebrate new beginnings with a feast",
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Food and fun for every age",
    },
    {
      icon: Users,
      title: "Seminars",
      description: "Professional catering for corporate events",
    },
    {
      icon: Home,
      title: "Reunions",
      description: "Bring everyone together over great food",
    },
    {
      icon: Award,
      title: "Anniversary",
      description: "Celebrate milestones in style",
    },
    {
      icon: CalendarDays,
      title: "All Occasions",
      description: "Custom catering for any event you have in mind",
    },
  ];

  const handleInquire = () => {
    const element = document.querySelector("#book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Events We Cater"
          subtitle="Whatever the occasion, we have you covered"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-card rounded-xl p-4 lg:p-5 shadow-sm card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <event.icon className="h-5 w-5 text-white" />
              </div>
              
              <h3 className="text-sm lg:text-base font-semibold text-foreground mb-1">
                {event.title}
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground mb-3 line-clamp-2">
                {event.description}
              </p>
              
              <button
                onClick={handleInquire}
                className="text-xs font-medium text-primary hover:text-accent transition-colors"
              >
                Inquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
