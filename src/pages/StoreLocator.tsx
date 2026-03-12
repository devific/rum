import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Phone, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stores } from "@/lib/storesData";
import { cn } from "@/lib/utils";

const types = ["ALL", "BAR / RESTAURANT", "BOTTLE SHOP", "HOTEL"];

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("ALL");
  const [hoveredStoreId, setHoveredStoreId] = useState<string | null>(null);

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === "ALL" || store.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedText text="FIND PEX" className="font-display text-[clamp(4rem,10vw,12rem)] text-primary-gold leading-[0.85] mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-accent italic text-2xl md:text-4xl text-cream"
          >
            Rum belongs in your hand, not your cart.
          </motion.p>
        </div>
      </section>

      {/* Locator Section */}
      <section className="bg-bg-mid py-12 px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-[80vh]">
          
          {/* Left Column: List */}
          <div className="lg:col-span-5 flex flex-col h-full bg-bg-dark rounded-3xl border border-border-warm overflow-hidden">
            
            {/* Search & Filters */}
            <div className="p-6 border-b border-border-warm bg-bg-dark z-10">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search by city or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card-surface border border-border-warm rounded-full py-3 pl-12 pr-4 text-cream font-body focus:outline-none focus:border-primary-gold transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={cn(
                      "font-label text-xs px-4 py-2 rounded-full border transition-colors duration-300",
                      activeType === type 
                        ? "bg-primary-gold border-primary-gold text-bg-dark" 
                        : "border-border-warm text-text-muted hover:border-primary-gold hover:text-primary-gold"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Store List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              <AnimatePresence>
                {filteredStores.map((store, i) => (
                  <motion.div
                    key={store.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onHoverStart={() => setHoveredStoreId(store.id)}
                    onHoverEnd={() => setHoveredStoreId(null)}
                    className="p-6 rounded-2xl bg-card-surface border-l-4 border-transparent hover:border-primary-gold hover:bg-[#251200] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-body font-bold text-cream text-xl group-hover:text-primary-gold transition-colors">{store.name}</h3>
                      <span className="font-label text-[10px] px-2 py-1 rounded bg-bg-dark text-primary-coral border border-border-warm">
                        {store.type}
                      </span>
                    </div>
                    <p className="font-body text-sm text-text-muted mb-4">{store.address}, {store.city}</p>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-warm">
                      <div className="flex items-center gap-2 text-text-light font-body text-sm">
                        <Phone className="w-4 h-4 text-primary-gold" />
                        {store.phone}
                      </div>
                      <a href="#" className="font-label text-xs text-primary-gold flex items-center gap-1 hover:text-primary-coral transition-colors">
                        DIRECTIONS
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
                {filteredStores.length === 0 && (
                  <div className="text-center py-12">
                    <p className="font-accent italic text-xl text-text-muted">No stores found matching your criteria.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Map Mockup */}
          <div className="lg:col-span-7 bg-[#0D0700] rounded-3xl border border-border-warm relative overflow-hidden hidden lg:block">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* Map Markers */}
            {filteredStores.map((store, i) => {
              // Map lat/lng to percentage positions for mockup
              // India roughly: Lat 8 to 37, Lng 68 to 97
              const top = `${100 - ((store.lat - 8) / (37 - 8)) * 100}%`;
              const left = `${((store.lng - 68) / (97 - 68)) * 100}%`;

              return (
                <motion.div
                  key={store.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 + i * 0.1 }}
                  className="absolute z-10"
                  style={{ top, left }}
                >
                  <div className="relative group">
                    <MapPin 
                      className={cn(
                        "w-8 h-8 transition-colors duration-300",
                        hoveredStoreId === store.id ? "text-primary-coral fill-primary-coral" : "text-primary-gold fill-primary-gold/20"
                      )} 
                    />
                    
                    {/* Tooltip */}
                    <div className={cn(
                      "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-bg-dark border border-primary-gold px-4 py-2 rounded-lg shadow-xl transition-opacity duration-300 pointer-events-none",
                      hoveredStoreId === store.id ? "opacity-100" : "opacity-0"
                    )}>
                      <p className="font-body font-bold text-cream text-sm">{store.name}</p>
                      <p className="font-label text-[10px] text-primary-gold">{store.city}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Center abstract shape to represent India roughly */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-5 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary-gold">
                <path d="M50 10 L80 40 L60 90 L40 90 L20 40 Z" fill="currentColor" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
