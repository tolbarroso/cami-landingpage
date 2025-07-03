import { useEffect } from "react";

interface FormSectionProps {
  id?: string;
}

export const FormSection = ({ id = "form-section" }: FormSectionProps) => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id={id} className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            Comece sua análise agora
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba sua análise personalizada do Instagram em poucos minutos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-elegant p-8">
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
    </section>
  );
};