export const FormSection = () => {
  return (
    <section id="form-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Comece seu diagnóstico agora
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Preencha o formulário abaixo e receba acesso imediato ao Perfil Check
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-elegant overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Tbv6JS70xBkxYckHS6iP"
              style={{
                width: '100%',
                height: '2370px',
                border: 'none',
                borderRadius: '0px'
              }}
              id="inline-Tbv6JS70xBkxYckHS6iP"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="[N8N] - InstaScrapper"
              data-height="2370"
              data-layout-iframe-id="inline-Tbv6JS70xBkxYckHS6iP"
              data-form-id="Tbv6JS70xBkxYckHS6iP"
              title="[N8N] - InstaScrapper"
            />
          </div>
        </div>
      </div>
      
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </section>
  );
};