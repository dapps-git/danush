import ctaBg from "@/assets/cta-new-bg.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/40" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold rounded-full mb-8 tracking-widest uppercase backdrop-blur-md border border-white/20">
            Direct Supply
          </span>
          <h2 className={`font-heading text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight leading-tight transition-all duration-1000 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-12"}`}>
            Looking for <span className="text-white underline decoration-white/30 underline-offset-8">Bulk</span> Pipe Fittings?
          </h2>
          <p className={`text-white/70 font-medium text-sm md:text-base mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-12"}`}>
            Get competitive factory-direct pricing on industrial pipe fittings. We supply high-precision solutions to India, UAE & worldwide.
          </p>
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-12"}`}>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-slate-900 px-8 py-3.5 rounded-lg font-heading font-bold text-base shadow-2xl shadow-black/30 hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Expert Quote
            </a>
            <div className="flex items-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <span className="text-white font-bold text-sm">10+</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
