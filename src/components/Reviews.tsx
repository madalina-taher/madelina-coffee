import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Tia Maria",
      text: "Un endroit magnifique, une décoration soignée et des pâtisseries dignes des plus grands salons parisiens. Le fraisier est à tomber !",
      rating: 5,
      date: "Il y a 2 mois"
    },
    {
      name: "Houyem",
      text: "Le meilleur brunch de Bizerte. L'accueil est chaleureux et l'ambiance vintage avec les vinyles est juste parfaite.",
      rating: 5,
      date: "Il y a 3 semaines"
    },
    {
      name: "Ahmed B.",
      text: "Une expérience authentique. On sent le goût du fait maison dans chaque bouchée. Je recommande vivement la tarte au citron.",
      rating: 4,
      date: "Il y a 1 mois"
    }
  ];

  return (
    <section className="section-padding bg-madelina-navy text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-48 -left-48 w-96 h-96 bg-madelina-terracotta/10 rounded-full blur-[100px]"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-madelina-mustard/10 rounded-full blur-[100px]"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-madelina-mustard font-bold text-xs uppercase tracking-[0.3em] mb-6 block"
            >
              Témoignages
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl mb-6"
            >
              L'Expérience <span className="italic text-madelina-terracotta">Madelina</span> vue par vous
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-8"
          >
            <div className="text-center">
              <div className="text-6xl font-display text-madelina-mustard mb-1">4.8</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40">Sur 5</div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#E9C46A" color="#E9C46A" />
                ))}
              </div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Google Reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-2xl bg-madelina-terracotta/20 flex items-center justify-center text-madelina-terracotta group-hover:scale-110 transition-transform">
                  <Quote size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold">{review.date}</span>
              </div>
              
              <p className="text-xl mb-10 flex-grow leading-relaxed font-medium opacity-90 italic">
                "{review.text}"
              </p>
              
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-madelina-mustard text-lg">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Client Vérifié</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < review.rating ? "#E9C46A" : "none"} color="#E9C46A" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
