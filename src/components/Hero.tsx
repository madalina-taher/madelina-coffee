import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Calendar, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-madelina-cream">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop" 
          alt="Madelina Coffee Shop Interior" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-madelina-cream via-madelina-cream/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-madelina-terracotta/10 text-madelina-terracotta font-bold text-[10px] uppercase tracking-[0.3em] mb-8 border border-madelina-terracotta/20"
            >
              L'Art de Vivre à Bizerte
            </motion.span>
            
            <h1 className="text-7xl md:text-9xl leading-[0.85] mb-10 text-madelina-navy tracking-tight">
              Le Goût du <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="italic text-madelina-terracotta font-serif"
              >
                Fait Maison
              </motion.span> <br />
              à Bizerte
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-xl text-madelina-navy/70 mb-12 max-w-lg leading-relaxed text-balance"
            >
              Une escale gourmande où l'artisanat français rencontre la chaleur tunisienne. 
              Pâtisseries fines, café d'exception et brunchs généreux.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:72413676"
                className="btn-primary"
              >
                <Phone size={20} />
                Appeler Maintenant
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-secondary"
              >
                <Calendar size={20} />
                Réserver une Table
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-[10%] hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card p-6 rounded-3xl rotate-6 animate-float"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-madelina-mustard/20 flex items-center justify-center text-madelina-terracotta">
              <span className="font-bold">4.8</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Google Rating</p>
              <p className="text-sm font-bold">Excellent</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-[20%] hidden lg:block">
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-card p-4 rounded-2xl -rotate-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-madelina-terracotta">Ouvert jusqu'à 23h</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-madelina-navy/40">Découvrir</span>
        <ArrowDown size={16} className="text-madelina-terracotta" />
      </motion.div>
    </section>
  );
};
