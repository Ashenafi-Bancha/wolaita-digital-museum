import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 animate-pulse" />
    );
  }

  const themes = [
    { name: 'Light', value: 'light' as const, icon: Sun, description: 'Bright theme' },
    { name: 'Dark', value: 'dark' as const, icon: Moon, description: 'Dark theme' },
    { name: 'System', value: 'system' as const, icon: Monitor, description: 'Use system setting' },
  ];

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return Monitor;
    }
    return resolvedTheme === 'dark' ? Moon : Sun;
  };

  const CurrentIcon = getCurrentIcon();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors relative"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        <CurrentIcon 
          className={`h-5 w-5 transition-colors ${
            resolvedTheme === 'dark' ? 'text-stone-100' : 'text-orange-600'
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-stone-800 rounded-xl shadow-xl border border-stone-200 dark:border-stone-700 py-2 z-50 overflow-hidden"
          >
            <div className="px-3 py-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Theme
            </div>
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              const isActive = theme === themeOption.value;

              return (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 font-semibold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{themeOption.name}</div>
                    <div className={`text-xs ${
                      isActive 
                        ? 'text-yellow-600 dark:text-yellow-500' 
                        : 'text-stone-500 dark:text-stone-400'
                    }`}>
                      {themeOption.description}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTheme"
                      className="w-2 h-2 rounded-full bg-yellow-500"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;