import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactBar from "@/components/ContactBar";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-light text-dark min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactBar />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
