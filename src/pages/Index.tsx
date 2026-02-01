import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import EventTypes from "@/components/sections/EventTypes";
import EquipmentRentals from "@/components/sections/EquipmentRentals";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import CTABanner from "@/components/sections/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <EventTypes />
        <EquipmentRentals />
        <Gallery />
        <Testimonials />
        <CTABanner />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
