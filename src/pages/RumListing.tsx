import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { RumCard } from "@/components/ui/RumCard";
import { rums } from "@/lib/rumsData";
import { cn } from "@/lib/utils";

const filters = ["ALL", "AGED", "FLAVOURED", "WHITE", "PREMIUM"];

export default function RumListing() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredRumId, setHoveredRumId] = useState<string | null>(null);

  const filteredRums = rums.filter(rum => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AGED") return rum.tags.includes("AGED") || rum.tags.includes("SMOKY");
    if (activeFilter === "FLAVOURED") return rum.type.includes("Flavoured") || rum.type.includes("Spiced");
    if (activeFilter === "WHITE") return rum.type.includes("White");
    if (activeFilter === "PREMIUM") return rum.tags.includes("PREMIUM");
    return true;
  });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedText text="THE LINEUP" className="font-display text-[clamp(4rem,10vw,12rem)] text-primary-gold leading-[0.85] mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-accent italic text-2xl md:text-4xl text-cream"
          >
            Six rums. All different. All Pex.
          </motion.p>
        </div>
      </section>

      <MarqueeStrip text="PEX RUM ✦ DISTILLED WILD ✦ BOTTLED WEIRDER ✦ SMALL BATCH ✦ 100% CANE SPIRIT ✦ AGED IN OAK ✦" />

      {/* Grid Section */}
      <section className="bg-bg-dark py-20 px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "font-label text-sm md:text-base tracking-widest pb-2 relative transition-colors duration-300",
                  activeFilter === filter ? "text-primary-gold" : "text-text-muted hover:text-cream"
                )}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredRums.map((rum, index) => (
                <motion.div
                  key={rum.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredRumId(rum.id)}
                  onHoverEnd={() => setHoveredRumId(null)}
                  className={cn(
                    "transition-opacity duration-300",
                    hoveredRumId && hoveredRumId !== rum.id ? "opacity-40" : "opacity-100"
                  )}
                >
                  <RumCard rum={rum} index={0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
