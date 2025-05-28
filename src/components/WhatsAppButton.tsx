import React from "react";

const whatsappNumber = "56975387007"; // +56 9 7538 7007 (Chile, country code without '+')
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Mini-Startup`;

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      bottom: 24,
      right: 24,
      zIndex: 1000,
      background: "#25D366",
      borderRadius: "50%",
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      cursor: "pointer",
      transition: "box-shadow 0.2s"
    }}
    aria-label="Contactar por WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="white"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M22.5 17.6c-.3-.2-1.8-.9-2-1-0.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.5.1-.2.1-.4.2-.6 0-.2 0-.5-.1-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.6 1 2.7.1.2 1.7 2.6 4.1 3.5.6.2 1.1.3 1.5.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"
        fill="#fff"
      />
    </svg>
  </a>
);

export default WhatsAppButton;
