import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedText text="SAY HELLO" className="font-display text-[clamp(4rem,10vw,12rem)] text-primary-gold leading-[0.85] mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-accent italic text-2xl md:text-4xl text-cream max-w-2xl"
          >
            We like hearing from people almost as much as we like making rum.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-bg-mid py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <ScrollReveal direction="left">
            <h3 className="font-label text-primary-gold mb-4 tracking-widest">— GET IN TOUCH</h3>
            <h2 className="font-display text-5xl md:text-7xl text-cream mb-6 leading-none">WE'RE REAL PEOPLE.<br />MOSTLY.</h2>
            <p className="font-body text-lg text-text-light mb-12 max-w-md">
              For wholesale inquiries, press, bar partnerships, or just to tell us your favorite Pex Rum — we're here.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-warm flex items-center justify-center text-primary-coral">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-body text-cream text-lg">hello@pexrum.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-warm flex items-center justify-center text-primary-coral">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-body text-cream text-lg">+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-warm flex items-center justify-center text-primary-coral">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-body text-cream text-lg">The Pex Rum Distillery, Goa, India</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-warm flex items-center justify-center text-primary-coral">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-body text-cream text-lg">@pexrum</span>
              </div>
            </div>

            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#FF5C35" }}
                  className="text-primary-gold transition-colors"
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal direction="right">
            <form className="bg-bg-dark p-8 md:p-12 rounded-3xl border border-border-warm space-y-8">
              <div className="space-y-2">
                <label className="font-label text-xs text-text-muted">NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-border-warm text-cream py-2 focus:outline-none focus:border-primary-gold transition-colors font-body text-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs text-text-muted">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-border-warm text-cream py-2 focus:outline-none focus:border-primary-gold transition-colors font-body text-lg"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs text-text-muted">SUBJECT</label>
                <select className="w-full bg-transparent border-b border-border-warm text-cream py-2 focus:outline-none focus:border-primary-gold transition-colors font-body text-lg appearance-none">
                  <option value="general" className="bg-bg-dark">General Inquiry</option>
                  <option value="wholesale" className="bg-bg-dark">Wholesale</option>
                  <option value="press" className="bg-bg-dark">Press & Media</option>
                  <option value="partnership" className="bg-bg-dark">Bar Partnership</option>
                  <option value="hi" className="bg-bg-dark">Just Saying Hi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs text-text-muted">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-border-warm text-cream py-2 focus:outline-none focus:border-primary-gold transition-colors font-body text-lg resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-coral text-white font-display text-3xl py-4 rounded-full flex items-center justify-center gap-3 hover:bg-accent-lime hover:text-bg-dark transition-colors duration-300"
              >
                SEND IT
                <Send className="w-6 h-6" />
              </motion.button>
            </form>
          </ScrollReveal>

        </div>
      </section>
    </PageTransition>
  );
}
