import { SectionLabel } from "@/components/ui/SectionLabel";
import { RumCard } from "@/components/ui/RumCard";
import { rums } from "@/lib/rumsData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RumShowcase() {
  return (
    <section className="bg-bg-dark py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col items-center mb-16">
          <SectionLabel text="OUR LINEUP" />
          <h2 className="text-5xl md:text-7xl font-display text-cream mb-4 text-center">
            MEET THE CREW
          </h2>
          <p className="font-accent italic text-xl text-text-light text-center">
            Six rums. Six personalities. All unhinged.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rums.map((rum, index) => (
            <RumCard key={rum.id} rum={rum} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
