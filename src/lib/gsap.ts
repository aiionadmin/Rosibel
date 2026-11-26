"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

/**
 * Register GSAP plugins once (safe to call from multiple clients).
 *
 * SplitText is a Club GreenSock plugin. It is not bundled with the free
 * `gsap` package. If a Club build / license makes SplitText available at
 * runtime, we register it; otherwise hooks fall back to a manual letter split.
 */
export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, Flip, CustomEase);

  // TODO: Club plugin — SplitText
  // When a Club-licensed build is available, import and register:
  //   import { SplitText } from "gsap/SplitText";
  //   gsap.registerPlugin(SplitText);
  try {
    // Optional Club plugin detection without hard dependency.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maybe = (gsap as any).plugins?.SplitText;
    if (maybe) {
      gsap.registerPlugin(maybe);
    }
  } catch {
    // SplitText unavailable — useSplitText uses DOM letter split fallback.
  }

  CustomEase.create("rosibelSoft", "M0,0 C0.22,1 0.36,1 1,1");
  registered = true;
}

export { gsap, ScrollTrigger, Flip, CustomEase };
