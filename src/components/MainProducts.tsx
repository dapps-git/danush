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
    <section id="products" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Complete <span className="text-gradient-primary">Product Range</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Steel pipe fittings supplier offering a comprehensive range of industrial pipe fittings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSections.map((section, i) => (
            <div
              key={section.title}
              className={`glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel mt-1.5 shrink-0" />
                    {item}
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
