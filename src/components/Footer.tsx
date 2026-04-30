import { Phone, MapPin, Mail } from "lucide-react";
import logoDark from "@/assets/danush-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B5FA5] text-white border-t border-white/10 pt-16 pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(8,75,131,0.45)_70%)] opacity-80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 -ml-6 transition-transform duration-300 hover:translate-x-1">
              <img src={logoDark} alt="Danush Trade" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="text-[11px] md:text-sm text-blue-100 leading-relaxed max-w-xs">
              Leading steel pipe fittings manufacturer and industrial pipe fittings supplier in India. Exporting to UAE, Middle East & worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-white mb-4 text-xs md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Why Us", "Best Sellers", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="inline-block text-[11px] md:text-sm text-blue-100 transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-white mb-4 text-xs md:text-base">Products</h4>
            <ul className="space-y-2">
              {["Pipe Elbows", "Tee Fittings", "Industrial Flanges", "Pipe Reducers", "Couplings", "Pipe Caps", "Custom Fittings"].map((p) => (
                <li key={p}>
                  <a href="#products" className="inline-block text-[11px] md:text-sm text-blue-100 transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-white mb-4 text-xs md:text-base">Contact</h4>
            <div className="space-y-3 flex flex-col items-start">
              <div className="flex items-center gap-2 text-[11px] md:text-sm text-blue-100">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <a href="tel:+918669251123" className="hover:text-white transition-colors">+91 866 925 1123</a>
              </div>
              <div className="flex items-start gap-2 text-[11px] md:text-sm text-blue-100">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>Vasai (East), Dist. Palghar, Maharashtra - 401208</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] md:text-sm text-blue-100">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span>info@danushtrade.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] md:text-sm text-blue-200">
            © {new Date().getFullYear()} Danush Trade. All rights reserved. | Steel Pipe Fittings Manufacturer & Supplier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
