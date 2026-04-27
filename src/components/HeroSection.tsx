import heroBg from "@/assets/hero2.png";
import { Counter } from "@/components/Counter";

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

      {/* Subtle overlay to soften the image slightly */}
      <div className="absolute inset-0 bg-background/20" />

      {/* Gradient overlay just enough to keep text readable without hiding the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 pt-20">
        <div className="flex-1 space-y-6 text-left">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground ">
            Leading Steel Pipe Fittings{" "}
            <span className="text-gradient-primary">Manufacturer</span>
          </h1>

          <p className="text-base md:text-xl font-bold text-foreground  max-w-xl">
            High-Quality Stainless Steel Elbows, Tees & Flanges — Trusted by industries across India & UAE
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center btn-premium text-primary-foreground px-6 py-2.5 md:px-8 md:py-3.5 rounded-lg font-heading font-semibold text-base md:text-lg shadow-steel"
            >
              Get Quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-2.5 md:px-8 md:py-3.5 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all"
            >
              View Products
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-foreground/30">
            <div>
              <p className="font-heading text-4xl md:text-5xl font-black text-primary mb-1 drop-shadow-sm">
                <Counter end={10} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-foreground font-bold leading-tight">Years<br />Experience</p>
            </div>
            <div>
              <p className="font-heading text-4xl md:text-5xl font-black text-primary mb-1 drop-shadow-sm">
                <Counter end={1} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-foreground font-bold leading-tight">Export<br />Countries</p>
            </div>
            <div>
              <p className="font-heading text-4xl md:text-5xl font-black text-primary mb-1 drop-shadow-sm">
                <Counter end={100} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-foreground font-bold leading-tight">Successful<br />Clients</p>
            </div>
          </div>
        </div>

        {/* Floating space */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="relative">
            {/* Subtle glow kept very minimal */}
            <div className="absolute -inset-8 bg-slate/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Adjusted bottom shadow - kept extremely subtle to avoid "white block" look */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/10 to-transparent" />
    </section>
  );
};

export default HeroSection;
