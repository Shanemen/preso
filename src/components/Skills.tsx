"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const SKILLS = [
  "Research",
  "Strategic Vision",
  "Service Design",
  "Information Architecture",
  "Prototyping & Mockups",
  "Visual Design",
];

//                    Research  Strategy  Service  IA    Proto  Visual
const BEFORE_AI = [    0.45,    0.3,     0.35,   0.4,  0.85,  0.9  ];
const AI_ERA =    [    0.85,    0.9,     0.75,   0.8,  0.5,   0.5  ];

const COLORS = {
  gridLine: "rgba(26,26,46,0.06)",
  gridLineAccent: "rgba(26,26,46,0.12)",
  label: "rgba(26,26,46,0.45)",
  labelBold: "#1A1A2E",
  classic: "#FF5CA8",
  classicFill: "rgba(255,92,168,0.08)",
  aiEra: "#3B3BF9",
  aiEraFill: "rgba(59,59,249,0.08)",
  title: "#1A1A2E",
  subtitle: "#6B7094",
  accent: "#3B3BF9",
};

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
}

function RadarChart({
  title,
  subtitle,
  values,
  color,
  fillColor,
  size = 440,
}: {
  title: string;
  subtitle: string;
  values: number[];
  color: string;
  fillColor: string;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.26;
  const levels = 5;
  const n = SKILLS.length;
  const angleStep = 360 / n;
  const labelRadius = maxR + 45;

  const rings = Array.from({ length: levels }, (_, i) => {
    const r = (maxR / levels) * (i + 1);
    const points = Array.from({ length: n }, (_, j) => {
      const p = polarToCartesian(cx, cy, r, j * angleStep);
      return `${p.x},${p.y}`;
    }).join(" ");
    return points;
  });

  const axes = Array.from({ length: n }, (_, i) => {
    const p = polarToCartesian(cx, cy, maxR, i * angleStep);
    return { x1: cx, y1: cy, x2: p.x, y2: p.y };
  });

  const dataPoints = values
    .map((v, i) => {
      const p = polarToCartesian(cx, cy, maxR * v, i * angleStep);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const dots = values.map((v, i) => {
    return polarToCartesian(cx, cy, maxR * v, i * angleStep);
  });

  const labels = SKILLS.map((skill, i) => {
    const p = polarToCartesian(cx, cy, labelRadius, i * angleStep);
    let anchor: "middle" | "start" | "end" = "middle";
    let dx = 0;
    const angle = i * angleStep;
    if (angle > 20 && angle < 160) {
      anchor = "start";
      dx = 4;
    } else if (angle > 200 && angle < 340) {
      anchor = "end";
      dx = -4;
    }
    let dy = 0;
    if (angle < 10 || angle > 350) dy = -6;
    if (angle > 170 && angle < 190) dy = 10;
    return { ...p, skill, anchor, dx, dy };
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 4 }}>
        <div
          className="font-jost font-bold"
          style={{
            fontSize: 17,
            color: COLORS.title,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: 11,
            color: COLORS.subtitle,
            marginTop: 3,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
      </div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {rings.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke={
              i === levels - 1 ? COLORS.gridLineAccent : COLORS.gridLine
            }
            strokeWidth={i === levels - 1 ? 1 : 0.5}
          />
        ))}
        {axes.map((a, i) => (
          <line key={i} {...a} stroke={COLORS.gridLine} strokeWidth={0.5} />
        ))}
        <polygon points={dataPoints} fill={fillColor} stroke="none" />
        <polygon
          points={dataPoints}
          fill="none"
          stroke={color}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={3} fill={color} />
        ))}
        {labels.map((l, i) => {
          const words = l.skill.split(" & ");
          return (
            <text
              key={i}
              x={l.x + l.dx}
              y={l.y + l.dy}
              textAnchor={l.anchor}
              dominantBaseline="central"
              fill={values[i] >= 0.7 ? COLORS.labelBold : COLORS.label}
              style={{
                fontSize: 9.5,
                fontWeight: values[i] >= 0.7 ? 600 : 400,
                letterSpacing: "0.01em",
              }}
            >
              {words.length > 1 ? (
                <>
                  <tspan x={l.x + l.dx} dy="-0.5em">{words[0]} &</tspan>
                  <tspan x={l.x + l.dx} dy="1.2em">{words[1]}</tspan>
                </>
              ) : (
                l.skill
              )}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function Skills() {
  const [hoveredEra, setHoveredEra] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills">
      <SectionHeader label="04 — Expertise" title="What I bring to the table" />

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          role="group"
          aria-label="Design skills before AI"
          tabIndex={0}
          onMouseEnter={() => setHoveredEra("classic")}
          onMouseLeave={() => setHoveredEra(null)}
          onFocus={() => setHoveredEra("classic")}
          onBlur={() => setHoveredEra(null)}
          style={{
            opacity: hoveredEra === "aiEra" ? 0.4 : 1,
            transition: "opacity 0.4s ease",
            outline: "none",
          }}
        >
          <RadarChart
            title="Before AI"
            subtitle="Craft-heavy, pixel-perfect"
            values={BEFORE_AI}
            color={COLORS.classic}
            fillColor={COLORS.classicFill}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            alignSelf: "stretch",
            background:
              "linear-gradient(to bottom, transparent, rgba(26,26,46,0.08), transparent)",
            margin: "40px 0",
          }}
        />

        <div
          role="group"
          aria-label="Design skills in the AI era"
          tabIndex={0}
          onMouseEnter={() => setHoveredEra("aiEra")}
          onMouseLeave={() => setHoveredEra(null)}
          onFocus={() => setHoveredEra("aiEra")}
          onBlur={() => setHoveredEra(null)}
          style={{
            opacity: hoveredEra === "classic" ? 0.4 : 1,
            transition: "opacity 0.4s ease",
            outline: "none",
          }}
        >
          <RadarChart
            title="AI Era"
            subtitle="Strategy-led, systems-oriented"
            values={AI_ERA}
            color={COLORS.aiEra}
            fillColor={COLORS.aiEraFill}
          />
        </div>
      </motion.div>

      {/* Key insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: 44,
          padding: "20px 32px",
          background: "rgba(59,59,249,0.04)",
          borderRadius: 12,
          border: "1px solid rgba(59,59,249,0.1)",
          maxWidth: 520,
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: 13,
            fontStyle: "italic",
            color: "#6B7094",
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          The designer&apos;s value shifts from{" "}
          <span style={{ color: "#FF5CA8", fontStyle: "normal", fontWeight: 700 }}>
            executing pixels
          </span>{" "}
          to{" "}
          <span style={{ color: "#3B3BF9", fontStyle: "normal", fontWeight: 700 }}>
            orchestrating systems
          </span>{" "}
          — from how it looks to why it exists.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
