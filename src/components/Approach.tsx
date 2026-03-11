"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const layers = [
  {
    bg: "rgba(180, 180, 255, 0.3)",
    label: "01",
    text: "Designing AI-empowered products",
  },
  {
    bg: "rgba(255, 92, 168, 0.25)",
    label: "02",
    text: "Leading strategy at the org level",
  },
  {
    bg: "rgba(26, 26, 143, 0.35)",
    label: "03",
    text: "Independent builder",
  },
];

// Diamond dimensions
const W = 280;
const H = 160;

// Rounded diamond SVG path (corner radius ~14px)
// Points: top(140,0), right(280,80), bottom(140,160), left(0,80)
// Pre-calculated offsets along edges for corner rounding (radius ~14px)
// Edge unit vector magnitude: sqrt(140²+80²) ≈ 161.2
// dx = 140/161.2 * R ≈ 12.15, dy = 80/161.2 * R ≈ 6.95
const dx = 12.15;
const dy = 6.95;

const DIAMOND_PATH = [
  `M ${140 + dx},${dy}`,
  `L ${280 - dx},${80 - dy}`,
  `Q 280,80 ${280 - dx},${80 + dy}`,
  `L ${140 + dx},${160 - dy}`,
  `Q 140,160 ${140 - dx},${160 - dy}`,
  `L ${dx},${80 + dy}`,
  `Q 0,80 ${dx},${80 - dy}`,
  `L ${140 - dx},${dy}`,
  `Q 140,0 ${140 + dx},${dy}`,
  "Z",
].join(" ");

// Layer stacking: pure vertical
const LAYER_FINAL_Y = [-184, -92, 0];

export default function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Step 1: Layers expand vertically
  const layer1Y = useTransform(scrollYProgress, [0, 0.35], [0, LAYER_FINAL_Y[0]]);
  const layer2Y = useTransform(scrollYProgress, [0, 0.3], [0, LAYER_FINAL_Y[1]]);
  const layerYOffsets = [layer1Y, layer2Y, 0];

  // Step 2: Lines draw in
  const line1Scale = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const line2Scale = useTransform(scrollYProgress, [0.38, 0.53], [0, 1]);
  const line3Scale = useTransform(scrollYProgress, [0.41, 0.56], [0, 1]);
  const lineScales = [line1Scale, line2Scale, line3Scale];

  // Step 3: Text fades in
  const text1Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const text1X = useTransform(scrollYProgress, [0.5, 0.6], [-12, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const text2X = useTransform(scrollYProgress, [0.55, 0.65], [-12, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const text3X = useTransform(scrollYProgress, [0.6, 0.7], [-12, 0]);
  const textOpacities = [text1Opacity, text2Opacity, text3Opacity];
  const textXOffsets = [text1X, text2X, text3X];

  return (
    <section ref={containerRef} className="relative bg-white" style={{ height: "150vh" }}>
      <div className="sticky top-0 h-dvh flex items-center">
        <div className="max-w-content mx-auto px-6 w-full">
          {/* Header */}
          <div className="mb-20">
            <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-4">
              01 — Approach
            </p>
            <h2 className="font-syne font-bold text-[36px] text-dark text-balance">
              Three layers of AI experience
            </h2>
          </div>

          {/* Two columns — shapes left, text right */}
          <div className="flex flex-col md:flex-row items-start">
            {/* Left — stacked glassmorphism diamond layers */}
            <div className="w-full md:w-[38%] flex items-start justify-start">
              <div style={{ position: "relative", width: W + 40, height: H + 240 }}>
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    style={{
                      position: "absolute",
                      top: 124,
                      left: 0,
                      y: layerYOffsets[i] as number,
                      filter: "drop-shadow(0 4px 16px rgba(59, 59, 249, 0.06))",
                    }}
                  >
                    <svg
                      width={W}
                      height={H}
                      viewBox={`0 0 ${W} ${H}`}
                      fill="none"
                    >
                      <path
                        d={DIAMOND_PATH}
                        fill={layer.bg}
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — text items with connecting lines */}
            <div className="w-full md:w-[62%] flex flex-col" style={{ gap: 52 }}>
              {layers.map((layer, i) => (
                <div key={layer.label} className="relative">
                  <motion.div
                    style={{ scaleX: lineScales[i], transformOrigin: "left" }}
                    className="absolute top-0 left-0 right-0 h-px bg-border"
                  />
                  <motion.div
                    style={{
                      opacity: textOpacities[i],
                      x: textXOffsets[i],
                    }}
                    className="flex items-baseline gap-4 pt-4"
                  >
                    <span className="font-mono text-[11px] text-gray">{layer.label}</span>
                    <span className="font-mono text-[13px] text-dark">{layer.text}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
