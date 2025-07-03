import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import perfilCheckLogo from "@/assets/perfil-check-logo.png";
interface HeroSectionProps {
  onCtaClick: () => void;
}
export const HeroSection = ({
  onCtaClick
}: HeroSectionProps) => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen bg-gradient-hero text-white relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/40 blur-2xl animate-pulse delay-1000"></div>
        
        {/* Lighting effects for text depth */}
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary-glow/20 via-transparent to-transparent blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Left Content with enhanced lighting */}
        <div className="lg:w-1/2 space-y-8 relative">
          {/* Text background glow */}
          <div className="absolute -inset-12 bg-gradient-to-br from-[#1D3557]/20 via-[#457B9D]/15 to-[#A8DADC]/10 rounded-[3rem] blur-3xl opacity-80"></div>
          
          <div className="relative z-10">
            <img src={perfilCheckLogo} alt="Perfil Check" className="h-16 w-auto drop-shadow-lg" />
            
            <div className="space-y-6 mt-8">
  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
    <span className="text-primary-glow drop-shadow-lg">Seu conteúdo é bom, mas não vende?</span> Talvez o problema não seja o que você posta — e sim o que você não enxerga.
  </h1>

  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md">
    A Cami analisa o seu perfil com inteligência artificial e estratégia para mostrar o que está travando seu crescimento e como resolver.
  </p>
</div>

            <Button variant="hero" size="lg" onClick={onCtaClick} className="text-lg px-8 py-4 h-auto shadow-glow hover:shadow-elegant transition-all duration-300 mt-8 relative z-20">
              Quero destravar meu perfil
            </Button>
          </div>
        </div>

        {/* Right Content - Integrated Cami with lighting */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
          {/* Background glow for Cami */}
          <div className="absolute inset-0 bg-gradient-radial from-primary-glow/30 via-accent/20 to-transparent blur-2xl"></div>
          
          {/* Cami's photo with integration effects */}
          <div className="relative z-10">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
            <img src="/lovable-uploads/ba429ca0-59fe-472e-96a4-65680af2f9c5.png" alt="Cami - Especialista em Instagram" className="w-80 lg:w-96 h-auto object-contain relative z-10 mix-blend-screen drop-shadow-2xl" style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.3)) drop-shadow(0 0 80px rgba(255, 215, 0, 0.1))'
          }} />
            
            {/* Additional lighting effects around Cami */}
            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-primary-glow/40 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-accent/50 rounded-full blur-xl animate-pulse delay-1500"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <button onClick={scrollToNext} className="text-white/70 hover:text-white transition-colors animate-bounce">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>;
};
