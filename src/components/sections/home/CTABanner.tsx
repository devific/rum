import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTABanner() {
  return (
    <section className="bg-primary-gold py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.002, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary-gold"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-6xl md:text-8xl font-display text-bg-dark mb-6 leading-none">
            FIND PEX RUM NEAR YOU
          </h2>
          <p className="font-body text-xl text-bg-dark max-w-2xl mx-auto mb-10">
            We're in bars, bottle shops, and restaurants across India. No
            delivery. No online orders. Just walk in and ask for Pex.
          </p>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Link
              to="/stores"
              className="flex items-center justify-center gap-3 bg-bg-dark text-primary-gold font-display text-3xl px-10 py-5 rounded-full hover:bg-primary-coral hover:text-bg-dark transition-colors duration-300"
            >
              <MapPin className="w-6 h-6" />
              FIND STORES
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
