import { Phone, MapPin, Mail, Facebook, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Brgy. Sta Rita West, Aringay, La Union",
    },
    {
      icon: Phone,
      label: "Smart",
      value: "0930-838-0240",
    },
    {
      icon: Phone,
      label: "Globe",
      value: "0905-336-4072",
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          subtitle="We'd love to hear from you"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Brylee's Event Catering Services
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Operations Manager: Bryan Adam D. Balangue
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064051238691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-accent hover:scale-105"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.facebook.com/messages/t/520785821683493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-90 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Messenger
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[300px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15325.912345678901!2d120.35!3d16.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391bcf6ba63c5e5%3A0x1234567890abcdef!2sAringay%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brylee's Event Catering Services Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
