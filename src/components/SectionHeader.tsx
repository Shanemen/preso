interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-[12px] uppercase tracking-[3px] text-indigo mb-4">
        {label}
      </p>
      <h2 className="font-jost font-bold text-[36px] text-dark text-balance">
        {title}
      </h2>
    </div>
  );
}
