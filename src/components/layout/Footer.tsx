import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Rentals", href: "#rentals" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="https://i.imgur.com/fyM2llo.png"
            alt="Brylee's Event Catering Services"
            className="h-16 mb-6"
          />

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            {quickLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
                {index < quickLinks.length - 1 && (
                  <span className="hidden md:inline text-white/40 ml-4 md:ml-8">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=100064051238691"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/messages/t/520785821683493"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Messenger"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-white/70 mb-6">
            <span className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Smart: 0930-838-0240
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Globe: 0905-336-4072
            </span>
          </div>

          {/* Powered By */}
          <p className="text-xs text-white/40 mb-2">Powered by LogiCode.PH</p>

          {/* Copyright */}
          <p className="text-xs text-white/50">
            2026 Brylee's Event Catering Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
