export function BrandStory() {
  return (
    <section className="py-24 bg-neutral-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[600px] shadow-2xl">
            <div className="absolute inset-0 bg-neutral-800/20" />
            <img
              src="https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Indian Spice Market Tradition"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <p className="font-semibold text-lg italic">"A legacy of flavor, passed down through generations."</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Our Heritage of <span className="text-amber-500">Flavor</span>
            </h2>
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                For over five generations, our family has traveled across the vibrant spice markets of India, hand-selecting only the finest whole spices. We believe that truly great food starts with authentic ingredients.
              </p>
              <p>
                Every blend we craft is a tribute to traditional recipes, carefully preserved and passed down. From the sun-baked soil to your kitchen table, we ensure quality at every step of the journey.
              </p>
              <p className="font-medium text-white pt-4">
                When you open a jar of Masalee, you're not just cooking — you're celebrating a legacy of richness and aroma.
              </p>
            </div>
            <button className="mt-10 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-neutral-900 transition-colors duration-300">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
