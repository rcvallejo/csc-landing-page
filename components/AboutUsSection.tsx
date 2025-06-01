
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-lightText">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          CSC Advogados: Sua Tranquilidade Jurídica no Direito Bancário e Previdenciário.
        </h2>
        <div className="font-body text-lg md:text-xl space-y-6 text-justify leading-relaxed">
          <p>
            Para você, aposentado, oferecemos soluções eficazes e ágeis com um atendimento verdadeiramente personalizado. Nosso compromisso é manter você informado em cada etapa do processo, com acompanhamento proativo e relatórios periódicos, para que sua paz de espírito seja nossa prioridade.
          </p>
          <p>
            Atuamos em todas as nuances do direito bancário e previdenciário, indo além do recente debate sobre o RMC para garantir seus direitos com transparência e dedicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
