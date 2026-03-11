"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

// Pyramid / triangle — New York — gentle float
function IconPyramid() {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      whileInView={{ y: [0, -2, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M9 3L15.5 15H2.5L9 3Z" fill="#FFD43B" />
    </motion.svg>
  );
}

// Diamond — animals/nature — gentle pulse
function IconDiamond() {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      whileInView={{ scale: [1, 1.1, 1] }}
      viewport={{ once: false }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M9 1L17 9L9 17L1 9L9 1Z" fill="#FF5CA8" />
    </motion.svg>
  );
}

// Chevron / arrow — slow rotate
function IconChevron() {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      whileInView={{ rotate: [0, 8, -8, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M3 14L9 4L11 8L5 18L3 14Z" fill="#2ED573" />
      <path d="M9 4L15 14L13 18L7 8L9 4Z" fill="#24B562" />
    </motion.svg>
  );
}

// Donut / ring — continuous spin
function IconDonut() {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      whileInView={{ rotate: 360 }}
      viewport={{ once: false }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="9" cy="9" r="7" stroke="#FFD43B" strokeWidth="3" fill="none" strokeDasharray="6 4" />
    </motion.svg>
  );
}


const funFacts = [
  { text: "Grew up in New York — went to high school on the Upper East Side", icon: <IconPyramid /> },
  { text: "Will travel anywhere if there are wild animals to meet", icon: <IconDiamond /> },
  { text: "Love working with my hands — pottery, knitting, cooking, drawing, watercolor, paper arts", icon: <IconDonut /> },
  { text: "Unreasonably good at keeping plants alive", icon: <IconChevron /> },
  { text: "Caretaker of a family of deer who visit my backyard", icon: <IconDiamond /> },
];

const photos = [
  { src: "/photos/eggtart.JPG", alt: "Egg tart" },
  { src: "/photos/IMG_8924.JPG", alt: "Highland cow" },
  { src: "/photos/IMG_3180.JPG", alt: "Nepal sunset" },
  { src: "/photos/IMG_4131.jpg", alt: "Orchid" },
  { src: "/photos/IMG_0689.jpg", alt: "Watercolor landscape" },
  { src: "/photos/IMG_6058.JPG", alt: "Porto boat" },
  { src: "/photos/llama.PNG", alt: "Llama" },
  { src: "/photos/562CE374-C85C-4597-B5F1-8EC8C0DEAE8F.JPG", alt: "Fox" },
  { src: "/photos/IMG_0515.JPG", alt: "Amaryllis" },
  { src: "/photos/IMG_5848.JPG", alt: "Deer" },
  { src: "/photos/sunrise.JPG", alt: "Sunrise" },
  { src: "/photos/Porto.JPG", alt: "Porto" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="03 — About" title="Who I am outside of work" />

      {/* Fun facts */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-4"
      >
        {funFacts.map((fact, i) => (
          <p key={i} className="font-mono text-[13px] text-gray leading-[2.2]">
            {fact.text}
          </p>
        ))}
      </motion.div>

      {/* Waterfall photo grid — 3 cols, varied heights */}
      <div className="columns-2 md:columns-4 gap-2 [column-fill:balance]">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="mb-2.5 rounded-xl overflow-hidden cursor-pointer break-inside-avoid group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
