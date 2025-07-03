import { HeroSection } from "@/components/HeroSection";
import { SymptomsSection } from "@/components/SymptomsSection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatsAppDemoSection } from "@/components/WhatsAppDemoSection";
import { FormSection } from "@/components/FormSection";

const Index = () => {
  const handleCtaClick = () => {
    // Scroll to form section
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={handleCtaClick} />
      <DiagnosisSection onCtaClick={handleCtaClick} />
      <SymptomsSection onCtaClick={handleCtaClick} />
      <AboutSection onCtaClick={handleCtaClick} />
      <WhatsAppDemoSection onCtaClick={handleCtaClick} />
      <FormSection id="form-section" />
    </div>
  );
};

export default Index;
