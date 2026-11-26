import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHero } from "@/components/site/SiteHero";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { MaterialsPreview } from "@/components/site/MaterialsPreview";
import { siteConfig } from "@/config/site";

/**
 * Preview Home — navbar + hero + materials + footer.
 * Cenas imersivas GSAP (Fase Home) vêm depois desta prévia visual.
 */
export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <SiteHero />
        <MaterialsPreview />
        <section
          id="sobre"
          className="border-t border-rp-stone/15 px-6 py-24"
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-sans text-xs tracking-[0.22em] text-rp-stone uppercase">
              Sobre
            </p>
            <h2 className="font-heading mt-3 max-w-2xl text-4xl text-rp-offwhite sm:text-5xl">
              Pedra natural em Contagem desde {siteConfig.foundedYear}
            </h2>
            <p className="mt-6 max-w-2xl font-sans leading-relaxed text-rp-stone">
              Atendemos{" "}
              {siteConfig.audience.join(", ").replace(/, ([^,]*)$/, " e $1")}.
              Texto institucional completo e cenas cinematográficas entram na
              próxima etapa.
            </p>
          </div>
        </section>
        <section
          id="projetos"
          className="border-t border-rp-stone/15 px-6 py-16"
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-sans text-sm text-rp-stone/70">
              Projetos — TODO (sem conteúdo inventado)
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
