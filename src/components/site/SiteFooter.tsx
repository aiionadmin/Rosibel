/**
 * Footer preview — structure inspired by 21st Option A Footer Two
 * (meschacirung / footer-2 · id 27521). Official install pending API key/quota.
 */

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t border-rp-stone/20 bg-rp-surface px-6 py-16"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-3xl text-rp-offwhite">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-rp-stone">
            {siteConfig.legalName} · CNPJ {siteConfig.cnpj}
          </p>
          <p className="mt-4 font-sans text-sm text-rp-stone">
            {siteConfig.address.full}
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-rp-offwhite/70 uppercase">
            Contato
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-rp-stone">
            <li>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="hover:text-rp-bronze"
              >
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-rp-bronze"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-rp-stone/60">
              WhatsApp: TODO
            </li>
            <li className="text-rp-stone/60">Horários: TODO</li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-rp-offwhite/70 uppercase">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-rp-stone">
            <li>
              <Link href="#materiais" className="hover:text-rp-bronze">
                Materiais
              </Link>
            </li>
            <li>
              <Link href="#projetos" className="hover:text-rp-bronze">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-rp-bronze">
                Sobre
              </Link>
            </li>
            {siteConfig.social.instagram ? (
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rp-bronze"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {siteConfig.social.facebook ? (
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rp-bronze"
                >
                  Facebook
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-2 border-t border-rp-stone/15 pt-6 font-sans text-xs text-rp-stone/70 sm:flex-row sm:justify-between">
        <span>
          © {year} {siteConfig.legalName}
        </span>
        <span>Preview — cenas imersivas GSAP em seguida</span>
      </div>
    </footer>
  );
}
