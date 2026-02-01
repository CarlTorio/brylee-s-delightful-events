const CTABanner = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Let us help you create beautiful memories with delicious food and stunning event styling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleNavClick("#book")}
            className="btn-hero-primary"
          >
            Book Now
          </button>
          <a
            href="https://www.facebook.com/messages/t/520785821683493"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-outline"
          >
            Message Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
