# Rosibel Pedras — Site institucional

Site de alta performance para a marmoraria **Rosibel Pedras** (Contagem/MG).  
Stack: Next.js (App Router) · TypeScript · Tailwind · shadcn/ui · GSAP · Lenis · export estático.

> Textos em **pt-BR**. Campos sem dado confirmado estão marcados com `TODO`.

## Desenvolvimento

```bash
npm install
npm run dev
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

## Componentes 21st.dev

Proposta (Fase 2) no Project store: `docs/21st-componentes-proposta.md`  
**Não instalar** componentes 21st até aprovação explícita.

## Fases

1. **Fundação** (esta entrega) — scaffold, design system, dados, hooks, shell
2. **Proposta 21st** — opções por bloco (navbar, hero, cards, bento, marquee, gallery, text reveal, magnetic, form, footer)
3. **Cenas Home** — montagem após aprovação (ainda não iniciada)

## Deploy

Push para GitHub apenas. **Não** fazer deploy automático em VPS nesta etapa.
