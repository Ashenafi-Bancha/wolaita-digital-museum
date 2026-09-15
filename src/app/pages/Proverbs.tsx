import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import AlphabetSelector from '../components/ui/AlphabetSelector';
import { motion } from 'motion/react';
import { Quote, Lightbulb, Heart, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Proverbs = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');

  const proverbs = [
    {
      wolaita: "Oydappe kess giddon ayfe bawa",
      english: "A tree that grows from a seed takes time to bear fruit",
      meaning: "Patience and perseverance lead to success. Great achievements require time and dedication.",
      category: "wisdom"
    },
    {
      wolaita: "Asa kushey asa woshshees",
      english: "One person's strength can move another",
      meaning: "Cooperation and mutual support are essential. We achieve more together than alone.",
      category: "community"
    },
    {
      wolaita: "Oyda kaani ayfe meyee",
      english: "Without the tree, there is no fruit",
      meaning: "Every achievement has its foundation. We must honor our roots and origins.",
      category: "wisdom"
    },
    {
      wolaita: "Hara baawa ooratee", 
      english: "Water finds its way",
      meaning: "Persistence overcomes obstacles. Solutions emerge when we remain determined.",
      category: "perseverance"
    },
    {
      wolaita: "Asi issifee keettee bollaa",
      english: "A person is built on their home",
      meaning: "Family and upbringing shape character. Our foundation determines our strength.",
      category: "family"
    },
    {
      wolaita: "Woxee wolqqama mitto",
      english: "A mouth doesn't become great by talking",
      meaning: "Actions speak louder than words. True greatness is demonstrated through deeds.",
      category: "character"
    },
    {
      wolaita: "Kawuwaa erana gattaa maaddenna",
      english: "Don't hold a spear against one who taught you",
      meaning: "Respect and gratitude toward teachers and elders. Never turn against those who helped you grow.",
      category: "respect"
    },
    {
      wolaita: "Dere baawa asa awan gakkenna",
      english: "Without community, a person reaches nowhere",
      meaning: "Individual success depends on collective support. We are stronger together.",
      category: "community"
    },
    {
      wolaita: "Simmaa eraa simmenna",
      english: "Don't appoint someone who doesn't know",
      meaning: "Leadership requires wisdom and knowledge. Competence must precede responsibility.",
      category: "leadership"
    },
    {
      wolaita: "Duussiyaa, duussaa xurettee",
      english: "The caller doesn't forget the response",
      meaning: "Communication builds relationships. What we give, we receive in return.",
      category: "reciprocity"
    },
    {
      wolaita: "Biittaa siiqee assi baaweena",
      english: "Loving the land doesn't mean losing the people",
      meaning: "Balance between material wealth and human relationships. People matter more than possessions.",
      category: "values"
    },
    {
      wolaita: "Ontta kaani biittay baawa",
      english: "Without a king, there is no land",
      meaning: "Leadership provides order and direction. Governance is essential for society's wellbeing.",
      category: "leadership"
    },
  ];

  const sayings = [
    {
      saying: "Wolaita na, Kawuwaa na",
      translation: "I am Wolaita, I am of royal lineage",
      context: "Pride in heritage and identity"
    },
    {
      saying: "Ootti assi, bollati bollaa",
      translation: "A working person builds upward",
      context: "Hard work leads to progress"
    },
    {
      saying: "Simmay, dooretido",
      translation: "Leadership is burden-bearing",
      context: "True leadership means serving and carrying responsibility"
    },
    {
      saying: "Issi kushee issino kushee maadees",
      translation: "One hand helps another hand",
      context: "Mutual assistance and cooperation"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Proverbs', icon: <Quote size={20} /> },
    { id: 'wisdom', name: 'Wisdom', icon: <Lightbulb size={20} /> },
    { id: 'community', name: 'Community', icon: <Users size={20} /> },
    { id: 'family', name: 'Family', icon: <Heart size={20} /> },
  ];

  // Sort and filter proverbs
  const filteredProverbs = useMemo(() => {
    let filtered = proverbs;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    // Filter by letter
    if (selectedLetter !== 'all') {
      filtered = filtered.filter(p => 
        p.wolaita.toUpperCase().startsWith(selectedLetter)
      );
    }
    
    // Sort alphabetically by Wolaita word
    return filtered.sort((a, b) => a.wolaita.localeCompare(b.wolaita));
  }, [activeCategory, selectedLetter]);

  // Get available letters from current proverbs
  const availableLetters = useMemo(() => {
    let filtered = proverbs;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    const letters = new Set(
      filtered.map(p => p.wolaita.charAt(0).toUpperCase())
    );
    return Array.from(letters).sort();
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Proverbs & Sayings | Wolaita Wisdom</title>
        <meta name="description" content="Explore traditional Wolaita proverbs and sayings that carry centuries of wisdom, values, and cultural knowledge." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          {/* Flag accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-20 h-1.5 rounded-full mb-8 flex overflow-hidden"
          >
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-red-600"></div>
          </motion.div>

          <Quote className="mx-auto mb-6 text-orange-600 dark:text-orange-400" size={48} />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
            {t('language.proverbs')}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-700 dark:text-stone-300 px-4">
            {t('language.traditionalWisdom')}
          </p>
        </motion.div>
      </div>

      {/* Proverbs Section */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditional Proverbs
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Each proverb encapsulates profound truths about life, relationships, and society.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedLetter('all'); // Reset letter filter when changing category
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Alphabet Selector */}
        <AlphabetSelector
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
          availableLetters={availableLetters}
        />

        {/* Proverbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProverbs.map((proverb, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-2xl shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-shadow"
            >
              <Quote className="text-orange-600 dark:text-orange-400 mb-4" size={32} />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                "{proverb.wolaita}"
              </h3>
              <p className="text-lg text-orange-700 dark:text-orange-400 mb-4 font-medium">
                {proverb.english}
              </p>
              <div className="pt-4 border-t border-stone-300 dark:border-stone-600">
                <p className="text-stone-600 dark:text-stone-300 italic">
                  {proverb.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sayings Section */}
      <Section className="bg-stone-50 dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Popular Sayings
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Common expressions that reflect Wolaita values and worldview.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sayings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700"
            >
              <h3 className="text-xl font-serif font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                {item.saying}
              </h3>
              <p className="text-stone-700 dark:text-stone-300 mb-3 font-medium">
                "{item.translation}"
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Wisdom Legacy */}
      <Section className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-yellow-400 rounded-full">
                <Lightbulb size={32} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                The Living Wisdom
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                Wolaita proverbs are not mere words—they are living wisdom, passed from generation to generation, shaping behavior, guiding decisions, and preserving cultural values.
              </p>
              <p>
                Elders use these proverbs to teach the young, leaders invoke them to justify decisions, and families draw upon them to resolve conflicts. They serve as a moral compass and a cultural encyclopedia, containing centuries of accumulated knowledge.
              </p>
              <p className="font-semibold text-red-700 dark:text-red-400">
                "To know the proverbs of Wolaita is to understand the soul of its people."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Proverbs;
