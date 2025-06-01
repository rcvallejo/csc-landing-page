
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-lightText py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="font-body text-md">
          &copy; {currentYear} CSC Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
