import { Button } from "@/components/ui/button";
import macbookMockup from "@/assets/macbook-mockup.jpg";

interface FeaturesSectionProps {
  onCtaClick: () => void;
}

export const FeaturesSection = ({ onCtaClick }: FeaturesSectionProps) => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* First Features Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Encontre em poucos minutos as respostas que você procura há muito tempo.
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-elegant max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              O <strong>Perfil Check</strong> não é um curso ou treinamento. Ele é uma ferramenta de Inteligência Artificial.
            </p>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Um <strong>Agente GPT</strong> que funciona como um "consultor digital", pronto para:
            </p>
            
            <ul className="text-left text-lg space-y-4 max-w-2xl mx-auto mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Analisar os dados do seu perfil no Instagram
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Fornecer um diagnóstico completo e detalhado
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Apontar soluções personalizadas para você aplicar imediatamente
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                Você não precisa entender nada sobre IA, a ferramenta faz o trabalho por você
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                O Perfil Check pode ser usado na versão gratuita ou paga do Chat GPT
              </li>
            </ul>
            
            <Button 
              variant="cta" 
              size="lg" 
              onClick={onCtaClick}
              className="px-8 py-4 h-auto"
            >
              Quero destravar meu perfil
            </Button>
          </div>
        </div>

        {/* MacBook Mockup */}
        <div className="text-center">
          <img 
            src={macbookMockup}
            alt="Perfil Check em ação"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};