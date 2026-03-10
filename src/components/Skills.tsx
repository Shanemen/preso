"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const colors = ["#3B3BF9", "#FF5CA8", "#2ED573"];

const skills = [
  { name: "Information Architecture", desc: "Structuring complex systems into intuitive mental models" },
  { name: "AI-Native Design", desc: "Designing human-AI collaboration and oversight UX" },
  { name: "Systems Thinking", desc: "Connecting product strategy, technical constraints, and user needs" },
  { name: "Enterprise UX", desc: "Building for regulated environments with auditability" },
  { name: "Interaction Design", desc: "Crafting flows that reduce cognitive load at scale" },
  { name: "Design Leadership", desc: "Guiding teams and advising stakeholders on design strategy" },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-4">
        Expertise
      </p>
      <h2 className="font-syne font-bold text-[36px] text-dark mb-12">
        What I bring to the table
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white rounded-2xl p-8 border border-[#E8E8F0] hover:border-indigo hover:shadow-[0_4px_20px_rgba(59,59,249,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <div
              className="w-3 h-3 rounded-full mb-5"
              style={{ backgroundColor: colors[i % 3] }}
            />
            <h3 className="font-syne font-semibold text-[17px] text-dark mb-2">
              {skill.name}
            </h3>
            <p className="text-[14px] text-gray leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
