import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { Menu } from "@/components/landing/Menu";
import { About } from "@/components/landing/About";
import { Info } from "@/components/landing/Info";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Privacy } from "@/components/landing/Privacy";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Buritis Restaurante",
  description:
    "Buffet self-service com churrasco, peixes grelhados e comida caseira no Centro de Goiânia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda dos Buritis, 238",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    postalCode: "74430-010",
    addressCountry: "BR",
  },
  telephone: "+5562999517766",
  openingHours: ["Mo-Fr 11:00-14:40", "Sa-Su 11:00-15:00"],
  priceRange: "$$",
  servesCuisine: ["Brasileira", "Mineira"],
  acceptsReservations: true,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-16.6788",
    longitude: "-49.2588",
  },
  url: "https://buritisrestaurante.com.br",
  image: "https://buritisrestaurante.com.br/og-image.jpg",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Buritis Restaurante Centro · Self-Service em Goiânia",
    meta: [
      {
        name: "description",
        content:
          "Buffet self-service com churrasco, peixes grelhados e comida caseira no Centro de Goiânia. Alameda dos Buritis, 238.",
      },
      {
        name: "keywords",
        content:
          "restaurante goiânia, self-service, churrasco, buffet, comida mineira, peixe grelhado",
      },
      { property: "og:title", content: "Buritis Restaurante · Centro de Goiânia" },
      {
        property: "og:description",
        content: "Churrasco na brasa, peixes grelhados e buffet completo. Tradição em Goiânia.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://buritisrestaurante.com.br" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
      { link: { rel: "canonical", href: "https://buritisrestaurante.com.br" } },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
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
      <Menu />
      <About />
      <Info />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
      <Privacy />
    </main>
  );
}
