import { Shield, Globe, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import herooImg from "@/assets/heroo.png";

const features = [
  { icon: Shield, title: "ISO Certified", desc: "All products manufactured under strict ISO quality management systems ensuring global standards compliance." },
  { icon: Globe, title: "Export Quality", desc: "Supplying premium pipe fittings to industries across India, UAE, Middle East, Europe and worldwide." },
  { icon: Wrench, title: "Custom Manufacturing", desc: "Bespoke fabricated fittings tailored to your exact specifications with precision engineering." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          Why Choose <span className="text-gradient-primary">Danush Trade</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Trusted by leading industrial companies for high-quality butt weld fittings and carbon steel pipe fittings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative overflow-hidden rounded-2xl group transition-all duration-500 hover:shadow-steel ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Box Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={herooImg} 
                  alt={f.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Box Content */}
              <div className="relative z-10 p-8 text-center min-h-[320px] flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{f.title}</h3>
                <p className="text-white/95 font-medium text-sm md:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
