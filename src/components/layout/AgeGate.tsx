import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem("ageVerified");
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem("ageVerified", "true");
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.youtube.com/watch?v=2HTHPtoNJLk&t=19s";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-bg-dark flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-display text-6xl md:text-8xl text-primary-gold mb-8 tracking-widest">
              ARE YOU OLD ENOUGH
              <br />
              FOR THIS?
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleVerify}
                className="bg-primary-coral text-white font-display text-2xl px-10 py-4 rounded-full hover:bg-accent-lime hover:text-bg-dark transition-colors duration-300 hover:scale-105"
              >
                YES, POUR ME IN
              </button>
              <button
                onClick={handleDecline}
                className="border-2 border-border-warm text-text-muted font-display text-2xl px-10 py-4 rounded-full hover:border-primary-gold hover:text-primary-gold transition-colors duration-300"
              >
                NOT YET, SORRY
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
