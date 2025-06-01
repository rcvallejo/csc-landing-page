
import React from 'react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-background py-20 md:py-32 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
          Entenda e Recupere o Imposto Sindical Descontado do Seu RMC.
        </h1>
        <p className="font-body text-xl md:text-2xl text-primary mb-10">
          A CSC Advogados está aqui para ajudar!
        </p>
        <Button href={WHATSAPP_LINK} className="text-xl">
          Fale Agora com um Especialista via WhatsApp!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
