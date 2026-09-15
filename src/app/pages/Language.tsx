import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { BookOpen, MessageCircle, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Language = () => {
  const { t } = useLanguage();
  const basicPhrases = [
    { wolaita: "Aye", english: "Hello", context: "Greeting" },
    { wolaita: "Galato", english: "Thank you", context: "Gratitude" },
    { wolaita: "Gudata", english: "Good morning", context: "Morning greeting" },
    { wolaita: "Bagga", english: "Peace", context: "Farewell/Blessing" },
    { wolaita: "Diza", english: "Yes", context: "Affirmation" },
    { wolaita: "Ayyo", english: "No", context: "Negation" },
    { wolaita: "Suntan de'ay?", english: "What is your name?", context: "Introduction" },
    { wolaita: "Matida", english: "Food", context: "Daily life" },
    { wolaita: "Ha'ra", english: "Water", context: "Daily life" },
    { wolaita: "Keetta", english: "House/Home", context: "Daily life" },
  ];

  const languageFeatures = [
    {
      icon: <Globe2 size={32} />,
      title: "Omotic Language Family",
      description: "Wolaitigna belongs to the Omotic language family, distinct from Semitic and Cushitic languages. It's primarily spoken in the Wolaita Zone of Southern Ethiopia."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Rich Oral Tradition",
      description: "The language carries centuries of wisdom through oral traditions, proverbs, songs, and storytelling that have been passed down through generations."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Written Script",
      description: "Wolaitigna uses the Ge'ez script (Fidel), adapted to represent its unique phonetic sounds. Modern literacy efforts have strengthened its written tradition."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Wolaitigna Language | Wolaita Museum</title>
        <meta name="description" content="Discover the Wolaitigna language, its unique characteristics, common phrases, and rich linguistic heritage of the Wolaita people." />
      </Helmet>

      <PageHero
        title={t('language.title')}
        subtitle={t('language.subtitle')}
        badge="Wolaitigna"
      />

      {/* Language Features */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Language Characteristics
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Wolaitigna is a vibrant language with unique features that reflect the cultural richness of the Wolaita people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languageFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-5 sm:p-8 rounded-xl shadow-lg border border-stone-200 dark:border-stone-700"
            >
              <div className="text-yellow-600 dark:text-yellow-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Common Phrases */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Common Phrases
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Learn basic Wolaitigna phrases to connect with the language and culture.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {basicPhrases.map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="content-card-3d p-6 border-l-4 border-[rgb(var(--wolaita-gold))]"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    {phrase.wolaita}
                  </h3>
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                    {phrase.context}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-stone-300 text-lg">
                  {phrase.english}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Language Importance */}
      <Section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 border-t-4 border-yellow-400"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Preserving Our Linguistic Heritage
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                Wolaitigna is more than just a means of communication—it is the heart of Wolaita identity. Through language, we preserve our history, transmit our values, and maintain our connection to ancestors who spoke these same words centuries ago.
              </p>
              <p>
                Today, efforts are underway to strengthen Wolaitigna through education, literature, and digital media. Radio broadcasts, books, and cultural programs help ensure that future generations will continue to speak the language of their forefathers.
              </p>
              <p className="font-semibold text-orange-700 dark:text-orange-400">
                Every word spoken in Wolaitigna is an act of cultural preservation and pride.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Language;