import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoDark from "@/assets/danush-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-steel py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoDark} alt="Danush Trade" className="h-20 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-secondary-foreground hover:text-steel-light transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+918669251123" className="flex items-center gap-2 btn-premium text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-lg p-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-secondary-foreground hover:text-steel-light transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="tel:+918669251123" className="flex items-center gap-2 btn-premium text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold justify-center">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
