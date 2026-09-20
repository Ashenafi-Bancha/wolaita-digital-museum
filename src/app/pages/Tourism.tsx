import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { MapPin, Camera, Tent } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Tourism = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Tourism & Exploration | Visit Wolaita</title>
        <meta name="description" content="Plan your trip to Wolaita. Explore stunning landscapes, cultural sites, and experience the warm hospitality of the people." />
      </Helmet>

      <PageHero
        title={t('visit.title')}
        subtitle={t('visit.subtitle')}
        badge="Plan Your Visit"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="feature-card-3d p-5 sm:p-8 border-t-4 border-[rgb(var(--wolaita-gold))]"
          >
            <MapPin size={40} className="text-orange-600 mb-4" />
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">Damota Mountain</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Hiking Mount Damota offers panoramic views of the entire region and Lake Abaya. It is a symbol of strength and endurance for the Wolaita people.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="feature-card-3d p-5 sm:p-8 border-t-4 border-[rgb(var(--wolaita-gold))]"
          >
            <Camera size={40} className="text-orange-600 mb-4" />
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">Ajora Falls</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Twin waterfalls that cascade into a deep gorge, offering a spectacular sight for nature lovers and photographers alike.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="feature-card-3d p-5 sm:p-8 border-t-4 border-[rgb(var(--wolaita-gold))]"
          >
            <Tent size={40} className="text-orange-600 mb-4" />
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">Cultural Villages</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Stay in community-run lodges and experience authentic daily life, from participating in the coffee ceremony to learning traditional weaving.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Tourism;
