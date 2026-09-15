import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import AlphabetSelector from '../components/ui/AlphabetSelector';
import { motion } from 'motion/react';
import { Book, Search, Globe, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Dictionary = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');

  const dictionaryEntries = [
    // Greetings & Common Phrases
    { wolaita: 'Wonttu', english: 'Hello (singular)', category: 'greetings', type: 'phrase' },
    { wolaita: 'Wontte', english: 'Hello (plural)', category: 'greetings', type: 'phrase' },
    { wolaita: 'Galassi', english: 'Thank you', category: 'greetings', type: 'phrase' },
    { wolaita: 'Ufayttaa', english: 'Welcome', category: 'greetings', type: 'phrase' },
    { wolaita: 'Neeni waati?', english: 'How are you?', category: 'greetings', type: 'phrase' },
    
    // Family & People
    { wolaita: 'Asa', english: 'Person, people', category: 'family', type: 'noun' },
    { wolaita: 'Aawaa', english: 'Father', category: 'family', type: 'noun' },
    { wolaita: 'Aayee', english: 'Mother', category: 'family', type: 'noun' },
    { wolaita: 'Naayaa', english: 'Child', category: 'family', type: 'noun' },
    { wolaita: 'Ishaa', english: 'Brother', category: 'family', type: 'noun' },
    { wolaita: 'Michcho', english: 'Sister', category: 'family', type: 'noun' },
    { wolaita: 'Cichchaa', english: 'Elder, respected person', category: 'family', type: 'noun' },
    { wolaita: 'Kawuwaa', english: 'King, royal', category: 'family', type: 'noun' },
    
    // Nature & Environment
    { wolaita: 'Biittaa', english: 'Land, earth, country', category: 'nature', type: 'noun' },
    { wolaita: 'Haattaa', english: 'Water', category: 'nature', type: 'noun' },
    { wolaita: 'Taamaa', english: 'Fire', category: 'nature', type: 'noun' },
    { wolaita: 'Oyda', english: 'Tree', category: 'nature', type: 'noun' },
    { wolaita: 'Shaahaa', english: 'Mountain', category: 'nature', type: 'noun' },
    { wolaita: 'Abbaa', english: 'Sky, heaven', category: 'nature', type: 'noun' },
    { wolaita: 'Gallassaa', english: 'Day', category: 'nature', type: 'noun' },
    { wolaita: 'Naggahaa', english: 'Night', category: 'nature', type: 'noun' },
    { wolaita: 'Xoossaa', english: 'God', category: 'nature', type: 'noun' },
    
    // Cultural Items
    { wolaita: 'Dingguza', english: 'Traditional cloth', category: 'culture', type: 'noun' },
    { wolaita: 'Marccuwaa', english: 'Traditional currency/iron bar', category: 'culture', type: 'noun' },
    { wolaita: 'Gifaataa', english: 'New Year celebration', category: 'culture', type: 'noun' },
    { wolaita: 'Dhuufaa', english: 'Drum', category: 'culture', type: 'noun' },
    { wolaita: 'Mezmuraa', english: 'Song, music', category: 'culture', type: 'noun' },
    
    // Food & Drink
    { wolaita: 'Kurkufaa', english: 'Bread', category: 'food', type: 'noun' },
    { wolaita: 'Chuchaa', english: 'Meat', category: 'food', type: 'noun' },
    { wolaita: 'Buunnaa', english: 'Coffee', category: 'food', type: 'noun' },
    { wolaita: 'Aannaa', english: 'Milk', category: 'food', type: 'noun' },
    { wolaita: 'Miisaa', english: 'Food', category: 'food', type: 'noun' },
    
    // Common Verbs
    { wolaita: 'Baawa', english: 'To go', category: 'verbs', type: 'verb' },
    { wolaita: 'Yaawa', english: 'To come', category: 'verbs', type: 'verb' },
    { wolaita: 'Maawa', english: 'To eat', category: 'verbs', type: 'verb' },
    { wolaita: 'Uyaa', english: 'To drink', category: 'verbs', type: 'verb' },
    { wolaita: 'Eraawa', english: 'To know', category: 'verbs', type: 'verb' },
    { wolaita: 'Siiqaa', english: 'To love, to like', category: 'verbs', type: 'verb' },
    { wolaita: 'Oottaa', english: 'To do, to work', category: 'verbs', type: 'verb' },
    
    // Adjectives & Descriptors
    { wolaita: 'Lohaa', english: 'Big, great', category: 'adjectives', type: 'adjective' },
    { wolaita: 'Guppaa', english: 'Small', category: 'adjectives', type: 'adjective' },
    { wolaita: 'Wolqqaa', english: 'Great, important', category: 'adjectives', type: 'adjective' },
    { wolaita: "Lo'aa", english: 'Good', category: 'adjectives', type: 'adjective' },
    { wolaita: 'Iitaa', english: 'Bad', category: 'adjectives', type: 'adjective' },
    { wolaita: 'Sheenaa', english: 'Beautiful', category: 'adjectives', type: 'adjective' },
    { wolaita: 'Bollaa', english: 'High, above', category: 'adjectives', type: 'adjective' },
    
    // Numbers
    { wolaita: 'Issi', english: 'One', category: 'numbers', type: 'number' },
    { wolaita: 'Nammaa', english: 'Two', category: 'numbers', type: 'number' },
    { wolaita: 'Heezza', english: 'Three', category: 'numbers', type: 'number' },
    { wolaita: 'Oyda', english: 'Four', category: 'numbers', type: 'number' },
    { wolaita: 'Ichchaa', english: 'Five', category: 'numbers', type: 'number' },
    
    // Places & Buildings
    { wolaita: 'Keettaa', english: 'House, home', category: 'places', type: 'noun' },
    { wolaita: 'Deree', english: 'Community, village', category: 'places', type: 'noun' },
    { wolaita: 'Godaa', english: 'Palace', category: 'places', type: 'noun' },
    { wolaita: 'Baalaa', english: 'Field, farm', category: 'places', type: 'noun' },
  ];

  const categories = [
    { id: 'all', name: 'All Words', icon: <Book size={20} /> },
    { id: 'greetings', name: 'Greetings', icon: <Globe size={20} /> },
    { id: 'family', name: 'Family & People', icon: <Book size={20} /> },
    { id: 'nature', name: 'Nature', icon: <Book size={20} /> },
    { id: 'culture', name: 'Culture', icon: <Book size={20} /> },
    { id: 'food', name: 'Food', icon: <Book size={20} /> },
    { id: 'verbs', name: 'Verbs', icon: <Book size={20} /> },
  ];

  const filteredEntries = useMemo(() => {
    let entries = dictionaryEntries;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      entries = entries.filter(entry => entry.category === selectedCategory);
    }
    
    // Filter by letter
    if (selectedLetter !== 'all') {
      entries = entries.filter(entry => 
        entry.wolaita.toUpperCase().startsWith(selectedLetter)
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      entries = entries.filter(entry => 
        entry.wolaita.toLowerCase().includes(search) || 
        entry.english.toLowerCase().includes(search)
      );
    }
    
    // Sort alphabetically by Wolaita word
    return entries.sort((a, b) => a.wolaita.localeCompare(b.wolaita));
  }, [searchTerm, selectedCategory, selectedLetter]);

  // Get available letters from current entries
  const availableLetters = useMemo(() => {
    let filtered = dictionaryEntries;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(entry => entry.category === selectedCategory);
    }
    const letters = new Set(
      filtered.map(entry => entry.wolaita.charAt(0).toUpperCase())
    );
    return Array.from(letters).sort();
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Wolaitigna Dictionary | Wolaita-English Translation</title>
        <meta name="description" content="Comprehensive Wolaitigna to English dictionary featuring essential words, phrases, and expressions from the Wolaita language." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 py-16 md:py-24 text-center">
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

          <Book className="mx-auto mb-6 text-green-600 dark:text-green-400" size={48} />
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 sm:text-4xl">
            {t('dictionary.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-700 dark:text-stone-300 px-4">
            {t('dictionary.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Search & Filter Section */}
      <Section className="bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
              <input
                type="text"
                placeholder="Search in Wolaitigna or English..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-stone-200 dark:border-stone-700 rounded-xl text-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-green-500 dark:focus:border-green-400 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedLetter('all'); // Reset letter filter when changing category
                }}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
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

          {/* Results Count */}
          <p className="text-center text-stone-600 dark:text-stone-400 mb-8">
            Showing {filteredEntries.length} {filteredEntries.length === 1 ? 'word' : 'words'}
          </p>
        </div>
      </Section>

      {/* Dictionary Entries */}
      <Section className="bg-stone-50 dark:bg-stone-800">
        <div className="max-w-5xl mx-auto">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-16">
              <Search className="mx-auto mb-4 text-stone-400" size={48} />
              <p className="text-xl text-stone-600 dark:text-stone-400">
                No words found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEntries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-serif font-bold text-green-700 dark:text-green-400">
                      {entry.wolaita}
                    </h3>
                    <Volume2 className="text-stone-400 hover:text-green-600 cursor-pointer flex-shrink-0" size={20} />
                  </div>
                  <p className="text-lg text-stone-700 dark:text-stone-300 mb-2">
                    {entry.english}
                  </p>
                  <span className="inline-block px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium rounded-full">
                    {entry.type}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* About Dictionary */}
      <Section className="bg-gradient-to-br from-teal-100 to-green-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Globe size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                About Wolaitigna
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                <strong className="text-stone-900 dark:text-stone-100">Wolaitigna</strong> is the language spoken by the Wolaita people of southern Ethiopia. It belongs to the Omotic language family and is rich in history, culture, and expressive power.
              </p>
              <p>
                This dictionary is a growing resource designed to help preserve and promote the Wolaita language for future generations, making it accessible to learners, diaspora communities, and anyone interested in this beautiful language.
              </p>
              <p className="font-semibold text-green-700 dark:text-green-400">
                "Language is the soul of a people — preserve it, and you preserve their heritage."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Dictionary;
