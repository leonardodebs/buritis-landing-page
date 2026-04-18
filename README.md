# Buritis Restaurante - Landing Page

Landing page institucional do Buritis Restaurante, buffet self-service localizado no Centro de Goiânia.

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TanStack Router** - Roteamento
- **Tailwind CSS v4** - Estilização
- **shadcn/ui** - Componentes Radix UI
- **Vite** - Build tool
- **TypeScript** - Tipagem

## 📁 Estrutura

```
src/
├── components/
│   └── landing/
│       ├── About.tsx         # Seção Sobre Nós
│       ├── FloatingWhatsApp.tsx  # Botão flutuante WhatsApp
│       ├── Footer.tsx         # Rodapé
│       ├── Gallery.tsx       # Galeria de fotos
│       ├── Hero.tsx          # Banner principal
│       ├── Highlights.tsx    # Destaques do menu
│       ├── Info.tsx          # Horários, localização, mapa
│       ├── Menu.tsx          # Cardápio detalhado
│       ├── Navbar.tsx        # Menu de navegação
│       ├── Privacy.tsx       # Política de privacidade (modal)
│       └── Testimonials.tsx  # Avaliações de clientes
├── routes/
│   ├── __root.tsx            # Layout raiz
│   └── index.tsx             # Página principal
├── assets/                   # Imagens do projeto
└── styles.css               # Variáveis de design system
```

## 📋 Seções

1. **Hero** - Banner com chamada para ação
2. **Highlights** - Pratos em destaque
3. **Menu** - Cardápio completo com accordions
4. **About** - História do restaurante
5. **Gallery** - Galeria de imagens
6. **Info** - Endereço, horários e mapa
7. **Testimonials** - Avaliações de clientes
8. **Footer** - Contato e redes sociais
9. **FloatingWhatsApp** - Botão flutuante (mobile)
10. **Privacy** - Modal de política de privacidade

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## ⚙️ Configuração

### Variáveis de ambiente

Crie um arquivo `.env` se necessário para configurações específicas.

### ImagensOG

Para compartilhar no WhatsApp/Facebook, adicione uma imagem `public/og-image.jpg` (1200x630px).

### SEO

O projeto já inclui:

- Meta tags (description, keywords, og:image, twitter:card)
- Schema.org JSON-LD para Restaurant
- Canonical URL

## 📝 Licença

MIT
