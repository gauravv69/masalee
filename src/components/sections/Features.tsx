import { Leaf, Lock, Truck, Package } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Stock", desc: "Sourced directly from farms" },
  { icon: Lock, title: "Secure Payment", desc: "100% safe & encrypted" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick shipping nationwide" },
  { icon: Package, title: "Carefully Packed", desc: "Premium airtight packaging" },
];

export function Features() {
  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <feat.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-sm tracking-wider uppercase mb-1.5">{feat.title}</h4>
                <p className="text-sm text-neutral-500 font-light">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
