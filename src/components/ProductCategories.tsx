import { useScrollReveal } from "@/hooks/useScrollReveal";
import productElbow from "@/assets/product-elbow.jpg";
import productTee from "@/assets/product-tee.jpg";
import productFlange from "@/assets/product-flange.jpg";
import productReducer from "@/assets/product-reducer.jpg";

const categories = [
  { name: "Elbows", desc: "90°, 45°, Long Radius & Short Radius Elbows in SS & CS", img: productElbow },
  { name: "Tees", desc: "Equal, Reducing & Butt Weld Tees for industrial piping", img: productTee },
  { name: "Flanges", desc: "Weld Neck, Slip-On, Blind & Socket Weld Flanges", img: productFlange },
  { name: "Reducers", desc: "Concentric & Eccentric Reducers in all grades", img: productReducer },
];

const ProductCategories = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="categories" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Product <span className="text-gradient-primary">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Premium stainless steel pipe fittings manufactured to international standards
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`group relative overflow-hidden rounded-xl glass cursor-pointer transition-all duration-500 hover:shadow-steel ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{cat.name}</h3>
                <p className="text-sm text-steel-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
