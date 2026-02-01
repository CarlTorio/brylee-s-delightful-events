import SectionHeader from "@/components/ui/SectionHeader";
import { 
  UtensilsCrossed, 
  Wine, 
  GlassWater, 
  Utensils, 
  Flame,
  Armchair,
  LayoutGrid,
  Circle,
  Shirt,
  Ribbon,
  Fan,
  Theater
} from "lucide-react";

const EquipmentRentals = () => {
  const categories = [
    {
      title: "Tableware",
      items: [
        { name: "Porcelain Plates", icon: Circle },
        { name: "Glasses", icon: GlassWater },
        { name: "Wine Glasses", icon: Wine },
        { name: "Spoon and Forks", icon: Utensils },
        { name: "Chafing Dishes", icon: Flame },
      ],
    },
    {
      title: "Furniture",
      items: [
        { name: "Monoblock Chairs", icon: Armchair },
        { name: "Tiffany Chairs", icon: Armchair },
        { name: "Long Tables", icon: LayoutGrid },
        { name: "Round Tables", icon: Circle },
      ],
    },
    {
      title: "Decor and Accessories",
      items: [
        { name: "Covers", icon: Shirt },
        { name: "Runners", icon: Ribbon },
        { name: "Ribbons", icon: Ribbon },
      ],
    },
    {
      title: "Equipment",
      items: [
        { name: "Big Electric Fans", icon: Fan },
        { name: "Stage and Backdraft", icon: Theater },
      ],
    },
  ];

  const handleInquire = () => {
    const element = document.querySelector("#book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rentals" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Equipment Rentals"
          subtitle="Everything you need for your event setup"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 bg-card rounded-lg p-3 shadow-sm card-hover"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-gold" />
                      </div>
                      <span className="text-sm text-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button
              onClick={handleInquire}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-accent hover:scale-105"
            >
              Inquire About Rentals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRentals;
