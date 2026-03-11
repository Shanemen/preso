"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import Text from "./Text";

const layers = [
  {
    bg: "rgba(59, 59, 249, 0.10)",
    label: "01",
    text: "Designing AI-empowered products",
  },
  {
    bg: "rgba(255, 92, 168, 0.15)",
    label: "02",
    text: "Leading strategy at the org level",
  },
  {
    bg: "rgba(59, 59, 249, 0.28)",
    label: "03",
    text: "Independent builder",
  },
];

// Diamond dimensions
const W = 280;
const H = 160;

// Rounded diamond SVG path (corner radius ~14px)
// Points: top(140,0), right(280,80), bottom(140,160), left(0,80)
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
const LAYER_FINAL_Y = [-140, -70, 0];

export default function Approach() {
  return (
    <SectionWrapper id="approach">
      <SectionHeader label="01 — Approach" title="Three layers of AI experience" />

      {/* Two columns — shapes left, text right */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Left — stacked glassmorphism diamond layers */}
        <div className="w-full md:w-[38%] flex items-start justify-start">
          <div style={{ position: "relative", width: W + 40, height: 260 }}>
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ y: 0 }}
                whileInView={{ y: LAYER_FINAL_Y[i] }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: 100,
                  left: 0,
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
        <div className="w-full md:w-[62%] flex flex-col justify-center" style={{ gap: 48 }}>
          {layers.map((layer, i) => (
            <div key={layer.label} className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                style={{ transformOrigin: "left" }}
                className="absolute top-0 left-0 right-0 h-px bg-border"
              />
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="flex items-baseline gap-4 pt-4"
              >
                <Text level="caption" as="span">{layer.label}</Text>
                <Text level="body" as="span">{layer.text}</Text>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
