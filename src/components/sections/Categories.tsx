const CATEGORIES = [
  {
    name: "Whole Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Aromatic & Pure"
  },
  {
    name: "Ground Spices",
    image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Rich & Flavorful"
  },
  {
    name: "Blended Masalas",
    image: "https://images.unsplash.com/photo-1599909673523-2895240ec8cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Authentic Recipes"
  },
  {
    name: "Herbs & Aroma",
    image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Fresh & Natural"
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-neutral-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Shop by Category</h2>
          <p className="text-neutral-600 text-lg">Explore our wide range of premium spices</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 group-hover:via-black/40 transition-colors z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-neutral-300 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{category.desc}</p>
                <h3 className="text-2xl font-bold text-white tracking-wide">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
