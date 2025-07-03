import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SymptomsSection } from "@/components/SymptomsSection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  const handleCtaClick = () => {
    // You can add any action here, like opening a modal or redirecting
    console.log("CTA clicked");
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={handleCtaClick} />
      <FeaturesSection onCtaClick={handleCtaClick} />
      <SymptomsSection onCtaClick={handleCtaClick} />
      <DiagnosisSection onCtaClick={handleCtaClick} />
      <AboutSection onCtaClick={handleCtaClick} />
    </div>
  );
};

export default Index;
