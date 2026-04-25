import { useScrollReveal } from "@/hooks/useScrollReveal";
import productElbow from "@/assets/tees.png";
import productTee from "@/assets/elbow.png";
import productFlange from "@/assets/flange.png";
import productReducer from "@/assets/reducer.png";
import productCap from "@/assets/product-cap.jpg";
import productCoupling from "@/assets/product-coupling.jpg";

const bestSellers = [
  { name: "Stainless Steel 90° Elbow", img: productElbow },
  { name: "SS Equal Tee", img: productTee },
  { name: "Industrial Pipe Flange", img: productFlange },
  { name: "Concentric Reducer", img: productReducer },
  { name: "Carbon Steel Pipe Cap", img: productCap },
  { name: "Heavy Duty Pipe Connector", img: productCoupling },
];

const BestSellers = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="best-sellers" className="py-20 relative">
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Best Selling <span className="text-gradient-primary">Products</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Top-rated stainless steel pipe fittings trusted by pipe elbow manufacturers across India
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {bestSellers.map((p, i) => (
            <div
              key={p.name}
              className={`group glass rounded-xl overflow-hidden hover:shadow-steel transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full bg-card overflow-hidden flex items-center justify-center">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full font-heading">
                  Top Selling
                </span>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-heading text-sm md:text-base font-bold text-foreground">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
