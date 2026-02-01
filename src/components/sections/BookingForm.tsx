import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venueLocation: "",
    servicesNeeded: [] as string[],
    equipmentDetails: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (will be replaced with Supabase integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      venueLocation: "",
      servicesNeeded: [],
      equipmentDetails: "",
      message: "",
    });

    toast.success("Inquiry submitted successfully!");
  };

  const eventTypes = [
    "Wedding",
    "Baptismal",
    "Birthday Party",
    "Seminar",
    "Reunion",
    "Anniversary",
    "Other",
  ];

  const guestOptions = ["20-50", "50-100", "100-150", "150-200", "200+"];

  const services = [
    { id: "catering", label: "Event Catering" },
    { id: "styling", label: "Event Styling" },
    { id: "rental", label: "Equipment Rental" },
  ];

  if (isSubmitted) {
    return (
      <section id="book" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Salamat!
            </h2>
            <p className="text-muted-foreground mb-6">
              We will get back to you within 24 hours with a custom quotation.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:bg-accent hover:scale-105"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Book Your Event"
          subtitle="Tell us about your event and we will prepare a custom package for you"
        />
        
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {/* Full Name */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-pill w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            {/* Email */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-pill w-full"
                placeholder="your@email.com"
                required
              />
            </div>
            
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input-pill w-full"
                placeholder="09XX-XXX-XXXX"
                required
              />
            </div>
            
            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="input-pill w-full appearance-none cursor-pointer"
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Estimated Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="input-pill w-full"
              />
            </div>
            
            {/* Guest Count */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Estimated Number of Guests
              </label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                className="input-pill w-full appearance-none cursor-pointer"
              >
                <option value="">Select guest count</option>
                {guestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Venue Location */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Venue Location
              </label>
              <input
                type="text"
                name="venueLocation"
                value={formData.venueLocation}
                onChange={handleInputChange}
                className="input-pill w-full"
                placeholder="Enter venue address"
              />
            </div>
            
            {/* Services Needed */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-3">
                Services Needed
              </label>
              <div className="flex flex-wrap gap-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.servicesNeeded.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{service.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Equipment Details (conditional) */}
            {formData.servicesNeeded.includes("rental") && (
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Equipment Rentals Needed
                </label>
                <textarea
                  name="equipmentDetails"
                  value={formData.equipmentDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="input-pill w-full !rounded-2xl resize-none"
                  placeholder="Describe the equipment items you need (e.g., 50 Tiffany chairs, 10 round tables, chafing dishes)"
                />
              </div>
            )}
            
            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message / Special Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input-pill w-full !rounded-2xl resize-none"
                placeholder="Any special requests or additional details about your event"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground px-10 py-3 rounded-full font-medium transition-all hover:bg-accent hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
