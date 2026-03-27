import ctaBg from "@/assets/cta-bg.jpg";

const CtaBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Looking for Bulk Pipe Fittings Supplier?
        </h2>
        <p className="text-steel-light text-lg mb-8 max-w-xl mx-auto">
          Get competitive pricing on industrial pipe fittings. We supply to India, UAE & worldwide.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-primary text-primary-foreground px-10 py-4 rounded-lg font-heading font-semibold text-lg hover:brightness-110 transition-all shadow-steel"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
