"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

type UseParallaxOptions = {
  /** Max translateY in px (desktop). Softened on mobile. */
  speed?: number;
};

/**
 * Subtle parallax on scroll. Disabled under prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(
  options: UseParallaxOptions = {},
) {
  const ref = useRef<T | null>(null);
  const { speed = 80 } = options;

  useGSAP(
    () => {
      registerGsapPlugins();
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion, isMobile } = context.conditions!;
          if (reduceMotion) return;

          const amount = isMobile ? speed * 0.35 : speed;

          gsap.fromTo(
            el,
            { y: -amount / 2 },
            {
              y: amount / 2,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: ref, dependencies: [speed] },
  );

  return ref;
}
