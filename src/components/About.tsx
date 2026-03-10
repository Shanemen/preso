"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-6">
            About
          </p>
          <div
            className="w-[220px] h-[300px] rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #3B3BF9, #FF5CA8)",
            }}
          />
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="font-syne font-semibold text-[28px] text-dark leading-[1.45]">
            I translate{" "}
            <span className="text-indigo">complex technical systems</span> into
            experiences people can understand.
          </h2>

          <p className="mt-7 text-[16px] text-gray leading-[1.7]">
            For over a decade, I&apos;ve designed enterprise products at the
            intersection of AI and human experience — from Lyft&apos;s first
            AI-powered interfaces to mortgage automation platforms processing
            millions in loans. I believe the best design makes powerful systems
            feel effortless.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
