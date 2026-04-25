import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench } from "lucide-react";

const productSections = [
  {
    title: "Elbow Fittings",
    items: ["90° Stainless Steel Pipe Elbow", "45° Carbon Steel Elbow", "Long Radius Elbow (LR Elbow)", "Short Radius Elbow (SR Elbow)", "Butt Weld Elbow", "Seamless Pipe Elbow"],
  },
  {
    title: "Tee Fittings",
    items: ["Equal Tee (Straight Tee)", "Reducing Tee", "Stainless Steel Tee", "Butt Weld Tee", "Fabricated Tee"],
  },
  {
    title: "Flanges",
    items: ["Weld Neck Flange (WN Flange)", "Slip-On Flange (SO Flange)", "Blind Flange (BL Flange)", "Socket Weld Flange (SW Flange)", "Threaded Flange", "Lap Joint Flange"],
  },
  {
    title: "Reducers",
    items: ["Concentric Reducer", "Eccentric Reducer", "Stainless Steel Reducer", "Butt Weld Reducer"],
  },
  {
    title: "Couplings & Connectors",
    items: ["Full Coupling", "Half Coupling", "Threaded Coupling", "Pipe Connector"],
  },
  {
    title: "Caps & Ends",
    items: ["Pipe End Cap", "Welded Cap", "Stainless Steel Cap"],
  },
  {
    title: "Special / Custom Products",
    items: ["Forged Steel Fittings", "High Pressure Pipe Fittings", "Industrial Pipe Connectors", "Custom Fabricated Fittings", "Heavy Duty Steel Pipe Fittings"],
  },
];

const MainProducts = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="py-24 bg-secondary relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-1.5 md:px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-4 text-foreground uppercase tracking-tight">
          Complete <span className="text-gradient-primary">Product Range</span>
        </h2>
        <p className="text-muted-foreground text-center font-bold mb-10 max-w-2xl mx-auto text-base md:text-lg">
          Master supplier of premium industrial pipe fittings manufactured to global engineering standards.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {productSections.map((section, i) => (
            <div
              key={section.title}
              className={`glass rounded-2xl p-3 md:p-8 hover:shadow-steel transition-all duration-500 border border-white/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center shadow-inner">
                  <Wrench className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm md:text-xl font-black text-foreground tracking-tight">{section.title}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="text-[10px] md:text-sm font-semibold text-muted-foreground flex items-start gap-1.5 md:gap-3 group/item">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mt-1 md:mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
