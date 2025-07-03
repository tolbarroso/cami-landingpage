import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Plus, Camera, Mic } from "lucide-react";

interface WhatsAppDemoSectionProps {
  onCtaClick: () => void;
}

export const WhatsAppDemoSection = ({ onCtaClick }: WhatsAppDemoSectionProps) => {
  const messages = [
    {
      type: "user",
      text: "olá! meu perfil é @clientesdealtovalor",
      time: "10:48"
    },
    {
      type: "cami",
      text: "Oi, Cami na área. Já fiz um RAIO X do seu perfil @clientesdealtovalor, vou te mandar agora!",
      time: "10:49"
    },
    {
      type: "cami",
      text: "Olha só, você tá com uma pegada forte em high ticket e ofertas premium, o que é ótimo porque esse mercado é quente e tem muito valor pra explorar.",
      time: "10:49"
    },
    {
      type: "cami",
      text: "Mas vamos ser sinceros: seu conteúdo tem autoridade, mas falta aquele toque de conexão real. Você fala direto pro público certo, mas o engajamento não tá lá essas coisas — parece que a galera até vê, mas não sente vontade de interagir.",
      time: "10:49"
    },
    {
      type: "cami",
      text: "Visualmente o feed é meio bagunçado e sem padrão definido. Isso cansa quem chega pela primeira vez. Se quer ser referência em alto valor, precisa ter uma identidade visual que grite isso logo de cara.",
      time: "10:49"
    },
    {
      type: "cami",
      text: "Você posta bastante vídeo longo (IGTV), o que é bom pra aprofundar temas complexos como vendas high ticket. Só que esses vídeos têm visual pouco atraente e pouca chamada para ação clara. Resultado? Visualizações razoáveis e poucos comentários.",
      time: "10:49"
    }
  ];

  const actionItems = [
    "Organiza seu feed com uma estética consistente: cores, fontes e estilo visual alinhados.",
    "Use legendas mais provocativas e convide para interação direta (perguntas abertas).",
    "Poste histórias reais de clientes que tiveram resultados expressivos com você.",
    "Faça reels curtos com dicas rápidas para atrair atenção imediata.",
    "Mostre bastidores da sua rotina para humanizar a marca."
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Veja a Cami em ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Análise real de um perfil no Instagram. Veja como ela identifica problemas e oferece soluções práticas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/ba429ca0-59fe-472e-96a4-65680af2f9c5.png"
                alt="Cami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Cami</h3>
              <p className="text-sm opacity-90">online</p>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6" />
              <Plus className="w-6 h-6" />
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white min-h-[600px] p-4 space-y-4 max-h-[600px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-br-md' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-primary-foreground/70' : 'text-gray-500'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Action Items Message */}
            <div className="flex justify-start">
              <div className="max-w-md p-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-md">
                <p className="text-sm font-semibold mb-2">Dever de casa:</p>
                <div className="space-y-2">
                  {actionItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">10:49</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-md p-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-md">
                <p className="text-sm leading-relaxed">
                  Se quiser trocar ideia mais a fundo sobre posicionamento, marketing e dar um up nesse conteúdo... vou deixar aqui o contato de um consultor gente boa do meu time. Ele pode ajudar você a transformar essa presença em vendas reais.
                </p>
                <p className="text-xs text-gray-500 mt-2">10:49</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-gray-50 p-4 rounded-b-2xl flex items-center gap-3">
            <Plus className="w-6 h-6 text-gray-500" />
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <p className="text-gray-500 text-sm">Digite uma mensagem...</p>
            </div>
            <Camera className="w-6 h-6 text-gray-500" />
            <Mic className="w-6 h-6 text-gray-500" />
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Quer uma análise assim do seu perfil?
          </h3>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCtaClick}
            className="px-8 py-4 h-auto shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Quero minha análise personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};