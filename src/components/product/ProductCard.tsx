interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full cursor-pointer">
      <div className="aspect-square overflow-hidden bg-neutral-100 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
          <button className="w-full bg-white text-neutral-900 font-semibold py-2 rounded-full hover:bg-neutral-100 transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
        <h3 className="text-lg font-medium text-neutral-900 line-clamp-2">{name}</h3>
        <p className="text-neutral-600 font-semibold">{price}</p>
      </div>
    </div>
  );
}
