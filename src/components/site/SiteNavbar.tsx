"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const products = siteConfig.productLine.slice(0, 4);

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5",
        className,
      )}
    >
      <div className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading shrink-0 text-xl tracking-wide text-rp-offwhite transition-colors hover:text-rp-bronze sm:text-2xl"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Materiais">
              <div className="grid grid-cols-2 gap-6 p-2 text-sm">
                {products.map((name) => (
                  <ProductItem
                    key={name}
                    title={name}
                    href="#materiais"
                    src="/images/product-slab-16x9.svg"
                    description="Linha Rosibel — conteúdo detalhado em breve."
                  />
                ))}
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Empresa">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="#sobre">Sobre</HoveredLink>
                <HoveredLink href="#projetos">Projetos</HoveredLink>
                <HoveredLink href="#contato">Contato</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contato">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href={`tel:${siteConfig.phone.tel}`}>
                  {siteConfig.phone.display}
                </HoveredLink>
                <HoveredLink href={`mailto:${siteConfig.email}`}>
                  E-mail
                </HoveredLink>
                {siteConfig.social.instagram ? (
                  <HoveredLink
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </HoveredLink>
                ) : null}
              </div>
            </MenuItem>
          </Menu>
        </div>

        <a
          href={`tel:${siteConfig.phone.tel}`}
          className="pointer-events-auto font-sans text-xs tracking-[0.15em] text-rp-stone uppercase transition-colors hover:text-rp-bronze md:text-sm"
        >
          {siteConfig.phone.display}
        </a>
      </div>
    </header>
  );
}
