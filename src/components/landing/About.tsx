import { Button } from "@/components/ui/button";
import { Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Tradição Familiar",
    desc: "Mais de 20 anos servindo comida caseira com o mesmo carinho de sempre.",
  },
  {
    icon: Award,
    title: "Qualidade Premiada",
    desc: "Reconhecidos como um dos melhores self-services de Goiânia.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    desc: "Nossa equipe tratando você como parte da família Buritis.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              O restaurante da família
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              O <strong>Buritis Restaurante</strong> nasceu com a missão de oferecer comida caseira
              de verdade, no coração de Goiânia. Aqui, cada prato é preparado com ingredientes
              frescos e muito carinho, mantendo as receitas tradicionais que passam de geração em
              geração.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Do churrasco na brasa ao nosso famoso vermelho ao forno, cada iguaria carrega a
              essência da culinária mineira e goiana que você não encontra em outro lugar.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 py-8">
              {features.map((f) => (
                <div key={f.title} className="text-center p-4 rounded-xl bg-muted/50">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <a
                  href="https://wa.me/5562999517766?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer Reserva
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
