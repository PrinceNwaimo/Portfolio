import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import PageMeta from '@/components/common/PageMeta';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Nwaimo Prince - DevOps & Cloud Engineer Portfolio"
        description="Professional portfolio of Nwaimo Prince, a DevOps and Cloud Engineer specializing in AWS & Azure infrastructures, CI/CD automation, and containerized microservices."
      />
      <div className="min-h-screen w-full">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
