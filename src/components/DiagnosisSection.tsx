import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DiagnosisSectionProps {
  onCtaClick: () => void;
}

export const DiagnosisSection = ({ onCtaClick }: DiagnosisSectionProps) => {
  const features = [
    {
      title: "Encontre os dados",
      description: "Saiba quais informações reunir sobre o seu perfil e onde encontrá-las de forma prática e rápida."
    },
    {
      title: "Descubra os parâmetros do seu mercado",
      description: "Entenda se o seu perfil está abaixo, acima ou na média dos seus concorrentes."
    },
    {
      title: "Diagnóstico completo com o Agente GPT",
      description: "Um Raio-X completo, com a análise da sua frequência de postagens, alcance orgânico, engajamento, média de visualizações e qualidade dos seus conteúdos. Tudo feito pela ferramenta de IA para você receber um diagnóstico claro e direto."
    },
    {
      title: "Plano de Ação Personalizado",
      description: "Descubra os seus próximos passos imediatos para destravar o crescimento do seu perfil."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Não ignore os sinais
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Encontre a causa e resolva o problema — antes que os danos sejam maiores
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              Esses sintomas são apenas a ponta do iceberg.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Algo mais profundo</strong> está comprometendo a saúde do seu perfil.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Assim como uma dor de cabeça pode ter diversas causas, a estagnação do seu perfil também precisa ser investigada a fundo.
            </p>
            <p className="text-lg text-primary font-semibold">
              Quanto mais você adia o check-up do seu perfil, maior a chance do problema se agravar e comprometer seus resultados.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Descubra qual é o problema do seu perfil com ajuda da Inteligência Artificial.
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-primary mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCtaClick}
            className="px-8 py-4 h-auto"
          >
            Iniciar meu diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
};