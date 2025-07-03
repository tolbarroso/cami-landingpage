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
    <section className="min-h-screen text-white relative overflow-hidden hero-background">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Left side content (text + CTA) */}
        <div className="lg:w-1/2 space-y-8 relative">
          {/* Decorative blurred light behind text */}
          <div className="absolute -inset-8 lg:-inset-12 bg-gradient-to-br from-[#1D3557]/30 via-[#457B9D]/20 to-[#A8DADC]/15 rounded-[2rem] lg:rounded-[3rem] blur-2xl lg:blur-3xl opacity-80"></div>

          <div className="relative z-10">
            {/* HEADLINE + PARAGRAPH */}
            <div className="space-y-4 mt-8">
              <h1 className="text-2xl lg:text-6xl font-bold leading-tight text-left">
                <span className="text-primary-glow drop-shadow-lg">
                  Seu conteúdo é bom, mas não vende?
                </span>{" "}
                Talvez o problema não seja o que você posta — e sim o que você
                não enxerga.
              </h1>

              <p className="text-base lg:text-2xl text-white/90 leading-relaxed drop-shadow-md text-left">
                A Cami analisa o seu perfil com inteligência artificial e
                estratégia para mostrar o que está travando seu crescimento e
                como resolver.
              </p>
            </div>

            {/* CALL TO ACTION */}
            <div className="flex justify-start mt-6">
              <Button
                variant="hero"
                size="lg"
                onClick={onCtaClick}
                className="text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4 h-auto shadow-glow hover:shadow-elegant transition-all duration-300 relative z-20 w-full max-w-xs lg:w-auto lg:max-w-none"
              >
                Quero destravar meu perfil
              </Button>
            </div>
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
