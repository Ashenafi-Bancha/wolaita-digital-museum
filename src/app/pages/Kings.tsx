import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';
import { Crown, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROYAL_LINE } from '../data/kings';

const Kings = () => {
  const { t } = useLanguage();

  // Golden King Statue background image
  const goldenKingStatue = "https://images.unsplash.com/photo-1614981816670-3e65f4cfdb28?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB3YXJyaW9yJTIwc3RhdHVlJTIwaG9yc2ViYWNrJTIwZXRoaW9waWFuJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzc1MTA5MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

  const royalTraditions = [
    {
      icon: <Crown size={32} />,
      title: "Sacred Kingship",
      description: "The Kawo was considered semi-divine, serving as the link between the people and ancestral spirits. Coronation ceremonies involved elaborate rituals."
    },
    {
      icon: <Users size={32} />,
      title: "Council of Elders",
      description: "Kings governed with a council of wise elders (Halqa) who advised on laws, disputes, and major decisions, ensuring balanced governance."
    },
    {
      icon: <Award size={32} />,
      title: "Merit-Based Succession",
      description: "While hereditary, succession also considered wisdom, courage, and leadership ability, ensuring the most capable heir ascended to the throne."
    },
    {
      icon: <Award size={32} />,
      title: "Royal Currency (Marccuwaa)",
      description: "The kingdom minted its own iron bar currency called Marccuwaa, controlled by royal authority for trade, taxation, and economic stability."
    },
  ];

  return (
    <>
      <Helmet>
        <title>The 50+ Kings of Wolaita | Royal History</title>
        <meta name="description" content="Explore the remarkable history of Wolaita's 50+ monarchs who ruled with wisdom, courage, and vision over centuries." />
      </Helmet>

      {/* Hero Section with Golden King Statue as Background */}
      <div className="relative overflow-hidden min-h-[520px] sm:min-h-[600px] md:min-h-[700px]">
        {/* Golden King Statue Background Image - Clearly Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${goldenKingStatue})` }}
        >
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Flag accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-24 h-2 rounded-full mb-8 flex overflow-hidden shadow-2xl"
            >
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-600"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Crown className="mx-auto mb-6 text-yellow-400 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]" size={64} />
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight sm:text-5xl" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)' }}>
                {t('kings.title')}
              </h1>
              <p className="text-lg md:text-2xl text-yellow-100 leading-relaxed mb-10 max-w-3xl mx-auto" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.8)' }}>
                {t('kings.subtitle')}
              </p>
              
              {/* Stats badges */}
              <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-yellow-400/70 shadow-2xl"
                >
                  <span className="text-yellow-400 font-bold">500+ Years</span>
                  <span className="text-white ml-2">of Royal Dynasty</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-red-400/70 shadow-2xl"
                >
                  <span className="text-red-400 font-bold">50+ Kings</span>
                  <span className="text-white ml-2">Documented</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              A Dynasty of Greatness
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              The Wolaita Kingdom, under the leadership of its Kawo (kings), flourished for over 500 years as an independent state. Each monarch brought unique contributions—military prowess, diplomatic skill, legal innovation, or architectural vision—building upon the legacy of their predecessors.
            </p>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              The names of more than 50 Kawo have been carried down the generations. The reign and contribution of each king are being documented with elders and historians, and will be published here as that work is verified.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Royal Traditions */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Royal Traditions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {royalTraditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-700 p-5 sm:p-8 rounded-xl shadow-lg"
            >
              <div className="text-red-600 dark:text-red-400 mb-4">
                {tradition.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {tradition.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {tradition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Complete Royal Line */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            The Complete Royal Line
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg max-w-3xl mx-auto">
            The succession of Wolaita Kawo from Kawo Bito to Kawo Tona, the last independent monarch.
            Each name appears in Wolaitigna transliteration and in Amharic. The reign and contribution
            of every king are being documented and will be added here.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {ROYAL_LINE.map((king, index) => (
            <motion.li
              key={king.order}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: Math.min(index, 12) * 0.03 }}
              className={`flex items-center gap-3 rounded-xl border-l-4 bg-stone-50 p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-stone-900 sm:p-4 ${
                king.pending ? 'border-stone-300 dark:border-stone-600' : 'border-yellow-400'
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  king.pending
                    ? 'bg-stone-200 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
                    : 'bg-gradient-to-br from-yellow-400 to-red-600 text-white shadow'
                }`}
                aria-hidden="true"
              >
                {king.order}
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-serif text-base font-bold leading-snug sm:text-lg ${
                    king.pending
                      ? 'italic text-stone-500 dark:text-stone-400'
                      : 'text-stone-900 dark:text-stone-100'
                  }`}
                >
                  {king.name}
                </span>
                {king.amharic && (
                  <span lang="am" className="block text-sm text-stone-500 dark:text-stone-400">
                    {king.amharic}
                  </span>
                )}
              </span>
            </motion.li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-yellow-400/40 bg-yellow-50 p-4 text-center text-sm text-stone-700 dark:bg-stone-900 dark:text-stone-300">
          Know more about any of these kings? Corrections and oral histories from elders are welcome —{' '}
          <Link to="/contact" className="font-semibold text-orange-800 underline dark:text-yellow-400">
            share them with us
          </Link>
          .
        </p>
      </Section>

      {/* Legacy Section */}
      <Section className="bg-gradient-to-br from-black via-stone-900 to-red-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Crown className="mx-auto mb-6 text-yellow-400" size={64} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              The Enduring Legacy
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-300">
              <p>
                Though the era of independent Wolaita kingship ended in 1894, the legacy of the 50+ kings lives on. Their wisdom is preserved in proverbs, their laws continue to guide social relationships, and their courage inspires pride in Wolaita identity.
              </p>
              <p>
                Each king contributed a chapter to the grand story of Wolaita—a story of resilience, governance, cultural achievement, and unwavering dignity. Today, the descendants of these monarchs carry forward the values and traditions established by their royal ancestors.
              </p>
              <p className="text-yellow-300 font-semibold text-xl pt-4">
                "Wolaita na, Kawuwaa na" — I am Wolaita, I am of royal lineage.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Kings;