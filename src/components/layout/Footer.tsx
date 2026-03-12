import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { rums } from "@/lib/rumsData";
import { config } from "@/config";

export function Footer() {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#030100] border-t-[3px] border-transparent"
      style={{ borderImage: "linear-gradient(to right, #F5A623, #FF5C35, #C8F135) 1" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Col 1 */}
        <div>
          {config.useImageLogo ? (
            <img 
              src={config.logoUrl} 
              alt="Pex Rum Logo" 
              className="h-16 w-auto object-contain mb-4"
            />
          ) : (
            <h2 className="font-display text-6xl text-primary-gold tracking-widest mb-2">PEX RUM</h2>
          )}
          <p className="font-accent italic text-cream text-lg mb-4">Distilled Wild. Bottled Weirder.</p>
          <p className="font-body text-sm text-text-muted">
            Available at select bars, bottle shops & restaurants across India.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="font-label text-primary-gold mb-6">EXPLORE</h3>
          <ul className="space-y-4">
            {["Home", "About", "Contact", "Store Locator"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-cream hover:text-primary-gold transition-colors relative group inline-block"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="font-label text-primary-gold mb-6">OUR RUMS</h3>
          <ul className="space-y-4">
            {rums.map((rum) => (
              <li key={rum.id}>
                <Link
                  to={`/rums/${rum.id}`}
                  className="font-label text-sm text-cream hover:text-primary-coral transition-colors"
                >
                  {rum.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h3 className="font-label text-primary-gold mb-6">CONNECT</h3>
          <div className="flex gap-4 mb-8">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.25, color: "#FF5C35" }}
                className="text-cream transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="font-body text-sm text-cream mb-2">hello@pexrum.com</p>
          <p className="font-body text-sm text-text-muted">
            The Pex Rum Distillery<br />
            Goa, India
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A0C00] py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label text-xs text-text-muted">
          © {new Date().getFullYear()} Pex Rum. All rights reserved. Drink Responsibly.
        </p>
        <p className="font-label text-xs text-text-muted">
          21+ Only. Not for Sale Online.
        </p>
      </div>
    </motion.footer>
  );
}
