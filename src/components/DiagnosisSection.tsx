import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, Zap, Check } from "lucide-react";
import macbookMockup from "@/assets/macbook-mockup.jpg";

interface DiagnosisSectionProps {
  onCtaClick: () => void;
}

export const DiagnosisSection = ({ onCtaClick }: DiagnosisSectionProps) => {
  const features = [
    {
      icon: BarChart3,
      title: "Analisar os dados do seu perfil no Instagram",
      description: "IA avançada examina cada aspecto do seu perfil"
    },
    {
      icon: Target,
      title: "Fornecer um diagnóstico completo e detalhado",
      description: "Relatório personalizado com insights acionáveis"
    },
    {
      icon: Zap,
      title: "Apontar soluções personalizadas",
      description: "Estratégias específicas para o seu nicho e audiência"
    }
  ];

  const checkpoints = [
    "Você não precisa entender nada sobre IA, a ferramenta faz o trabalho por você.",
    "O Perfil Check pode ser usado na versão gratuita ou paga do Chat GPT."
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Encontre em poucos minutos as respostas{" "}
                <span className="text-primary">que você procura há muito tempo.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                O <strong>Perfil Check</strong> não é um curso ou treinamento. Ele é uma ferramenta de Inteligência Artificial.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Um <span className="text-primary font-semibold">Agente GPT</span> que funciona como um "consultor digital", pronto para:
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Checkpoints */}
            <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
              {checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground leading-relaxed">{checkpoint}</p>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={onCtaClick}
              className="px-8 py-4 h-auto shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Quero destravar meu perfil
            </Button>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img 
                src={macbookMockup}
                alt="Dashboard de análise do Instagram"
                className="relative z-10 w-full max-w-lg h-auto object-contain rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};