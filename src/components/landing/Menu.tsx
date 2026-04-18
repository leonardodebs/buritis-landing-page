import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Utensils, Beef, Fish, Salad, Coffee } from "lucide-react";

const menuItems = {
  churrasco: {
    icon: Beef,
    title: "Churrasco na Brasa",
    items: [
      "Picanha",
      "Fraldinha",
      "Alcatra",
      "Costela",
      "Linguiça toscana",
      "Coração de galinha",
      "Cupim",
      "Asa de frango",
    ],
  },
  peixes: {
    icon: Fish,
    title: "Peixes",
    items: ["Vermelho ao forno", "Tilápia grelhada", "Sardinha frita", "Peixe frito"],
  },
  buffet: {
    icon: Salad,
    title: "Buffet de Saladas",
    items: [
      "Alface romana",
      "Rúcula",
      "Tomate cereja",
      "Cenoura ralada",
      "Beterraba",
      "Pepino",
      "Milho",
      "Ervilha",
      "Brócolis",
      "Espinafre",
      "Agrião",
      "Batata palha",
    ],
  },
  acompanhamentos: {
    icon: Utensils,
    title: "Acompanhamentos",
    items: [
      "Arroz branco",
      "Arroz integral",
      "Feijão tropeiro",
      "Feijão preto",
      "Macarrão",
      "Purê de batata",
      "Batata frita",
      "Polenta",
      "Farofa",
      "Vinagrete",
    ],
  },
  sobremesas: {
    icon: Coffee,
    title: "Sobremesas",
    items: [
      "Pudim de leite",
      "Doce de leite",
      "Gelatina",
      "Frutas da estação",
      "Bolo de milho",
      "Arroz doce",
    ],
  },
};

export function Menu() {
  const [activeTab, setActiveTab] = useState("churrasco");

  return (
    <section id="cardapio" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Cardápio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">O que oferecemos</h2>
          <p className="text-muted-foreground mt-4">
            Buffet completo com opções variadas para todos os gostos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(menuItems).map(([key, { icon: Icon, title }]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "outline"}
              onClick={() => setActiveTab(key)}
              className={`rounded-full px-6 ${activeTab === key ? "bg-primary" : ""}`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {title}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(menuItems).map(([key, { icon: Icon, title, items }]) => (
              <AccordionItem
                key={key}
                value={key}
                className={`border rounded-xl px-6 bg-card ${
                  activeTab === key ? "border-primary" : ""
                }`}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">{title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8">
            <a
              href="https://wa.me/5562999517766?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20card%C3%A1pio%20completo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Cardápio Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
