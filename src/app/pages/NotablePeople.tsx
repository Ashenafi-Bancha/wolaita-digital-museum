import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Users, Award, Star, BookOpen, Briefcase, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NotablePeople = () => {
  const { t } = useLanguage();
  const categories = [
    {
      title: "Political Leaders & Statesmen",
      icon: <Briefcase size={40} />,
      color: "from-red-500 to-red-700",
      people: [
        {
          name: "Ato Asfaw Wossen",
          contribution: "Served as a prominent administrator during the Imperial era, advocating for Wolaita's development and representation in national government.",
          impact: "His diplomatic skills helped secure educational and infrastructure investments in the Wolaita region."
        },
        {
          name: "Dr. Shiferaw Jarso",
          contribution: "Ethiopian Minister and political leader who championed regional autonomy and cultural preservation for Southern Nations.",
          impact: "Instrumental in establishing governance structures that recognized ethnic diversity and cultural rights."
        },
        {
          name: "Ato Darge Sahilo",
          contribution: "Regional leader and advocate for Wolaita rights during the formation of modern Ethiopian federal system.",
          impact: "Played key role in securing Wolaita Zone's administrative recognition and development resources."
        },
      ]
    },
    {
      title: "Scholars & Educators",
      icon: <BookOpen size={40} />,
      color: "from-yellow-500 to-yellow-700",
      people: [
        {
          name: "Dr. Wakuma Negassa",
          contribution: "Renowned linguist and scholar who documented Wolaitigna language and developed educational materials.",
          impact: "His linguistic research preserved the language for future generations and supported literacy programs."
        },
        {
          name: "Professor Alemayehu Haile",
          contribution: "Historian and anthropologist specializing in Wolaita cultural heritage and oral traditions.",
          impact: "Published extensive research on Wolaita history, making it accessible to scholars worldwide."
        },
        {
          name: "Dr. Teklemariam Ergecho",
          contribution: "Education reformer who established schools and promoted literacy in rural Wolaita communities.",
          impact: "Transformed educational access, enabling thousands of Wolaita children to receive quality education."
        },
      ]
    },
    {
      title: "Artists & Cultural Icons",
      icon: <Star size={40} />,
      color: "from-orange-500 to-red-600",
      people: [
        {
          name: "Tsehay Yohannes",
          contribution: "Celebrated traditional singer and cultural ambassador who performed Wolaita music nationally and internationally.",
          impact: "Brought Wolaita music to global stages, preserving traditional songs while inspiring new generations."
        },
        {
          name: "Getahun Getu",
          contribution: "Master craftsman renowned for traditional Wolaita weaving and basketry.",
          impact: "His artistic excellence revived interest in traditional crafts and trained numerous apprentices."
        },
        {
          name: "Alemu Aga",
          contribution: "Legendary musician and master of the Begena (Ethiopian lyre), incorporating Wolaita musical traditions.",
          impact: "Preserved and promoted traditional Ethiopian instruments while showcasing Wolaita musical heritage."
        },
      ]
    },
    {
      title: "Community & Religious Leaders",
      icon: <Heart size={40} />,
      color: "from-purple-500 to-purple-700",
      people: [
        {
          name: "Abba Giyorgis Desta",
          contribution: "Religious leader and community organizer who built churches and promoted social cohesion.",
          impact: "His pastoral work strengthened community bonds and provided spiritual guidance during challenging times."
        },
        {
          name: "Woizero Almaz Gebre",
          contribution: "Women's rights advocate who established cooperatives and educational programs for Wolaita women.",
          impact: "Empowered thousands of women economically and socially, transforming gender dynamics in communities."
        },
        {
          name: "Ato Kebede Mekuria",
          contribution: "Community development leader who initiated agricultural innovation and cooperative movements.",
          impact: "His grassroots organizing improved food security and economic opportunities for rural families."
        },
      ]
    },
    {
      title: "Athletes & Sports Figures",
      icon: <Award size={40} />,
      color: "from-green-500 to-green-700",
      people: [
        {
          name: "Getenesh Wami",
          contribution: "Olympic athlete and world champion in long-distance running, representing Ethiopia internationally.",
          impact: "Inspired youth throughout Wolaita to pursue athletic excellence and brought national pride."
        },
        {
          name: "Tesfaye Tola",
          contribution: "Marathon runner and Olympic bronze medalist who competed at the highest international levels.",
          impact: "His achievements demonstrated Wolaita's contribution to Ethiopia's legendary running tradition."
        },
        {
          name: "Genet Gebregiorgis",
          contribution: "Professional athlete who excelled in track and field competitions across Africa.",
          impact: "Broke barriers for female athletes and promoted sports participation among Wolaita girls."
        },
      ]
    },
    {
      title: "Business & Innovation Leaders",
      icon: <Users size={40} />,
      color: "from-blue-500 to-blue-700",
      people: [
        {
          name: "Ato Solomon Tesfaye",
          contribution: "Entrepreneur who built successful businesses and created employment opportunities in Wolaita.",
          impact: "His enterprises generated economic growth and demonstrated the entrepreneurial spirit of Wolaita people."
        },
        {
          name: "Woizero Sara Bekele",
          contribution: "Businesswoman and innovator in agricultural processing and export.",
          impact: "Opened international markets for Wolaita agricultural products, benefiting thousands of farmers."
        },
        {
          name: "Ato Dawit Amare",
          contribution: "Technology entrepreneur bringing digital innovation to Southern Ethiopia.",
          impact: "His initiatives connected rural Wolaita communities to digital economy opportunities."
        },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Notable Wolaita People | Heroes & Pioneers</title>
        <meta name="description" content="Celebrating distinguished Wolaita individuals who have made significant contributions to Ethiopia and beyond in various fields." />
      </Helmet>

      <PageHero
        title={t('people.title')}
        subtitle={t('people.subtitle')}
        badge="Heroes & Pioneers"
        icon={<Users size={64} />}
      />

      {/* Introduction */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Leaders, Innovators, & Heroes
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              The Wolaita people have produced remarkable individuals across diverse fields—from politics and education to arts, athletics, and business. These pioneers have not only excelled in their domains but have also uplifted their communities and contributed significantly to Ethiopia's national development.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Categories of Notable People */}
      {categories.map((category, categoryIndex) => (
        <Section 
          key={categoryIndex}
          className={categoryIndex % 2 === 0 ? "bg-white dark:bg-stone-800" : "bg-stone-50 dark:bg-stone-900"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`p-4 bg-gradient-to-br ${category.color} rounded-full text-white shadow-lg`}>
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                {category.title}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {category.people.map((person, personIndex) => (
              <motion.div
                key={personIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: personIndex * 0.1 }}
                className="bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-yellow-400 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Award size={24} className="text-black group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                      {person.name}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-1">
                      Contribution:
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {person.contribution}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-stone-300 dark:border-stone-600">
                    <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">
                      Impact:
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed italic">
                      {person.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      ))}

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center"
          >
            <Star className="mx-auto mb-6 text-yellow-600 dark:text-yellow-400" size={64} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              The Legacy Continues
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              These remarkable individuals represent just a fraction of the talented Wolaita people who have made their mark on history. Each generation produces new leaders, innovators, and heroes who carry forward the proud traditions of their ancestors while forging new paths of excellence.
            </p>
            <p className="text-xl font-semibold text-orange-700 dark:text-orange-400">
              The story of Wolaita is written not just in history books, but in the achievements of its people.
            </p>
            
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
    </>
  );
};

export default NotablePeople;
