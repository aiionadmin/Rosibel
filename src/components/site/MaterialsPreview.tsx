/**
 * Lightweight materials strip for the preview shell.
 * Full bento / tilt / marquee / gallery 21st installs pending API key/quota.
 */

import Image from "next/image";
import { siteConfig } from "@/config/site";

export function MaterialsPreview() {
  const items = siteConfig.productLine.slice(0, 6);

  return (
    <section id="materiais" className="border-t border-rp-stone/15 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-xs tracking-[0.22em] text-rp-stone uppercase">
          Materiais
        </p>
        <h2 className="font-heading mt-3 text-4xl text-rp-offwhite sm:text-5xl">
          Linha Rosibel
        </h2>
        <p className="mt-4 max-w-xl font-sans text-rp-stone">
          Categorias do brief. Fichas e fotos reais entram depois — sem conteúdo
          inventado.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((name) => (
            <li key={name} className="group">
              <div className="relative aspect-video overflow-hidden bg-rp-surface">
                <Image
                  src="/images/product-slab-16x9.svg"
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-heading mt-3 text-xl capitalize text-rp-offwhite">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
