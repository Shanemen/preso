"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionHeader label="05 — Contact" title="Let's Connect" />
        <p className="text-gray max-w-md mx-auto leading-relaxed mb-12 text-pretty">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </p>

        <motion.a
          href="mailto:hello@sicong.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-[11px] uppercase tracking-[3px] bg-indigo text-white px-10 py-4 rounded-full hover:bg-indigo/90 transition-colors duration-300"
        >
          Say Hello
        </motion.a>

        <div className="flex justify-center gap-8 mt-12">
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter", href: "https://twitter.com" },
          ].map((platform) => (
            <a
              key={platform.label}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[2px] text-gray hover:text-indigo transition-colors duration-300"
            >
              {platform.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-[#6B7094]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[2px] text-gray/50">
          &copy; 2026 Sicong. All rights reserved.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[2px] text-gray/50">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </SectionWrapper>
  );
}
