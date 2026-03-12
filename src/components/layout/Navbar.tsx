import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/config";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "OUR RUMS", path: "/rums" },
  { name: "ABOUT", path: "/about" },
  { name: "DISTILLERY", path: "/distillery" },
  { name: "STORES", path: "/stores" },
  { name: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between",
          scrolled
            ? "bg-bg-dark/90 backdrop-blur-lg border-b border-border-warm"
            : "bg-transparent",
        )}
      >
        <Link to="/" className="flex flex-col items-start group">
          {config.useImageLogo ? (
            <motion.img
              src={config.logoUrl}
              alt="Pex Rum Logo"
              className="h-12 w-auto object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
          ) : (
            <>
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="font-display text-4xl text-primary-gold tracking-[0.2em] group-hover:text-glow transition-all"
              >
                PEX RUM
              </motion.span>
              <span className="font-label text-[10px] text-cream tracking-widest">
                Est. of Wild Spirits
              </span>
            </>
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative font-body text-sm font-medium text-cream group overflow-hidden"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 skew-x-[-20deg]" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/stores"
            className="bg-primary-coral text-white font-display text-xl px-6 py-2 rounded-full hover:bg-accent-lime hover:text-bg-dark transition-colors duration-300 hover:scale-105 inline-block"
          >
            FIND A STORE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-gold p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-bg-dark flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="font-display text-5xl text-primary-gold hover:text-primary-coral transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/stores"
                className="bg-primary-coral text-white font-display text-3xl px-8 py-3 rounded-full mt-4 inline-block"
              >
                FIND A STORE
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
