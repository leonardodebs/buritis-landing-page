import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const privacyContent = [
  {
    title: "Coleta de Dados",
    content:
      "Este site não coleta dados pessoais dos usuários. Não utilizamos cookies de rastreamento, não solicitamos informações pessoais e não armazenamos dados de visitantes.",
  },
  {
    title: "Links Externos",
    content:
      "Nosso site contém links para o WhatsApp do restaurante e Google Maps. Não somos responsáveis pelas práticas de privacidade de sites externos.",
  },
  {
    title: "Compartilhamento de Dados",
    content:
      "Não compartilhamos, vendemos ou divulgamos qualquer dado pessoal dos visitantes deste site.",
  },
  {
    title: "Alterações na Política",
    content:
      "Esta política pode ser atualizada a qualquer momento sem aviso prévio. Recomendamos que os usuários revisem esta página periodicamente.",
  },
  {
    title: "Contato",
    content: "Para dúvidas sobre esta política, entre em contato pelo WhatsApp: (62) 99951-7766.",
  },
];

export function Privacy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-6 text-center text-xs text-muted-foreground border-t bg-muted/20">
        <p>
          © {new Date().getFullYear()} Buritis Restaurante.{" "}
          <button
            onClick={() => setOpen(true)}
            className="underline hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </button>
        </p>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="h-[85vh] overflow-y-auto rounded-t-2xl">
          <div className="py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Política de Privacidade</h2>
            <div className="space-y-6">
              {privacyContent.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
            <Button onClick={() => setOpen(false)} className="w-full mt-8">
              Fechar
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
