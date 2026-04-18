import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mariana S.",
    rating: 5,
    text: "Comida deliciosa, muitas opções de pratos. O churrasco é excelente e o atendimento muito atencioso. Voltarei sempre!",
  },
  {
    name: "Carlos A.",
    rating: 5,
    text: "Melhor self-service do Centro! O vermelho ao forno é simplesmente espetacular. Ambiente familiar e preço justo.",
  },
  {
    name: "Juliana R.",
    rating: 4,
    text: "Buffet de saladas muito variado, tudo fresquinho. A comida caseira tem aquele tempero de família que a gente sente falta.",
  },
  {
    name: "Roberto M.",
    rating: 5,
    text: "Frequento há anos. Qualidade impecável, comida sempre quente e saborosa. Os peixes são o ponto alto.",
  },
  {
    name: "Patrícia L.",
    rating: 5,
    text: "Ótima opção para almoço durante a semana. Tudo muito limpo, organizado e com sabor incrível.",
  },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            O que dizem por aí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
            Avaliado com carinho
          </h2>
          <div className="flex items-center justify-center gap-2 text-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4 ? "fill-accent text-accent" : "fill-accent/40 text-accent"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-xl ml-2">4.3</span>
            <span className="text-muted-foreground">no Google</span>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((r, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all">
                  <div className="flex mb-4">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/85 leading-relaxed mb-6">
                    "{r.text}"
                  </p>
                  <p className="font-semibold text-foreground">{r.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
