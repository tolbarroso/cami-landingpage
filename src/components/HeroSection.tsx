import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import perfilCheckLogo from "@/assets/perfil-check-logo.png";
// Using the real Cami photo from upload

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
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 z-10">
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
            className="text-lg px-8 py-4 h-auto"
          >
            Quero destravar meu perfil
          </Button>
        </div>

        {/* Right Content - Cami's Photo */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative">
            <img 
              src="/lovable-uploads/7264d9c5-7309-454d-a833-6853f047606c.png"
              alt="Cami - Especialista em Instagram"
              className="w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
            />
            
            {/* Floating testimonials/notifications */}
            <div className="absolute top-20 -left-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-60 border border-white/20">
              <p className="font-medium">Casal trealizando Juntos NÃO ESTÁ ENTREGANDO A CHAVE ELE ESTÁ ENTREGANDO A PORTA ABERTA PARA VCS 😍</p>
            </div>
            
            <div className="absolute top-60 -right-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-60 border border-white/20">
              <p className="font-medium">Meire Schueller Chocada com a qualidade das informações. Tudo baseado em dados e não bla bla bla. Arrasou!</p>
            </div>
            
            <div className="absolute bottom-40 -left-8 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-60 border border-white/20">
              <p className="font-medium">Juliana Ribeiro Mudou minha gestão de clientes</p>
            </div>
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