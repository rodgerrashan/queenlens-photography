import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+94719991164";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 hover:scale-110 text-white p-2 rounded-full shadow-xl z-100 transition duration-300 animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={36} />
    </a>
  );
};

export default WhatsAppButton;
