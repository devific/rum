import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { rums } from "@/lib/rumsData";
import { FloatingBottle } from "@/components/ui/FloatingBottle";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HorizontalRumScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(rums.length - 1) * 100}vw`]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-bg-mid">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
          <SectionLabel text="SCROLL TO MEET THE CREW" className="mb-2" />
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary-gold"
          >
            →
          </motion.div>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex h-full w-[600vw]">
          {rums.map((rum, index) => (
            <div
              key={rum.id}
              className="w-screen h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: rum.bgAccent }}
            >
              {/* Background Blob */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-20 blur-[120px] pointer-events-none"
                style={{ backgroundColor: rum.color }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Giant Background Quote */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07] overflow-hidden">
                <h2 className="font-accent italic text-[15vw] text-cream whitespace-nowrap leading-none text-center">
                  "{rum.tagline}"
                </h2>
              </div>

              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 h-full">
                
                {/* Left: Giant Name */}
                <div className="md:col-span-4 flex flex-col justify-center h-full">
                  <h2 
                    className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-wide"
                    style={{ color: rum.color }}
                  >
                    {rum.name.split(" ").map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h2>
                </div>

                {/* Center: Bottle */}
                <div className="md:col-span-4 h-[60vh] md:h-[80vh] flex items-center justify-center relative">
                  <motion.div
                    className="w-full h-full max-w-[300px]"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }} // Parallax effect
                  >
                    <FloatingBottle color={rum.color} name={rum.name} imageUrl={rum.bottleImage} />
                  </motion.div>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-4 flex flex-col justify-center h-full items-start md:items-end text-left md:text-right">
                  <h3 className="font-accent italic text-3xl md:text-5xl text-cream mb-4">
                    {rum.character}
                  </h3>
                  <p className="font-body text-lg text-text-light mb-8 max-w-sm">
                    {rum.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {rum.tags.map((tag) => (
                      <span key={tag} className="font-label text-sm px-4 py-2 rounded-full border border-primary-coral text-primary-coral">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
