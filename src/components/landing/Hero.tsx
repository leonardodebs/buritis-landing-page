import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-churrasco.jpg";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Churrasco artesanal sendo fatiado no Buritis Restaurante"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div className="relative z-10 container mx-auto px-5 text-center text-white">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs uppercase tracking-[0.2em]">
          Self-Service · Goiânia
        </span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 max-w-5xl mx-auto">
          O sabor autêntico do{" "}
          <span className="italic text-accent">Centro de Goiânia</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Buffet completo com churrasco na brasa, peixes grelhados e o melhor da
          comida caseira mineira. Tradição que alimenta gerações.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 shadow-[var(--shadow-warm)] hover:scale-105 transition-all"
          >
            <a href="#destaques">
              Ver Cardápio <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-base bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary transition-all"
          >
            <a
              href="https://wa.me/5562999517766?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir Delivery
            </a>
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/80">
          <MapPin className="h-4 w-4" />
          Alameda dos Buritis, 238 — Setor Morais
        </div>
      </div>
    </section>
  );
}
