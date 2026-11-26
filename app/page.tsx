import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/layout/AboutSection";
import ServicesSection from "@/components/layout/ServicesSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import FaqSection from "@/components/layout/FaqSection";

export default function Home() {
  return (
    <>

      <main>
        <Hero/>
        <AboutSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <FaqSection/>
      </main>
    </>
  );
}
