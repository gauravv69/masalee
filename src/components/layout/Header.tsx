import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-neutral-900">
            Masalee 🌶️
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">All Products</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Whole Spices</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Ground Spices</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blended Masalas</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Herbs & Aroma</a>
          </nav>
          <div className="flex items-center">
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors relative cursor-pointer group">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
