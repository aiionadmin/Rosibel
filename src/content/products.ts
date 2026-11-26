/**
 * Catálogo de produtos / materiais.
 * TODO: preencher com conteúdo real aprovado — nunca inventar fichas como se fossem oficiais.
 */

export type Product = {
  id: string;
  name: string;
  category: string;
  slug: string;
  /** Caminho em /public/images */
  image: string;
  description?: string;
};

/** TODO: substituir por lista real de chapas / linhas */
export const products: Product[] = [
  // TODO — exemplo de estrutura (não publicar como conteúdo real):
  // {
  //   id: "todo-1",
  //   name: "TODO",
  //   category: "TODO",
  //   slug: "todo",
  //   image: "/images/product-slab-16x9.svg",
  //   description: "TODO",
  // },
];
