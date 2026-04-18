import { useState } from "react";
import { Camera } from "lucide-react";
import churrascoImg from "@/assets/highlight-churrasco.jpg";
import peixeImg from "@/assets/highlight-peixe.jpg";
import saladasImg from "@/assets/highlight-saladas.jpg";

const images = [
  {
    src: churrascoImg,
    alt: "Churrasco na brasa - Picanha, fraldinha e linguiça",
    title: "Churrasco",
  },
  {
    src: peixeImg,
    alt: "Vermelho ao forno - Prato típico do Buritis",
    title: "Peixes",
  },
  {
    src: saladasImg,
    alt: "Buffet de saladas frescas e variadas",
    title: "Saladas",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Um pouco do nosso trabalho
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all hover:scale-[1.02]"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <Camera className="h-5 w-5 mb-1" />
                  <p className="text-sm font-medium">{img.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria de imagens"
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar galeria"
            >
              ×
            </button>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
