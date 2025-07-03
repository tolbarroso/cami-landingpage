import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SymptomsSection } from "@/components/SymptomsSection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { AboutSection } from "@/components/AboutSection";
import { FormSection } from "@/components/FormSection";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <FeaturesSection onCtaClick={scrollToForm} />
      <SymptomsSection onCtaClick={scrollToForm} />
      <DiagnosisSection onCtaClick={scrollToForm} />
      <AboutSection onCtaClick={scrollToForm} />
      <FormSection />
    </div>
  );
};

export default Index;
