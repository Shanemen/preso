# Project Rules

## Design System First

All UI work must follow the internal design system defined in `src/app/design-system/page.tsx` and `tailwind.config.ts`.

### When building or modifying UI:

1. **Use existing tokens** — colors, typography levels, spacing scale, fonts, and animation patterns from the design system. Never introduce ad-hoc values (e.g., arbitrary hex colors, one-off font sizes, custom spacing) when a token already exists.

2. **Use existing components** — `SectionWrapper`, `SectionHeader`, and other shared components. Check what's available before creating inline markup that duplicates their purpose.

3. **Extend, don't deviate** — If the design system doesn't cover what you need, create a new token or component that is **consistent with the existing system** (naming conventions, scale progression, visual language). Never add something that contradicts or conflicts with established patterns.

4. **Update the design system** — Any new token, component, or pattern added to the codebase must also be documented in the design system page (`src/app/design-system/page.tsx`). The design system is the source of truth — if it's not there, it doesn't exist.

### Quick reference:
- **Colors**: dark, gray, indigo, pink, border, white (see tailwind.config.ts)
- **Fonts**: Jost (headings), Space Mono (labels, body, captions)
- **Typography**: Heading / Subheading / Label / Body / Caption
- **Spacing**: xs(8) / sm(16) / md(32) / lg(48) / xl(80) / section(120)
- **Animations**: whileInView with once:true for scroll reveals

### Component API (src/components/):
- **`<Text level="body|caption|label">`** — All non-heading text. Props: `as`, `className`
- **`<Heading level="h1|h2|sub">`** — All headings. Props: `className`
- **`<Divider>`** — Horizontal rule (`border-t border-border`). Props: `className`
- **`<Button href="...">`** — CTA pill button. Props: `className`
- **`<SectionWrapper id="...">`** — Full-width white section with `py-[120px]`. Props: `className`
- **`<SectionHeader label="..." title="...">`** — Section label + heading combo
