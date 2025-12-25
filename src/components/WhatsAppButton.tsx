import { MessageCircle } from 'lucide-react';
import { useCartContext } from '@/contexts/CartContext';

export const WhatsAppButton = () => {
  const { cart, generateWhatsAppMessage } = useCartContext();

  const openWhatsApp = () => {
    const message = cart.length > 0 
      ? generateWhatsAppMessage() 
      : encodeURIComponent('Hello! I would like to place an order.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card text-foreground text-sm font-medium whitespace-nowrap shadow-soft opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Order on WhatsApp
      </span>
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </button>
  );
};
