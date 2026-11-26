"use client";

/**
 * Hero preview stub — full cinematic shutter hero (21st Option A id 9989)
 * pending registry install (API_KEY_21ST / quota). Brand-first composition.
 */

import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteConfig } from "@/config/site";

export function SiteHero() {
  return (
    <section className="relative flex min-h-dvh items-end overflow-hidden">
      <Image
        src="/images/hero-stone-slab-16x9.svg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-rp-black via-rp-black/70 to-rp-black/30"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-36 sm:pb-28">
        <p className="mb-4 font-sans text-xs tracking-[0.28em] text-rp-stone uppercase">
          Contagem / MG · desde {siteConfig.foundedYear}
        </p>

        <h1 className="font-heading max-w-3xl text-5xl leading-[1.05] text-rp-offwhite sm:text-7xl md:text-8xl">
          {siteConfig.name}
        </h1>

        <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-rp-stone sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            asChild
            className="inline-flex items-center justify-center rounded-sm border border-rp-bronze/40 bg-rp-bronze px-6 py-3 font-sans text-sm font-medium tracking-wide text-rp-black transition-colors hover:bg-rp-bronze/90"
          >
            <a href="#contato">Solicitar orçamento</a>
          </MagneticButton>
          <a
            href="#materiais"
            className="font-sans text-sm tracking-wide text-rp-offwhite/80 underline-offset-4 transition-colors hover:text-rp-bronze hover:underline"
          >
            Ver materiais
          </a>
        </div>
      </div>
    </section>
  );
}
