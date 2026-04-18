import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-buritis.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div
            className={`rounded-full overflow-hidden bg-white transition-all duration-300 ${
              scrolled ? "h-11 w-11 shadow-sm" : "h-12 w-12 ring-2 ring-white/40"
            }`}
          >
            <img
              src={logo}
              alt="Logotipo Buritis Restaurante"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className={`text-xs uppercase tracking-widest hidden sm:inline ${
              scrolled ? "text-muted-foreground" : "text-white/80"
            }`}
          >
            Unidade Centro
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Cardápio", href: "#cardapio" },
            { label: "Sobre", href: "#sobre" },
            { label: "Avaliações", href: "#avaliacoes" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-2 py-1 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button
          asChild
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
        >
          <a href="https://wa.me/5562999517766" target="_blank" rel="noopener noreferrer">
            Pedir Delivery
          </a>
        </Button>
      </nav>
    </header>
  );
}
