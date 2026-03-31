import React from 'react';
import { motion } from 'motion/react';

export const Atelier = () => {
  return (
    <section id="atelier" className="section-padding bg-madelina-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" 
                  alt="Coffee Craft" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?q=80&w=800&auto=format&fit=crop" 
                  alt="Vintage Vibe" 
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop" 
                  alt="Pastry Art" 
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                  alt="Cozy Corner" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-madelina-terracotta text-white w-24 h-24 rounded-full flex items-center justify-center font-display text-center text-xs leading-tight shadow-2xl border-4 border-madelina-cream rotate-12">
              Depuis <br /> Toujours
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-madelina-terracotta font-bold text-xs uppercase tracking-[0.3em] mb-6 block">L'Atelier Madelina</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">Plus qu'un Café, <br /><span className="italic text-madelina-terracotta">Une Galerie</span></h2>
            <p className="text-madelina-navy/70 mb-8 text-lg leading-relaxed">
              Inspiré par l'esthétique rétro-pop et l'artisanat européen, l'Atelier Madelina est un lieu de rencontre entre la gastronomie et l'art. 
              Nos murs racontent des histoires à travers des couleurs terracotta vibrantes et des textures de bois clair.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-madelina-terracotta mt-2.5"></div>
                <p className="text-madelina-navy font-medium">Pâtisseries fines inspirées du savoir-faire français.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-madelina-terracotta mt-2.5"></div>
                <p className="text-madelina-navy font-medium">Ambiance musicale sur vinyles et décor vintage chiné.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-madelina-terracotta mt-2.5"></div>
                <p className="text-madelina-navy font-medium">Un espace de vie moderne au cœur de Sidi Salem.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
