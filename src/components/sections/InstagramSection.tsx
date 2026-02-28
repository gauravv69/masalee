import { Instagram } from "lucide-react";

const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1599909673523-2895240ec8cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
];

export function InstagramSection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 text-amber-500 mb-4">
            <Instagram className="w-6 h-6" />
            <span className="font-semibold tracking-wider uppercase text-sm">Join Our Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Follow Us on Instagram</h2>
          <p className="text-neutral-600 text-lg">Tag <span className="font-medium text-neutral-900">@masaleespices</span> to be featured on our page!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <div key={idx} className="aspect-square relative group overflow-hidden bg-neutral-100 rounded-xl cursor-pointer">
              <img
                src={post}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
