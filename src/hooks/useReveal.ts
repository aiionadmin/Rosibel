"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

type UseRevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/**
 * Fade/slide reveal on scroll. Respects reduced-motion and softens on mobile.
 */
export function useReveal<T extends HTMLElement>(options: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const {
    y = 40,
    duration = 1,
    delay = 0,
    stagger = 0.08,
    once = true,
  } = options;

  useGSAP(
    () => {
      registerGsapPlugins();
      const el = ref.current;
      if (!el) return;

      const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
      const nodes = targets.length > 0 ? targets : [el];

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion, isMobile } = context.conditions!;

          if (reduceMotion) {
            gsap.set(nodes, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            nodes,
            { autoAlpha: 0, y: isMobile ? y * 0.5 : y },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? duration * 0.75 : duration,
              delay,
              stagger,
              ease: "rosibelSoft",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: once
                  ? "play none none none"
                  : "play reverse play reverse",
              },
            },
          );
        },
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill();
        });
      };
    },
    { scope: ref, dependencies: [y, duration, delay, stagger, once] },
  );

  return ref;
}
