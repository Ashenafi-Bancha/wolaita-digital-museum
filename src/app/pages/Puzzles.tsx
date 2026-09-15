import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import AlphabetSelector from '../components/ui/AlphabetSelector';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Eye, Lightbulb, Trophy, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Puzzles = () => {
  const { t } = useLanguage();
  const [revealedAnswers, setRevealedAnswers] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');

  const riddles = [
    {
      question: "It has no mouth but speaks to everyone. What is it?",
      answer: "Dhuufaa (The drum)",
      explanation: "The traditional drum communicates messages across villages without words.",
      category: "traditional"
    },
    {
      question: "What walks on four legs in the morning, two legs at noon, and three legs in the evening?",
      answer: "Asa (A person)",
      explanation: "A classic riddle about the stages of human life: crawling as a baby, walking as an adult, and using a walking stick in old age.",
      category: "wisdom"
    },
    {
      question: "I have cities but no houses, forests but no trees, and water but no fish. What am I?",
      answer: "Kaarttaa (A map)",
      explanation: "A map represents places without containing them physically.",
      category: "modern"
    },
    {
      question: "It falls but never breaks, and it breaks but never falls. What are they?",
      answer: "Gallassaa naggahaa (Night and day)",
      explanation: "Night falls and day breaks — eternal cycle of time.",
      category: "nature"
    },
    {
      question: "What belongs to you but others use it more than you do?",
      answer: "Neeni suntaa (Your name)",
      explanation: "Others speak your name more often than you say it yourself.",
      category: "wisdom"
    },
    {
      question: "I am always hungry and must always be fed. The finger I touch will soon turn red. What am I?",
      answer: "Taamaa (Fire)",
      explanation: "Fire constantly needs fuel and burns whatever touches it.",
      category: "traditional"
    },
    {
      question: "What has many keys but can't open a single door?",
      answer: "Mezmuraa (Musical instrument/piano)",
      explanation: "Musical instruments have keys for playing melodies, not for locks.",
      category: "modern"
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "Toho (Footsteps)",
      explanation: "Each step you take leaves a footprint behind you.",
      category: "wisdom"
    },
    {
      question: "What can travel around the world while staying in the corner?",
      answer: "Xaafoo (A stamp)",
      explanation: "A postal stamp stays in the corner of an envelope but travels worldwide.",
      category: "modern"
    },
    {
      question: "It is lighter than a feather, yet the strongest person can't hold it for five minutes. What is it?",
      answer: "Qofaa (Breath/Air)",
      explanation: "You cannot hold your breath for very long, no matter how strong you are.",
      category: "nature"
    },
    {
      question: "What has one eye but cannot see?",
      answer: "Masee (A needle)",
      explanation: "A needle has an eye (hole) for threading but cannot actually see.",
      category: "traditional"
    },
    {
      question: "I am tall when I am young, and short when I am old. What am I?",
      answer: "Kuufa (A candle)",
      explanation: "A candle grows shorter as it burns and ages.",
      category: "traditional"
    },
  ];

  const brainTeasers = [
    {
      question: "If you have three Marccuwaa coins and you give away all but one, how many do you have left?",
      answer: "One Marccuwaa",
      explanation: "'All but one' means you keep one coin."
    },
    {
      question: "What starts with 'W' and ends with 'a' and is the pride of our people?",
      answer: "Wolaita",
      explanation: "The name of our people and homeland."
    },
    {
      question: "During Gifaataa celebration, if five elders sit around a fire and each tells two stories, how many stories are told?",
      answer: "Ten stories",
      explanation: "5 elders × 2 stories each = 10 stories total."
    },
  ];

  const categories = [
    { id: 'all', name: 'All Riddles', icon: <Brain size={20} /> },
    { id: 'traditional', name: 'Traditional', icon: <Trophy size={20} /> },
    { id: 'wisdom', name: 'Wisdom', icon: <Lightbulb size={20} /> },
    { id: 'nature', name: 'Nature', icon: <Eye size={20} /> },
  ];

  // Sort and filter riddles
  const filteredRiddles = useMemo(() => {
    let filtered = riddles;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(r => r.category === activeCategory);
    }
    
    // Filter by letter
    if (selectedLetter !== 'all') {
      filtered = filtered.filter(r => 
        r.question.toUpperCase().startsWith(selectedLetter)
      );
    }
    
    // Sort alphabetically by question
    return filtered.sort((a, b) => a.question.localeCompare(b.question));
  }, [activeCategory, selectedLetter]);

  // Get available letters from current riddles
  const availableLetters = useMemo(() => {
    let filtered = riddles;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(r => r.category === activeCategory);
    }
    const letters = new Set(
      filtered.map(r => r.question.charAt(0).toUpperCase())
    );
    return Array.from(letters).sort();
  }, [activeCategory]);

  const toggleAnswer = (index: number) => {
    if (revealedAnswers.includes(index)) {
      setRevealedAnswers(revealedAnswers.filter(i => i !== index));
    } else {
      setRevealedAnswers([...revealedAnswers, index]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Wolaita Puzzles & Riddles | Traditional Brain Teasers</title>
        <meta name="description" content="Challenge your mind with traditional Wolaita riddles and puzzles that have entertained and educated generations." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 py-16 md:py-24 text-center">
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

          <Brain className="mx-auto mb-6 text-purple-600 dark:text-purple-400" size={48} />
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 sm:text-4xl">
            {t('puzzles.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-700 dark:text-stone-300 px-4">
            {t('puzzles.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Riddles Section */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditional Riddles
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Test your wit with these time-honored riddles passed down through generations.
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
                  ? 'bg-purple-600 text-white shadow-lg'
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

        {/* Riddles Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredRiddles.map((riddle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-stone-50 to-purple-50 dark:from-stone-800 dark:to-stone-700 p-5 sm:p-8 rounded-2xl shadow-lg border-l-4 border-purple-600"
            >
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={28} />
                <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  {riddle.question}
                </h3>
              </div>
              
              <button
                onClick={() => toggleAnswer(index)}
                className="mb-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors"
              >
                {revealedAnswers.includes(index) ? 'Hide Answer' : 'Reveal Answer'}
              </button>

              <AnimatePresence>
                {revealedAnswers.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-stone-300 dark:border-stone-600"
                  >
                    <p className="text-lg text-purple-700 dark:text-purple-400 mb-3 font-bold">
                      Answer: {riddle.answer}
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 italic">
                      {riddle.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Brain Teasers Section */}
      <Section className="bg-stone-50 dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Brain Teasers
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Quick puzzles to sharpen your mind and make you smile.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {brainTeasers.map((teaser, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700"
            >
              <h3 className="text-lg font-serif font-bold text-purple-700 dark:text-purple-400 mb-3">
                {teaser.question}
              </h3>
              <p className="text-stone-700 dark:text-stone-300 mb-2 font-medium">
                Answer: {teaser.answer}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                {teaser.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cultural Context */}
      <Section className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-600 rounded-full">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                The Art of Riddles
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                In Wolaita culture, riddles are more than just entertainment — they are educational tools that teach children to think critically, observe carefully, and appreciate wordplay and metaphor.
              </p>
              <p>
                Elders would gather children around the fire during evenings, challenging them with riddles that connected to daily life, nature, and cultural practices. Solving a riddle earned respect and demonstrated cleverness.
              </p>
              <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                "A mind sharpened by riddles becomes wise in all matters."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Puzzles;
