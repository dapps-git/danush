"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoDark from "@/assets/navbar.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  {
    label: "+91 866 925 1123",
    href: "tel:+918669251123",
    icon: Phone,
  },
  {
    label: "info@danushtrade.com",
    href: "mailto:info@danushtrade.com",
    icon: Mail,
  },
  {
    label: "Vasai (East), Maharashtra",
    href: "#contact",
    icon: MapPin,
  },
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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-xl">
      <div className="bg-primary text-white">
        <div className="container mx-auto flex min-h-9 flex-wrap items-center justify-center gap-x-7 gap-y-1 px-4 py-1.5 text-[11px] font-semibold sm:text-xs md:text-sm">
          {contactInfo.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="flex items-center gap-1.5 transition-colors hover:text-blue-100 last:hidden md:last:flex">
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="whitespace-nowrap">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-500 ${scrolled ? "py-1" : "py-2"}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logoDark} alt="Danush Trade" className="h-12 w-auto object-contain md:h-16" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-nav text-[14px] font-normal tracking-wide text-slate-600 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/918669251123?text=Hello%20I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold tracking-[0.01em] text-white transition-colors hover:bg-primary/85">
              <FaWhatsapp className="h-4 w-4 text-white" /> Call Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="text-slate-800 md:hidden" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mx-4 mt-2 space-y-3 rounded-lg border border-slate-200 bg-white p-4 shadow-2xl md:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-nav text-lg font-semibold tracking-[0.01em] text-slate-800 transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/918669251123?text=Hello%20I%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold tracking-[0.01em] text-white transition-colors hover:bg-primary/85">
              <FaWhatsapp className="h-4 w-4 text-white" /> Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
