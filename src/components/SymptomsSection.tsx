import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import symptomsIcons from "@/assets/symptoms-icons.png";

interface SymptomsSectionProps {
  onCtaClick: () => void;
}

export const SymptomsSection = ({ onCtaClick }: SymptomsSectionProps) => {
  const symptoms = [
    {
      title: "Frustração e cansaço",
      description: "Você está exausto de investir tempo e energia em conteúdos que não trazem seguidores, não engajam, nem vendem."
    },
    {
      title: "Indiferença",
      description: "Parece que você está falando sozinho, as pessoas não prestam atenção, não curtem e nem comentam nos seus posts."
    },
    {
      title: "Desânimo",
      description: "Suas visualizações estão baixas e você não sabe o que fazer para salvar seu alcance orgânico."
    },
    {
      title: "Ansiedade",
      description: "Seus seguidores não se tornam clientes e o perfil dos seus concorrentes está crescendo mais rápido que o seu."
    },
    {
      title: "Impotência",
      description: "Parece que os algoritmos e o Instagram estão jogando contra você."
    },
    {
      title: "Hemorragia",
      description: "Seu perfil perdeu muitos seguidores rapidamente."
    },
    {
      title: "Virose",
      description: "Você entrou em uma trend, compartilhou um meme, atraiu muitos seguidores, mas logo em seguida seu engajamento e alcance orgânico despencaram."
    },
    {
      title: "Confusão mental",
      description: "Você já tentou várias estratégias, até aumentou o investimento em mídia paga, mas não viu retorno financeiro e não sabe mais o que fazer."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Quais destes sintomas você apresenta?
          </h2>
          
          <img 
            src={symptomsIcons}
            alt="Sintomas do Instagram"
            className="w-full max-w-3xl mx-auto mb-12 rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {symptoms.map((symptom, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {symptom.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {symptom.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCtaClick}
            className="px-8 py-4 h-auto"
          >
            Iniciar meu check up agora
          </Button>
        </div>
      </div>
    </section>
  );
};