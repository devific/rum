import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Beaker, Shield, Leaf, MapPin } from "lucide-react";

export default function About() {
  const values = [
    { title: "SMALL BATCH", icon: Beaker, desc: "We make rum in small batches because we care about the details. Mass production is for water.", back: "Less is more. Unless it's rum." },
    { title: "NO SHORTCUTS", icon: Shield, desc: "No artificial flavors, no fake colors, no corporate nonsense. Just honest, aggressive spirit.", back: "We take the long way home." },
    { title: "REAL INGREDIENTS", icon: Leaf, desc: "100% cane spirit, real spices, actual coconuts. If you can't pronounce it, we don't use it.", back: "Mother Nature approved." },
    { title: "LOCAL FIRST", icon: MapPin, desc: "We support local bars and bottle shops. You won't find us online. Go outside.", back: "Support your local bartender." }
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-screen bg-bg-dark flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-10 pointer-events-none"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary-coral">
            <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-18.1,97.4,-2.5C97.9,13.1,92.8,28.9,83.3,41.9C73.8,54.9,59.9,65.1,45.1,72.6C30.3,80.1,15.1,84.9,-0.3,85.4C-15.7,85.9,-31.4,82,-45.4,74.3C-59.4,66.6,-71.7,55.1,-80.6,41.4C-89.5,27.7,-95,11.8,-94.1,-3.8C-93.2,-19.4,-85.9,-34.7,-75.4,-46.8C-64.9,-58.9,-51.2,-67.8,-37.1,-74.8C-23,-81.8,-8.5,-86.9,6.2,-87.8C20.9,-88.7,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <AnimatedText text="WE MAKE RUM." className="font-display text-[clamp(4rem,10vw,12rem)] text-cream leading-[0.85]" delay={0.2} />
          <AnimatedText text="WHAT'S YOUR EXCUSE?" className="font-display text-[clamp(4rem,10vw,12rem)] text-primary-gold leading-[0.85] mb-8" delay={0.8} />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-accent italic text-2xl md:text-4xl text-cream max-w-3xl"
          >
            The story of Pex Rum is short, chaotic, and entirely true.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bg-mid py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="font-label text-primary-gold mb-4 tracking-widest">— THE BEGINNING</h3>
              <h2 className="font-display text-6xl md:text-8xl text-cream mb-6 leading-none">A DARE AND A STILL</h2>
              <p className="font-body text-lg text-text-light leading-relaxed">
                It started with two friends, a small copper pot still, and a heated argument about what rum should actually taste like. We were tired of the overly sweet, mass-produced vanilla syrup masquerading as spirit. So we made our own. It was aggressive. It was weird. It was perfect.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-bg-dark rounded-full border border-border-warm flex items-center justify-center p-12 relative">
                <div className="absolute inset-0 rounded-full border border-primary-gold opacity-20 animate-spin-slow" />
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary-gold opacity-80">
                  <path d="M30 80 L70 80 L60 40 L55 20 L45 20 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 20 C 50 10, 70 10, 70 30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md aspect-square bg-bg-dark rounded-3xl border border-border-warm flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-coral opacity-20 blur-3xl rounded-full" />
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary-coral opacity-80">
                  <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="30" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="2" />
                  <line x1="70" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 50 Q 50 60 80 50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 40 Q 50 50 80 40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 60 Q 50 70 80 60" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <h3 className="font-label text-primary-coral mb-4 tracking-widest">— THE DISTILLERY</h3>
              <h2 className="font-display text-6xl md:text-8xl text-cream mb-6 leading-none">CRAFTED IN CHAOS</h2>
              <p className="font-body text-lg text-text-light leading-relaxed">
                We don't have a massive factory. We have a loud, hot, messy distillery where every batch is monitored by human beings who care too much. We age in American oak, we infuse with real ingredients, and we bottle it when it's ready. Not a second before.
              </p>
            </ScrollReveal>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="font-label text-accent-lime mb-4 tracking-widest">— THE MISSION</h3>
              <h2 className="font-display text-6xl md:text-8xl text-cream mb-6 leading-none">OFFLINE ONLY</h2>
              <p className="font-body text-lg text-text-light leading-relaxed">
                You can't buy Pex Rum on the internet. We believe spirits are meant to be discovered in the wild — at your local bottle shop, poured by your favorite bartender, shared with people in the same room. We support local businesses because they support us.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-bg-dark rounded-full border border-border-warm flex items-center justify-center p-12 relative">
                <div className="absolute inset-0 rounded-full border border-accent-lime opacity-20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent-lime opacity-80">
                  <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="65" r="10" fill="currentColor" />
                  <line x1="50" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-primary-gold py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-8xl text-bg-dark leading-none">WHAT WE STAND FOR</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-80 group">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-bg-dark rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-border-warm box-glow">
                    <value.icon className="w-12 h-12 text-primary-gold mb-6" />
                    <h3 className="font-display text-4xl text-cream mb-4">{value.title}</h3>
                    <p className="font-body text-sm text-text-light">{value.desc}</p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-primary-coral rounded-3xl p-8 flex flex-col items-center justify-center text-center rotate-y-180">
                    <p className="font-accent italic text-2xl text-bg-dark">"{value.back}"</p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
