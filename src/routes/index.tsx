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

export const Route = createFileRoute("/")({
  component: Index,
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
