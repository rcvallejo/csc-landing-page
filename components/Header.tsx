
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-background py-6 shadow-sm">
      <div className="container mx-auto px-4 flex justify-center md:justify-start">
        <div className="border-2 border-primary py-2 px-6 inline-block">
          <span className="font-display text-5xl font-bold text-primary tracking-wider">
            CSC
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
