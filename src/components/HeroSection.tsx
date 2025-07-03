import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/HeroBackGround.png')" }}
    >

      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Left side content (text + CTA) */}
        <div className="lg:w-1/2 space-y-8 relative">
          {/* Decorative blurred light behind text */}
          <div className="absolute -inset-12 bg-gradient-to-br from-[#1D3557]/20 via-[#457B9D]/15 to-[#A8DADC]/10 rounded-[3rem] blur-3xl opacity-80"></div>

          <div className="relative z-10">
            {/* HEADLINE + PARAGRAPH */}
            <div className="space-y-6 mt-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-glow drop-shadow-lg">
                  Seu conteúdo é bom, mas não vende?
                </span>{" "}
                Talvez o problema não seja o que você posta — e sim o que você
                não enxerga.
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md">
                A Cami analisa o seu perfil com inteligência artificial e
                estratégia para mostrar o que está travando seu crescimento e
                como resolver.
              </p>
            </div>

            {/* CALL TO ACTION */}
            <Button
              variant="hero"
              size="lg"
              onClick={onCtaClick}
              className="text-lg px-8 py-4 h-auto shadow-glow hover:shadow-elegant transition-all duration-300 mt-8 relative z-20"
            >
              Quero destravar meu perfil
            </Button>
          </div>
        </div>

        {/* Right Content - Removed Cami avatar and glows */}
        {/* Intentionally left empty to preserve layout balance */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
          {/* You could place another visual here later if desired */}
        </div>
      </div>

      {/* Scroll indicator at the bottom */}
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
