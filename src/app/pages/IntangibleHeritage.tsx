import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Music, Languages, BookOpen, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const IntangibleHeritage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Intangible Heritage | Language, Folklore & Oral Traditions</title>
        <meta name="description" content="Delve into the intangible heritage of Wolaita: the melodious language, rich oral traditions, folklore, music, and ceremonies." />
      </Helmet>

      <PageHero
        title={t('visit.intangibleHeritage')}
        subtitle={t('visit.traditions')}
        badge="Living Heritage"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="feature-card-3d p-5 sm:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-200 dark:bg-orange-900/40 rounded-full text-orange-800 dark:text-orange-400">
                <Languages size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">Wolaitatto Language</h2>
            </div>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
              Wolaitatto is an Omotic language spoken by the Wolaita people. It is rich in proverbs, metaphors, and poetic expressions that convey deep cultural values and wisdom.
            </p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              The language serves not just as a means of communication, but as a vessel for history, law, and social norms, preserving the community's identity across generations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 bg-stone-100 dark:bg-stone-800 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-stone-200 dark:bg-stone-700 rounded-full text-stone-800 dark:text-stone-300">
                <Mic size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">Oral Traditions</h2>
            </div>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
              History in Wolaita has traditionally been passed down orally. Elders recount the genealogies of kings, the outcomes of battles, and the origins of clans with remarkable accuracy.
            </p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              These narratives are often shared during evening gatherings, reinforcing social bonds and teaching younger generations about their ancestry and responsibilities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 bg-stone-100 dark:bg-stone-800 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-stone-200 dark:bg-stone-700 rounded-full text-stone-800 dark:text-stone-300">
                <Music size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">Music & Dance</h2>
            </div>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
              Wolaita music is distinctive, characterized by polyphonic singing and complex rhythms. The traditional dance involves energetic shoulder movements and rhythmic footwork.
            </p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              Music accompanies every aspect of life, from agricultural work songs (hoya-hoye) to mourning rituals and joyful celebrations of harvest and marriage.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="feature-card-3d p-5 sm:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-200 dark:bg-orange-900/40 rounded-full text-orange-800 dark:text-orange-400">
                <BookOpen size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">Indigenous Knowledge</h2>
            </div>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
              The Wolaita people possess extensive indigenous knowledge regarding agriculture, soil conservation, and herbal medicine.
            </p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              This system includes sophisticated methods of composting, intercropping, and crop rotation that have sustained the dense population of the region for centuries.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default IntangibleHeritage;
