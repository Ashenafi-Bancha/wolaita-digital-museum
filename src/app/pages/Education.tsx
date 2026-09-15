import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { Book, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Educational Insights | Learning Resources</title>
        <meta name="description" content="Access educational resources, articles, and facts about Wolaita history and culture." />
      </Helmet>

      <PageHero
        title={t('education.title')}
        subtitle={t('education.subtitle')}
        badge="Learning Resources"
        compact
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="feature-card-3d block p-8"
          >
            <Book className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Wolaita History PDF</h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm mb-4">A comprehensive guide to the history of the Wolaita Kingdom.</p>
            <span className="text-orange-700 dark:text-orange-400 text-sm font-semibold flex items-center gap-2">
              Download <Download size={16} />
            </span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="feature-card-3d block p-8"
          >
            <FileText className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Cultural Symbols Guide</h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm mb-4">Learn about the meanings behind traditional patterns and symbols.</p>
            <span className="text-orange-700 dark:text-orange-400 text-sm font-semibold flex items-center gap-2">
              Read Article <Download size={16} />
            </span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="feature-card-3d block p-8"
          >
            <Book className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Language Basics</h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm mb-4">An introduction to the Wolaita language and common phrases.</p>
            <span className="text-orange-700 dark:text-orange-400 text-sm font-semibold flex items-center gap-2">
              View Resource <Download size={16} />
            </span>
          </motion.a>
        </div>
      </Section>
    </>
  );
};

export default Education;
