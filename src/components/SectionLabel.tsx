interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[4px] text-gray mb-4">
      {label}
    </p>
  );
}
