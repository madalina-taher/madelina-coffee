
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Atelier } from '../components/Atelier';
import { Reviews } from '../components/Reviews';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      {/* Shortened Menu Preview for Home */}
      <section className="section-padding bg-white text-center">
        <h2 className="text-4xl md:text-6xl mb-8">Découvrez notre Menu</h2>
        <p className="text-madelina-navy/60 mb-12 max-w-xl mx-auto">
          Pâtisseries fines, café d'exception et brunchs gourmands. 
          Consultez notre carte complète en ligne.
        </p>
        
        <Menu isPreview={true} />

        <div className="mt-12">
          <Link 
            to="/menu" 
            className="btn-primary inline-flex"
          >
            Voir la Carte Complète
          </Link>
        </div>
      </section>
      <Atelier />
      <Reviews />
      <ContactForm />
    </main>
  );
};
