"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-dvh overflow-hidden"
    >
      {/* Spline 3D background */}
      <iframe
        src="https://my.spline.design/3dtextbluecopy-ePCunNXWqctTWXtaKk3dXY2X/"
        className="absolute inset-0 w-full h-full border-none z-0"
        tabIndex={-1}
        title="3D Background"
      />

      {/* Content layer */}
      <div className="relative z-content h-full flex flex-col items-center justify-end pb-20 text-center">
        <h1 className="sr-only">Sicong — Product Designer</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-syne font-normal text-[20px] text-white tracking-[-0.3px] mb-3"
        >
          Designing systems that make complexity feel simple
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-mono text-[11px] text-white uppercase tracking-[3px]"
        >
          Product Designer · 10+ Years · AI & Enterprise
        </motion.p>

        {/* Scroll-down indicator */}
        <motion.a
          href="#work"
          aria-label="Scroll to work section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mt-10"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M4 7l6 6 6-6" />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
}
