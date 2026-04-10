"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  style?: CSSProperties;
};

// Returns framer-motion compatible [initial, whileInView] pair
function getVariant(dir: Direction) {
  switch (dir) {
    case "down":  return [{ opacity: 0, y: -24 },       { opacity: 1, y: 0 }] as const;
    case "left":  return [{ opacity: 0, x: -36 },       { opacity: 1, x: 0 }] as const;
    case "right": return [{ opacity: 0, x: 36 },        { opacity: 1, x: 0 }] as const;
    case "scale": return [{ opacity: 0, scale: 0.91 },  { opacity: 1, scale: 1 }] as const;
    case "fade":  return [{ opacity: 0 },               { opacity: 1 }] as const;
    default:      return [{ opacity: 0, y: 28 },        { opacity: 1, y: 0 }] as const; // "up"
  }
}

// Crisp spring easing — fast start, no bounce (similar to iOS spring)
const SPRING = [0.16, 1, 0.3, 1] as const;

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up",
  className,
  style,
}: Props) {
  const [initial, whileInView] = getVariant(direction);
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: SPRING }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
