import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: 'Le Menu', id: 'menu', isExternal: true },
    { label: 'L\'Atelier', id: 'atelier', isExternal: false },
    { label: 'Contact', id: 'contact', isExternal: false }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-madelina-cream/80 backdrop-blur-xl py-3 border-b border-madelina-terracotta/10 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border-2 border-madelina-terracotta flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="font-display text-xl text-madelina-terracotta">M</span>
          </div>
          <span className="font-display text-2xl tracking-tight text-madelina-navy">Madelina</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navItems.map((item, i) => (
            item.isExternal ? (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link 
                  to={`/${item.id}`} 
                  className="relative hover:text-madelina-terracotta transition-colors group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-madelina-terracotta transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ) : (
              <motion.a 
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={`#${item.id}`} 
                className="relative hover:text-madelina-terracotta transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-madelina-terracotta transition-all group-hover:w-full"></span>
              </motion.a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="tel:72413676" 
            className="hidden sm:flex items-center gap-2 text-madelina-navy font-bold text-sm hover:text-madelina-terracotta transition-colors"
          >
            <Phone size={16} className="text-madelina-terracotta" />
            <span>72 413 676</span>
          </motion.a>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="tel:72413676"
            className="bg-madelina-terracotta text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 uppercase tracking-widest"
          >
            <Phone size={14} className="sm:hidden" />
            <span className="hidden sm:inline">Appeler</span>
            <span className="sm:hidden">Appel</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-madelina-navy hover:text-madelina-terracotta transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-madelina-cream border-b border-madelina-terracotta/10 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display text-madelina-navy hover:text-madelina-terracotta transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display text-madelina-navy hover:text-madelina-terracotta transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="h-px bg-madelina-terracotta/10 my-4"></div>
              <a href="tel:72413676" className="flex items-center gap-3 text-madelina-terracotta font-bold">
                <Phone size={20} />
                <span>72 413 676</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
