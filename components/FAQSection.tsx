
import React from 'react';
import { faqs } from '../constants';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
