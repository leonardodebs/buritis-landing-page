import { Phone } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5562999517766?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all md:hidden"
    >
      <Phone className="h-6 w-6 text-white" />
    </a>
  );
}
