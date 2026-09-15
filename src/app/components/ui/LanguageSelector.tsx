import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { WOLAITA_TRANSLATION_READY } from '../../config/site';
import WolaitaComingSoonDialog from './WolaitaComingSoonDialog';

type LangCode = 'en' | 'wo' | 'am';

interface LangOption {
  code: LangCode;
  label: string;
  native: string;
  greeting: string;
  accent: string;
  bar: string;
}

const LANGUAGES: LangOption[] = [
  {
    code: 'en',
    label: 'ENG',
    native: 'English',
    greeting: 'Welcome',
    accent: 'text-blue-600 dark:text-blue-400',
    bar: 'bg-blue-500',
  },
  {
    code: 'wo',
    label: 'WOL',
    native: 'Wolayitigna',
    greeting: 'Halaale',
    accent: 'text-yellow-600 dark:text-yellow-400',
    bar: 'bg-yellow-400',
  },
  {
    code: 'am',
    label: 'AM',
    native: 'አማርኛ',
    greeting: 'እንኳን ደህና',
    accent: 'text-green-600 dark:text-green-400',
    bar: 'bg-green-500',
  },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showWolaitaNotice, setShowWolaitaNotice] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const chooseLanguage = (code: LangCode) => {
    setIsOpen(false);
    if (code === 'wo' && !WOLAITA_TRANSLATION_READY) {
      setShowWolaitaNotice(true);
      return;
    }
    setLanguage(code);
  };

  const current = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 ${
          isOpen
            ? 'bg-stone-100 dark:bg-stone-800 border-amber-400/60 shadow-sm'
            : 'bg-stone-100/80 dark:bg-stone-800/80 border-stone-300/50 dark:border-stone-600/50 hover:border-amber-400/50 hover:bg-stone-100 dark:hover:bg-stone-800'
        }`}
        aria-label="Select language"
      >
        <Globe
          size={15}
          className={`transition-colors ${isOpen ? 'text-amber-600' : 'text-stone-500 dark:text-stone-400 group-hover:text-amber-600'}`}
        />
        <span className="text-xs font-bold text-stone-700 dark:text-stone-200 tracking-wider uppercase min-w-[28px]">
          {current.label}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className="text-stone-400"
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-stone-900 rounded-2xl shadow-2xl shadow-black/15 border border-stone-200 dark:border-stone-700 overflow-hidden z-[100]"
          >
            {/* Header */}
            <div className="px-4 pt-4 pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                <Globe size={14} />
                <span className="text-xs font-bold uppercase tracking-widest">Select Language</span>
              </div>
            </div>

            {/* Options */}
            <div className="p-2">
              {LANGUAGES.map((lang) => {
                const isActive = language === lang.code;
                const comingSoon = lang.code === 'wo' && !WOLAITA_TRANSLATION_READY;
                return (
                  <button
                    key={lang.code}
                    onClick={() => chooseLanguage(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-150 mb-1 last:mb-0 group/item ${
                      isActive
                        ? 'bg-amber-50 dark:bg-amber-900/20'
                        : 'hover:bg-stone-50 dark:hover:bg-stone-800'
                    }`}
                  >
                    {/* Color accent bar */}
                    <div className={`w-1 h-10 rounded-full shrink-0 ${isActive ? lang.bar : 'bg-stone-200 dark:bg-stone-700'}`} />

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isActive ? 'text-stone-900 dark:text-stone-50' : 'text-stone-700 dark:text-stone-300'}`}>
                          {lang.native}
                        </span>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{lang.label}</span>
                        {comingSoon && (
                          <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">
                            Coming soon
                          </span>
                        )}
                      </div>
                      <div className={`text-xs mt-0.5 font-medium italic ${isActive ? lang.accent : 'text-stone-400 dark:text-stone-500'}`}>
                        "{lang.greeting}"
                      </div>
                    </div>

                    {/* Selection indicator */}
                    {isActive ? (
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-stone-200 dark:border-stone-600 shrink-0 group-hover/item:border-stone-400 transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer — Wolaita identity stripe */}
            <div className="px-4 pb-3 pt-2 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-3 bg-black rounded-sm" />
                  <div className="w-2 h-3 bg-yellow-400 rounded-sm" />
                  <div className="w-2 h-3 bg-red-600 rounded-sm" />
                </div>
                <span className="text-xs text-stone-400 dark:text-stone-500">
                  Wolaita Museum · 3 Languages
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WolaitaComingSoonDialog
        open={showWolaitaNotice}
        onOpenChange={setShowWolaitaNotice}
        onChooseLanguage={(code) => {
          setLanguage(code);
          setShowWolaitaNotice(false);
        }}
      />
    </div>
  );
};

export default LanguageSelector;
