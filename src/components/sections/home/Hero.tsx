import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, ChevronDown } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingBottle } from "@/components/ui/FloatingBottle";
import { rums } from "@/lib/rumsData";

export function Hero() {
  const flagship = rums[0]; // PEX GOLD

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-dark flex items-center pt-20">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none blur-[100px]"
        style={{
          background: "radial-gradient(circle, #F5A623 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-label text-primary-gold text-sm tracking-widest mb-6"
          >
            — THE BOLDEST DROP YOU'LL EVER MEET —
          </motion.div>

          <div className="flex mb-4">
            <AnimatedText
              text="PEX"
              className="font-display text-[clamp(5rem,12vw,14rem)] text-cream leading-[0.85] tracking-wide"
              delay={0.4}
            />
            <AnimatedText
              text="RUM"
              className="font-display text-[clamp(5rem,12vw,14rem)] text-primary-gold leading-[0.85] tracking-wide"
              delay={0.6}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-accent italic text-2xl md:text-3xl text-cream mb-6"
          >
            Distilled Wild. Bottled Weirder.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="font-body text-lg text-text-light max-w-lg mb-10"
          >
            Pex Rum is crafted for those who drink with intention and live with
            none. Find us at your nearest stockist — if you can handle it.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 1.8 }}
            >
              <Link
                to="/rums"
                className="flex items-center justify-center gap-2 bg-primary-coral text-white font-display text-2xl px-8 py-4 rounded-full hover:bg-accent-lime hover:text-bg-dark transition-colors duration-300 w-full group"
              >
                EXPLORE THE RUMS
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 1.95 }}
            >
              <Link
                to="/stores"
                className="flex items-center justify-center gap-2 border-2 border-primary-gold text-cream font-display text-2xl px-8 py-4 rounded-full hover:bg-primary-gold hover:text-bg-dark transition-colors duration-300 w-full"
              >
                <MapPin className="w-5 h-5" />
                FIND A STORE
              </Link>
            </motion.div>
          </div>

          {/* Rotating Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 max-md:left-6 md:right-12 hidden lg:flex items-center justify-center w-32 h-32"
          >
            <div className="absolute inset-0 animate-spin-slow">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible"
              >
                <path
                  id="curve"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="transparent"
                />
                <text className="font-label text-[10.5px] fill-primary-gold tracking-[0.2em] uppercase">
                  <textPath href="#curve" startOffset="0%">
                    • PEX RUM • WILD SPIRITS • EST. OF CHAOS
                  </textPath>
                </text>
              </svg>
            </div>
            <Star className="w-6 h-6 text-primary-gold fill-primary-gold" />
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Abstract Background Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-primary-gold opacity-20 animate-spin-slow"
              style={{ animationDuration: "40s" }}
            >
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-18.1,97.4,-2.5C97.9,13.1,92.8,28.9,83.3,41.9C73.8,54.9,59.9,65.1,45.1,72.6C30.3,80.1,15.1,84.9,-0.3,85.4C-15.7,85.9,-31.4,82,-45.4,74.3C-59.4,66.6,-71.7,55.1,-80.6,41.4C-89.5,27.7,-95,11.8,-94.1,-3.8C-93.2,-19.4,-85.9,-34.7,-75.4,-46.8C-64.9,-58.9,-51.2,-67.8,-37.1,-74.8C-23,-81.8,-8.5,-86.9,6.2,-87.8C20.9,-88.7,30.5,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          {/* Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", delay: 1.5 }}
            className="absolute top-[20%] right-[20%] z-30 bg-white px-4 py-2 rounded shadow-xl rotate-6"
          >
            <span className="font-label text-bg-dark text-xs font-bold">
              AGED 3 YRS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", delay: 1.7 }}
            className="absolute bottom-[30%] left-[10%] z-30 bg-white px-4 py-2 rounded shadow-xl -rotate-6"
          >
            <span className="font-label text-bg-dark text-xs font-bold">
              SMALL BATCH
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 1.9 }}
            className="absolute top-[60%] right-[10%] z-30 bg-white px-4 py-2 rounded shadow-xl rotate-12"
          >
            <span className="font-label text-bg-dark text-xs font-bold">
              100% CANE
            </span>
          </motion.div>

          {/* Bottle */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative z-20 h-full w-full max-w-[300px] mx-auto flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <FloatingBottle
                color={flagship.color}
                name={flagship.name}
                imageUrl={flagship.bottleImage}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-primary-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
