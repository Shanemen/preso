import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block font-mono text-[11px] uppercase tracking-[3px] bg-indigo text-white px-10 py-4 rounded-full hover:bg-indigo/90 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
}
