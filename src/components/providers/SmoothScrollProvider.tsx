"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

/**
 * Lenis smooth scroll synced with GSAP ScrollTrigger.
 * Skips Lenis entirely when prefers-reduced-motion is set.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    registerGsapPlugins();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
