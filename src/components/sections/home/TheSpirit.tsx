import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TheSpirit() {
  return (
    <section className="bg-cream py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 z-10">
          <ScrollReveal direction="left">
            <SectionLabel text="WHO WE ARE" className="text-bg-dark text-left" />
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display text-bg-dark leading-[0.85] mb-8">
              BORN IN A BARREL.<br />
              RAISED BY WOLVES.
            </h2>
            <p className="font-body text-xl text-bg-dark max-w-2xl mb-10 leading-relaxed">
              Pex Rum didn't come from a boardroom. It came from a dare, a distillery, and a firm belief that rum should be interesting. We make small batches of aggressively good spirits and distribute them to stores across the country. No online sales. No subscriptions. Just great rum, where great rum belongs — in your glass, from your local.
            </p>
            
            <Link 
              to="/about"
              className="font-display text-3xl text-primary-coral flex items-center gap-2 group relative inline-flex"
            >
              READ OUR STORY
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-primary-coral transition-all duration-300 group-hover:w-full" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          <ScrollReveal direction="right" className="w-full h-full relative">
            {/* Diagonal Divider */}
            <motion.svg 
              className="absolute -left-32 top-0 w-full h-full text-bg-dark opacity-10 hidden lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="2" />
            </motion.svg>

            {/* Rotating Stamp */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] text-bg-dark">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" />
                <circle cx="100" cy="100" r="70" fill="currentColor" opacity="0.1" />
                <path d="M70 130 L100 70 L130 130 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                <circle cx="100" cy="100" r="15" fill="#F5A623" />
                <text x="100" y="160" fontFamily="Bebas Neue" fontSize="24" fill="currentColor" textAnchor="middle" letterSpacing="0.1em">
                  WILD SPIRIT
                </text>
              </svg>
            </motion.div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
