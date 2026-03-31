import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const MenuPage = () => {
  // 1. Data handling
  const plats = menuData?.plats || [];
  const categories = Array.from(new Set(plats.map(item => item.category)));
  
  // 2. State
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredItems = plats.filter(item => item.category === activeCategory);

  if (plats.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen font-display text-madelina-navy/30">
        Chargement de la carte Madelina...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] flex items-center justify-center">
          <span className="text-[30vw] font-display whitespace-nowrap select-none">MADELINA</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl mb-6 font-display text-madelina-navy"
            >
              La Carte <span className="text-madelina-terracotta italic font-display">Madelina</span>
            </motion.h2>
            <div className="h-1 w-24 bg-madelina-terracotta mx-auto"></div>
          </div>

          {/* Categories Tab */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat ? 'text-white' : 'text-madelina-navy hover:text-madelina-terracotta'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-madelina-navy rounded-full shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          )}

          {/* Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group glass-card rounded-[2.5rem] overflow-hidden bg-white border border-madelina-terracotta/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                      <span className="font-bold text-madelina-terracotta tracking-tight">
                        {typeof item.price === 'number' ? item.price.toFixed(3) : item.price} DT
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl mb-3 font-display text-madelina-navy group-hover:text-madelina-terracotta transition-colors">{item.title}</h3>
                    <p className="text-madelina-navy/60 text-sm mb-6 line-clamp-3">{item.description}</p>
                    <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-madelina-terracotta flex items-center gap-2">
                      Détails <span>→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;