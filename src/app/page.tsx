import { siteConfig } from "@/config/site";

/**
 * Home mínima (Fase 1).
 * Texto real no HTML antes de qualquer animação — SEO / reduced-motion safe.
 * Cenas cinematográficas entram nas fases seguintes (siteConfig.scenes).
 */
export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-24">
      <p className="mb-4 text-sm tracking-[0.2em] text-rp-stone uppercase">
        Contagem / MG · desde {siteConfig.foundedYear}
      </p>

      <h1 className="font-heading text-5xl leading-tight text-rp-offwhite sm:text-7xl">
        {siteConfig.name}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-rp-stone">
        {siteConfig.description}
      </p>

      <dl className="mt-12 grid gap-4 text-sm text-rp-stone sm:grid-cols-2">
        <div>
          <dt className="text-rp-offwhite/70">Endereço</dt>
          <dd className="mt-1">{siteConfig.address.full}</dd>
        </div>
        <div>
          <dt className="text-rp-offwhite/70">Contato</dt>
          <dd className="mt-1">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="transition-colors hover:text-rp-bronze"
            >
              {siteConfig.phone.display}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-rp-bronze"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-rp-offwhite/70">CNPJ</dt>
          <dd className="mt-1">{siteConfig.cnpj}</dd>
        </div>
        <div>
          <dt className="text-rp-offwhite/70">Razão social</dt>
          <dd className="mt-1">{siteConfig.legalName}</dd>
        </div>
      </dl>

      <p className="mt-16 text-xs tracking-wide text-rp-stone/70 uppercase">
        Fundação — cenas e conteúdo em construção
      </p>
    </main>
  );
}
