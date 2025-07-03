import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, MessageCircle, TrendingDown, Users, Shield, Zap, Activity, Brain } from "lucide-react";

interface SymptomsSectionProps {
  onCtaClick: () => void;
}

export const SymptomsSection = ({ onCtaClick }: SymptomsSectionProps) => {
  const symptoms = [
    {
      title: "Frustração e cansaço",
      description: "Você está exausto de investir tempo e energia em conteúdos que não trazem seguidores, não engajam, nem vendem.",
      icon: AlertTriangle,
      color: "text-orange-400"
    },
    {
      title: "Indiferença",
      description: "Parece que você está falando sozinho, as pessoas não prestam atenção, não curtem e nem comentam nos seus posts.",
      icon: MessageCircle,
      color: "text-orange-400"
    },
    {
      title: "Desânimo",
      description: "Suas visualizações estão baixas e você não sabe o que fazer para salvar seu alcance orgânico.",
      icon: TrendingDown,
      color: "text-orange-400"
    },
    {
      title: "Ansiedade",
      description: "Seus seguidores não se tornam clientes e o perfil dos seus concorrentes está crescendo mais rápido que o seu.",
      icon: Users,
      color: "text-orange-400"
    },
    {
      title: "Impotência",
      description: "Parece que os algoritmos e o Instagram estão jogando contra você.",
      icon: Shield,
      color: "text-orange-400"
    },
    {
      title: "Hemorragia",
      description: "Seu perfil perdeu muitos seguidores rapidamente.",
      icon: Zap,
      color: "text-orange-400"
    },
    {
      title: "Virose",
      description: "Você entrou em uma trend, compartilhou um meme, atraiu muitos seguidores, mas logo em seguida seu engajamento e alcance orgânico despencaram.",
      icon: Activity,
      color: "text-orange-400"
    },
    {
      title: "Confusão mental",
      description: "Você já tentou várias estratégias, até aumentou o investimento em mídia paga, mas não viu retorno financeiro e não sabe mais o que fazer.",
      icon: Brain,
      color: "text-orange-400",
      fullWidth: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-symptoms text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-primary-glow blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Quais destes sintomas <span className="text-primary-glow">você apresenta?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {symptoms.slice(0, 6).map((symptom, index) => {
            const IconComponent = symptom.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <IconComponent className={`w-12 h-12 ${symptom.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {symptom.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {symptom.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Last two symptoms in a different layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {symptoms.slice(6).map((symptom, index) => {
            const IconComponent = symptom.icon;
            return (
              <Card key={index + 6} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <IconComponent className={`w-12 h-12 ${symptom.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {symptom.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {symptom.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCtaClick}
            className="px-8 py-4 h-auto shadow-glow hover:shadow-elegant transition-all duration-300"
          >
            Iniciar meu check up agora
          </Button>
        </div>
      </div>
    </section>
  );
};