import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919891227010";
  const message = "Hi! I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-5 py-3 shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="WhatsApp Us"
    >
      <MessageCircle size={24} />
      <span className="font-medium">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppButton;
