import heroBg from "@/assets/hero-bg.png";
import productElbow from "@/assets/product-elbow.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with subtle zoom animation */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial pipeline facility"
          className="w-full h-full object-cover hero-bg-animate"
        />
      </div>

      {/* Reduced dark overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Reduced gradient overlay - lighter left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 pt-20">
        <div className="flex-1 space-y-6 text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Leading Steel Pipe Fittings{" "}
            <span className="text-gradient-primary">Manufacturer</span>
          </h1>

          <p className="text-lg md:text-xl text-steel-light max-w-xl">
            High-Quality Stainless Steel Elbows, Tees & Flanges — Trusted by industries across India & UAE
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center btn-premium text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold text-lg shadow-steel"
            >
              Get Quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center border-2 border-steel text-steel-light px-8 py-3.5 rounded-lg font-heading font-semibold text-lg hover:bg-steel/10 transition-all"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Floating product image */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-slate/10 rounded-full blur-3xl" />
           
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
