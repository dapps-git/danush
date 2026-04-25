import { Phone, MapPin, Mail , } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-card relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Get In <span className="text-gradient-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Contact us for industrial flange supplier inquiries, bulk orders, and custom manufacturing
        </p>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div>
    <h3 className="font-heading font-bold text-foreground mb-1">Phone</h3>
    
    {/* Call */}
    <a
      href="tel:+918669251123"
      className="block text-foreground/80 hover:text-primary transition-colors text-lg font-semibold"
    >
      +91 866 925 1123
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/918669251123?text=Hello%20I%20want%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 mt-2 text-foreground/80 hover:text-primary transition-colors font-medium"
    >
      <FaWhatsapp className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-steel/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <p className="text-foreground/80 font-medium">info@danushtrade.com</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-steel/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Address</h3>
                <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                  Gala no 2. Shree Asthavinayak Industrial Premises Co-op Soc. Ltd.<br />
                  Dhumal Nagar, Waliv, Vasai (East),<br />
                  Dist. Palghar, Maharashtra - 401208
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl overflow-hidden h-[400px]">
            <iframe
              title="Danush Trade Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000!2d72.87097!3d19.42328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzIzLjgiTiA3MsKwNTInMTUuNSJF!5e0!3m2!1sen!2sin!4v1711500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
