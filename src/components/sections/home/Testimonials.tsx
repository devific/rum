import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "I've tried a lot of rum. PEX DARK made me rethink my entire approach to Wednesday evenings.",
    name: "Rahul S.",
    title: "RUM DRINKER, MUMBAI",
    initials: "RS"
  },
  {
    quote: "Pex Spiced has no business tasting this good at this price point. I'm unreasonably suspicious.",
    name: "Chef Ananya K.",
    title: "HEAD BARTENDER, GOA",
    initials: "AK"
  },
  {
    quote: "Ordered the Reserve for a special occasion. There was no special occasion. I just wanted it.",
    name: "Dev M.",
    title: "VERIFIED ADDICT, BENGALURU",
    initials: "DM"
  }
];

export function Testimonials() {
  return (
    <section className="bg-bg-mid py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col items-center mb-20 text-center">
          <SectionLabel text="FROM THE DRINKERS" />
          <h2 className="text-5xl md:text-7xl font-display text-cream">
            WHAT THE PEOPLE SAY
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-bg-dark rounded-3xl p-8 border border-border-warm hover:border-primary-gold box-glow transition-all duration-300 flex flex-col h-full relative group"
            >
              <div className="font-display text-primary-coral text-7xl leading-none absolute top-4 left-6 opacity-50 group-hover:opacity-100 transition-opacity">
                "
              </div>
              
              <p className="font-accent italic text-xl text-cream leading-relaxed mt-12 mb-10 flex-grow">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-card-surface border border-primary-gold flex items-center justify-center font-display text-primary-gold text-xl">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-body font-bold text-cream text-lg">{t.name}</h4>
                  <p className="font-label text-xs text-text-muted">{t.title}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-primary-coral fill-primary-coral" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
