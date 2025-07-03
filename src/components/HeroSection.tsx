import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import perfilCheckLogo from "@/assets/perfil-check-logo.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-primary-glow blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <img 
            src={perfilCheckLogo} 
            alt="Perfil Check" 
            className="h-16 w-auto"
          />
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary-glow">O primeiro passo para o sucesso do seu perfil</span> é identificar o que está bloqueando o seu crescimento no Instagram.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Descubra o que há de errado com o seu perfil com a ajuda da Inteligência Artificial.
            </p>
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            onClick={onCtaClick}
            className="text-lg px-8 py-4 h-auto shadow-glow hover:shadow-elegant transition-all duration-300"
          >
            Quero destravar meu perfil
          </Button>
        </div>

        {/* Right Content - Cami's Photo without background */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative">
            <img 
              src="/lovable-uploads/ba429ca0-59fe-472e-96a4-65680af2f9c5.png"
              alt="Cami - Especialista em Instagram"
              className="w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};