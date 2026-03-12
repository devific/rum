import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { FloatingBottle } from "@/components/ui/FloatingBottle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { rums } from "@/lib/rumsData";

export default function RumDetail() {
  const { id } = useParams();
  const currentIndex = rums.findIndex((r) => r.id === id);
  
  if (currentIndex === -1) {
    return <Navigate to="/rums" replace />;
  }

  const rum = rums[currentIndex];
  const prevRum = rums[(currentIndex - 1 + rums.length) % rums.length];
  const nextRum = rums[(currentIndex + 1) % rums.length];

  return (
    <PageTransition>
      {/* Hero */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
        style={{ backgroundColor: rum.bgAccent }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full opacity-30 blur-[150px] pointer-events-none"
          style={{ backgroundColor: rum.color }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="z-10 flex flex-col items-center text-center px-6 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-wide"
            style={{ color: rum.color }}
          >
            {rum.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-accent italic text-3xl md:text-5xl text-cream mt-4 mb-12"
          >
            {rum.character}
          </motion.h2>

          <div className="flex gap-4 mb-12">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="font-label text-sm px-6 py-2 rounded-full border border-cream text-cream"
            >
              {rum.abv}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="font-label text-sm px-6 py-2 rounded-full border border-cream text-cream"
            >
              {rum.type}
            </motion.span>
          </div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="relative z-20 h-[50vh] md:h-[70vh] w-full max-w-[400px] flex items-center justify-center -mb-20"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <FloatingBottle color={rum.color} name={rum.name} imageUrl={rum.bottleImage} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        >
          <span className="font-label text-primary-gold text-xs tracking-widest">LEARN MORE</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="w-6 h-6 text-primary-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tasting Notes */}
      <section className="bg-bg-dark py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <SectionLabel text="TASTING NOTES" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {["NOSE", "PALATE", "FINISH"].map((note, i) => (
              <ScrollReveal key={note} delay={i * 0.2} className="flex flex-col items-center text-center">
                <h3 className="font-display text-5xl md:text-6xl text-primary-gold mb-8">{note}</h3>
                <div className="w-12 h-[2px] bg-border-warm mb-8" />
                <p className="font-accent italic text-2xl text-cream">
                  {i === 0 ? rum.nose : i === 1 ? rum.palate : rum.finish}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Character Essay */}
      <section 
        className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden flex items-center justify-center min-h-[60vh]"
        style={{ backgroundColor: rum.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] overflow-hidden">
          <h2 className="font-display text-[15vw] text-bg-dark whitespace-nowrap leading-none text-center">
            {rum.character.toUpperCase()}
          </h2>
        </div>

        <ScrollReveal className="max-w-3xl mx-auto text-center relative z-10">
          <p className="font-accent italic text-3xl md:text-5xl text-bg-dark leading-relaxed">
            "{rum.description}"
          </p>
        </ScrollReveal>
      </section>

      {/* Pairings */}
      <section className="bg-bg-mid py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <h3 className="font-label text-primary-gold tracking-widest text-center">— GOES WELL WITH —</h3>
          </ScrollReveal>

          <div className="flex flex-nowrap gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
            {rum.pairings.split(", ").map((pairing, i) => (
              <ScrollReveal 
                key={i} 
                direction="right" 
                delay={i * 0.15}
                className="flex-shrink-0 w-72 bg-bg-dark rounded-3xl p-8 border border-border-warm snap-center box-glow"
              >
                <div className="w-12 h-12 rounded-full bg-card-surface border border-primary-gold flex items-center justify-center text-primary-gold mb-6">
                  <span className="font-display text-2xl">{i + 1}</span>
                </div>
                <p className="font-label text-cream text-lg tracking-wider">{pairing.toUpperCase()}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="flex flex-col md:flex-row w-full h-[40vh] md:h-[50vh]">
        <Link 
          to={`/rums/${prevRum.id}`}
          className="flex-1 flex flex-col items-center justify-center relative group overflow-hidden"
          style={{ backgroundColor: prevRum.bgAccent }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: prevRum.color }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-label text-cream text-sm tracking-widest mb-4 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
              PREVIOUS RUM
            </span>
            <h3 className="font-display text-5xl md:text-7xl text-cream group-hover:text-glow transition-all duration-300">
              {prevRum.name}
            </h3>
          </div>
        </Link>

        <Link 
          to={`/rums/${nextRum.id}`}
          className="flex-1 flex flex-col items-center justify-center relative group overflow-hidden"
          style={{ backgroundColor: nextRum.bgAccent }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: nextRum.color }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-label text-cream text-sm tracking-widest mb-4 flex items-center gap-2">
              NEXT RUM
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </span>
            <h3 className="font-display text-5xl md:text-7xl text-cream group-hover:text-glow transition-all duration-300">
              {nextRum.name}
            </h3>
          </div>
        </Link>
      </section>
    </PageTransition>
  );
}
