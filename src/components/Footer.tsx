import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-madelina-cream border-t border-madelina-terracotta/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-madelina-terracotta flex items-center justify-center">
                <span className="font-display text-xl text-madelina-terracotta">M</span>
              </div>
              <span className="font-display text-2xl tracking-tight text-madelina-navy">Madelina</span>
            </div>
            <p className="text-madelina-navy/60 leading-relaxed">
              Votre escale gourmande à Bizerte. Pâtisserie artisanale, café d'exception et ambiance vintage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-madelina-navy text-white flex items-center justify-center hover:bg-madelina-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-madelina-navy text-white flex items-center justify-center hover:bg-madelina-terracotta transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-madelina-navy/60">
              <li><Link to="/" className="hover:text-madelina-terracotta transition-colors">Accueil</Link></li>
              <li><Link to="/menu" className="hover:text-madelina-terracotta transition-colors">Le Menu</Link></li>
              <li><a href="#atelier" className="hover:text-madelina-terracotta transition-colors">L'Atelier</a></li>
              <li><a href="#contact" className="hover:text-madelina-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-madelina-navy/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-madelina-terracotta shrink-0 mt-1" />
                <span>Sidi Salem, Bizerte, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-madelina-terracotta shrink-0" />
                <span>72 413 676</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Horaires</h4>
            <ul className="space-y-4 text-madelina-navy/60">
              <li className="flex justify-between">
                <span>Lun — Dim</span>
                <span className="font-bold text-madelina-navy">07:00 — 23:00</span>
              </li>
              <li className="text-sm italic text-madelina-terracotta">
                Ouvert les jours fériés
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-madelina-terracotta/10 text-center text-sm text-madelina-navy/40">
          <p>© {new Date().getFullYear()} Madelina Coffee Shop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
