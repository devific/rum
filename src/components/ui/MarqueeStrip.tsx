import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

export function MarqueeStrip({ text, reverse = false, className }: MarqueeStripProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap bg-primary-gold py-4 flex items-center", className)}>
      <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-bg-dark font-display text-5xl mx-4 tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
