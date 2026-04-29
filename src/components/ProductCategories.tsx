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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`group flex flex-col h-full relative overflow-hidden rounded-xl bg-white cursor-pointer border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-white p-4 relative">
                <div className="absolute inset-0 bg-slate-50/30 group-hover:bg-white transition-colors duration-500" />
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-3 md:p-4 text-center mt-auto relative z-10">
                <h3 className="font-heading text-sm md:text-base font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
