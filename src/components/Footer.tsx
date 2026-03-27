import { Phone, MapPin, Mail } from "lucide-react";
import logoDark from "@/assets/logo-dark.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoDark} alt="Danush Trade" className="h-20 w-20 rounded object-cover" />
              <span className="font-heading text-xl font-bold text-foreground">Danush Trade</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading steel pipe fittings manufacturer and industrial pipe fittings supplier in India. Exporting to UAE, Middle East & worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Why Us", "Best Sellers", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {["Pipe Elbows", "Tee Fittings", "Industrial Flanges", "Pipe Reducers", "Couplings", "Pipe Caps", "Custom Fittings"].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918669251123" className="hover:text-primary transition-colors">+91 866 925 1123</a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Vasai (East), Dist. Palghar, Maharashtra - 401208</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@danushtrade.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Danush Trade. All rights reserved. | Steel Pipe Fittings Manufacturer & Supplier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
