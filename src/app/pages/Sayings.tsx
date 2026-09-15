import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import AlphabetSelector from '../components/ui/AlphabetSelector';
import { motion } from 'motion/react';
import { MessageCircle, Heart, Users, Smile, ThumbsUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sayings = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');

  const sayings = [
    {
      wolaita: "Wolaita na, Kawuwaa na",
      english: "I am Wolaita, I am of royal lineage",
      context: "Pride in heritage and identity",
      category: "identity"
    },
    {
      wolaita: "Ootti assi, bollati bollaa",
      english: "A working person builds upward",
      context: "Hard work leads to progress",
      category: "work"
    },
    {
      wolaita: "Simmay, dooretido",
      english: "Leadership is burden-bearing",
      context: "True leadership means serving and carrying responsibility",
      category: "leadership"
    },
    {
      wolaita: "Issi kushee issino kushee maadees",
      english: "One hand helps another hand",
      context: "Mutual assistance and cooperation",
      category: "community"
    },
    {
      wolaita: "Gishshaa giggaa bolla",
      english: "Victory upon victory",
      context: "Celebrating continuous success and achievement",
      category: "celebration"
    },
    {
      wolaita: "De'aa de'o",
      english: "It is good, it is good",
      context: "Expression of satisfaction and approval",
      category: "approval"
    },
    {
      wolaita: "Deretaa siiqiyaa",
      english: "Community lover",
      context: "Someone who values and supports their community",
      category: "community"
    },
    {
      wolaita: "Keettaa bollaa, deraa bollaa",
      english: "Built on family, built on community",
      context: "Strong foundation in family and society",
      category: "values"
    },
    {
      wolaita: "Laalettaa eraa",
      english: "One who knows how to see/observe",
      context: "Wisdom comes from careful observation",
      category: "wisdom"
    },
    {
      wolaita: "Simmaa kushee",
      english: "The hand of leadership",
      context: "The guiding force of good governance",
      category: "leadership"
    },
    {
      wolaita: "Kushaa maadettaa",
      english: "The helping hand",
      context: "One who assists and supports others",
      category: "kindness"
    },
    {
      wolaita: "Biittaa naataa",
      english: "Child of the land",
      context: "Deep connection to homeland and heritage",
      category: "identity"
    },
    {
      wolaita: "Haaraa boraa",
      english: "New spring/season",
      context: "Time of renewal and fresh beginnings",
      category: "celebration"
    },
    {
      wolaita: "Wolqqaa asaa",
      english: "Great person",
      context: "Someone of distinguished character and achievement",
      category: "respect"
    },
    {
      wolaita: "Simmaa erettaa",
      english: "One who knows leadership",
      context: "Wisdom in governance and guidance",
      category: "wisdom"
    },
  ];

  const greetings = [
    {
      wolaita: "Wonttu!",
      english: "Hello! (to one person)",
      usage: "Common greeting"
    },
    {
      wolaita: "Wontte!",
      english: "Hello! (to multiple people)",
      usage: "Common greeting for groups"
    },
    {
      wolaita: "Neeni waati?",
      english: "How are you?",
      usage: "Asking about someone's wellbeing"
    },
    {
      wolaita: "Galassi!",
      english: "Thank you!",
      usage: "Expression of gratitude"
    },
    {
      wolaita: "Ufayttaa!",
      english: "Welcome!",
      usage: "Welcoming guests"
    },
    {
      wolaita: "Sarotan gakka",
      english: "Until we meet again",
      usage: "Farewell expression"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Sayings', icon: <MessageCircle size={20} /> },
    { id: 'community', name: 'Community', icon: <Users size={20} /> },
    { id: 'identity', name: 'Identity', icon: <Heart size={20} /> },
    { id: 'wisdom', name: 'Wisdom', icon: <Sparkles size={20} /> },
    { id: 'celebration', name: 'Celebration', icon: <Smile size={20} /> },
  ];

  // Sort and filter sayings
  const filteredSayings = useMemo(() => {
    let filtered = sayings;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(s => s.category === activeCategory);
    }
    
    // Filter by letter
    if (selectedLetter !== 'all') {
      filtered = filtered.filter(s => 
        s.wolaita.toUpperCase().startsWith(selectedLetter)
      );
    }
    
    // Sort alphabetically by Wolaita word
    return filtered.sort((a, b) => a.wolaita.localeCompare(b.wolaita));
  }, [activeCategory, selectedLetter]);

  // Get available letters from current sayings
  const availableLetters = useMemo(() => {
    let filtered = sayings;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(s => s.category === activeCategory);
    }
    const letters = new Set(
      filtered.map(s => s.wolaita.charAt(0).toUpperCase())
    );
    return Array.from(letters).sort();
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Wolaita Sayings | Common Expressions & Greetings</title>
        <meta name="description" content="Explore common Wolaita sayings, expressions, and greetings that reflect the daily language and cultural values of the Wolaita people." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 py-24 text-center">
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

          <MessageCircle className="mx-auto mb-6 text-red-600 dark:text-red-400" size={48} />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
            {t('language.sayings')}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-700 dark:text-stone-300 px-4">
            {t('language.commonExpressions')}
          </p>
        </motion.div>
      </div>

      {/* Greetings Section */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Common Greetings
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Essential phrases for daily interaction in Wolaita culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {greetings.map((greeting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-md border-l-4 border-yellow-400"
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                {greeting.wolaita}
              </h3>
              <p className="text-lg text-orange-700 dark:text-orange-400 mb-2 font-medium">
                {greeting.english}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                {greeting.usage}
              </p>
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
            Expressions that reflect Wolaita values, identity, and worldview.
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
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
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

        {/* Sayings Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSayings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-serif font-bold text-red-700 dark:text-red-400 mb-2">
                {item.wolaita}
              </h3>
              <p className="text-stone-700 dark:text-stone-300 mb-3 font-medium">
                "{item.english}"
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cultural Context */}
      <Section className="bg-gradient-to-br from-red-100 to-yellow-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-600 rounded-full">
                <ThumbsUp size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Living Language
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                Wolaita sayings are the heartbeat of daily conversation — colorful expressions that convey emotion, values, and cultural identity in just a few words.
              </p>
              <p>
                From greetings that acknowledge deep social bonds to sayings that celebrate communal values, these expressions reveal how the Wolaita people view the world, relationships, and their place within society.
              </p>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                "To speak Wolaitigna is to speak with the soul of a community."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Sayings;
