"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import Text from "./Text";
import Button from "./Button";
import Divider from "./Divider";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionHeader label="05 — Contact" title="Let's Connect" />
        <Text level="body" className="max-w-md mx-auto leading-relaxed mb-12 text-pretty">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="mailto:hello@sicong.dev">Say Hello</Button>
        </motion.div>

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
              className="font-mono text-[11px] uppercase tracking-[3px] text-gray hover:text-indigo transition-colors duration-300"
            >
              {platform.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-8">
        <Divider />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <Text level="caption" className="uppercase tracking-[3px] opacity-50">
            &copy; 2026 Sicong. All rights reserved.
          </Text>
          <Text level="caption" className="uppercase tracking-[3px] opacity-50">
            Built with Next.js + Tailwind CSS
          </Text>
        </div>
      </div>
    </SectionWrapper>
  );
}
