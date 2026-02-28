import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Masalee <Flame className="w-6 h-6 text-amber-500" />
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Authentic Indian spices delivered to your doorstep. Where freshness meets tradition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Shop</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whole Spices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ground Spices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blended Masalas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">About</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Masalee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
