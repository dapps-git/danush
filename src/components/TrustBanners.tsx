import { useScrollReveal } from "@/hooks/useScrollReveal";
import trustQuality from "@/assets/trust-quality.png";
import trustReliability from "@/assets/trust-reliability.png";
import { Award, CheckCircle, ShieldCheck, Star } from "lucide-react";

const TrustBanners = () => {
  const { ref, isVisible } = useScrollReveal();

  const logos = [
    { icon: <Award className="w-6 h-6" />, label: "ISO 9001" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "ASME" },
    { icon: <CheckCircle className="w-6 h-6" />, label: "PED/CE" },
    { icon: <Star className="w-6 h-6" />, label: "API" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {/* Banner 1: 100% Quality */}
          <div className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            <img
              src={trustQuality}
              alt="100% Quality Guarantee"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Banner 2: 100% Trust */}
          <div className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <img
              src={trustReliability}
              alt="100% Trust & Reliability"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Logos Section */}
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-border/50 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default">
              <div className="bg-secondary p-2 rounded-lg">
                {logo.icon}
              </div>
              <span className="font-heading font-bold text-sm tracking-wider uppercase">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanners;
