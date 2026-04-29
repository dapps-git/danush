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
    <section id="best-sellers" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-4 md:mb-6 text-slate-900 tracking-tighter leading-tight">
          Best Selling <span className="text-primary">Products</span>
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed font-medium">
          Top-rated stainless steel pipe fittings trusted by pipe elbow manufacturers across India
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
          {bestSellers.map((p, i) => (
            <div
              key={p.name}
              className={`group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 bg-slate-50 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
                <img src={p.img} alt={p.name} loading="lazy" className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute top-2 left-2 bg-primary text-white text-[7px] md:text-[8px] font-bold px-1.5 py-0.5 rounded-full font-heading shadow-md z-20 uppercase tracking-wider">
                  Top Selling
                </div>
              </div>

              <div className="p-3 md:p-4 mt-auto text-center">
                <h3 className="font-heading text-xs md:text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
