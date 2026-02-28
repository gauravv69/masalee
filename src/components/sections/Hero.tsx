export function Hero() {
  return (
    <section className="relative bg-neutral-900 text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Indian Spices Background"
          className="w-full h-full object-cover scale-105"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Where Freshness Meets Tradition
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Discover our premium collection of authentic Indian spices, carefully sourced from the finest farms to bring rich, unforgettable flavors to your kitchen.
        </p>
        <button className="bg-white text-neutral-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
          View Spice Store
        </button>
      </div>
    </section>
  );
}
