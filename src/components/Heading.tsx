import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "sub";

const styles: Record<HeadingLevel, string> = {
  h1: "font-jost font-bold text-[36px] text-dark text-balance",
  h2: "font-jost font-bold text-[36px] text-dark text-balance",
  sub: "font-jost font-semibold text-[22px] text-dark",
};

const tags: Record<HeadingLevel, "h1" | "h2" | "h3"> = {
  h1: "h1",
  h2: "h2",
  sub: "h3",
};

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export default function Heading({
  level,
  children,
  className = "",
}: HeadingProps) {
  const Tag = tags[level];
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
}
