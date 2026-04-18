import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-buritis.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="h-20 w-20 rounded-full overflow-hidden bg-white mb-4">
              <img
                src={logo}
                alt="Logotipo Buritis Restaurante"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-3">
              Restaurante · Unidade Centro
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              "O Restaurante da Família" — tradição em comida caseira,
              churrasco e peixes no coração de Goiânia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3 text-background/75 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Alameda dos Buritis, 238 — Setor Morais, Goiânia/GO
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                (62) 99951-7766
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Seg-Sex 11h–14h40 · Sáb-Dom 11h–15h
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Siga e converse</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/buritisrestaurante"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5562999517766"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/60 text-xs mt-4">
              @buritisrestaurante
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-xs">
          © {new Date().getFullYear()} Buritis Restaurante — Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
