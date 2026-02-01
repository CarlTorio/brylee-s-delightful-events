import SectionHeader from "@/components/ui/SectionHeader";

const About = () => {
  const keyPoints = [
    "Serving La Union and nearby provinces",
    "Complete event solutions",
    "Professional and uniformed staff",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="lg:hidden mb-8">
              <SectionHeader title="About Brylee's" />
            </div>
            <div className="hidden lg:block">
              <div className="section-accent-line !mx-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                About Brylee's
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Brylee's Event Catering Services is a trusted name in event catering and 
              styling in Aringay, La Union. Led by Operations Manager Bryan Adam D. Balangue, 
              we specialize in providing delicious food, beautiful event setups, and reliable 
              equipment rentals for all types of occasions. From intimate gatherings to grand 
              celebrations, we make every event memorable with professional service and 
              attention to detail.
            </p>
            
            <div className="space-y-3">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://i.imgur.com/fyM2llo.png"
                alt="Brylee's Event Catering"
                className="w-full h-full object-contain bg-secondary p-8"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
