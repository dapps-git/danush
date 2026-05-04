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
    <section id="products" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-4 md:mb-6 text-slate-900 tracking-tighter leading-tight">
          Complete <span className="text-primary">Product Range</span>
        </h2>
        <p className="text-slate-600 text-center font-medium mb-8 md:mb-16 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed">
          Master supplier of premium industrial pipe fittings manufactured to global engineering standards.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {productSections.map((section, i) => (
            <div
              key={section.title}
              className={`flex flex-col h-full rounded-xl p-4 md:p-6 border border-slate-100 bg-white
  shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1
  ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>

                <h3 className="font-heading text-xs md:text-base font-bold text-slate-800 tracking-tight leading-snug">
                  {section.title}
                </h3>
              </div>

              <div className="h-px w-full bg-slate-100 mb-4" />

              <ul className="space-y-2 flex-grow">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-[10px] md:text-xs font-medium text-slate-600 flex items-start gap-2 leading-relaxed group/item cursor-default"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/30 mt-1.5 shrink-0 transition-all duration-300 group-hover/item:bg-primary group-hover/item:scale-125" />
                    <span className="group-hover/item:text-primary transition-colors">{item}</span>
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