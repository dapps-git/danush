import { useScrollReveal } from "@/hooks/useScrollReveal";
import productElbow from "@/assets/tees.png";
import productTee from "@/assets/elbow.png";
import productFlange from "@/assets/flange.png";
import productReducer from "@/assets/reducer.png";
import productCap from "@/assets/cap.png";
import productCoupling from "@/assets/pipe.png";

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
    <section id="best-sellers" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-2xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 uppercase">
            Best Selling <span className="text-white/40">Products</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
            Precision-engineered industrial fittings trusted by global partners for high-pressure applications.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {bestSellers.map((p, i) => (
            <div
              key={p.name}
              className={`group flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:-translate-y-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full h-44 md:h-64 p-4 flex-none">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center p-6 shadow-inner relative overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-50" />
                  <img src={p.img} alt={p.name} loading="lazy" className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-sm text-white text-[8px] font-bold px-3 py-1 rounded-full font-heading shadow-lg z-20 uppercase tracking-widest border border-white/10">
                  Top Rated
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center justify-center flex-grow">
                <div className="min-h-[48px] flex items-center justify-center">
                  <h3 className="font-heading text-[11px] md:text-sm font-bold text-white leading-tight uppercase tracking-[0.15em] text-center group-hover:text-white/90 transition-colors">
                    {p.name}
                  </h3>
                </div>
                <div className="w-8 h-0.5 bg-white/20 mt-4 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BestSellers;