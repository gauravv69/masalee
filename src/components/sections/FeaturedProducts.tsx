import { ProductCard } from "../product/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Kashmiri Saffron Threads",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Organic Lakadong Turmeric Powder",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Kerala Whole Black Cardamom",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1599909673523-2895240ec8cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Royal Garam Masala Blend",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Featured Spices</h2>
            <p className="text-neutral-600 text-lg">Handpicked selections for your kitchen, loved by chefs.</p>
          </div>
          <button className="hidden md:inline-flex items-center text-neutral-900 font-semibold hover:text-neutral-600 transition-colors group">
            Shop All <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
            Shop All Collection
          </button>
        </div>
      </div>
    </section>
  );
}
