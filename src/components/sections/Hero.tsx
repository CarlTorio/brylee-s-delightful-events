import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoTap = () => {
    tapCountRef.current += 1;

    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }

    if (tapCountRef.current >= 2) {
      tapCountRef.current = 0;
      navigate("/admin/login");
      return;
    }

    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, 400);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center bg-gradient-hero overflow-hidden">
      {/* Subtle radial overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Event Styling and Catering Services
            </p>
            
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Filling Every Occasion With Great Food and Services
            </h1>
            
            <p
              className="text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Professional event catering, styling, and equipment rentals for weddings, 
              birthdays, baptismals, seminars, and all kinds of occasions in La Union.
            </p>
            
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <button
                onClick={() => handleNavClick("#services")}
                className="btn-hero-outline"
              >
                View Services
              </button>
              <button
                onClick={() => handleNavClick("#book")}
                className="btn-hero-primary"
              >
                Book Now
              </button>
            </div>
          </div>
          
          {/* Right - Logo with double-tap admin access */}
          <div
            className="flex justify-center order-1 lg:order-2 animate-fade-in-scale"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={handleLogoTap}
              className="focus:outline-none cursor-default"
              aria-label="Brylee's Event Catering Services Logo"
            >
              <img
                src="https://i.imgur.com/fyM2llo.png"
                alt="Brylee's Event Catering Services"
                className="w-48 sm:w-64 lg:w-80 xl:w-96 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
