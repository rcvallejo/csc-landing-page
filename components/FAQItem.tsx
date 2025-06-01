
import React, { useState } from 'react';
import { FAQItemData } from '../types';

interface FAQItemProps {
  item: FAQItemData;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/20 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
          {item.question}
        </h3>
        <span className="text-primary text-2xl transform transition-transform duration-300">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 font-body text-md md:text-lg text-primary/90 whitespace-pre-line leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
