import { MainLayout } from "../components/layout/MainLayout";
import { Hero } from "../components/sections/Hero";
import { Categories } from "../components/sections/Categories";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { BrandStory } from "../components/sections/BrandStory";
import { InstagramSection } from "../components/sections/InstagramSection";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandStory />
      <InstagramSection />
    </MainLayout>
  );
}