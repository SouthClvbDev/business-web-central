"use client";

import { motion, useReducedMotion } from "motion/react";

export function LabOrbit() {
  const reduced = useReducedMotion();
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-grid" />
      <motion.div
        className="orbit-core"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span>ZS</span><span>UR</span>
      </motion.div>
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
      <span className="orbit-label label-a">SYSTEM / ONLINE</span>
      <span className="orbit-label label-b">34°36&apos;S · LAB 001</span>
    </div>
  );
}
