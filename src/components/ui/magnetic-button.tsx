"use client";

/**
 * 21st.dev Option A — Magnetic Button
 * Author: mohammadshehadeh · id: 26725
 * Source: https://21st.dev/r/mohammadshehadeh/magnetic-button
 * (Hirael MIT · https://hirael.com/components/animation/magnetic-button)
 * Adapted to Rosibel tokens.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  type HTMLMotionProps,
  motion,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

const MotionSlot = motion.create(Slot);

const SPRING = { stiffness: 200, damping: 15, mass: 0.1 };

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  /** Pull strength as a fraction of the cursor's distance from center. */
  strength?: number;
  /** Render the child element instead of a button (e.g. a link). */
  asChild?: boolean;
}

const MagneticButton = ({
  className,
  strength = 0.35,
  asChild = false,
  ...props
}: MagneticButtonProps) => {
  const reduced = useReducedMotion();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = asChild ? MotionSlot : motion.button;

  return (
    <Comp
      data-slot="magnetic-button"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className={cn(
        !asChild &&
          "inline-flex items-center justify-center gap-2 rounded-sm border border-rp-bronze/40 bg-rp-bronze px-6 py-3 font-sans text-sm font-medium tracking-wide text-rp-black transition-colors hover:bg-rp-bronze/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-bronze/50",
        className,
      )}
      {...props}
    />
  );
};

export { MagneticButton };
export default MagneticButton;
