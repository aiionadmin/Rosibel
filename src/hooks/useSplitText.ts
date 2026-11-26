"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

type UseSplitTextOptions = {
  /** "chars" | "words" — letter/word stagger reveal */
  type?: "chars" | "words";
  duration?: number;
  stagger?: number;
  y?: number;
};

/**
 * Split + reveal text. Uses Club SplitText when registered; otherwise a
 * lightweight DOM split (no Club dependency). SEO: original text remains in
 * the HTML before hydration; animation only enhances after mount.
 */
export function useSplitText<T extends HTMLElement>(
  options: UseSplitTextOptions = {},
) {
  const ref = useRef<T | null>(null);
  const {
    type = "chars",
    duration = 0.9,
    stagger = 0.03,
    y = 24,
  } = options;

  useGSAP(
    () => {
      registerGsapPlugins();
      const el = ref.current;
      if (!el) return;

      const original = el.textContent ?? "";
      if (!original.trim()) return;

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
            el.textContent = original;
            return;
          }

          // Manual split fallback (Club SplitText not required).
          const parts =
            type === "words"
              ? original.split(/(\s+)/)
              : Array.from(original);

          el.setAttribute("aria-label", original);
          el.innerHTML = parts
            .map((part) => {
              if (type === "words" && /^\s+$/.test(part)) {
                return part;
              }
              const safe = part.replace(/</g, "&lt;").replace(/>/g, "&gt;");
              return `<span class="split-unit inline-block will-change-transform">${safe === " " ? "&nbsp;" : safe}</span>`;
            })
            .join("");

          const units = el.querySelectorAll(".split-unit");

          gsap.fromTo(
            units,
            { autoAlpha: 0, y: isMobile ? y * 0.5 : y },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? duration * 0.8 : duration,
              stagger: isMobile ? stagger * 0.6 : stagger,
              ease: "rosibelSoft",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        },
      );

      return () => {
        mm.revert();
        el.textContent = original;
      };
    },
    { scope: ref, dependencies: [type, duration, stagger, y] },
  );

  return ref;
}
