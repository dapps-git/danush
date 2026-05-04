import { useScrollReveal } from "@/hooks/useScrollReveal";
import productElbow from "@/assets/product-e.png";
import productTee from "@/assets/product-t.png";
import productFlange from "@/assets/product-f.png";
import productReducer from "@/assets/product-r.png";

const categories = [
  { name: "Elbows", desc: "90°, 45°, Long Radius & Short Radius Elbows in SS & CS", img: productElbow },
  { name: "Tees", desc: "Equal, Reducing & Butt Weld Tees for industrial piping", img: productTee },
  { name: "Flanges", desc: "Weld Neck, Slip-On, Blind & Socket Weld Flanges", img: productFlange },
  { name: "Reducers", desc: "Concentric & Eccentric Reducers in all grades", img: productReducer },
];

const ProductCategories = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="categories" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-4xl font-black text-center mb-4 md:mb-6 text-slate-900 tracking-tighter leading-tight">
          Product <span className="text-primary">Categories</span>
        </h2>
        <p className="text-slate-600 text-center font-medium mb-8 md:mb-10 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed">
          Premium stainless steel pipe fittings manufactured to uncompromising international standards.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`group flex flex-col h-full relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(34,1,53,0.1)] hover:-translate-y-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-full h-40 md:h-56 p-4 flex-none">
                <div className="w-full h-full bg-slate-50 rounded-xl flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-white transition-colors duration-500 shadow-inner">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-4 md:p-6 text-center mt-auto relative z-10 border-t border-slate-50 bg-white flex flex-col items-center">
                <div className="min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                  <h3 className="font-heading text-[10px] md:text-xs font-bold text-slate-800 tracking-widest group-hover:text-primary transition-colors duration-300 uppercase leading-tight">
                    {cat.name}
                  </h3>
                </div>
                <div className="w-8 h-0.5 bg-primary/10 mt-3 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductCategories;