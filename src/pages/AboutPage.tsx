import { MainLayout } from "../components/layout/MainLayout";
import { AboutHero } from "../components/about/AboutHero";
import { AboutMarquee } from "../components/about/AboutMarquee";
import { AboutStory } from "../components/about/AboutStory";
import { AboutCraft } from "../components/about/AboutCraft";
import { AboutPhilosophy } from "../components/about/AboutPhilosophy";
import { InstagramSection } from "../components/sections/InstagramSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutMarquee />
      <AboutStory />
      <AboutCraft />
      <AboutPhilosophy />
      {/* We reuse the existing Instagram Section as seen in the screenshots */}
      <InstagramSection />
    </MainLayout>
  );
}
