import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBottleProps {
  color: string;
  name: string;
  className?: string;
  imageUrl?: string;
}

export function FloatingBottle({
  color,
  name,
  className,
  imageUrl,
}: FloatingBottleProps) {
  // Use ImageKit transformations for optimization (e.g., width 400, quality 80)
  const optimizedUrl = imageUrl ? `${imageUrl}?tr=w-400,q-80` : "";

  return (
    <motion.div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className,
      )}
      whileHover={{ scale: 1.06, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {optimizedUrl ? (
        <img
          src={optimizedUrl}
          alt={`${name} Bottle`}
          className="h-full w-auto mx-auto object-contain drop-shadow-2xl"
          style={{ filter: `drop-shadow(0 20px 30px ${color}40)` }}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="text-cream text-center">Image not found</div>
      )}
    </motion.div>
  );
}
