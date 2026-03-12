import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div className={cn("font-label text-primary-gold text-center mb-6 tracking-widest", className)}>
      — {text} —
    </div>
  );
}
