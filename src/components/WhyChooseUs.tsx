import { Shield, Globe, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Shield, title: "ISO Certified", desc: "All products manufactured under strict ISO quality management systems ensuring global standards compliance." },
  { icon: Globe, title: "Export Quality", desc: "Supplying premium pipe fittings to industries across India, UAE, Middle East, Europe and worldwide." },
  { icon: Wrench, title: "Custom Manufacturing", desc: "Bespoke fabricated fittings tailored to your exact specifications with precision engineering." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Why Choose <span className="text-gradient-primary">Danush Trade</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Trusted by leading industrial companies for high-quality butt weld fittings and carbon steel pipe fittings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 group ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
