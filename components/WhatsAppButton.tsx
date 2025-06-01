import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { sendFbConversionEvent } from '../utils/facebookApi';

// WhatsApp SVG Icon
const WhatsAppSvgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.62C8.75 21.39 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.13 19.74 7.89 19L7.53 18.78L4.45 19.59L5.29 16.59L5.04 16.22C4.18 14.88 3.82 13.33 3.82 11.91C3.82 7.39 7.51 3.7 12.04 3.7C16.57 3.7 20.26 7.39 20.26 11.91C20.26 16.43 16.57 20.13 12.04 20.13ZM17.34 14.45C17.13 14.34 16.13 13.85 15.93 13.77C15.73 13.69 15.58 13.65 15.42 13.9C15.27 14.15 14.76 14.73 14.59 14.9C14.42 15.08 14.26 15.12 14.06 15.03C13.85 14.93 13.05 14.67 12.11 13.8C11.33 13.08 10.81 12.23 10.65 11.97C10.49 11.72 10.61 11.59 10.74 11.47C10.85 11.36 11 11.17 11.13 11C11.27 10.83 11.31 10.71 11.42 10.5C11.53 10.29 11.49 10.13 11.42 10.03C11.34 9.92 10.88 8.76 10.69 8.29C10.5 7.82 10.32 7.86 10.19 7.85C10.07 7.85 9.91 7.84 9.76 7.84C9.61 7.84 9.34 7.9 9.14 8.15C8.93 8.4 8.42 8.87 8.42 9.99C8.42 11.11 9.17 12.19 9.3 12.35C9.44 12.52 10.87 14.79 13.06 15.69C13.58 15.91 14.02 16.06 14.36 16.17C14.83 16.32 15.25 16.28 15.58 16.2C15.96 16.12 16.95 15.57 17.13 15.29C17.31 15.01 17.31 14.77 17.34 14.66C17.36 14.55 17.35 14.5 17.34 14.45Z"/>
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const eventDetails = { content_name: 'WhatsApp Fixed Button' };
    // Facebook Pixel Event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', eventDetails);
    } else {
      console.warn('Facebook Pixel (fbq) not found. Make sure it is initialized.');
    }

    // Simulated Facebook Conversions API Event
    sendFbConversionEvent('Lead', eventDetails);
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-body font-semibold py-3 px-5 rounded-full shadow-xl flex items-center z-50 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      aria-label="Fale conosco pelo WhatsApp"
      onClick={handleClick}
      role="button"
    >
      <WhatsAppSvgIcon className="w-6 h-6 mr-2" />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;