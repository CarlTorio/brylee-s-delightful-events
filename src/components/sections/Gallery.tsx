import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { X } from "lucide-react";

// Import gallery images
import event1 from "@/assets/gallery/event-1.png";
import event2 from "@/assets/gallery/event-2.png";
import event3 from "@/assets/gallery/event-3.png";
import event4 from "@/assets/gallery/event-4.png";
import event5 from "@/assets/gallery/event-5.png";
import event6 from "@/assets/gallery/event-6.png";
import event7 from "@/assets/gallery/event-7.png";
import event8 from "@/assets/gallery/event-8.png";
import event9 from "@/assets/gallery/event-9.png";
import event10 from "@/assets/gallery/event-10.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: event1, alt: "Birthday celebration event setup" },
    { src: event2, alt: "Buffet catering setup" },
    { src: event3, alt: "Food preparation" },
    { src: event4, alt: "Catering service in action" },
    { src: event5, alt: "Golden floral backdrop" },
    { src: event6, alt: "Staircase floral decoration" },
    { src: event7, alt: "Red and white floral arrangement" },
    { src: event8, alt: "Wedding reception setup" },
    { src: event9, alt: "Outdoor event venue setup" },
    { src: event10, alt: "Elegant table setting" },
  ];

  return (
    <>
      <section id="gallery" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Gallery"
            subtitle="See our beautiful event setups and catering services"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="aspect-square rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
