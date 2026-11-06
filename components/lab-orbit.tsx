"use client";

import { motion, useReducedMotion } from "motion/react";
import { LogoMark } from "./logo-mark";

export function LabOrbit() {
  const reduced = useReducedMotion();
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-grid" />
      <motion.div
        className="orbit-core"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      ><LogoMark className="orbit-logo" /></motion.div>
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
      <span className="orbit-label label-a">DISEÑO + DESARROLLO</span>
      <span className="orbit-label label-b">ARGENTINA · ZSUR</span>
    </div>
  );
}
