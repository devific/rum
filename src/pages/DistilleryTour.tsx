import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapPin, Clock, Calendar, Ticket } from "lucide-react";

export default function DistilleryTour() {
  return (
    <div className="bg-bg-dark min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionLabel text="THE PEX DISTILLERY" />
          <AnimatedText
            text="SEE WHERE"
            className="font-display text-6xl md:text-8xl text-cream mt-6"
          />
          <AnimatedText
            text="THE CHAOS"
            className="font-display text-6xl md:text-8xl text-primary-gold"
            delay={0.2}
          />
          <AnimatedText
            text="IS BORN."
            className="font-display text-6xl md:text-8xl text-cream"
            delay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-lg text-text-light max-w-2xl mt-8"
          >
            Step inside our Goa distillery. Smell the molasses, feel the heat of
            the copper stills, and taste the wild spirit right from the source.
            This isn't a museum; it's a working madhouse of flavor.
          </motion.p>
        </div>

        {/* Abstract Background Element */}
        <motion.div
          className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none blur-[100px]"
          style={{
            background: "radial-gradient(circle, #FF5C35 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Tour Details */}
      <section className="py-20 px-6 md:px-12 bg-[#0A0500]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-5xl text-primary-gold mb-8">
              THE EXPERIENCE
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl text-primary-gold">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="font-accent text-2xl text-cream mb-2">
                    The Fermentation Room
                  </h3>
                  <p className="font-body text-text-muted">
                    Where the magic begins. Experience the intense aromas of our
                    wild yeast strains working their magic on premium molasses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl text-primary-gold">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="font-accent text-2xl text-cream mb-2">
                    The Copper Stills
                  </h3>
                  <p className="font-body text-text-muted">
                    Get up close with our custom copper pot stills. Learn how we
                    extract the boldest flavors while leaving the boring stuff
                    behind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl text-primary-gold">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="font-accent text-2xl text-cream mb-2">
                    The Barrel House
                  </h3>
                  <p className="font-body text-text-muted">
                    Walk through rows of charred oak barrels. Breathe in the
                    angel's share and learn about our unique aging process in
                    the tropical heat.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-coral/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl text-primary-coral">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="font-accent text-2xl text-primary-coral mb-2">
                    The Tasting Session
                  </h3>
                  <p className="font-body text-text-muted">
                    The grand finale. A guided tasting of our core range, plus
                    an exclusive pour of something we're currently experimenting
                    with.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-dark border border-border-warm p-8 md:p-12">
            <h3 className="font-display text-4xl text-cream mb-8">TOUR INFO</h3>

            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4">
                <MapPin className="text-primary-gold w-6 h-6" />
                <div>
                  <p className="font-label text-sm text-text-muted">LOCATION</p>
                  <p className="font-body text-cream">
                    Pex Rum Distillery, Goa, India
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="text-primary-gold w-6 h-6" />
                <div>
                  <p className="font-label text-sm text-text-muted">DURATION</p>
                  <p className="font-body text-cream">90 Minutes</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Calendar className="text-primary-gold w-6 h-6" />
                <div>
                  <p className="font-label text-sm text-text-muted">SCHEDULE</p>
                  <p className="font-body text-cream">
                    Wed - Sun, 2:00 PM & 4:30 PM
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Ticket className="text-primary-gold w-6 h-6" />
                <div>
                  <p className="font-label text-sm text-text-muted">PRICE</p>
                  <p className="font-body text-cream">
                    ₹1,500 per person (Includes Tasting)
                  </p>
                </div>
              </li>
            </ul>

            <button className="w-full bg-primary-gold text-bg-dark font-display text-2xl py-4 hover:bg-cream transition-colors">
              BOOK YOUR SPOT
            </button>
            <p className="font-body text-xs text-text-muted text-center mt-4">
              Must be 21 or older to participate. Advance booking required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
