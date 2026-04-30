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
    <section id="why-us" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-4 md:mb-6 text-[#00072D] tracking-tighter leading-tight">
          Why Choose <span className="text-primary underline decoration-primary/20 underline-offset-8">Danush Trade</span>
        </h2>
        <p className="text-slate-600 text-center mb-12 md:mb-8 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed font-medium">
          Trusted by leading industrial companies for high-quality butt weld fittings and carbon steel pipe fittings
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative flex flex-col min-h-[220px] md:min-h-[300px] overflow-hidden rounded-xl group transition-all duration-500 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Box Content */}
              <div className="relative z-10 p-4 md:p-8 text-center flex-grow flex flex-col items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <f.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-heading text-sm md:text-xl font-bold text-slate-800 mb-2 md:mb-3 tracking-tight">{f.title}</h3>
                <p className="text-slate-600 font-medium text-[10px] md:text-sm leading-relaxed">{f.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-primary/10 w-full">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
