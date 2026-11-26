/**
 * Projetos / obras realizadas.
 * TODO: preencher com cases reais aprovados — nunca inventar projetos.
 */

export type Project = {
  id: string;
  title: string;
  slug: string;
  location?: string;
  year?: number;
  /** Caminho em /public/images */
  image: string;
  materials?: string[];
  description?: string;
};

/** TODO: substituir por portfólio real */
export const projects: Project[] = [
  // TODO — exemplo de estrutura (não publicar como conteúdo real):
  // {
  //   id: "todo-1",
  //   title: "TODO",
  //   slug: "todo",
  //   location: "TODO",
  //   year: 0,
  //   image: "/images/project-interior-4x5.svg",
  //   materials: [],
  //   description: "TODO",
  // },
];
