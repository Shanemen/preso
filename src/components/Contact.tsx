"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionLabel label="Contact" />
        <h2 className="font-syne font-bold text-4xl md:text-5xl text-dark mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-gray max-w-md mx-auto leading-relaxed mb-12">
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
          {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="font-mono text-[11px] uppercase tracking-[2px] text-gray hover:text-indigo transition-colors duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-gray/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
