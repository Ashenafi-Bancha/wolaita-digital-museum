import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Calendar, Sun, Moon, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WolaitaCalendar = () => {
  const { t } = useLanguage();
  const daysOfWeek = [
    { wolaita: "Sagga", amharic: "ሰኞ", english: "Monday", meaning: "Day of Rest" },
    { wolaita: "Ciishsha", amharic: "ማክሰኞ", english: "Tuesday", meaning: "Beginning of Work" },
    { wolaita: "Woliila", amharic: "ረቡዕ", english: "Wednesday", meaning: "Day of Strength" },
    { wolaita: "Shaaga", amharic: "ሐሙስ", english: "Thursday", meaning: "Mid-week" },
    { wolaita: "Bizza", amharic: "ዓርብ", english: "Friday", meaning: "Day of Gathering" },
    { wolaita: "Qeeraa", amharic: "ቅዳሜ", english: "Saturday", meaning: "Preparation Day" },
    { wolaita: "Woggaa", amharic: "እሁድ", english: "Sunday", meaning: "Day of Community" },
  ];

  const months = [
    { number: 1, wolaita: "Gifaataa", amharic: "መስከረም", gregorian: "September", season: "Spring begins" },
    { number: 2, wolaita: "Gooluwaa", amharic: "ጥቅምት", gregorian: "October", season: "Planting season" },
    { number: 3, wolaita: "Baraataa", amharic: "ኅዳር", gregorian: "November", season: "Early growth" },
    { number: 4, wolaita: "Duubbala", amharic: "ታህሳስ", gregorian: "December", season: "Cold season" },
    { number: 5, wolaita: "Shaachchaa", amharic: "ጥር", gregorian: "January", season: "Winter peak" },
    { number: 6, wolaita: "Longgiyaa", amharic: "የካቲት", gregorian: "February", season: "Transition" },
    { number: 7, wolaita: "Bulaalaa", amharic: "መጋቢት", gregorian: "March", season: "Early harvest prep" },
    { number: 8, wolaita: "Gabbaa", amharic: "ሚያዝያ", gregorian: "April", season: "Harvest begins" },
    { number: 9, wolaita: "Laabooshaa", amharic: "ግንቦት", gregorian: "May", season: "Main harvest" },
    { number: 10, wolaita: "Guuliya", amharic: "ሰኔ", gregorian: "June", season: "Summer begins" },
    { number: 11, wolaita: "Caljjuwaa", amharic: "ሐምሌ", gregorian: "July", season: "Rainy season" },
    { number: 12, wolaita: "Kuushshaa", amharic: "ነሐሴ", gregorian: "August", season: "Late rains" },
    { number: 13, wolaita: "Nuuco/Mooxe", amharic: "ጳጉሜን", gregorian: "September (5-6 days)", season: "New Year transition" },
  ];

  const features = [
    {
      icon: <Calendar size={40} />,
      title: "13 Months",
      description: "The Wolaita calendar follows the Ethiopian calendar system with 12 months of 30 days each, plus a 13th month (Pagumena) of 5-6 days."
    },
    {
      icon: <Sun size={40} />,
      title: "Solar-Based",
      description: "Based on the solar year, aligning agricultural activities with seasonal changes and celestial patterns observed by ancestors."
    },
    {
      icon: <Moon size={40} />,
      title: "Agricultural Alignment",
      description: "Each month corresponds to specific agricultural activities—planting, growth, harvest—guiding farming communities for centuries."
    },
    {
      icon: <Clock size={40} />,
      title: "7-Day Week",
      description: "Like many calendar systems, it follows a 7-day week cycle, each day with its own Wolaitigna name and cultural significance."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Wolaita Calendar | Traditional Timekeeping System</title>
        <meta name="description" content="Explore the Wolaita calendar system with 13 months and 7 days, deeply connected to agricultural cycles and ancestral wisdom." />
      </Helmet>

      <PageHero
        title={t('calendar.title')}
        subtitle={t('calendar.subtitle')}
        badge="Traditional Timekeeping"
        icon={<Calendar size={64} />}
      />

      {/* Introduction */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Timekeeping Through Ancestral Wisdom
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 dark:text-stone-300 space-y-6">
              <p className="text-xl leading-relaxed">
                The Wolaita calendar follows the Ethiopian calendar system, which differs from the Gregorian calendar used in most of the world. With <strong className="text-yellow-600">13 months</strong> and a <strong className="text-red-600">7-day week</strong>, it provides a framework for agricultural planning, religious observances, and cultural celebrations.
              </p>
              <p className="text-xl leading-relaxed">
                Each month and day has its own name in Wolaitigna, reflecting the deep connection between language, time, and the natural world. Farmers have relied on this calendar for generations to know when to plant, when to harvest, and when to celebrate.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Calendar Features */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Calendar Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-700 p-5 sm:p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-400"
            >
              <div className="text-red-600 dark:text-red-400 mb-4 flex justify-center">
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

      {/* Days of the Week */}
      <Section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            The 7 Days of the Week
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Each day has its own name in Wolaitigna, carrying cultural and practical significance.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {daysOfWeek.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center border-l-4 border-yellow-400 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {day.wolaita}
                </h3>
                <p className="text-base text-green-700 dark:text-green-400 font-medium mb-1">
                  {day.amharic}
                </p>
                <p className="text-lg text-orange-700 dark:text-orange-400 font-medium mb-2">
                  {day.english}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                  {day.meaning}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* The 13 Months */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            The 13 Months
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Twelve months of 30 days each, plus Pagumena with 5-6 days to complete the year.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {months.map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg border-t-4 hover:shadow-2xl transition-all ${
                  month.number === 13 ? 'border-red-600 md:col-span-2 lg:col-span-3' : 'border-yellow-400'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center text-white font-bold shadow-lg ${
                      month.number === 13 ? 'text-lg' : ''
                    }`}>
                      {month.number}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                        {month.wolaita}
                      </h3>
                      <p className="text-sm text-green-700 dark:text-green-400 mb-1">
                        {month.amharic}
                      </p>
                      <p className="text-sm text-orange-700 dark:text-orange-400">
                        ≈ {month.gregorian}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 dark:text-stone-300 italic mt-3">
                  {month.season}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Agricultural Connection */}
      <Section className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-stone-800 dark:to-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-600 to-yellow-600 rounded-full">
                <Sun size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Living by the Seasons
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                The Wolaita calendar is fundamentally agricultural. Each month name often corresponds to farming activities or natural phenomena observed during that time. Farmers know that Tiqimtiya (October) is planting season, Ginbotiya (May) brings the main harvest, and Pagumena marks the transition to the New Year (Gifaataa).
              </p>
              <p>
                This connection between calendar and cultivation has ensured food security for generations. By following ancestral timekeeping, Wolaita farmers work in harmony with nature's rhythms, planting and harvesting at optimal times.
              </p>
              <p className="font-semibold text-orange-700 dark:text-orange-400">
                "The calendar teaches us: there is a time for everything, and wisdom lies in knowing when."
              </p>
            </div>

            {/* Flag decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-32 h-2 rounded-full mt-8 flex overflow-hidden"
            >
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-600"></div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Modern Relevance */}
      <Section className="bg-white dark:bg-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="mx-auto mb-6 text-yellow-600 dark:text-yellow-400" size={80} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Tradition Meets Modernity
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              Today, Wolaita people navigate between two calendar systems—using the Gregorian calendar for official purposes while maintaining the traditional calendar for cultural celebrations, religious observances, and agricultural planning. This dual system demonstrates the community's ability to preserve heritage while engaging with the modern world.
            </p>
            <p className="text-xl font-semibold text-red-600 dark:text-red-400">
              The Wolaita calendar remains a living tradition, guiding daily life and connecting people to their ancestral roots.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default WolaitaCalendar;