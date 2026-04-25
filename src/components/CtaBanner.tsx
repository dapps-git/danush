import ctaBg from "@/assets/cta-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* Soft overlay so the image is visible but text remains readable */}
      <div className="absolute inset-0 bg-background/30" />

      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          Looking for Bulk Pipe Fittings Supplier?
        </h2>
        <p className={`text-foreground/90 font-medium text-lg mb-8 max-w-xl mx-auto transition-all duration-700 delay-150 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          Get competitive pricing on industrial pipe fittings. We supply to India, UAE & worldwide.
        </p>
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}>
          <a
            href="#contact"
            className="inline-flex items-center btn-premium text-primary-foreground px-10 py-4 rounded-lg font-heading font-semibold text-lg shadow-steel"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
