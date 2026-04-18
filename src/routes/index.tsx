import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { Info } from "@/components/landing/Info";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Buritis Restaurante Centro · Self-Service em Goiânia",
      },
      {
        name: "description",
        content:
          "Buffet self-service com churrasco, peixes grelhados e comida caseira no Centro de Goiânia. Alameda dos Buritis, 238.",
      },
      { property: "og:title", content: "Buritis Restaurante · Centro de Goiânia" },
      {
        property: "og:description",
        content:
          "Churrasco na brasa, peixes grelhados e buffet completo. Tradição em Goiânia.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Info />
      <Testimonials />
      <Footer />
    </main>
  );
}
