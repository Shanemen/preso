import { ReactNode } from "react";

type TextLevel = "body" | "caption" | "label";

const styles: Record<TextLevel, string> = {
  body: "font-mono text-[13px] text-gray",
  caption: "font-mono text-[11px] text-gray",
  label: "font-mono text-[12px] uppercase tracking-[3px] text-indigo",
};

interface TextProps {
  level: TextLevel;
  children: ReactNode;
  className?: string;
  as?: "p" | "span";
}

export default function Text({
  level,
  children,
  className = "",
  as: Tag = "p",
}: TextProps) {
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
}
