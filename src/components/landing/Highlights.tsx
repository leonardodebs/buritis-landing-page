import churrasco from "@/assets/highlight-churrasco.jpg";
import peixe from "@/assets/highlight-peixe.jpg";
import saladas from "@/assets/highlight-saladas.jpg";

const items = [
  {
    img: churrasco,
    title: "Churrasco & Variedades",
    desc: "Picanha, fraldinha, linguiça e cortes nobres feitos na brasa, do jeito tradicional.",
  },
  {
    img: peixe,
    title: "Peixes Grelhados",
    desc: "Nosso famoso vermelho ao forno e tilápia fresca, preparados com tempero da casa.",
  },
  {
    img: saladas,
    title: "Buffet de Saladas",
    desc: "Mais de 20 opções de saladas frescas, grelhados, arroz e feijão preparados diariamente.",
  },
];

export function Highlights() {
  return (
    <section id="destaques" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Nossos Destaques
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Uma experiência completa no seu prato
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-7 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
