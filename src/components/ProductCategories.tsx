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
    <section id="categories" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-4 text-foreground uppercase tracking-tight">
          Product <span className="text-gradient-primary">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center font-bold mb-16 max-w-2xl mx-auto text-base md:text-lg">
          Premium stainless steel pipe fittings manufactured to uncompromising international standards.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`group relative overflow-hidden rounded-2xl glass-strong cursor-pointer border border-white/5 transition-all duration-500 hover:shadow-steel hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-full aspect-square flex items-center justify-center bg-card/50 p-4">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center border-t border-white/5">
                 <h3 className="font-heading text-lg font-black text-foreground drop-shadow-sm">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
