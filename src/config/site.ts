/**
 * Fonte única de dados institucionais da Rosibel Pedras.
 * Não inventar conteúdo — preencher apenas com fatos confirmados.
 * Campos sem dado confirmado ficam como "" ou marcados com TODO.
 */

export const siteConfig = {
  name: "Rosibel Pedras",
  legalName: "Rosibel Pedras Ltda",
  cnpj: "01.687.366/0001-43",
  foundedYear: 1997,
  city: "Contagem/MG",

  description:
    // TODO: texto institucional definitivo (pt-BR) — aguardar aprovação do brief
    "Marmoraria em Contagem/MG desde 1997.",

  address: {
    street: "Av. Coronel Benjamim Guimarães, 500",
    district: "Industrial",
    city: "Contagem",
    state: "MG",
    cep: "32235-000",
    full: "Av. Coronel Benjamim Guimarães, 500 – Industrial, Contagem/MG, CEP 32235-000",
  },

  phone: {
    display: "(31) 3385-2298",
    tel: "+553133852298",
  },

  email: "rosibelpedras.vendas@hotmail.com",

  /** TODO: número WhatsApp (apenas dígitos com DDI) — aguardar confirmação */
  whatsapp: {
    number: "", // TODO
    message: "", // TODO: mensagem pré-preenchida
  },

  /** TODO: horários oficiais — aguardar confirmação do brief */
  hours: {
    weekdays: "", // TODO
    saturday: "", // TODO
    sunday: "", // TODO
    display: "", // TODO: string formatada para o rodapé
  },

  social: {
    /** TODO: URL Instagram confirmada no brief */
    instagram: "", // TODO
    /** TODO: URL Facebook confirmada no brief */
    facebook: "", // TODO
  },

  /**
   * Linha de produtos — preencher SOMENTE com o brief aprovado.
   * Detalhes em src/content/products.ts
   */
  productLine: [] as string[], // TODO: categorias do brief

  /** Público-alvo — preencher SOMENTE com o brief aprovado */
  audience: [] as string[], // TODO: audiência do brief

  /**
   * Feature flags para cenas da Home (expandir nas fases seguintes).
   * Alternar aqui para ligar/desligar blocos sem apagar código.
   */
  scenes: {
    hero: false, // TODO: ativar após aprovação da Fase 2/3
    marquee: false,
    products: false,
    projects: false,
    gallery: false,
    about: false,
    contact: false,
  },

  /** Webhook do formulário de contato (n8n / Make / etc.) */
  formWebhookUrl: process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL ?? "", // TODO

  /** Google Tag Manager container ID (ex.: GTM-XXXX) */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "", // TODO

  locale: "pt-BR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rosibelpedras.com.br",
} as const;

export type SiteConfig = typeof siteConfig;
