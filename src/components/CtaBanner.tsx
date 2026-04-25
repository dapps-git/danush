import ctaBg from "@/assets/hero-bg.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* Soft overlay so the image is visible but text remains readable */}
      <div className="absolute inset-0 bg-background/40" />

      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <h2 className={`font-heading text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 uppercase tracking-tight transition-all duration-700 drop-shadow-lg ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          Looking for Bulk Pipe Fittings?
        </h2>
        <p className={`text-foreground font-bold text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-all duration-700 delay-150 drop-shadow-md ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          Get competitive pricing on industrial pipe fittings. We supply high-quality artifacts to India, UAE & worldwide.
        </p>
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          <a
            href="#contact"
            className="inline-flex items-center btn-premium text-primary-foreground px-10 py-4 rounded-xl font-heading font-black text-lg md:text-xl shadow-steel hover:scale-105 transition-transform"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
