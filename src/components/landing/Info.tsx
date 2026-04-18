import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

export function Info() {
  return (
    <section id="info" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Venha nos visitar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 text-foreground">
            Estamos no coração de Goiânia
          </h2>

          <div className="space-y-7">
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 11h às 14h40
                  <br />
                  Sábado e Domingo: 11h às 15h
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  Alameda dos Buritis, 238
                  <br />
                  Setor Morais — Goiânia, GO
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Reservas e pedidos
                </h3>
                <p className="text-muted-foreground">(62) 99951-7766</p>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full px-8 h-13 bg-primary hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:scale-105 transition-all"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Alameda+dos+Buritis+238+Setor+Morais+Goi%C3%A2nia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Como Chegar <MapPin className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-warm)]">
          <iframe
            title="Localização do Buritis Restaurante"
            src="https://www.google.com/maps?q=Alameda+dos+Buritis+238+Setor+Morais+Goi%C3%A2nia&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
