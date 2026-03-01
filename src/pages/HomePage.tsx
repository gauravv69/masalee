import { MainLayout } from "../components/layout/MainLayout";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { Categories } from "../components/sections/Categories";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { BrandStory } from "../components/sections/BrandStory";
import { InstagramSection } from "../components/sections/InstagramSection";
import { ComparisonSection } from "../components/sections/ComparisonSection";
import { ProductCollections } from "../components/sections/ProductCollections";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <BrandStory />
      <Categories />
      <ComparisonSection />
      <ProductCollections />
      <InstagramSection />
    </MainLayout>
  );
}