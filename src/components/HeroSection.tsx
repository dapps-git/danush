import { useEffect, useState } from "react";
import { Counter } from "@/components/Counter";
import heroOne from "@/assets/hero-bg.png";
import heroTwo from "@/assets/hero2.png";
import heroThree from "@/assets/heroo.webp";

const heroSlides = [
  {
    src: heroTwo,
    alt: "Industrial pipeline facility",
    position: "object-[62%_center] sm:object-[58%_center] md:object-center",
    imageClass: "scale-100 md:scale-[1.02]",
  },
  {
    src: heroOne,
    alt: "Steel pipelines in an industrial plant",
    position: "object-[64%_center] sm:object-[58%_center] md:object-center",
    imageClass: "scale-100",
  },
  {
    src: heroThree,
    alt: "Steel pipe fitting products",
    position: "object-[54%_center] md:object-center",
    imageClass: "scale-100",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#220135] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover ${slide.position} ${slide.imageClass} transition-[opacity,transform] duration-1000 ease-in-out ${activeSlide === index ? "opacity-80" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[#0B0D17]/55" />
      </div>

      <div className="container mx-auto px-4 pt-36 md:pt-32 relative z-10">
        <div className="space-y-5 md:space-y-7 text-center md:text-left max-w-2xl py-10 md:py-12">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.12] md:leading-[1.08] text-white">
            Leading Steel Pipe Fittings{" "}
            <span className="text-white font-semibold block sm:inline">
              Manufacturer
            </span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-blue-100/95 max-w-xl mx-auto md:mx-0 leading-relaxed">
            High-Quality Stainless Steel Elbows, Tees & Flanges — Trusted by industries across India & UAE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#220135] px-7 py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-blue-100 transition-colors"
            >
              Get Quote &rarr;
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 bg-[#220135]/30 text-white px-7 py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-[#220135]/50 transition-colors"
            >
              View Products
            </a>
          </div>

          {/* Stats Section / Trusted By substitute */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-7 pt-4 pb-4 px-3 sm:px-4 md:px-6 mt-5 text-center md:text-left bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl shadow-[0_8px_30px_rgba(11,13,23,0.35)]">
            <div className="border-r border-white/15 pr-2 sm:pr-4">
              <p className="text-blue-100/95 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] mb-2">Experience</p>
              <p className="text-sm sm:text-base md:text-xl font-semibold text-white leading-tight"><Counter end={10} suffix="+" /> Years</p>
            </div>
            <div className="border-r border-white/15 px-2 sm:px-4">
              <p className="text-blue-100/95 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] mb-2">Export</p>
              <p className="text-sm sm:text-base md:text-xl font-semibold text-white leading-tight"><Counter end={1} suffix="+" /> Countries</p>
            </div>
            <div className="pl-2 sm:pl-4">
              <p className="text-blue-100/95 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] mb-2">Trusted By</p>
              <p className="text-sm sm:text-base md:text-xl font-semibold text-white leading-tight"><Counter end={100} suffix="+" /> Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;