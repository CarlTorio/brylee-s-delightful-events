import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Rentals", href: "#rentals" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left nav links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`text-sm font-medium transition-colors duration-200 link-underline ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Center logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://i.imgur.com/fyM2llo.png"
                alt="Brylee's Event Catering Services"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-14 lg:h-16"
                }`}
              />
            </Link>

            {/* Right nav links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`text-sm font-medium transition-colors duration-200 link-underline ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#book");
                }}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-accent hover:scale-105"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-hero"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-gradient-hero p-6 pt-24 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                  }
                  handleNavClick(link.href);
                }}
                className="text-white text-lg font-medium hover:text-white/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#book");
              }}
              className="mt-4 bg-white text-foreground px-6 py-3 rounded-full text-center font-medium transition-all duration-200 hover:bg-white/90"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
