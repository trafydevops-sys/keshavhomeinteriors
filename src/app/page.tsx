import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import DesignProcess from "@/components/sections/DesignProcess";
import Materials from "@/components/sections/Materials";
import ClientExperience from "@/components/sections/ClientExperience";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <FeaturedProjects />
      <Services />
      <DesignProcess />
      <Materials />
      <ClientExperience />
      <PortfolioGallery />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
