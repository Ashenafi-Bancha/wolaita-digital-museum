import React from 'react';
import { motion } from 'motion/react';

interface AlphabetSelectorProps {
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
  availableLetters?: string[];
}

const AlphabetSelector: React.FC<AlphabetSelectorProps> = ({
  selectedLetter,
  onLetterSelect,
  availableLetters,
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        {/* All button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLetterSelect('all')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            selectedLetter === 'all'
              ? 'bg-yellow-400 text-black shadow-lg'
              : 'bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
          }`}
        >
          All
        </motion.button>

        {/* Alphabet buttons */}
        {alphabet.map((letter) => {
          const isAvailable = !availableLetters || availableLetters.includes(letter);
          const isActive = selectedLetter === letter;

          return (
            <motion.button
              key={letter}
              whileHover={isAvailable ? { scale: 1.1 } : {}}
              whileTap={isAvailable ? { scale: 0.9 } : {}}
              onClick={() => isAvailable && onLetterSelect(letter)}
              disabled={!isAvailable}
              className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                isActive
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : isAvailable
                  ? 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
                  : 'bg-stone-50 dark:bg-stone-800 text-stone-300 dark:text-stone-700 cursor-not-allowed opacity-50'
              }`}
            >
              {letter}
            </motion.button>
          );
        })}
      </div>
      
      {selectedLetter !== 'all' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4 text-stone-600 dark:text-stone-400 text-sm"
        >
          Showing entries starting with <span className="font-bold text-yellow-600 dark:text-yellow-400">{selectedLetter}</span>
        </motion.p>
      )}
    </div>
  );
};

export default AlphabetSelector;
