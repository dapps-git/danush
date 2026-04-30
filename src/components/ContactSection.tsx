import { Phone, MapPin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-slate-900 tracking-tighter leading-tight">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed font-normal">
          Contact us for industrial flange supplier inquiries, bulk orders, and custom manufacturing
        </p>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <div className="bg-white border border-slate-100 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-slate-800 mb-1">Phone</h3>
                <a
                  href="tel:+918669251123"
                  className="block text-slate-700 hover:text-primary transition-colors text-base font-normal"
                >
                  +91 866 925 1123
                </a>
                <a
                  href="https://wa.me/918669251123?text=Hello%20I%20want%20to%20know%20more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 text-slate-500 hover:text-[#25D366] transition-colors font-normal text-sm"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-slate-800 mb-1">Email</h3>
                <p className="text-slate-700 font-normal text-base">info@danushtrade.com</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-slate-800 mb-1">Address</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  Gala no 2. Shree Asthavinayak Industrial Premises Co-op Soc. Ltd.<br />
                  Dhumal Nagar, Waliv, Vasai (East),<br />
                  Dist. Palghar, Maharashtra - 401208
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-full min-h-[350px] border border-slate-200 shadow-md">
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
