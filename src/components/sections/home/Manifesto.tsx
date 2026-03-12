import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Manifesto() {
  const manifestoLines = [
    "We believe rum should surprise you.",
    "We believe small batches beat mass production every time.",
    "We believe you should be able to find good spirits at your local store — not wait for a delivery.",
    "And above all, we believe that whatever you're drinking right now, Pex Rum would've been better."
  ];

  return (
    <section className="bg-bg-dark py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-accent italic text-[30rem] text-primary-gold opacity-5 pointer-events-none leading-none select-none">
        "
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <SectionLabel text="THE PEX PROMISE" />
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {manifestoLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="font-accent italic text-2xl md:text-4xl text-cream leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="font-label text-primary-gold tracking-widest">
            — The Pex Rum Distillery Team
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
