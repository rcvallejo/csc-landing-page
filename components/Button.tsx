import React from 'react';
import { sendFbConversionEvent } from '../utils/facebookApi';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '', target = '_blank', rel = 'noopener noreferrer' }) => {
  const handleClick = () => {
    // Facebook Pixel Event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    } else {
      console.warn('Facebook Pixel (fbq) not found. Make sure it is initialized.');
    }

    // Simulated Facebook Conversions API Event
    sendFbConversionEvent('Lead');
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-block bg-primary text-lightText font-body font-semibold text-lg px-10 py-4 rounded-md shadow-lg hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${className}`}
      onClick={handleClick}
      role="button"
    >
      {children}
    </a>
  );
};

export default Button;