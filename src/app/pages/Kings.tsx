import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';
import { Crown, Shield, Sword, Award, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Kings = () => {
  const { t } = useLanguage();
  const [selectedKing, setSelectedKing] = useState<number | null>(null);

  // Golden King Statue background image
  const goldenKingStatue = "https://images.unsplash.com/photo-1614981816670-3e65f4cfdb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB3YXJyaW9yJTIwc3RhdHVlJTIwaG9yc2ViYWNrJTIwZXRoaW9waWFuJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzc1MTA5MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

  const notableKings = [
    {
      name: "Kawo Motolomi",
      id: "kawo-motolomi",
      era: "Ancient Period (Pre-1500s)",
      title: "The Founding Monarch",
      achievements: [
        "Established the foundations of the Kawo kingdom",
        "Created the royal succession system",
        "Unified various Wolaita clans under one leadership",
        "Instituted the first administrative structures"
      ],
      legacy: "Known as the father of Wolaita monarchy, Kawo Motolomi laid the groundwork for centuries of stable governance. His wisdom in unifying diverse groups created a strong foundation for the kingdom.",
      symbol: <Crown size={48} />
    },
    {
      name: "Kawo Damot",
      id: "kawo-damot",
      era: "Medieval Period (1500s-1600s)",
      title: "The Territorial Expander",
      achievements: [
        "Significantly expanded Wolaita territorial boundaries",
        "Established diplomatic relations with neighboring kingdoms",
        "Strengthened military organization and defense systems",
        "Promoted agricultural development and trade"
      ],
      legacy: "Kawo Damot's reign marked the golden age of territorial expansion. He transformed Wolaita into a formidable regional power, commanding respect from all neighboring territories.",
      symbol: <Shield size={48} />
    },
    {
      name: "Kawo Gobo",
      id: "kawo-gobo",
      era: "1600s-1700s",
      title: "The Law Giver",
      achievements: [
        "Codified traditional laws and customs (Wolaita Law)",
        "Established fair judicial systems across the kingdom",
        "Created councils of elders for governance",
        "Promoted education and oral tradition preservation"
      ],
      legacy: "Remembered as the greatest legislator in Wolaita history, Kawo Gobo's legal framework continues to influence Wolaita social organization to this day.",
      symbol: <BookOpen size={48} />
    },
    {
      name: "Kawo Kawudana",
      id: "kawo-kawudana",
      era: "Late 1700s",
      title: "The Warrior King",
      achievements: [
        "Successfully defended Wolaita against multiple invasions",
        "Reformed and modernized the military structure",
        "Built fortifications throughout the kingdom",
        "Trained elite warrior units for kingdom defense"
      ],
      legacy: "A legendary military strategist, Kawo Kawudana never lost a battle. His tactical brilliance and personal bravery inspired generations of Wolaita warriors.",
      symbol: <Sword size={48} />
    },
    {
      name: "Kawo Tona Gaga",
      id: "kawo-tona-gaga",
      era: "Early 1800s",
      title: "The Diplomat",
      achievements: [
        "Established peace treaties with surrounding kingdoms",
        "Expanded trade networks across Southern Ethiopia",
        "Promoted cultural exchange and learning",
        "Maintained Wolaita independence through skilled diplomacy"
      ],
      legacy: "Known for resolving conflicts through wisdom rather than warfare, Kawo Tona Gaga brought unprecedented prosperity and peace to Wolaita through strategic alliances.",
      symbol: <Users size={48} />
    },
    {
      name: "Kawo Sumuro",
      id: "kawo-sumuro",
      era: "Mid-1800s",
      title: "The Builder",
      achievements: [
        "Constructed palaces and administrative centers",
        "Developed infrastructure including roads and markets",
        "Established permanent capital in strategic location",
        "Promoted craftsmanship and architectural innovation"
      ],
      legacy: "The physical landscape of Wolaita bears his mark. Many historical structures and settlements trace their origins to Kawo Sumuro's ambitious building programs.",
      symbol: <Award size={48} />
    },
    {
      name: "Kawo Gichata",
      id: "kawo-gichata",
      era: "1850s-1880s",
      title: "The Modernizer",
      achievements: [
        "Introduced new agricultural techniques",
        "Promoted trade with distant regions",
        "Strengthened the royal court administration",
        "Preserved Wolaita independence during turbulent times"
      ],
      legacy: "Facing the challenges of a changing world, Kawo Gichata adapted traditional governance while preserving cultural identity, ensuring Wolaita's continued relevance.",
      symbol: <Crown size={48} />
    },
    {
      name: "Kawo Toqa (Tona Aura)",
      id: "kawo-toqa",
      era: "Late 1800s-1894",
      title: "The Last Independent Monarch",
      achievements: [
        "Maintained Wolaita sovereignty for decades",
        "Led resistance against external pressures",
        "Preserved Wolaita culture and traditions",
        "Negotiated terms of incorporation into Ethiopian Empire"
      ],
      legacy: "The final king of independent Wolaita, Kawo Toqa fought valiantly to preserve his kingdom's autonomy. Though Wolaita was eventually incorporated into the Ethiopian Empire in 1894, his courage and leadership remain legendary.",
      symbol: <Shield size={48} />
    },
  ];

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
      <div className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Golden King Statue Background Image - Clearly Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${goldenKingStatue})` }}
        >
        </div>

        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)' }}>
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
              While historical records name more than 50 kings, detailed accounts survive for the most influential monarchs whose reigns shaped Wolaita's destiny.
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
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-700 p-8 rounded-xl shadow-lg"
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

      {/* Notable Kings */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Notable Monarchs
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Meet the legendary kings whose wisdom, courage, and vision shaped Wolaita's destiny.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {notableKings.map((king, index) => (
            <motion.div
              key={index}
              id={king.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden border-l-4 border-yellow-400 hover:shadow-2xl transition-all scroll-mt-28"
            >
              <div 
                className="p-6 md:p-8 cursor-pointer"
                onClick={() => setSelectedKing(selectedKing === index ? null : index)}
              >
                <div className="flex items-start gap-6">
                  <div className="hidden md:block p-4 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl text-white shadow-lg">
                    {king.symbol}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                        {king.name}
                      </h3>
                      <span className="text-sm bg-red-600 text-white px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                        {king.era}
                      </span>
                    </div>
                    <p className="text-lg text-yellow-700 dark:text-yellow-400 font-medium mb-4">
                      {king.title}
                    </p>

                    {selectedKing === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Major Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-300">
                            {king.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-50 dark:bg-stone-900 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Legacy:</h4>
                          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                            {king.legacy}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <button
                      className="mt-4 text-orange-700 dark:text-orange-400 font-medium hover:underline"
                    >
                      {selectedKing === index ? 'Show less' : 'Read more about this king →'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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