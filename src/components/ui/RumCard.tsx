import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Rum } from "@/lib/rumsData";
import { FloatingBottle } from "./FloatingBottle";

interface RumCardProps {
  key?: string | number;
  rum: Rum;
  index: number;
}

export function RumCard({ rum, index }: RumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-col items-center p-8 rounded-3xl bg-card-surface border border-border-warm box-glow transition-all duration-500 box-glow-hover"
      whileHover={{ y: -12 }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: `radial-gradient(circle at center, ${rum.color}15 0%, transparent 70%)` }} />
      
      <div className="relative w-full h-80 mb-8 flex items-center justify-center">
        <motion.div
          className="w-full h-full"
          whileHover={{ y: -16 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FloatingBottle color={rum.color} name={rum.name} imageUrl={rum.bottleImage} />
        </motion.div>
      </div>

      <h3 className="text-4xl font-display text-primary-gold mb-2 text-center group-hover:text-glow transition-all duration-300">
        {rum.name}
      </h3>
      
      <p className="font-accent text-cream text-center mb-6 h-12">
        {rum.tagline}
      </p>

      <div className="flex gap-2 mb-8">
        {rum.tags.map((tag) => (
          <span key={tag} className="font-label text-xs px-3 py-1 rounded-full border border-primary-coral text-primary-coral">
            {tag}
          </span>
        ))}
      </div>

      <Link 
        to={`/rums/${rum.id}`}
        className="mt-auto font-label text-primary-gold flex items-center gap-2 group/link"
      >
        DISCOVER
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}
