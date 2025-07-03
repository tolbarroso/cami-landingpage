import { Button } from "@/components/ui/button";
// Using the real Cami photo from upload

interface AboutSectionProps {
  onCtaClick: () => void;
}

export const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Quem vai te ajudar a encontrar e solucionar seus problemas no Instagram?
          </h2>
          
          <p className="text-2xl text-primary font-semibold mb-12">
            "Não existe mágica, existe lógica"
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/3 text-center mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/7264d9c5-7309-454d-a833-6853f047606c.png"
                alt="Cami - Especialista em Instagram"
                className="w-80 h-auto mx-auto rounded-3xl shadow-elegant"
              />
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-elegant">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Meu nome é <strong>Cami</strong>, sou <strong>especialista em crescimento digital</strong> e marketing de influência, com mais de 10 anos de experiência ajudando criadores de conteúdo e empresas a alcançarem seus objetivos no Instagram.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Em mais de uma década de carreira no mercado digital</strong>, seja como <strong>consultora, palestrante ou mentora</strong>, já ajudei mais de 50 mil pessoas a potencializarem seus resultados através das mídias sociais.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sou especialista em análise de dados do Instagram, estratégias de crescimento orgânico e otimização de perfis. Minha abordagem é sempre baseada em dados reais e métricas que realmente importam para o seu sucesso.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com o Perfil Check, você terá acesso a uma metodologia comprovada que já transformou milhares de perfis estagnados em máquinas de crescimento e vendas.
                </p>
              </div>
              
              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={onCtaClick}
                  className="px-8 py-4 h-auto"
                >
                  Quero aprender com a Cami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};