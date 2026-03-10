"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  { name: "Asurion", tag: "AI Transformation Lead", year: "2023–2025" },
  { name: "HomeVision", tag: "Mortgage AI Platform", year: "2021–2023" },
  { name: "Lyft", tag: "Rider & Driver Experience", year: "2019–2021" },
  { name: "Personal Projects", tag: "AI-Native Tools", year: "2025" },
];

export default function Work() {
  return (
    <SectionWrapper id="work">
      <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-4">
        Selected Work
      </p>
      <h2 className="font-syne font-bold text-[36px] text-dark mb-12">
        Projects I&apos;m proud of
      </h2>

      <div className="border-t border-[#E8E8F0]">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-center justify-between py-7 border-b border-[#E8E8F0] cursor-pointer"
          >
            <h3 className="font-syne font-semibold text-[22px] text-dark group-hover:text-indigo transition-colors duration-300">
              {project.name}
            </h3>

            <div className="flex items-center gap-8">
              <span className="font-mono text-[11px] text-gray hidden sm:block">
                {project.tag}
              </span>
              <span className="font-mono text-[11px] text-gray">
                {project.year}
              </span>
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
