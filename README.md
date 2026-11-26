# Rosibel Pedras — Site institucional

Site de alta performance para a marmoraria **Rosibel Pedras** (Contagem/MG).  
Stack: Next.js (App Router) · TypeScript · Tailwind · shadcn/ui · GSAP · Lenis · export estático.

> Textos em **pt-BR**. Campos sem dado confirmado estão marcados com `TODO`.

## Desenvolvimento

```bash
npm install
npm run dev
# http://localhost:3000
```

Build estático (`output: 'export'`):

```bash
npm run build
# artefatos em /out
```

## Onde editar o quê

| O quê | Onde |
| --- | --- |
| Dados da empresa (nome, CNPJ, endereço, telefone, e-mail, social, flags de cenas) | `src/config/site.ts` |
| Produtos / materiais | `src/content/products.ts` |
| Projetos / obras | `src/content/projects.ts` |
| Fotos | `public/images/` (substituir SVGs placeholder por fotos reais, manter nomes ou atualizar refs) |
| WhatsApp | `siteConfig.whatsapp` em `src/config/site.ts` (**TODO**) |
| Horários | `siteConfig.hours` em `src/config/site.ts` (**TODO**) |
| Webhook do formulário | `NEXT_PUBLIC_FORM_WEBHOOK_URL` (ver `.env.example`) |
| Google Tag Manager | `NEXT_PUBLIC_GTM_ID` (ver `.env.example`) |
| Ligar/desligar blocos da Home | `siteConfig.scenes` em `src/config/site.ts` |
| Tokens de design | `src/app/globals.css` (`--rp-*`) |
| Hooks de animação | `src/hooks/` (`useReveal`, `useParallax`, `useSplitText`) |
| Registro GSAP | `src/lib/gsap.ts` |

## Design system (resumo)

- **Cores:** `#0E0E0E` / `#141414` · off-white `#F5F2EC` · stone `#8A857C` · bronze `#B08D57`
- **Tipografia:** Cormorant Garamond (títulos) · Manrope (corpo) via `next/font`
- Estética: galeria escura sofisticada — sem neon, sem look de template

## Animações

- GSAP + `@gsap/react`, plugins: ScrollTrigger, Flip, CustomEase
- **SplitText** é plugin Club — se indisponível, `useSplitText` faz split manual de letras/palavras
- Lenis sincronizado com ScrollTrigger; **desligado** sob `prefers-reduced-motion`

## Componentes 21st.dev (Option A aprovadas)

Proposta: Project store `docs/21st-componentes-proposta.md`

| Bloco | Componente | Autor · id | Status no repo |
| --- | --- | --- | --- |
| Navbar | Navbar Menu | manuarora700 · 1024 | Instalado via MCP `get_component` → `src/components/ui/navbar-menu.tsx` (+ `SiteNavbar`) |
| Magnetic CTA | Magnetic Button | mohammadshehadeh · 26725 | Instalado via MCP → `src/components/ui/magnetic-button.tsx` |
| Hero | Hero Shutter Text | daiwiikharihar · 9989 | **Pendente** — stub Rosibel em `SiteHero` |
| Cards tilt | Tilt | ibelick · 1448 | **Pendente** |
| Bento | Bento Grid | kokonutd · 622 | **Pendente** |
| Marquee | Infinite Text Marquee | preetsuthar17 · 1944 | **Pendente** |
| Gallery | Masonry Lightbox | ayushmxxn · 26223 | **Pendente** |
| Text reveal | Text Reveal | ddoemonn · 23571 | **Pendente** |
| Form | Contact Form | kevingirelli · 35258 | **Pendente** |
| Footer | Footer Two | meschacirung · 27521 | **Pendente** — footer Rosibel em `SiteFooter` (estrutura similar) |

**Blocker de install:** `API_KEY_21ST` ausente no ambiente; CLI `shadcn add https://21st.dev/r/...` retorna 403. MCP free tier = 2 `get_component`/dia (esgotado após navbar + magnetic). Para instalar o restante: definir `API_KEY_21ST` (https://21st.dev/mcp) ou plano pago (https://21st.dev/pricing), depois:

```bash
npx shadcn@latest add "https://21st.dev/r/<author>/<slug>?api_key=$API_KEY_21ST"
```

## Preview atual vs. próxima etapa

- **Agora:** shell visível (navbar 21st + hero stub + materiais + footer + CTA magnético) para avaliação visual.
- **Próximo:** cenas imersivas da Home (GSAP/Lenis cena a cena) + demais Option A quando a chave/quota permitir.

## Fases

1. **Fundação** — concluída
2. **Proposta 21st** — aprovada (todas Option A)
3. **Preview UI** — em andamento (este estado)
4. **Cenas Home imersivas** — a seguir

## Deploy

Push para GitHub apenas. **Não** fazer deploy automático em VPS nesta etapa.
