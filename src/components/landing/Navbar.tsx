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
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Buritis
          </span>
          <span
            className={`text-xs uppercase tracking-widest ${
              scrolled ? "text-muted-foreground" : "text-white/80"
            }`}
          >
            Centro
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Destaques", href: "#destaques" },
            { label: "Informações", href: "#info" },
            { label: "Avaliações", href: "#avaliacoes" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
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
          <a
            href="https://wa.me/5562999517766"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir Delivery
          </a>
        </Button>
      </nav>
    </header>
  );
}
