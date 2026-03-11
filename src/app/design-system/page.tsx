"use client";

export default function DesignSystemPage() {
  const colors = [
    { name: "dark", hex: "#1A1A2E", classes: "text-dark, bg-dark", bg: "bg-dark", usage: "Headings, body text, primary text color" },
    { name: "gray", hex: "#4A4E6A", classes: "text-gray", bg: "bg-gray", usage: "Body text — descriptions, fun facts, captions, meta info" },
    { name: "indigo", hex: "#3B3BF9", classes: "text-indigo, bg-indigo", bg: "bg-indigo", usage: "Primary accent — section labels, CTA button, links, selection highlight" },
    { name: "pink", hex: "#FF5CA8", classes: "text-pink, bg-pink", bg: "bg-pink", usage: "Secondary accent — radar chart, diamond layer, visual interest" },
    { name: "border", hex: "#E8E8F0", classes: "border-border", bg: "bg-border", usage: "Dividers & borders — section separators, horizontal rules" },
    { name: "white", hex: "#FFFFFF", classes: "bg-white", bg: "bg-white", usage: "Page background, navbar scrolled state, card backgrounds" },
  ];

  const glassLayers = [
    { name: "Layer 1 — Top", color: "rgba(59, 59, 249, 0.10)", source: "indigo @ 10%" },
    { name: "Layer 2 — Middle", color: "rgba(255, 92, 168, 0.15)", source: "pink @ 15%" },
    { name: "Layer 3 — Bottom", color: "rgba(59, 59, 249, 0.28)", source: "indigo @ 28%" },
  ];

  const typeLevels = [
    {
      name: "Heading",
      specs: "Jost 700 bold, 36px, text-dark, text-balance",
      classes: "font-jost font-bold text-[36px] text-dark",
      classStr: "font-jost font-bold text-[36px] text-dark",
      sample: "Design drives experience",
    },
    {
      name: "Subheading",
      specs: "Jost 600 semibold, 22px, text-dark",
      classes: "font-jost font-semibold text-[22px] text-dark",
      classStr: "font-jost font-semibold text-[22px] text-dark",
      sample: "Project Title Here",
    },
    {
      name: "Label",
      specs: "Space Mono 400, 12px, uppercase, tracking-[3px], text-indigo",
      classes: "font-mono text-[12px] uppercase tracking-[3px] text-indigo",
      classStr: "font-mono text-[12px] uppercase tracking-[3px] text-indigo",
      sample: "01 — Section Name",
    },
    {
      name: "Body",
      specs: "Space Mono 400, 13px, text-gray",
      classes: "font-mono text-[13px] text-gray",
      classStr: "font-mono text-[13px] text-gray",
      sample: "Body text for descriptions, fun facts, and general content.",
    },
    {
      name: "Caption",
      specs: "Space Mono 400, 11px, text-gray",
      classes: "font-mono text-[11px] text-gray",
      classStr: "font-mono text-[11px] text-gray",
      sample: "Navigation · metadata · timestamps · footer",
    },
  ];

  const jostWeights = [
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "SemiBold" },
    { weight: 700, label: "Bold" },
    { weight: 800, label: "ExtraBold" },
  ];

  const spaceMonoWeights = [
    { weight: 400, label: "Regular" },
    { weight: 700, label: "Bold" },
  ];

  const spacingValues = [
    { px: 8, name: "xs", tw: "gap-2", usage: "Small element gaps — photo grid, tight lists" },
    { px: 16, name: "sm", tw: "gap-4, mb-4, pt-4", usage: "Base spacing — label to title, inner padding" },
    { px: 32, name: "md", tw: "gap-8", usage: "Medium spacing — nav links, group gaps" },
    { px: 48, name: "lg", tw: "gap-12", usage: "Large spacing — column gaps, content block spacing" },
    { px: 80, name: "xl", tw: "mb-20", usage: "Section header to content" },
    { px: 120, name: "section", tw: "py-[120px]", usage: "Section top & bottom padding" },
  ];

  const animations = [
    { name: "Section Fade In Up", duration: "0.7s", delay: "—", easing: "easeInOut", trigger: "whileInView, once" },
    { name: "Diamond Expand", duration: "0.8s", delay: "i * 0.1s", easing: "easeOut", trigger: "whileInView, once" },
    { name: "Line Draw In", duration: "0.5s", delay: "0.3 + i * 0.12s", easing: "easeInOut", trigger: "whileInView, once" },
    { name: "Text Fade In", duration: "0.5s", delay: "0.5 + i * 0.12s", easing: "easeInOut", trigger: "whileInView, once" },
    { name: "Hero Enter", duration: "0.8s", delay: "1.5s", easing: "easeInOut", trigger: "mount" },
    { name: "Photo Stagger", duration: "0.5s", delay: "i * 0.08s", easing: "easeInOut", trigger: "whileInView, once" },
    { name: "Hover Scale", duration: "400ms", delay: "—", easing: "ease-out", trigger: "hover" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* 1. Page Title */}
        <h1 className="font-jost font-bold text-[36px] text-dark">
          Design System
        </h1>
        <p className="font-mono text-[11px] text-gray mt-2">
          Internal reference — not visible to site visitors
        </p>

        {/* 2. Color Palette */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Color Palette
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="flex flex-wrap gap-10">
            {colors.map((c) => (
              <div key={c.name} className="flex flex-col items-start" style={{ width: 120 }}>
                <div
                  className={`w-[80px] h-[80px] rounded-xl ${c.bg} ${
                    c.name === "white" || c.name === "border"
                      ? "border border-border"
                      : ""
                  }`}
                />
                <p className="font-mono text-[11px] text-dark mt-3 font-bold">
                  {c.name}
                </p>
                <p className="font-mono text-[10px] text-gray">{c.hex}</p>
                <p className="font-mono text-[10px] text-gray mt-1">{c.classes}</p>
                <p className="text-[11px] text-gray mt-2 leading-snug">{c.usage}</p>
              </div>
            ))}
          </div>

          <h3 className="font-jost font-semibold text-[18px] text-dark mt-10 mb-4">
            Glassmorphism Diamond Layers
          </h3>
          <div className="flex gap-8">
            {glassLayers.map((l) => (
              <div key={l.name} className="flex flex-col items-start" style={{ width: 140 }}>
                <div
                  className="w-[60px] h-[60px] rounded-lg border border-border"
                  style={{ backgroundColor: l.color }}
                />
                <p className="font-mono text-[11px] text-dark mt-2 font-bold">
                  {l.name}
                </p>
                <p className="font-mono text-[10px] text-gray">{l.source}</p>
                <p className="font-mono text-[10px] text-gray mt-0.5">{l.color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Typography System */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Typography System
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="flex flex-col gap-8">
            {typeLevels.map((level) => (
              <div
                key={level.name}
                className="grid grid-cols-[240px_1fr] gap-8 items-start"
              >
                <div>
                  <p className="font-mono text-[11px] text-dark font-bold">
                    {level.name}
                  </p>
                  <p className="font-mono text-[10px] text-gray mt-1">
                    {level.specs}
                  </p>
                  <p className="font-mono text-[10px] text-indigo mt-1">
                    {level.classStr}
                  </p>
                </div>
                <div>
                  <p className={level.classes}>{level.sample}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Font Specimens */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Font Specimens
          </h2>
          <div className="border-t border-border pt-8" />

          <h3 className="font-mono text-[11px] text-dark font-bold mb-4">
            Jost
          </h3>
          <div className="flex flex-col gap-3 mb-8">
            {jostWeights.map((w) => (
              <div key={w.weight} className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-gray w-[100px]">
                  {w.weight} {w.label}
                </span>
                <span
                  className="font-jost text-[20px] text-dark"
                  style={{ fontWeight: w.weight }}
                >
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            ))}
          </div>

          <h3 className="font-mono text-[11px] text-dark font-bold mb-4">
            Space Mono
          </h3>
          <div className="flex flex-col gap-3 mb-8">
            {spaceMonoWeights.map((w) => (
              <div key={w.weight} className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-gray w-[100px]">
                  {w.weight} {w.label}
                </span>
                <span
                  className="font-mono text-[20px] text-dark"
                  style={{ fontWeight: w.weight }}
                >
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            ))}
          </div>

        </section>

        {/* 5. Spacing Scale */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Spacing Scale
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="flex flex-col gap-6">
            {spacingValues.map((s) => (
              <div key={s.px} className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-dark font-bold" style={{ width: 70 }}>
                  {s.name}
                </span>
                <span className="font-mono text-[11px] text-gray" style={{ width: 50 }}>
                  {s.px}px
                </span>
                <div
                  className="h-[20px] bg-indigo rounded-sm"
                  style={{ width: `${Math.min(s.px, 300)}px`, opacity: 0.2 + (s.px / 300) * 0.8 }}
                />
                <div className="flex flex-col ml-2">
                  <span className="font-mono text-[11px] text-indigo">{s.tw}</span>
                  <span className="text-[11px] text-gray">{s.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Component API */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Component API
          </h2>
          <div className="border-t border-border pt-8" />
          <p className="font-mono text-[13px] text-gray mb-8">
            All UI must use these components. Never write raw Tailwind classes for text, headings, dividers, or buttons.
          </p>

          <div className="flex flex-col gap-6">
            {[
              {
                name: "Text",
                file: "components/Text.tsx",
                api: 'level: "body" | "caption" | "label"',
                extra: 'as?: "p" | "span"',
                example: '<Text level="body">Description text</Text>',
              },
              {
                name: "Heading",
                file: "components/Heading.tsx",
                api: 'level: "h1" | "h2" | "sub"',
                extra: "",
                example: '<Heading level="sub">Project Title</Heading>',
              },
              {
                name: "Divider",
                file: "components/Divider.tsx",
                api: "—",
                extra: "",
                example: "<Divider />",
              },
              {
                name: "Button",
                file: "components/Button.tsx",
                api: "href: string",
                extra: "",
                example: '<Button href="mailto:...">Say Hello</Button>',
              },
              {
                name: "SectionWrapper",
                file: "components/SectionWrapper.tsx",
                api: "id: string",
                extra: "Adds py-[120px], fade-in-up animation",
                example: '<SectionWrapper id="work">...</SectionWrapper>',
              },
              {
                name: "SectionHeader",
                file: "components/SectionHeader.tsx",
                api: "label: string, title: string",
                extra: "",
                example: '<SectionHeader label="02 — Work" title="Projects" />',
              },
            ].map((comp) => (
              <div key={comp.name} className="p-4 rounded-lg border border-border">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[13px] text-dark font-bold">
                    {"<"}{comp.name}{" />"}
                  </span>
                  <span className="font-mono text-[10px] text-gray">{comp.file}</span>
                </div>
                <p className="font-mono text-[11px] text-indigo">{comp.api}</p>
                {comp.extra && (
                  <p className="font-mono text-[10px] text-gray mt-1">{comp.extra}</p>
                )}
                <p className="font-mono text-[10px] text-gray mt-2 bg-dark/5 rounded px-2 py-1 inline-block">
                  {comp.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Section Header Component */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Section Header Component
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="p-8 rounded-xl border border-border bg-white">
            <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-4">
              01 — Example
            </p>
            <h3 className="font-jost font-bold text-[36px] text-dark text-balance">
              Section Title Example
            </h3>
          </div>
          <p className="font-mono text-[10px] text-gray mt-3">
            Label: font-mono text-[12px] uppercase tracking-[3px] text-indigo
            mb-4
          </p>
          <p className="font-mono text-[10px] text-gray mt-1">
            Title: font-jost font-bold text-[36px] text-dark text-balance
          </p>
        </section>

        {/* 7. Dividers & Borders */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Dividers &amp; Borders
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-[11px] text-dark font-bold mb-3">
                Divider
              </p>
              <div className="border-t border-border" />
              <p className="font-mono text-[10px] text-gray mt-2">
                border-t border-border (1px #E8E8F0)
              </p>
            </div>
          </div>
        </section>

        {/* 8. Button Styles */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Button Styles
          </h2>
          <div className="border-t border-border pt-8" />
          <div>
            <p className="font-mono text-[11px] text-dark font-bold mb-4">
              Primary CTA
            </p>
            <button className="bg-indigo text-white font-mono text-[11px] uppercase tracking-[3px] rounded-full py-4 px-10 hover:bg-indigo/90 transition-colors">
              Get in Touch
            </button>
            <p className="font-mono text-[10px] text-gray mt-3">
              bg-indigo text-white font-mono text-[11px] uppercase
              tracking-[3px] rounded-full py-4 px-10 hover:bg-indigo/90
            </p>
          </div>
        </section>

        {/* 9. Shadows & Effects */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Shadows &amp; Effects
          </h2>
          <div className="border-t border-border pt-8" />

          <p className="font-mono text-[11px] text-dark font-bold mb-4">
            Glassmorphism Diamond Layers
          </p>
          {(() => {
            const w = 160, h = 92;
            const dx2 = 6.95, dy2 = 3.97;
            const path = [
              `M ${w/2 + dx2},${dy2}`,
              `L ${w - dx2},${h/2 - dy2}`,
              `Q ${w},${h/2} ${w - dx2},${h/2 + dy2}`,
              `L ${w/2 + dx2},${h - dy2}`,
              `Q ${w/2},${h} ${w/2 - dx2},${h - dy2}`,
              `L ${dx2},${h/2 + dy2}`,
              `Q 0,${h/2} ${dx2},${h/2 - dy2}`,
              `L ${w/2 - dx2},${dy2}`,
              `Q ${w/2},0 ${w/2 + dx2},${dy2}`,
              "Z",
            ].join(" ");
            const fills = [
              "rgba(59, 59, 249, 0.10)",
              "rgba(255, 92, 168, 0.15)",
              "rgba(59, 59, 249, 0.28)",
            ];
            const offsets = [-80, -40, 0];
            return (
              <div className="relative mx-auto mb-6" style={{ width: w + 20, height: h + 120 }}>
                {fills.map((fill, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: 60 + offsets[i],
                      left: 0,
                      filter: "drop-shadow(0 4px 16px rgba(59, 59, 249, 0.06))",
                    }}
                  >
                    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
                      <path d={path} fill={fill} />
                    </svg>
                  </div>
                ))}
              </div>
            );
          })()}
          <p className="font-mono text-[10px] text-gray text-center">
            Rounded diamond SVG path · drop-shadow(0 4px 16px rgba(59, 59, 249, 0.06))
          </p>
        </section>

        {/* 10. Animation Tokens */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Animation Tokens
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="font-mono text-[11px] text-dark font-bold pb-3 pr-8">
                    Name
                  </th>
                  <th className="font-mono text-[11px] text-dark font-bold pb-3 pr-8">
                    Duration
                  </th>
                  <th className="font-mono text-[11px] text-dark font-bold pb-3 pr-8">
                    Delay
                  </th>
                  <th className="font-mono text-[11px] text-dark font-bold pb-3 pr-8">
                    Easing
                  </th>
                  <th className="font-mono text-[11px] text-dark font-bold pb-3">
                    Trigger
                  </th>
                </tr>
              </thead>
              <tbody>
                {animations.map((a) => (
                  <tr key={a.name} className="border-b border-border">
                    <td className="font-mono text-[11px] text-dark py-3 pr-8">
                      {a.name}
                    </td>
                    <td className="font-mono text-[11px] text-gray py-3 pr-8">
                      {a.duration}
                    </td>
                    <td className="font-mono text-[11px] text-gray py-3 pr-8">
                      {a.delay}
                    </td>
                    <td className="font-mono text-[11px] text-gray py-3 pr-8">
                      {a.easing}
                    </td>
                    <td className="font-mono text-[11px] text-indigo py-3">
                      {a.trigger}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 11. Layout Tokens */}
        <section>
          <h2 className="font-jost font-bold text-[24px] text-dark mb-8 mt-16">
            Layout Tokens
          </h2>
          <div className="border-t border-border pt-8" />
          <div className="flex flex-col gap-3">
            {[
              {
                label: "Max content width",
                value: "1100px",
                tw: "max-w-content",
              },
              {
                label: "Horizontal padding",
                value: "24px",
                tw: "px-6",
              },
              {
                label: "Section vertical padding",
                value: "120px",
                tw: "py-[120px]",
              },
              {
                label: "Z-index: base",
                value: "0",
                tw: "z-base",
              },
              {
                label: "Z-index: content",
                value: "10",
                tw: "z-content",
              },
              {
                label: "Z-index: nav",
                value: "50",
                tw: "z-nav",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-dark w-[200px]">
                  {item.label}
                </span>
                <span className="font-mono text-[11px] text-gray w-[80px]">
                  {item.value}
                </span>
                <span className="font-mono text-[11px] text-indigo">
                  {item.tw}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
}
