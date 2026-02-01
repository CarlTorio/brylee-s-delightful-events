import SectionHeader from "@/components/ui/SectionHeader";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sobrang ganda ng setup nila sa wedding namin. Lahat ng guests humanga sa food at styling. Hindi kami nagkamali na si Brylee's ang kinuha namin.",
      author: "Marites and Jun Dela Cruz",
      event: "Wedding 2024",
    },
    {
      quote: "Very professional ang team nila. On-time, malinis, at ang sarap ng food. Perfect for our company seminar. Highly recommended.",
      author: "Engr. Paolo Santos",
      event: "Corporate Seminar 2024",
    },
    {
      quote: "Third time na namin sila kinuha for family events. Consistent ang quality, laging masarap ang food at maganda ang presentation.",
      author: "Garcia Family",
      event: "Family Reunion 2025",
    },
    {
      quote: "Ang ganda ng Tiffany chairs at table setup nila. Parang magazine ang venue namin. Super affordable pa ng rental rates.",
      author: "Rina Bautista",
      event: "Debut 2024",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by families and businesses across La Union"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm card-hover"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-primary">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
