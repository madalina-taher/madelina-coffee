
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-madelina-cream relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-madelina-terracotta/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-madelina-terracotta font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Localisation</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">Venez nous <br /><span className="italic text-madelina-terracotta">Rendre Visite</span></h2>
            <p className="text-madelina-navy/70 mb-12 text-xl leading-relaxed max-w-md">
              Une question pour un événement, une commande spéciale ou une réservation ? 
              Passez nous voir à Sidi Salem ou appelez-nous directement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-madelina-terracotta/10 flex items-center justify-center text-madelina-terracotta shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1 opacity-40">Adresse</h4>
                    <p className="text-madelina-navy font-medium">Sidi Salem, Bizerte</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-madelina-navy/10 flex items-center justify-center text-madelina-navy shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1 opacity-40">Téléphone</h4>
                    <p className="text-madelina-navy font-medium">72 413 676</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-madelina-peach/10 flex items-center justify-center text-madelina-peach shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1 opacity-40">Horaires</h4>
                    <p className="text-madelina-navy font-medium">07:00 — 23:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.862413481232!2d9.87020031530733!3d37.28678007985145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31f004e47d6bb%3A0xc204697bd9860a29!2sMadelina%20%F0%9F%A7%A1!5e0!3m2!1sen!2stn!4v1711910452000!5m2!1sen!2stn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Madelina Location"
              className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[3rem]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
